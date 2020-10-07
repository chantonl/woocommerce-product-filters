<?php

namespace WooCommerce_Product_Filter_Plugin\Field\Box_List;

use WooCommerce_Product_Filter_Plugin\Field\Editor\Abstract_List_Component,
    WooCommerce_Product_Filter_Plugin\Admin\Editor\Control;

class Editor_Component extends Abstract_List_Component {
    protected $supports = [
        'multi_select',
        'multi_select_toggle',
        'toggle_content',
        'sorting'
    ];

    public function get_element_id() {
        return 'BoxListField';
    }

    public function get_element_title() {
        return __( 'Box List', 'wcpf' );
    }

    public function generate_panels() {
        $result_panels = parent::generate_panels();

        $field_panel = $result_panels[0];

        $field_panel->add_control( 'visual', new Control\Text_Size_Control( [
            'key' => 'boxSize',
            'label' => __( 'Box size', 'wcpf' ),
            'placeholder' => __( 'size', 'wcpf' ),
            'control_description' => __( 'Height and width of box item', 'wcpf' ),
            'units' => [
                'px' => 'px'
            ],
            'required' => true
        ] ) );

        $actionForEmptyOptionsControl = $field_panel->get_control_by_option_key( 'actionForEmptyOptions' );

        if ( $actionForEmptyOptionsControl ) {
            $actionForEmptyOptionsControl->remove_option( 'markAsDisabled' );
        }

        return $result_panels;
    }
}