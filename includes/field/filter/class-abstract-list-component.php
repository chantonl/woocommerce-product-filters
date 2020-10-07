<?php

namespace WooCommerce_Product_Filter_Plugin\Field\Filter;

use WooCommerce_Product_Filter_Plugin\Filter\Component;

abstract class Abstract_List_Component extends Component\Abstract_Filtering_Component implements Component\Rendering_Template_Interface {
	protected $supports = [];

	protected $term_item_keys = [];

	public function initial_properties() {
		parent::initial_properties();

		if ( $this->active_multi_select() ) {
			$this->filter_values['field'] = [];
		}
	}

	protected function get_query_helper() {
		return $this->get_component_register()->get( 'Query_Helper' );
	}

	public function get_field_key() {
		return $this->get_filter_key_by_index( 'field' );
	}

	public function get_field_value() {
		return $this->get_filter_value( 'field' );
	}

	public function get_filter_keys() {
		return [
			'field' => $this->get_option( 'optionKey' )
		];
	}

	protected function get_base_context() {
		return [
			'front_element' => $this,
			'filter_key' => $this->get_field_key(),
			'filter_value' => $this->get_field_value(),
			'option_items' => $this->get_items(),
			'entity' => $this->get_entity(),
			'entity_id' => $this->get_entity_id(),
			'tree_view_style' => $this->is_tree_view(),
			'display_hierarchical_collapsed' => $this->display_hierarchical_collapsed(),
			'is_toggle_active' => $this->is_toggle_active(),
			'default_toggle_state' => $this->get_option( 'defaultToggleState', null ),
			'is_display_title' => $this->get_option( 'displayTitle', true ),
			'css_class' => $this->get_option( 'cssClass', '' ),
			'display_product_count' => $this->display_product_counts(),
			'see_more_options' => $this->is_active_see_more_options() ? $this->get_option( 'seeMoreOptionsBy', 'scrollbar' ) : false,
			'is_enabled_element' => $this->is_enabled_element()
		];
	}

	protected function get_product_count_policy() {
		return $this->get_option( 'productCountPolicy', 'for-option-only' );
	}

	protected function is_enabled_element() {
		return $this->check_rules_from_option( 'displayRules', [
			'use_selected_options' => true
		] );
	}

	protected function is_active_see_more_options() {
		return in_array( 'see_more_options_by', $this->supports )
		       && $this->get_option( 'seeMoreOptionsBy', 'scrollbar' ) != 'disabled';
	}

	protected function active_multi_select() {
		if ( in_array( 'multi_select_toggle', $this->supports ) ) {
			return $this->get_option( 'multiSelect', true );
		}

		return in_array( 'multi_select', $this->supports );
	}

	protected function display_product_counts() {
		return in_array( 'product_counts', $this->supports ) && $this->get_option( 'displayProductCount', true );
	}

	protected function action_for_empty_options() {
		return $this->get_option( 'actionForEmptyOptions', 'noAction' );
	}

	protected function is_enable_product_counts_query() {
		return $this->display_product_counts() || $this->action_for_empty_options() != 'noAction';
	}

	protected function is_toggle_active() {
		return $this->get_option( 'displayTitle', true )
		       && $this->get_option( 'displayToggleContent', false )
		       && in_array( 'toggle_content', $this->supports );
	}

	protected function is_tree_view() {
		$items_source = $this->get_option( 'itemsSource' );

		if ( in_array( $items_source, [ 'category', 'taxonomy' ] )
		     && $this->get_option( 'itemsDisplay' ) != 'parent'
		     && $this->get_option( 'itemsDisplayHierarchical' )
		     && in_array( 'hierarchical', $this->supports ) ) {
			return true;
		}

		return false;
	}

	protected function display_hierarchical_collapsed() {
		return $this->is_tree_view() && $this->get_option( 'displayHierarchicalCollapsed' );
	}

	protected function get_taxonomy() {
		$items_source = $this->get_option( 'itemsSource' );

		$taxonomy = false;

		if ( $items_source == 'attribute' ) {
			$taxonomy = wc_attribute_taxonomy_name( $this->get_option( 'itemsSourceAttribute' ) );
		} else if ( $items_source == 'tag' ) {
			$taxonomy = 'product_tag';
		} else if ( $items_source == 'category' ) {
			$taxonomy = 'product_cat';
		} else if ( $items_source == 'taxonomy' ) {
			$taxonomy = $this->get_option( 'itemsSourceTaxonomy' );
		}

		return $taxonomy;
	}

	protected function get_items() {
		$items = [];

		if ( in_array( 'reset_item', $this->supports )
		     && $this->get_option( 'titleItemReset', '' ) ) {
			$items['reset_item'] = [
				'key' => '',
				'title' => $this->get_option( 'titleItemReset', '' ),
				'option_is_set' => $this->check_option_is_set( null ),
				'child_option_is_set' => false,
				'disabled' => false
			];
		}

		$items_source = $this->get_option( 'itemsSource' );

		if ( in_array( $items_source, [ 'attribute', 'tag', 'category', 'taxonomy' ] ) ) {
			$taxonomy = $this->get_taxonomy();

			if ( ! taxonomy_exists( $taxonomy ) ) {
				return [];
			}

			$query_args = [];

			$display = $this->get_option( 'itemsDisplay' );

			$need_child = $display != 'parent';

			if ( in_array( $items_source, [ 'attribute', 'tag' ] ) ) {
				$display = $this->get_option( 'itemsDisplayWithoutParents' );

				$need_child = false;
			}

			$root_term_id = 0;

			if ( $items_source == 'category' && $this->get_option( 'itemsSourceCategory' ) != 'all' ) {
				$root_term_id = absint( $this->get_option( 'itemsSourceCategory' ) );
			}

			$queried_object = $this->get_product_query_before_filtering()->get_queried_object();

			if ( $this->get_product_query_before_filtering()->is_tax
			     && $queried_object instanceof \WP_Term
			     && $queried_object->taxonomy == $taxonomy
			     && is_tax( $taxonomy, '' ) ) {
				if ( $root_term_id != $queried_object->term_id ) {
					$queried_object_parents = get_ancestors( $queried_object->term_id, $taxonomy, 'taxonomy' );

					if ( $root_term_id === 0 || in_array( $root_term_id, $queried_object_parents ) ) {
						$root_term_id = $queried_object->term_id;
					}
				}
			}

			if ( $display == 'selected' ) {
				$query_args['include'] = array_map('absint', (array) $this->get_option( 'taxonomySelectedItems' ) );

				if ( ! count( $query_args['include'] ) ) {
					return [];
				}
			}

			if ( $display == 'except' ) {
				$query_args['exclude'] = array_map('absint', (array) $this->get_option( 'taxonomyExceptItems' ) );
			}

			$terms = get_terms(
				$this->get_hook_manager()->apply_filters(
					'wcpf_list_component_get_term_args',
					array_merge( [
						'taxonomy' => $taxonomy,
						'hierarchical' => true,
						'menu_order' => 'asc',
						'order' => 'asc'
					], $query_args )
				)
			);

			$term_slugs = [];

			foreach ( $terms as $index => $term ) {
				$term_slugs[ $term->term_id ] = $term->slug;

				if ( ( $display == 'parent' || $display == 'all' ) && $term->parent != $root_term_id ) {
					unset( $terms[ $index ] );
				} else if ( ( $display == 'selected' || $display == 'except' ) && $root_term_id != 0 ) {
					$parents = get_ancestors( $term->term_id, $taxonomy, 'taxonomy' );

					if ( ! in_array( $root_term_id, $parents ) ) {
						unset( $terms[ $index ] );

						array_pop( $term_slugs );
					}
				}
			}

			if ( $display == 'selected' || $display == 'except' ) {
				foreach ( $terms as $index => $term ) {
					if ( isset( $term_slugs[ $term->parent ] ) ) {
						unset( $terms[ $index ] );

						continue;
					}

					$parents = get_ancestors( $term->term_id, $taxonomy, 'taxonomy' );

					$term_ids = array_keys( $term_slugs );

					if ( count( array_intersect( $parents, $term_ids ) ) ) {
						unset( $terms[ $index ] );
					}
				}
			}

			$term_items = $this->get_term_items( $terms, [
				'need_child' => $need_child,
				'include' => isset( $query_args['include'] ) ? $query_args['include'] : null,
				'exclude' => isset( $query_args['exclude'] ) ? $query_args['exclude'] : null
			] );

			if ( $term_slugs && $this->is_enable_product_counts_query() ) {
				$quantity_available = 0;

				$this->prepare_options(
					$term_items,
					$this->get_product_counts_in_terms( $term_slugs ),
					$quantity_available
				);

				if ( $quantity_available == 0 ) {
					$term_items = null;
				}
			}

			if ( is_array( $term_items ) && count( $term_items ) ) {
				$items = array_merge( $items, $term_items );
			} else {
				$items = [];
			}
		} else if ( $items_source == 'stock-status' ) {
			$displayed_statuses = $this->get_option( 'displayedStockStatuses', [ 'in-stock', 'out-of-stock', 'on-backorder' ] );

			$stock_statuses = [];

			if ( is_array( $displayed_statuses ) && in_array( 'in-stock', $displayed_statuses ) ) {
				$stock_statuses['in-stock'] = [
					'key' => 'in-stock',
					'title' => $this->get_option( 'inStockText', __( 'In stock', 'woocommerce' ) ),
					'option_is_set' => $this->check_option_is_set( 'in-stock' ),
					'child_option_is_set' => false,
					'disabled' => false
				];
			}

			if ( is_array( $displayed_statuses ) && in_array( 'out-of-stock', $displayed_statuses ) ) {
				$stock_statuses['out-of-stock'] = [
					'key' => 'out-of-stock',
					'title' => $this->get_option( 'outOfStockText', __( 'Out of stock', 'woocommerce' ) ),
					'option_is_set' => $this->check_option_is_set( 'out-of-stock' ),
					'child_option_is_set' => false,
					'disabled' => false
				];
			}

			if ( is_array( $displayed_statuses ) && in_array( 'on-backorder', $displayed_statuses ) ) {
				$stock_statuses['on-backorder'] = [
					'key' => 'on-backorder',
					'title' => $this->get_option( 'onBackorderText', __( 'On backorder', 'woocommerce' ) ),
					'option_is_set' => $this->check_option_is_set( 'on-backorder' ),
					'child_option_is_set' => false,
					'disabled' => false
				];
			}

			if ( count( $stock_statuses ) && $this->is_enable_product_counts_query() ) {
				$quantity_available = 0;

				$this->prepare_options(
					$stock_statuses,
					$this->get_product_counts_in_stock_statuses( array_keys( $stock_statuses ) ),
					$quantity_available
				);

				if ( $quantity_available == 0 ) {
					$stock_statuses = [];
				}
			}

			$items = count( $stock_statuses ) ? array_merge( $items, $stock_statuses ) : [];
		}

		return $items;
	}

	protected function prepare_options( &$options, $product_counts, &$quantity_available = 0 ) {
		$action_for_empty_options = $this->action_for_empty_options();

		foreach ( $options as $option_id => $option ) {
			$options[ $option_id ]['product_count'] = array_key_exists( $option_id, $product_counts ) ? $product_counts[ $option_id ] : 0;

			if ( ! $option['option_is_set'] && ! $option['child_option_is_set'] ) {
				if ( $action_for_empty_options == 'hide' && $options[ $option_id ]['product_count'] == 0 ) {
					unset( $options[ $option_id ] );

					continue;
				} else if ( $action_for_empty_options == 'markAsDisabled' && $options[ $option_id ]['product_count'] == 0 ) {
					$options[ $option_id ]['disabled'] = true;
				} else {
					$quantity_available++;
				}
			} else {
				$quantity_available++;
			}

			if ( $this->display_product_counts() ) {
				$options[ $option_id ]['product_count_html'] = $this->get_product_counts_html( $options[ $option_id ] );
			}

			if ( $action_for_empty_options == 'markAsDisabled' && $options[ $option_id ]['product_count'] == 0 ) {
				$options[ $option_id ]['disabled'] = true;
			}

			if ( isset( $option['children'] ) && is_array( $option['children'] ) ) {
				$this->prepare_options( $options[ $option_id ]['children'], $product_counts, $quantity_available );
			}
		}

		if ( in_array( 'sorting', $this->supports ) && $this->get_option( 'orderby', 'order' ) == 'count' ) {
			uasort( $options, [ $this, 'sort_term_items' ] );
		}
	}

	protected function check_option_is_set( $value ) {
		return is_array( $this->get_field_value() )
			? in_array( $value, $this->get_field_value() )
			: $this->get_field_value() == $value;
	}

	protected function get_term_items( $terms, $args = [] ) {
		$args = wp_parse_args( $args, [
			'need_child' => false,
			'include' => null,
			'exclude' => null,
			'hide_terms' => []
		] );

		$items = [];

		$need_sort = false;

		if ( in_array( 'sorting', $this->supports )
		     && $this->get_option( 'orderby', 'order' ) != 'order'
		     && $this->get_option( 'orderby', 'order' ) != 'count' ) {
			$need_sort = true;
		}

		foreach ( $terms as $term ) {
			$key = urldecode( $term->slug );

			$item = [
				'key' => $key,
				'title' => $term->name,
				'option_is_set' => $this->check_option_is_set( $key ),
				'child_option_is_set' => false,
				'disabled' => false
			];

			if ( taxonomy_is_product_attribute( $term->taxonomy ) ) {
				$item['order'] = get_term_meta( $term->term_id, 'order_' . $term->taxonomy, true );
			} else {
				$item['order'] = get_term_meta( $term->term_id, 'order', true );
			}

			if ( $item['order'] && $this->get_option( 'orderby', 'order' ) == 'order' ) {
				$need_sort = true;
			}

			$this->term_item_keys[ $key ] = $term->term_id;

			if ( $args['need_child'] ) {
				$child_term_ids = $this->get_query_helper()->get_term_children( $term->term_id, $term->taxonomy );

				if ( is_array( $args['exclude'] ) ) {
					foreach ( $child_term_ids as $index => $child_term_id ) {
						$item_child_ids = get_term_children( $child_term_id, $term->taxonomy );

						$child_counts = count( $item_child_ids );

						$exclude_child = $child_counts && count( array_intersect( $item_child_ids, $args['exclude'] ) ) == $child_counts;

						$exclude_item = in_array( $child_term_id, $args['exclude'] );

						if ( $exclude_item ) {
							if ( $exclude_child ) {
								unset( $child_term_ids[ $index ] );
							} else {
								$args['hide_terms'][] = $child_term_id;
							}
						}
					}
				}

				if ( is_array( $args['include'] ) ) {

					foreach ( $child_term_ids as $index => $child_term_id ) {
						$item_child_ids = get_term_children( $child_term_id, $term->taxonomy );

						$child_in_tree = count( array_intersect( $item_child_ids, $args['include'] ) ) > 0;

						$include_item = in_array( $child_term_id, $args['include'] );

						if ( ! $include_item ) {
							if ( ! $child_in_tree ) {
								unset( $child_term_ids[ $index ] );
							} else {
								$args['hide_terms'][] = $child_term_id;
							}
						}
					}
				}

				if ( count( $child_term_ids ) ) {
					$child_terms = [];

					foreach ( $child_term_ids as $child_term_id ) {
						$child_terms[] = get_term( $child_term_id );
					}

					$item['children'] = $this->get_term_items( $child_terms, $args );

					foreach ( $item['children'] as $child_item ) {
						if ( $child_item['option_is_set'] || $child_item['child_option_is_set'] ) {
							$item['child_option_is_set'] = true;

							break;
						}
					}
				} else {
					$item['children'] = [];
				}
			}

			$is_hidden_term = in_array( $term->term_id, $args['hide_terms'] );

			if ( $is_hidden_term && isset( $item['children'] ) && is_array( $item['children'] ) ) {
				$items += $item['children'];
			} else if ( ! $is_hidden_term ) {
				$items[ $term->term_id ] = $item;
			}
		}

		if ( $need_sort ) {
			uasort( $items, [ $this, 'sort_term_items' ] );
		}

		return $items;
	}

	public function sort_term_items( $item_first, $item_second ) {
		$order_by = $this->get_option( 'orderby', 'order' );

		if ( $order_by == 'order' ) {
			return $item_first['order'] > $item_second['order'];
		} else if ( $order_by == 'name' ) {
			if ( is_numeric( $item_first['title'] ) && is_numeric( $item_second['title'] ) ) {
				return $item_first['title'] > $item_second['title'];
			}

			return strcmp( $item_first['title'], $item_second['title'] ) > 0;
		} else if ( $order_by == 'count' ) {
			return $item_first['product_count'] < $item_second['product_count'];
		}

		return true;
	}

	protected function get_product_counts_html( $item ) {
		return apply_filters(
			'wcpf_product_counts_html',
			'<span class="wcpf-product-counts">(' . $item['product_count'] . ')</span>',
			$item['product_count'],
			$item,
			$this
		);
	}

	public function apply_filter_to_query( \WP_Query $product_query, $filter_values ) {
		$filter_value = isset( $filter_values['field'] ) ? $filter_values['field'] : null;

		$items_source = $this->get_option( 'itemsSource' );

		$query_type = $this->get_option( 'queryType', 'or' );

		if ( in_array( $items_source, [ 'attribute', 'tag', 'category', 'taxonomy' ] ) ) {
			if ( ! $this->active_multi_select() ) {
				$filter_value = [ $filter_value ];
			} else {
				$filter_value = (array) $filter_value;
			}

			$taxonomy = $this->get_taxonomy();

			$operator = '';

			if ( $this->active_multi_select() ) {
				if ( $query_type == 'and' ) {
					$operator = 'AND';
				} else if ( $query_type == 'or' ) {
					$operator = 'IN';
				}
			} else {
				$operator = 'IN';
			}

			$tax_query_item = [];

			if ( $operator == 'AND' ) {
				$tax_query_item['relation'] = 'AND';

				foreach ( $filter_value as $index => $value ) {
					$tax_rule = [
						'taxonomy' => $taxonomy,
						'field' => 'slug',
						'terms' => $value,
						'operator' => 'IN'
					];

					if ( in_array( '0', $filter_value ) ) {
						$tax_rule['terms'] = get_terms( [
							'taxonomy' => $taxonomy,
							'fields' => 'ids',
							'slug' => $filter_value
						] );

						$tax_rule['field'] = 'term_id';
					}

					$tax_query_item[] = $tax_rule;
				}
			} else if ( $operator == 'IN' ) {
				$tax_query_item = [
					'taxonomy' => $taxonomy,
					'field' => 'slug',
					'terms' => $filter_value,
					'operator' => $operator
				];

				if ( in_array( '0', $filter_value ) ) {
					$tax_query_item['terms'] = get_terms( [
						'taxonomy' => $taxonomy,
						'fields' => 'ids',
						'slug' => $filter_value
					] );

					$tax_query_item['field'] = 'term_id';
				}
			}

			$product_query->set(
				'tax_query',
				array_merge(
					$product_query->get( 'tax_query', [] ),
					[ 'wcpf_' . $this->get_field_key() => $tax_query_item ]
				)
			);

			$this->get_object_register()->save(
				'selected_options',
				array_merge(
					$this->get_object_register()->get( 'selected_options', [] ),
					[ 'wcpf_' . $this->get_field_key() => [
						'terms' => $filter_value,
						'query_type' => $query_type,
						'taxonomy' => $taxonomy
					] ]
				)
			);
		} else if ( $items_source == 'stock-status' ) {
			$statuses = $this->get_selected_stock_statuses( $filter_value );

			if ( count( $statuses ) ) {
				$product_query->set( 'wcpf_stock_status', $statuses );
			}
		}
	}

	protected function get_selected_stock_statuses( $filter_value = false ) {
		$statuses = [];

		$status_alias = array_keys( $this->get_query_helper()->get_stock_status_meta_keys() );

		if ( $filter_value === false ) {
			$filter_value = $this->get_field_value();
		}

		if ( is_array( $filter_value ) && $this->active_multi_select() ) {
			foreach ( $filter_value as $value ) {
				if ( in_array( $value, $status_alias ) ) {
					$statuses[] = $value;
				}
			}
		} else if ( in_array( $filter_value, $status_alias ) ) {
			$statuses[] = $filter_value;
		}

		return $statuses;
	}

	protected function get_selected_term_ids() {
		if ( ! $this->get_field_value() ) {
			return null;
		}

		$selected_term_ids = [];

		if ( is_array( $this->get_field_value() ) ) {
			foreach ( $this->get_field_value() as $value ) {
				if ( isset( $this->term_item_keys[ $value ] ) ) {
					$selected_term_ids[] = $this->term_item_keys[ $value ];
				}
			}
		} else {
			if ( isset( $this->term_item_keys[ $this->get_field_value() ] ) ) {
				$selected_term_ids[] = $this->term_item_keys[ $this->get_field_value() ];
			}
		}

		return $selected_term_ids;
	}

	protected function get_product_counts_in_stock_statuses( $statuses ) {
		global $wpdb;

		$product_query = $this->get_product_query_after_filtering();

		$tax_query = $this->get_query_helper()->get_tax_query( $product_query );

		$meta_query = $this->get_query_helper()->get_meta_query( $product_query );

		$meta_query = new \WP_Meta_Query( $meta_query );

		$tax_query = new \WP_Tax_Query( $tax_query );

		$meta_query_sql = $meta_query->get_sql( 'post', $wpdb->posts, 'ID' );

		$tax_query_sql  = $tax_query->get_sql( $wpdb->posts, 'ID' );

		$search_sql = $this->get_query_helper()->get_search_query_sql( $product_query );

		$status_meta_keys = $this->get_query_helper()->get_stock_status_meta_keys();

		$use_meta_keys = [];

		foreach ( $statuses as $status ) {
			if ( isset( $status_meta_keys[ $status ] ) ) {
				$use_meta_keys[] = $status_meta_keys[ $status ];
			}
		}

		$status_values_in_meta_sql = $wpdb->prepare(
			substr( str_repeat( ',%s', count( $use_meta_keys ) ), 1 ),
			$use_meta_keys
		);

		$query = [
			'select' => "SELECT wcpf_sspc_postmeta.meta_value as status, GROUP_CONCAT( {$wpdb->posts}.ID ) as post_ids",
			'from' => "FROM {$wpdb->posts}",
			'join' => "
                INNER JOIN {$wpdb->postmeta} AS wcpf_sspc_postmeta ON {$wpdb->posts}.ID = wcpf_sspc_postmeta.post_id
			" . $tax_query_sql['join'] . $meta_query_sql['join'],
			'where' => "
                WHERE {$wpdb->posts}.post_type IN ( 'product' )
                AND {$wpdb->posts}.post_status = 'publish'
                AND (wcpf_sspc_postmeta.meta_key = '_stock_status' AND wcpf_sspc_postmeta.meta_value IN ($status_values_in_meta_sql))
                "
			           . $tax_query_sql['where'] . $meta_query_sql['where'],
			'group_by' => 'GROUP BY wcpf_sspc_postmeta.meta_value'
		];

		if ( isset( $product_query->query_vars['post__in'] ) && is_array( $product_query->query_vars['post__in'] ) && count( $product_query->query_vars['post__in'] ) ) {
			$post__in = implode( ',', array_map( 'absint', $product_query->query_vars['post__in'] ) );

			$query['where'] .= " AND {$wpdb->posts}.ID IN ($post__in)";
		}

		if ( $search_sql ) {
			$search_sql = apply_filters( 'wcpf_product_counts_search_sql', $search_sql );

			$query['where'] .= ' ' . $search_sql;
		}

		$query = apply_filters( 'wcpf_product_counts_in_stock_statuses_clauses', $query, [
				'component' => $this,
				'statuses' => $statuses
			]
		);

		$query_sql = implode( ' ', $query );

		$query_hash = md5( $query_sql );

		$cached_posts = [];

		$cache = apply_filters( 'wcpf_product_counts_maybe_cache', ! $this->get_plugin()->is_debug_mode() );

		if ( $cache ) {
			$cached_posts = (array) get_transient( 'wcpf_products_in_stock_statuses' );
		}

		if ( ! isset( $cached_posts[ $query_hash ] ) ) {
			$results = $wpdb->get_results( $query_sql, ARRAY_A );

			$cached_posts[ $query_hash ] = wp_list_pluck( $results, 'post_ids', 'status' );

			if ( $cache ) {
				set_transient( 'wcpf_products_in_stock_statuses', $cached_posts, DAY_IN_SECONDS );
			}
		}

		$status_meta_to_alias = array_flip( $status_meta_keys );

		$product_counts = [];

		foreach ( $cached_posts[ $query_hash ] as $status => $post_ids ) {
			if ( isset( $status_meta_to_alias[ $status ] ) ) {
				$status = $status_meta_to_alias[ $status ];
			}

			if ( $post_ids ) {
				$post_ids = array_unique( explode( ',', $post_ids ) );
			}

			if ( ! is_array( $post_ids ) || ! count( $post_ids ) ) {
				$product_counts[ $status ] = 0;

				continue;
			}

			$product_counts[ $status ] = count( $post_ids );
		}

		return $product_counts;
	}

	protected function get_product_counts_in_terms( $terms ) {
		global $wpdb;

		$term_ids = array_keys( $terms );

		$tax_query_index = 'wcpf_' . $this->get_field_key();

		$once_tree_select = in_array( 'once_tree_select', $this->supports ) && $this->is_tree_view();

		$multi_select = $this->active_multi_select();

		$query_type = $this->get_option( 'queryType' );

		$taxonomy = $this->get_taxonomy();

		$query_term_ids = array_map( 'absint', $term_ids );

		$child_term_ids = [];

		foreach ( $term_ids as $term_id ) {
			$child_term_ids[ $term_id ] = get_term_children( $term_id, $taxonomy );

			if ( count( $child_term_ids[ $term_id ] ) ) {
				$query_term_ids = array_merge( $query_term_ids, $child_term_ids[ $term_id ] );
			}
		}

		$is_customized = apply_filters( 'wcpf_product_counts_is_customized', false, [
			'terms' => $terms,
			'taxonomy' => $taxonomy,
			'query_type' => $query_type,
			'component' => $this,
			'option_key' => $tax_query_index
		] );

		// if query type "or", consider selected options
		$selected_term_ids = $is_customized || $once_tree_select || ( $multi_select && $query_type == 'or' )
			? $this->get_selected_term_ids()
			: false;

		if ( is_array( $selected_term_ids ) ) {
			$query_term_ids = array_merge( $query_term_ids, $selected_term_ids );
		}

		$query_term_ids = array_map( 'esc_sql', array_unique( $query_term_ids ) );

		$product_query = $this->get_product_query_after_filtering();

		$tax_query = null;

		$meta_query = $this->get_query_helper()->get_meta_query( $product_query );

		// deleting component conditions to keep condition "or"
		if ( ( $is_customized
		       || ( $query_type == 'or' && $multi_select )
		       || ! $multi_select
		       || $once_tree_select
		       || ( $this->get_product_count_policy() == 'with-selected-options' && $multi_select ) )
		     && isset( $product_query->query_vars['tax_query'], $product_query->query_vars['tax_query'][ $tax_query_index ] ) ) {
			$original_query_vars = $product_query->query_vars;

			unset( $product_query->query_vars['tax_query'][ $tax_query_index ] );

			$product_query->parse_tax_query( $product_query->query_vars );

			$tax_query = $this->get_query_helper()->get_tax_query( $product_query );

			// restore original query_vars and tax_query
			$product_query->query_vars = $original_query_vars;

			$product_query->parse_tax_query( $product_query->query_vars );
		} else {
			$tax_query = $this->get_query_helper()->get_tax_query( $product_query );
		}

		$meta_query = new \WP_Meta_Query( $meta_query );

		$tax_query = new \WP_Tax_Query( $tax_query );

		$meta_query_sql = $meta_query->get_sql( 'post', $wpdb->posts, 'ID' );

		$tax_query_sql  = $tax_query->get_sql( $wpdb->posts, 'ID' );

		$search_sql = $this->get_query_helper()->get_search_query_sql( $product_query );

		$query = [
			'select' => "SELECT terms.term_id as term_id, GROUP_CONCAT( {$wpdb->posts}.ID ) as post_ids",
			'from' => "FROM {$wpdb->posts}",
			'join' => "
                INNER JOIN {$wpdb->term_relationships} AS term_relationships ON {$wpdb->posts}.ID = term_relationships.object_id
                INNER JOIN {$wpdb->term_taxonomy} AS term_taxonomy USING( term_taxonomy_id )
                INNER JOIN {$wpdb->terms} AS terms USING( term_id )
			" . $tax_query_sql['join'] . $meta_query_sql['join'],
			'where' => "
                WHERE {$wpdb->posts}.post_type IN ( 'product' )
                AND {$wpdb->posts}.post_status = 'publish'"
			           . $tax_query_sql['where'] . $meta_query_sql['where']
			           . ' AND terms.term_id IN (' . implode( ',', $query_term_ids ) . ')',
			'group_by' => 'GROUP BY terms.term_id'
		];

		if ( isset( $product_query->query_vars['post__in'] ) && is_array( $product_query->query_vars['post__in'] ) && count( $product_query->query_vars['post__in'] ) ) {
			$post__in = implode( ',', array_map( 'absint', $product_query->query_vars['post__in'] ) );

			$query['where'] .= " AND {$wpdb->posts}.ID IN ($post__in)";
		}

		if ( $search_sql ) {
			$search_sql = apply_filters( 'wcpf_product_counts_search_sql', $search_sql );

			$query['where'] .= ' ' . $search_sql;
		}

		$query = apply_filters( 'wcpf_product_counts_clauses', $query, [
				'terms' => $terms,
				'taxonomy' => $taxonomy,
				'query_type' => $query_type,
				'component' => $this,
				'option_key' => $tax_query_index,
				'is_customized' => $is_customized
			]
		);

		$query_sql = implode( ' ', $query );

		$query_hash = md5( $query_sql );

		$cached_posts = [];

		$cache = apply_filters( 'wcpf_product_counts_maybe_cache', ! $this->get_plugin()->is_debug_mode() );

		if ( $cache ) {
			$cached_posts = (array) get_transient( 'wcpf_products_in_' . $taxonomy );
		}

		if ( ! isset( $cached_posts[ $query_hash ] ) ) {
			$results = $wpdb->get_results( $query_sql, ARRAY_A );

			$cached_posts[ $query_hash ] = wp_list_pluck( $results, 'post_ids', 'term_id' );

			if ( $cache ) {
				set_transient( 'wcpf_products_in_' . $taxonomy, $cached_posts, DAY_IN_SECONDS );
			}
		}

		$term_posts = $cached_posts[ $query_hash ];

		$pad_term_posts = [];

		foreach ( $term_ids as $term_id ) {
			if ( isset( $pad_term_posts[ $term_id ] ) ) {
				continue;
			}

			$posts_in_term = [];

			if ( isset( $term_posts[ $term_id ] ) ) {
				$posts_in_term = explode( ',', $term_posts[ $term_id ] );
			}

			foreach ( $child_term_ids[ $term_id ] as $child_term_id ) {
				if ( isset( $term_posts[ $child_term_id ] ) ) {
					$posts_in_term = array_merge(
						$posts_in_term,
						explode( ',', $term_posts[ $child_term_id ] )
					);
				}
			}

			$pad_term_posts[ $term_id ] = $posts_in_term;
		}

		$selected_term_post_ids = [];

		if ( ( $this->get_product_count_policy() == 'with-selected-options' && $multi_select )
		     && ! $once_tree_select
		     && $multi_select
		     && $query_type == 'or'
		     && is_array( $selected_term_ids ) ) {
			foreach ( $selected_term_ids as $selected_term_id ) {
				if ( isset( $pad_term_posts[ $selected_term_id ] ) ) {
					$selected_term_post_ids = array_merge(
						$selected_term_post_ids,
						$pad_term_posts[ $selected_term_id ]
					);
				}
			}

			$selected_term_post_ids = array_unique( $selected_term_post_ids );
		}

		$product_counts = [];

		foreach ( $pad_term_posts as $term_id => $post_ids ) {
			if ( ! count( $post_ids ) ) {
				$product_counts[ $term_id ] = 0;

				continue;
			}

			if ( ( $this->get_product_count_policy() == 'with-selected-options' && $multi_select )
			     && is_array( $selected_term_ids ) && in_array( $term_id, $selected_term_ids ) ) {
				$post_ids = array_unique( $post_ids );

				$product_counts[ $term_id ] = count( $post_ids );

				continue;
			}

			if ( $this->get_product_count_policy() == 'with-selected-options' && $multi_select ) {
				if ( ( $is_customized || $once_tree_select ) && is_array( $selected_term_ids ) ) {
					foreach ( $selected_term_ids as $selected_term_id ) {
						if ( ! isset( $pad_term_posts[ $selected_term_id ] ) ) {
							continue;
						}

						if ( $query_type == 'or' && ! in_array( $term_id, $child_term_ids[ $selected_term_id ] ) ) {
							$post_ids = array_merge( $post_ids, $pad_term_posts[ $selected_term_id ] );
						} else if ( $query_type == 'and' && ! in_array( $selected_term_id, $child_term_ids[ $term_id ] ) ) {
							$post_ids = array_intersect( $post_ids, $pad_term_posts[ $selected_term_id ] );
						}
					}
				} else if ( ! $once_tree_select && $query_type == 'or' && $selected_term_post_ids ) {
					$post_ids = array_merge( $post_ids, $selected_term_post_ids );
				}
			}

			$post_ids = array_unique( $post_ids );

			$product_counts[ $term_id ] = count( $post_ids );
		}

		return $product_counts;
	}
}