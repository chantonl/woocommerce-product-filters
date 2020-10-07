<?php

namespace WooCommerce_Product_Filter_Plugin\Field\Color_List;

use WooCommerce_Product_Filter_Plugin\Field\Editor\Abstract_List_Component,
    WooCommerce_Product_Filter_Plugin\Admin\Editor\Control;

class Editor_Component extends Abstract_List_Component {
    protected $supports = [
        'multi_select',
        'multi_select_toggle',
        'toggle_content'
    ];

    public function get_element_id() {
        return 'ColorListField';
    }

    public function get_element_title() {
        return __( 'Color List', 'wcpf' );
    }

    public function generate_panels() {
        $result_panels = parent::generate_panels();

        $field_panel = $result_panels[0];

        foreach ( [ 'itemsDisplayWithoutParents', 'itemsDisplay', 'taxonomySelectedItems', 'taxonomyExceptItems' ] as $option_key ) {
            $field_panel->remove_control_by_option_key( 'general', $option_key );
        }

        $field_panel->add_control( 'general', new Control\Color_List_Control(), 8 );
/**
        $field_panel->add_control(
            'general',
            new Control\Repeater_Control( [
                'key' => 'colors',
                'label' => __( 'Colors', 'wcpf' ),
                'controls' => [
                    new Control\Radio_List_Control( [
                        'key' => 'type',
                        'label' => __( 'Type', 'wcpf' ),
                        'options' => [
                            'color' => __( 'Color', 'wcpf' ),
                            'image' => __( 'Image', 'wcpf' )
                        ],
                        'default_value' => 'color',
                        'is_inline_style' => true
                    ]),
                    new Control\Image_Control( [
                        'key' => 'image',
                        'label' => __( 'Image', 'wcpf' ),
                        'display_rules' => [
                            [
                                'optionKey' => 'repeaterItem.type',
                                'operation' => '==',
                                'value' => 'image'
                            ]
                        ],
                        'required' => true
                    ] ),
                    new Control\Color_Picker_Control( [
                        'key' => 'color',
                        'label' => __( 'Color'),
                        'default_value' => '#fff',
                        'display_rules' => [
                            [
                                'optionKey' => 'repeaterItem.type',
                                'operation' => '==',
                                'value' => 'color'
                            ]
                        ],
                        'required' => true
                    ] ),
                    new Control\Select_Control( [
                        'key' => 'term',
                        'label' => __( 'Value', 'wcpf' ),
                        'options_handler' => [ $this, 'get_terms_by_options_for_select' ],
                        'required' => true
                    ] ),
                    new Control\Switch_Control( [
                        'key' => 'displayBorder',
                        'label' => __( 'Display border', 'wcpf' ),
                        'first_option' => [
                            'text' => __( 'On', 'wcpf' ),
                            'value' => true
                        ],
                        'second_option' => [
                            'text' => __( 'Off', 'wcpf' ),
                            'value' => false
                        ],
                        'default_value' => false
                    ] ),
                    new Control\Color_Picker_Control( [
                        'key' => 'borderColor',
                        'label' => __( 'Border color', 'wcpf' ),
                        'display_rules' => [
                            [
                                'optionKey' => 'repeaterItem.displayBorder',
                                'operation' => '==',
                                'value' => true
                            ]
                        ]
                    ] ),
                    new Control\Radio_List_Control( [
                        'key' => 'markerStyle',
                        'label' => __( 'Marker style', 'wcpf' ),
                        'options' => [
                            'light' => __( 'Light', 'wcpf' ),
                            'dark' => __( 'Dark', 'wcpf' )
                        ],
                        'default_value' => 'light',
                        'is_inline_style' => true
                    ] )
                ],
                'item_options_depends' => [
                    'term' => [
                        'itemsSourceTaxonomy',
                        'itemsSourceCategory',
                        'itemsSourceAttribute',
                        'itemsSource'
                    ]
                ]
            ] ),
            8
        );**/

        return $result_panels;
    }
}