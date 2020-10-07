<?php

namespace WooCommerce_Product_Filter_Plugin\Field\Button;

use WooCommerce_Product_Filter_Plugin\Admin\Editor\Component,
    WooCommerce_Product_Filter_Plugin\Admin\Editor\Panel_Layout,
    WooCommerce_Product_Filter_Plugin\Admin\Editor\Control,
    WooCommerce_Product_Filter_Plugin\Field\Editor\Field_Projection;

class Editor_Component extends Component\Base_Component implements Component\Generates_Projection_Interface, Component\Generates_Panels_Interface {
    public function generate_panels() {
        $default_panel = new Panel_Layout\List_Layout( [
            'panel_id' => 'ButtonField',
            'title' => __( 'Button', 'wcpf' ),
            'controls' => [
                new Control\Text_Control( [
                    'key' => 'entityTitle',
                    'control_source' => 'entity',
                    'label' => __( 'Title', 'wcpf' ),
                    'placeholder' => __( 'Title', 'wcpf' ),
                    'required' => true
                ] ),
                new Control\Select_Control( [
                    'key' => 'action',
                    'label' => __( 'Action', 'wcpf' ),
                    'options' => [
                        'filter' => __( 'Filter', 'wcpf' ),
                        'reset' => __( 'Reset', 'wcpf' )
                    ]
                ] ),
                new Control\Text_Control( [
                    'key' => 'cssClass',
                    'label' => __( 'CSS Class', 'wcpf' ),
                    'placeholder' => __( 'class-name', 'wcpf' )
                ] )
            ]
        ] );

        return [ $default_panel ];
    }

    public function generate_projection() {
        return new Field_Projection( [
            'title' => __( 'Button', 'wcpf' )
        ] );
    }
}