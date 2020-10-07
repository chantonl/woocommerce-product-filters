<?php

namespace WooCommerce_Product_Filter_Plugin\Field\Editor;

use WooCommerce_Product_Filter_Plugin\Admin\Editor\Component,
    WooCommerce_Product_Filter_Plugin\Admin\Editor\Panel_Layout,
    WooCommerce_Product_Filter_Plugin\Admin\Editor\Control;

abstract class Abstract_List_Component extends Component\Base_Component implements Component\Generates_Panels_Interface, Component\Generates_Projection_Interface {
    protected $supports = [];

    public abstract function get_element_id();

    public abstract function get_element_title();

    public function generate_panels() {
        $field_panel = new Panel_Layout\Tabs_Layout( [
            'panel_id' => $this->get_element_id(),
            'title' => $this->get_element_title(),
            'tabs' => [
                'general' => [
                    'label' => __( 'General', 'wcpf' ),
                    'controls' => [
                        new Control\Text_Control( [
                            'key' => 'entityTitle',
                            'control_source' => 'entity',
                            'label' => __( 'Title', 'wcpf' ),
                            'placeholder' => __( 'Title', 'wcpf' ),
                            'required' => true
                        ] ),
                        new Control\Text_Control( [
                            'key' => 'optionKey',
                            'label' => __( 'URL key', 'wcpf' ),
                            'placeholder' => __( 'option-key', 'wcpf' ),
                            'control_description' => __( 'The “URL key” is the URL-friendly version of the title. It is usually all lowercase and contains only letters, numbers, and hyphens', 'wcpf' ),
                            'required' => true
                        ] ),
                        new Control\Select_Control( [
                            'key' => 'itemsSource',
                            'label' => __( 'Source of options', 'wcpf' ),
                            'control_description' => __( 'Select source of options, that will be using to filter products', 'wcpf' ),
                            'options' => [
                                'attribute' => __( 'Attribute', 'wcpf' ),
                                'category' => __( 'Category', 'wcpf' ),
                                'tag' => __( 'Tag', 'wcpf' ),
                                'taxonomy' => __( 'Taxonomy', 'wcpf' )
                            ],
                            'default_value' => 'attribute'
                        ] ),
                        new Control\Select_Control( [
                            'key' => 'itemsSourceAttribute',
                            'label' => __( 'Attribute', 'wcpf' ),
                            'options' => $this->get_attribute_taxonomies(),
                            'control_description' => __( 'Choose one of the attributes created in “Products > Attributes”', 'wcpf' ),
                            'display_rules' => [
                                [
                                    'optionKey' => 'itemsSource',
                                    'operation' => '==',
                                    'value' => [
                                        'attribute'
                                    ]
                                ]
                            ],
                            'required' => true
                        ] ),
                        new Control\Select_Control( [
                            'key' => 'itemsSourceCategory',
                            'label' => __( 'Category', 'wcpf' ),
                            'options' => $this->get_categories(),
                            'control_description' => __( 'Choose one of the categories created in “Products > Categories”', 'wcpf' ),
                            'default_value' => 'all',
                            'display_rules' => [
                                [
                                    'optionKey' => 'itemsSource',
                                    'operation' => '==',
                                    'value' => [
                                        'category'
                                    ]
                                ]
                            ],
                            'required' => true
                        ] ),
                        new Control\Select_Control( [
                            'key' => 'itemsSourceTaxonomy',
                            'label' => __( 'Taxonomy', 'wcpf' ),
                            'options' => $this->get_taxonomies(),
                            'control_description' => __( 'The “Taxonomy” is a grouping mechanism for posts. For example, "product tags" and "product attributes" are also taxonomies', 'wcpf' ),
                            'display_rules' => [
                                [
                                    'optionKey' => 'itemsSource',
                                    'operation' => '==',
                                    'value' => [
                                        'taxonomy'
                                    ]
                                ]
                            ],
                            'required' => true
                        ] ),
                        new Control\Select_Control( [
                            'key' => 'itemsDisplayWithoutParents',
                            'label' => __( 'Display', 'wcpf' ),
                            'options' => [
                                'all' => __( 'All', 'wcpf' ),
                                'selected' => __( 'Only Selected', 'wcpf' ),
                                'except' => __( 'Except Selected', 'wcpf' )
                            ],
                            'default_value' => 'all',
                            'display_rules' => [
                                [
                                    'optionKey' => 'itemsSource',
                                    'operation' => 'in',
                                    'value' => [
                                        'attribute',
                                        'tag'
                                    ]
                                ]
                            ]
                        ] ),
                        new Control\Select_Control( [
                            'key' => 'itemsDisplay',
                            'label' => __( 'Display', 'wcpf' ),
                            'options' => [
                                'all' => __( 'All', 'wcpf' ),
                                'parent' => __( 'Only Parent', 'wcpf' ),
                                'selected' => __( 'Only Selected', 'wcpf' ),
                                'except' => __( 'Except Selected', 'wcpf' )
                            ],
                            'default_value' => 'all',
                            'display_rules' => [
                                [
                                    'optionKey' => 'itemsSource',
                                    'operation' => 'in',
                                    'value' => [
                                        'category',
                                        'taxonomy'
                                    ]
                                ]
                            ]
                        ] ),
                        new Control\Check_List_Control( [
                            'key' => 'taxonomySelectedItems',
                            'label' => __( 'Select options', 'wcpf' ),
                            'control_description' => __( 'Only these options will be displayed in filter', 'wcpf' ),
                            'options_handler' => [ $this, 'get_terms_by_control_values' ],
                            'style' => 'wp',
                            'options_depends' => [
                                'itemsSourceTaxonomy',
                                'itemsSourceCategory',
                                'itemsSourceAttribute',
                                'itemsSource'
                            ],
                            'display_rules' => [
                                'relation' => 'OR',
                                [
                                    [
                                        'optionKey' => 'itemsDisplay',
                                        'operation' => '==',
                                        'value' => 'selected'
                                    ],
                                    [
                                        'optionKey' => 'itemsSource',
                                        'operation' => 'in',
                                        'value' => [
                                            'category',
                                            'taxonomy'
                                        ]
                                    ]
                                ],
                                [
                                    [
                                        'optionKey' => 'itemsDisplayWithoutParents',
                                        'operation' => '==',
                                        'value' => 'selected'
                                    ],
                                    [
                                        'optionKey' => 'itemsSource',
                                        'operation' => 'in',
                                        'value' => [
                                            'attribute',
                                            'tag'
                                        ]
                                    ]
                                ]
                            ]
                        ] ),
                        new Control\Check_List_Control( [
                            'key' => 'taxonomyExceptItems',
                            'label' => __( 'Exclude options', 'wcpf' ),
                            'control_description' => __( 'These options will not be displayed in filter', 'wcpf' ),
                            'options_handler' => [ $this, 'get_terms_by_control_values' ],
                            'style' => 'wp',
                            'options_depends' => [
                                'itemsSourceTaxonomy',
                                'itemsSourceCategory',
                                'itemsSourceAttribute',
                                'itemsSource'
                            ],
                            'display_rules' => [
                                'relation' => 'OR',
                                [
                                    [
                                        'optionKey' => 'itemsDisplay',
                                        'operation' => '==',
                                        'value' => 'except'
                                    ],
                                    [
                                        'optionKey' => 'itemsSource',
                                        'operation' => 'in',
                                        'value' => [
                                            'category',
                                            'taxonomy'
                                        ]
                                    ]
                                ],
                                [
                                    [
                                        'optionKey' => 'itemsDisplayWithoutParents',
                                        'operation' => '==',
                                        'value' => 'except'
                                    ],
                                    [
                                        'optionKey' => 'itemsSource',
                                        'operation' => 'in',
                                        'value' => [
                                            'attribute',
                                            'tag'
                                        ]
                                    ]
                                ]
                            ]
                        ] ),
                        new Control\Rules_Builder_Control( [
                            'key' => 'displayRules',
                            'label' => __( 'Display rules', 'wcpf' ),
                            'title_before_fields' => __( 'Show this element if', 'wcpf' )
                        ] )
                    ],
                ],
                'visual' => [
                    'label' => __( 'Visual', 'wcpf' ),
                    'controls' => [
                        new Control\Switch_Control( [
                            'key' => 'displayTitle',
                            'label' => __( 'Display title', 'wcpf' ),
                            'first_option' => [
                                'text' => __( 'On', 'wcpf' ),
                                'value' => true
                            ],
                            'second_option' => [
                                'text' => __( 'Off', 'wcpf' ),
                                'value' => false
                            ],
                            'default_value' => true
                        ] ),
                        new Control\Text_Control( [
                            'key' => 'cssClass',
                            'label' => __( 'CSS Class', 'wcpf' ),
                            'placeholder' => __( 'class-name', 'wcpf' )
                        ] )
                    ]
                ]
            ]
        ]);

        if ( in_array( 'multi_select_toggle', $this->supports ) ) {
            $field_panel->add_control(
                'general',
                new Control\Switch_Control( [
                    'key' => 'multiSelect',
                    'label' => __( 'Multi select', 'wcpf' ),
                    'first_option' => [
                        'text' => __( 'On', 'wcpf' ),
                        'value' => true
                    ],
                    'second_option' => [
                        'text' => __( 'Off', 'wcpf' ),
                        'value' => false
                    ],
                    'default_value' => true
                ] ),
                2
            );
        }

        if ( in_array( 'multi_select', $this->supports ) ) {
            $display_rules = [
                [
                    'optionKey' => 'itemsSource',
                    'operation' => 'in',
                    'value' => [
                        'attribute',
                        'category',
                        'tag',
                        'taxonomy'
                    ]
                ]
            ];

            if ( in_array( 'multi_select_toggle', $this->supports ) ) {
                $display_rules[] = [
                    'optionKey' => 'multiSelect',
                    'operation' => '==',
                    'value' => true
                ];
            }

            $field_panel->add_control(
                'general',
                new Control\Radio_List_Control( [
                    'key' => 'queryType',
                    'label' => __( 'Query type', 'wcpf' ),
                    'control_description' => __( 'Type of query that allows you to apply multiple filters. “And” satisfy both conditions. “Or” satisfy at least one of the conditions', 'wcpf' ),
                    'options' => [
                        'and' => __( 'And', 'wcpf' ),
                        'or' => __( 'Or', 'wcpf' )
                    ],
                    'default_value' => 'and',
                    'is_inline_style' => true,
                    'display_rules' => $display_rules
                ] ),
                2
            );
        }

        if ( in_array( 'hierarchical', $this->supports ) ) {
            $field_panel->add_control(
                'visual',
                new Control\Switch_Control( [
                    'key' => 'itemsDisplayHierarchical',
                    'label' => __( 'Display hierarchical', 'wcpf' ),
                    'control_description' => __( 'Switch to display options as a tree or a list', 'wcpf' ),
                    'first_option' => [
                        'text' => __( 'On', 'wcpf' ),
                        'value' => true
                    ],
                    'second_option' => [
                        'text' => __( 'Off', 'wcpf' ),
                        'value' => false
                    ],
                    'default_value' => true,
                    'display_rules' => [
                        [
                            'optionKey' => 'itemsDisplay',
                            'operation' => 'in',
                            'value' => [
                                'all',
                                'selected',
                                'except'
                            ]
                        ],
                        [
                            'optionKey' => 'itemsSource',
                            'operation' => 'in',
                            'value' => [
                                'category',
                                'taxonomy'
                            ]
                        ]
                    ]
                ] )
            );

            $field_panel->add_control(
                'visual',
                new Control\Switch_Control( [
                    'key' => 'displayHierarchicalCollapsed',
                    'label' => __( 'Display hierarchy collapsed', 'wcpf' ),
                    'first_option' => [
                        'text' => __( 'On', 'wcpf' ),
                        'value' => true
                    ],
                    'second_option' => [
                        'text' => __( 'Off', 'wcpf' ),
                        'value' => false
                    ],
                    'default_value' => false,
                    'display_rules' => [
                        [
                            'optionKey' => 'itemsDisplay',
                            'operation' => 'in',
                            'value' => [
                                'all',
                                'selected',
                                'except'
                            ]
                        ],
                        [
                            'optionKey' => 'itemsSource',
                            'operation' => 'in',
                            'value' => [
                                'category',
                                'taxonomy'
                            ]
                        ],
                        [
                            'optionKey' => 'itemsDisplayHierarchical',
                            'operation' => '==',
                            'value' => true
                        ]
                    ]
                ] )
            );
        }

        if ( in_array( 'stock_status_options', $this->supports ) ) {
            $source_control = $field_panel->get_control_by_option_key( 'itemsSource' );

            $source_control->add_option( 'stock-status', __( 'Stock status', 'wcpf' ) );

            $field_panel->add_control(
                'general',
                new Control\Check_List_Control( [
                    'key' => 'displayedStockStatuses',
                    'label' => __( 'Displayed statuses', 'wcpf' ),
                    'style' => 'wp',
                    'options' => [
                        'in-stock' => __( 'In stock', 'woocommerce' ),
                        'out-of-stock' => __( 'Out of stock', 'woocommerce' ),
                        'on-backorder' => __( 'On backorder', 'woocommerce' )
                    ],
                    'default_value' => [ 'in-stock', 'out-of-stock', 'on-backorder' ],
                    'display_rules' => [
                        [
                            'optionKey' => 'itemsSource',
                            'operation' => '==',
                            'value' => 'stock-status'
                        ]
                    ]
                ] ),
                -1
            );

            $field_panel->add_control(
                'general',
                new Control\Text_Control( [
                    'key' => 'inStockText',
                    'label' => __( '"In stock" text', 'wcpf' ),
                    'placeholder' => __( 'In stock', 'woocommerce' ),
                    'default_value' => __( 'In stock', 'woocommerce' ),
                    'display_rules' => [
                        [
                            'optionKey' => 'displayedStockStatuses',
                            'operation' => 'inControl',
                            'value' => 'in-stock'
                        ],
                        [
                            'optionKey' => 'itemsSource',
                            'operation' => '==',
                            'value' => 'stock-status'
                        ]
                    ]
                ] ),
                -1
            );

            $field_panel->add_control(
                'general',
                new Control\Text_Control( [
                    'key' => 'outOfStockText',
                    'label' => __( '"Out of stock" text', 'wcpf' ),
                    'placeholder' => __( 'Out of stock', 'woocommerce' ),
                    'default_value' => __( 'Out of stock', 'woocommerce' ),
                    'display_rules' => [
                        [
                            'optionKey' => 'displayedStockStatuses',
                            'operation' => 'inControl',
                            'value' => 'out-of-stock'
                        ],
                        [
                            'optionKey' => 'itemsSource',
                            'operation' => '==',
                            'value' => 'stock-status'
                        ]
                    ]
                ] ),
                -1
            );

            $field_panel->add_control(
                'general',
                new Control\Text_Control( [
                    'key' => 'onBackorderText',
                    'label' => __( '"On backorder" text', 'wcpf' ),
                    'placeholder' => __( 'On backorder', 'woocommerce' ),
                    'default_value' => __( 'On backorder', 'woocommerce' ),
                    'display_rules' => [
                        [
                            'optionKey' => 'displayedStockStatuses',
                            'operation' => 'inControl',
                            'value' => 'on-backorder'
                        ],
                        [
                            'optionKey' => 'itemsSource',
                            'operation' => '==',
                            'value' => 'stock-status'
                        ]
                    ]
                ] ),
                -1
            );
        }

        if ( in_array( 'reset_item', $this->supports ) ) {
            $field_panel->add_control(
                'general',
                new Control\Text_Control( [
                    'key' => 'titleItemReset',
                    'label' => __( '"Show all" text', 'wcpf' ),
                    'placeholder' => __( 'Show all', 'wcpf' ),
                    'default_value' => __( 'Show all', 'wcpf' ),
                    'required' => true
                ] ),
                -1
            );
        }

        if ( in_array( 'sorting', $this->supports ) ) {
            $field_panel->add_control(
                'general',
                new Control\Radio_List_Control( [
                    'key' => 'orderby',
                    'label' => __( 'Order by', 'wcpf' ),
                    'options' => [
                        'name' => __( 'Name', 'wcpf' ),
                        'order' => __( 'Order', 'wcpf' ),
                        'count' => __( 'Count', 'wcpf' )
                    ],
                    'default_value' => 'order',
                    'is_inline_style' => true,
                    'display_rules' => [
                        [
                            'optionKey' => 'itemsSource',
                            'operation' => 'in',
                            'value' => [
                                'attribute',
                                'category',
                                'tag',
                                'taxonomy'
                            ]
                        ]
                    ]
                ] ),
                -1
            );
        }

        if ( in_array( 'toggle_content', $this->supports ) ) {
            $field_panel->add_control(
                'visual',
                new Control\Switch_Control( [
                    'key' => 'displayToggleContent',
                    'label' => __( 'Display toggle content', 'wcpf' ),
                    'control_description' => __( 'Display toggle to hide content', 'wcpf' ),
                    'first_option' => [
                        'text' => __( 'On', 'wcpf' ),
                        'value' => true
                    ],
                    'second_option' => [
                        'text' => __( 'Off', 'wcpf' ),
                        'value' => false
                    ],
                    'default_value' => true,
                    'display_rules' => [
                        [
                            'optionKey' => 'displayTitle',
                            'operation' => '==',
                            'value' => true
                        ]
                    ]
                ] ),
                1
            );

            $field_panel->add_control(
                'visual',
                new Control\Select_Control( [
                    'key' => 'defaultToggleState',
                    'label' => __( 'Default toggle state', 'wcpf' ),
                    'control_description' => __( 'Default state (show/hide)', 'wcpf' ),
                    'options' => [
                        'show' => __( 'Show content', 'wcpf' ),
                        'hide' => __( 'Hide content', 'wcpf' )
                    ],
                    'default_value' => 'show',
                    'display_rules' => [
                        [
                            'optionKey' => 'displayToggleContent',
                            'operation' => '==',
                            'value' => true
                        ],
                        [
                            'optionKey' => 'displayTitle',
                            'operation' => '==',
                            'value' => true
                        ]
                    ]
                ] ),
                2
            );
        }

        $field_panel->add_control(
            'visual',
            new Control\Select_Control( [
                'key' => 'actionForEmptyOptions',
                'label' => __( 'Action for empty options', 'wcpf' ),
                'control_description' => __( 'Actions with options when no available products', 'wcpf' ),
                'options' => [
                    'noAction' => __( 'Show all', 'wcpf' ),
                    'hide' => __( 'Hide', 'wcpf' ),
                    'markAsDisabled' => __( 'Mark as disabled', 'wcpf' )
                ],
                'default_value' => 'noAction'
            ] )
        );

        if ( in_array( 'product_counts', $this->supports ) ) {
            $field_panel->add_control(
                'visual',
                new Control\Switch_Control( [
                    'key' => 'displayProductCount',
                    'label' => __( 'Display product counts', 'wcpf' ),
                    'control_description' => __( 'Show/hide product counts in options', 'wcpf' ),
                    'first_option' => [
                        'text' => __( 'On', 'wcpf' ),
                        'value' => true
                    ],
                    'second_option' => [
                        'text' => __( 'Off', 'wcpf' ),
                        'value' => false
                    ],
                    'default_value' => true
                ] )
            );

            if ( in_array( 'multi_select', $this->supports ) ) {
                $display_rules = [
                    [
                        'optionKey' => 'itemsSource',
                        'operation' => 'in',
                        'value' => [
                            'attribute',
                            'category',
                            'tag',
                            'taxonomy'
                        ]
                    ]
                ];

                if ( in_array( 'multi_select_toggle', $this->supports ) ) {
                    $display_rules[] = [
                        'optionKey' => 'multiSelect',
                        'operation' => '==',
                        'value' => true
                    ];
                }

                $field_panel->add_control(
                    'visual',
                    new Control\Select_Control( [
                        'key' => 'productCountPolicy',
                        'label' => __( 'Product count policy', 'wcpf' ),
                        'options' => [
                            'with-selected-options' => __( 'With selected options', 'wcpf' ),
                            'for-option-only' => __( 'For option only', 'wcpf' )
                        ],
                        'default_value' => 'for-option-only',
                        'display_rules' => $display_rules
                    ] )
                );
            }
        }

        if ( in_array( 'see_more_options_by', $this->supports ) ) {
            $field_panel->add_control(
                'visual',
                new Control\Select_Control( [
                    'key' => 'seeMoreOptionsBy',
                    'label' => __( 'See more options by', 'wcpf' ),
                    'options' => [
                        'disabled' => __( 'Disabled', 'wcpf' ),
                        'scrollbar' => __( 'Scrollbar', 'wcpf' ),
                        'moreButton' => __( 'More button', 'wcpf' )
                    ],
                    'default_value' => 'scrollbar'
                ] )
            );

            $field_panel->add_control(
                'visual',
                new Control\Text_Size_Control( [
                    'key' => 'heightOfVisibleContent',
                    'label' => __( 'Height of visible content', 'wcpf' ),
                    'units' => [
                        '' => __( 'options', 'wcpf' )
                    ],
                    'default_value' => 15,
                    'display_rules' => [
                        [
                            'optionKey' => 'seeMoreOptionsBy',
                            'operation' => 'in',
                            'value' => [
                                'scrollbar',
                                'moreButton'
                            ]
                        ]
                    ]
                ] )
            );
        }

        return [ $field_panel ];
    }

    public function generate_projection() {
        return new Field_Projection( [ 'title' => $this->get_element_title() ] );
    }

    protected function get_attribute_taxonomies() {
        $list = [];

        foreach ( wc_get_attribute_taxonomies() as $attribute ) {
            $list[ $attribute->attribute_name ] = $attribute->attribute_label;
        }

        return $list;
    }

    protected function get_taxonomies() {
        $list = [];

        foreach ( get_taxonomies( [ 'object_type' => [ 'product' ] ], 'objects' ) as $taxonomy ) {
            $list[ $taxonomy->name ] = $taxonomy->label;
        }

        foreach ( [
            'product_cat',
            'product_tag',
            'product_type'
                 ] as $removedIndex ) {
            if ( isset( $list[ $removedIndex ] ) ) {
                unset( $list[ $removedIndex ] );
            }
        }

        return $list;
    }

    protected function get_categories() {
        $list = [
            'all' => __( 'All categories', 'wcpf' )
        ];

        foreach ( get_terms( [ 'taxonomy' => 'product_cat', 'hide_empty' => false ] ) as $term ) {
            $list[ $term->term_id ] = $term->name;
        }

        return $list;
    }

    public function get_terms_by_options_for_select( $options ) {
        return $this->transform_tree_terms_to_list( $this->get_terms_by_control_values( $options ) );
    }

    protected function transform_tree_terms_to_list( $term_items ) {
        $result = [];

        foreach ( $term_items as $index => $term_item ) {
            $result[ (string) $term_item['key'] ] = $term_item['title'];

            if ( isset( $term_item['children'] ) && is_array( $term_item['children'] ) ) {
                $result += $this->transform_tree_terms_to_list( $term_item['children'] );
            }
        }

        return $result;
    }


    public function get_terms_by_control_values( $control_values ) {
        $list = [];

        $taxonomy = false;

        $item_source = isset( $control_values['itemsSource'] ) ? $control_values['itemsSource'] : null;

        $parent_term = 0;

        if ( $item_source == 'category' ) {
            $taxonomy = 'product_cat';

            if ( isset( $control_values['itemsSourceCategory'] ) && $control_values['itemsSourceCategory'] != 'all' ) {
                $parent_term = $control_values['itemsSourceCategory'];
            }
        } else if ( $item_source == 'taxonomy' && isset( $control_values['itemsSourceTaxonomy'] ) ) {
            $taxonomy = $control_values['itemsSourceTaxonomy'];
        } else if ( $item_source == 'attribute' && isset( $control_values['itemsSourceAttribute'] ) ) {
            $taxonomy = wc_attribute_taxonomy_name( $control_values['itemsSourceAttribute'] );
        } else if ( $item_source == 'tag' ) {
            $taxonomy = 'product_tag';
        }

        if ( $taxonomy ) {
            $list = $this->get_taxonomy_list( $taxonomy, $parent_term, true );
        }

        return $list;
    }

    protected function get_taxonomy_list( $taxonomy, $parent = 0, $need_child = false ) {
        $terms = get_terms( [
            'taxonomy' => $taxonomy,
            'hide_empty' => false,
            'hierarchical' => false,
            'parent' => $parent
        ] );

        $list = [];

        foreach ( $terms as $term ) {
            $item = [
                'key' => $term->term_id,
                'title' => $term->name,
            ];

            if ( $need_child ) {
                $item['children'] = $this->get_taxonomy_list( $taxonomy, $term->term_id, true );
            }

            $list[ $term->term_id ] = $item;
        }

        return $list;
    }
}