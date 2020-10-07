<?php

namespace WooCommerce_Product_Filter_Plugin\Project;

use WooCommerce_Product_Filter_Plugin\Admin\Editor\Component,
    WooCommerce_Product_Filter_Plugin\Admin\Editor\Control,
    WooCommerce_Product_Filter_Plugin\Admin\Editor\Panel_Layout;

class Editor_Component extends Component\Base_Component implements Component\Generates_Panels_Interface {
    public function generate_panels() {
        $assets_component = $this->get_component_register()->get( 'Front/Assets' );

        $default_selectors = $assets_component->get_selectors();

        $default_panel = new Panel_Layout\Tabs_Layout( [
            'title' => __( 'Project', 'wcpf' ),
            'panel_id' => 'Project',
            'tabs' => [
                'general' => [
                    'label' => __( 'General', 'wcpf' ),
                    'controls' => [
                        new Control\Text_Control( [
                            'key' => 'entityTitle',
                            'control_source' => 'entity',
                            'label' => __( 'Title', 'wcpf' ),
                            'placeholder' => __( 'Title', 'wcpf' ),
                            'default_value' => __( 'Filters', 'wcpf' ),
                            'required' => true
                        ] ),
                        new Control\Select_Control( [
                            'key' => 'filteringStarts',
                            'label' => __( 'Filtering starts', 'wcpf' ),
                            'control_description' => __( 'Apply filters to product immediately when you change options or clicking on the "send" button', 'wcpf' ),
                            'options' => [
                                'auto' => __( 'Automatically', 'wcpf' ),
                                'send-button' => __( 'When on click send button', 'wcpf' )
                            ],
                            'default_value' => 'auto',
                            'required' => true
                        ] ),
                        new Control\Check_List_Control( [
                            'key' => 'useComponents',
                            'label' => __( 'Which components to use', 'wcpf' ),
                            'control_description' => __( 'Content of components will be updated when filtering', 'wcpf' ),
                            'options' => [
                                'pagination' => __( 'Pagination', 'wcpf' ),
                                'sorting' => __('Sorting', 'wcpf' ),
                                'results-count' => __( 'Results count', 'wcpf' ),
                                'page-title' => __( 'Page title', 'wcpf' ),
                                'breadcrumb' => __( 'Breadcrumb', 'wcpf' )
                            ],
                            'default_value' => [
                                'pagination',
                                'sorting',
                                'results-count',
                                'page-title',
                                'breadcrumb'
                            ]
                        ] ),
                        new Control\Switch_Control( [
                            'key' => 'paginationAjax',
                            'label' => __( 'Pagination ajax', 'wcpf' ),
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
                                    'optionKey' => 'useComponents',
                                    'operation' => 'inControl',
                                    'value' => 'pagination'
                                ]
                            ]
                        ] ),
                        new Control\Switch_Control( [
                            'key' => 'sortingAjax',
                            'label' => __( 'Sorting ajax', 'wcpf' ),
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
                                    'optionKey' => 'useComponents',
                                    'operation' => 'inControl',
                                    'value' => 'sorting'
                                ]
                            ]
                        ] )
                    ]
                ],
                'selectors' => [
                    'label' => __( 'Selectors', 'wcpf' ),
                    'controls' => [
                        new Control\Text_Control( [
                            'key' => 'productsContainerSelector',
                            'label' => __( 'Products container selector', 'wcpf' ),
                            'default_value' => $default_selectors['productsContainer'],
                            'required' => true
                        ] ),
                        new Control\Text_Control( [
                            'key' => 'paginationSelector',
                            'label' => __( 'Pagination selector', 'wcpf' ),
                            'default_value' => $default_selectors['paginationContainer'],
                            'display_rules' => [
                                [
                                    'optionKey' => 'useComponents',
                                    'operation' => 'inControl',
                                    'value' => 'pagination'
                                ]
                            ],
                            'required' => true
                        ] ),
                        new Control\Text_Control( [
                            'key' => 'resultCountSelector',
                            'label' => __( 'Result count selector', 'wcpf' ),
                            'default_value' => $default_selectors['resultCount'],
                            'display_rules' => [
                                [
                                    'optionKey' => 'useComponents',
                                    'operation' => 'inControl',
                                    'value' => 'results-count'
                                ]
                            ],
                            'required' => true
                        ] ),
                        new Control\Text_Control( [
                            'key' => 'sortingSelector',
                            'label' => __( 'Sorting selector', 'wcpf' ),
                            'default_value' => $default_selectors['sorting'],
                            'display_rules' => [
                                [
                                    'optionKey' => 'useComponents',
                                    'operation' => 'inControl',
                                    'value' => 'sorting'
                                ]
                            ],
                            'required' => true
                        ] ),
                        new Control\Text_Control( [
                            'key' => 'pageTitleSelector',
                            'label' => __( 'Page title selector', 'wcpf' ),
                            'default_value' => $default_selectors['pageTitle'],
                            'display_rules' => [
                                [
                                    'optionKey' => 'useComponents',
                                    'operation' => 'inControl',
                                    'value' => 'page-title'
                                ]
                            ],
                            'required' => true
                        ] ),
                        new Control\Text_Control( [
                            'key' => 'breadcrumbSelector',
                            'label' => __( 'Breadcrumb selector', 'wcpf' ),
                            'default_value' => $default_selectors['breadcrumb'],
                            'display_rules' => [
                                [
                                    'optionKey' => 'useComponents',
                                    'operation' => 'inControl',
                                    'value' => 'breadcrumb'
                                ]
                            ],
                            'required' => true
                        ] ),
                        new Control\Switch_Control( [
                            'key' => 'multipleContainersForProducts',
                            'label' => __( 'Multiple containers for products', 'wcpf' ),
                            'first_option' => [
                                'text' => __( 'On', 'wcpf' ),
                                'value' => true
                            ],
                            'second_option' => [
                                'text' => __( 'Off', 'wcpf' ),
                                'value' => false
                            ],
                            'default_value' => false
                        ] )
                    ]
                ]
            ]
        ]);

        return [ $default_panel ];
    }
}