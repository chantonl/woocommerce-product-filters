<?php

namespace WooCommerce_Product_Filter_Plugin\Admin\Editor\Control;

class Color_List_Control extends Abstract_Control implements Preparing_For_Reload_Interface {
    protected $colors = [];

    protected $taxonomies_colors = [];

    public function get_control_type() {
        return 'ColorList';
    }

    public function initial_properties( array $params = [] ) {
        $this->option_key = 'colors_$taxonomy';

        $this->label = __( 'Colors', 'wcpf' );

        parent::initial_properties( $params );
    }

    public function render_control() {
        $this->render( 'control/color-list.php', [
            'colors' => $this->colors
        ] );
    }

    public function prepare_for_reload( array $options, array $context, array $control_props = [] ) {
        $current_taxonomy = $this->get_current_taxonomy( $options );

        $entity_options = $control_props['entity']['options'];

        if ( ! $current_taxonomy ) {
            return;
        }

        $this->option_key = 'colors_' . $current_taxonomy;

        $colors_option = [];

        if ( isset( $options[ $this->option_key ] )
            && is_array( $options[ $this->option_key ] ) ) {
            $colors_option = $options[ $this->option_key ];
        } else if ( isset( $entity_options[ $this->option_key ] )
            && is_array( $entity_options[ $this->option_key ] ) ) {
            $colors_option = $entity_options[ $this->option_key ];
        }

        $taxonomies = get_object_taxonomies( [ 'product' ] );

        foreach ( $taxonomies as $taxonomy ) {
            if ( isset( $options[ 'colors_' . $taxonomy ] ) && is_array( $options[ 'colors_' . $taxonomy ] ) ) {
                $this->taxonomies_colors[ 'colors_' . $taxonomy ] = $options[ 'colors_' . $taxonomy ];
            }
        }

        $terms = get_terms( [
            'taxonomy' => $current_taxonomy,
            'hide_empty' => false
        ] );

        if ( ! $terms || is_wp_error( $terms ) ) {
            return;
        }

        foreach ( $colors_option as $term => $color_option ) {
            if ( ! term_exists( $term, $current_taxonomy ) ) {
                unset( $colors_option[ $term ] );
            }
        }

        foreach ( $terms as $term ) {
            if ( ! isset( $colors_option[ $term->term_id ] ) ) {
                $colors_option[ $term->term_id ] = [
                    'type' => 'color',
                    'color' => '',
                    'image' => '',
                    'borderColor' => '',
                    'markerStyle' => 'light',
                    'term' => $term->term_id
                ];
            }
        }

        $this->taxonomies_colors[ 'colors_' . $current_taxonomy ] = $colors_option;

        $this->colors = $colors_option;
    }

    public function get_structure() {
        return array_merge( parent::get_structure(), [
            'taxonomiesColors' => $this->taxonomies_colors,
            'reloadAfterInit' => true,
            'optionsDepends' => [
                'itemsSourceTaxonomy',
                'itemsSourceCategory',
                'itemsSourceAttribute',
                'itemsSource'
            ]
        ] );
    }

    protected function get_current_taxonomy( $control_values ) {
        $item_source = isset( $control_values['itemsSource'] ) ? $control_values['itemsSource'] : null;

        $taxonomy = null;

        if ( $item_source == 'category' ) {
            $taxonomy = 'product_cat';
        } else if ( $item_source == 'taxonomy' && isset( $control_values['itemsSourceTaxonomy'] ) ) {
            $taxonomy = $control_values['itemsSourceTaxonomy'];
        } else if ( $item_source == 'attribute' && isset( $control_values['itemsSourceAttribute'] ) ) {
            $taxonomy = wc_attribute_taxonomy_name( $control_values['itemsSourceAttribute'] );
        } else if ( $item_source == 'tag' ) {
            $taxonomy = 'product_tag';
        }

        return $taxonomy;
    }
}