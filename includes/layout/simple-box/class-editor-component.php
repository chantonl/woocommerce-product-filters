<?php

namespace WooCommerce_Product_Filter_Plugin\Layout\Simple_Box;

use WooCommerce_Product_Filter_Plugin\Admin\Editor\Component,
    WooCommerce_Product_Filter_Plugin\Admin\Editor\Panel_Layout,
    WooCommerce_Product_Filter_Plugin\Admin\Editor\Control;

class Editor_Component extends Component\Base_Component implements Component\Generates_Panels_Interface, Component\Generates_Projection_Interface {
    public function generate_panels() {
        $default_panel = new Panel_Layout\List_Layout( [
            'panel_id' => 'SimpleBoxLayout',
            'title' => __( 'Simple Box', 'wcpf' ),
            'controls' => [
                new Control\Text_Control( [
                    'key' => 'entityTitle',
                    'control_source' => 'entity',
                    'label' => __( 'Title', 'wcpf' ),
                    'placeholder' => __( 'Title', 'wcpf' ),
                    'required' => true
                ] ),
                new Control\Switch_Control( [
                    'key' => 'displayToggleContent',
                    'label' => __( 'Display toggle content', 'wcpf' ),
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
                new Control\Select_Control( [
                    'key' => 'defaultToggleState',
                    'label' => __( 'Default toggle state', 'wcpf' ),
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
                        ]
                    ]
                ] ),
                new Control\Text_Control( [
                    'key' => 'cssClass',
                    'label' => __( 'CSS Class', 'wcpf' ),
                    'placeholder' => __( 'class-name', 'wcpf' )
                ] )
            ]
        ]);

        return [ $default_panel ];
    }

    public function generate_projection(){
        return new Editor_Projection( [
            'title' => __( 'Simple Box', 'wcpf' )
        ] );
    }
}