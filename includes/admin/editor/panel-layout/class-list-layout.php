<?php

namespace WooCommerce_Product_Filter_Plugin\Admin\Editor\Panel_Layout;

use WooCommerce_Product_Filter_Plugin\Admin\Editor\Control;

class List_Layout extends Abstract_Panel_Layout {
    protected $controls = [];

    public function __construct( array $params = [] ) {
        parent::__construct( $params );

        if ( isset( $this->panel_params['controls'] ) && is_array( $this->panel_params['controls'] ) ) {
            $this->controls = array_merge( $this->controls, $this->panel_params['controls'] );
        }
    }

    public function get_controls() {
        return $this->controls;
    }

    public function set_controls( $controls ) {
        $this->controls = $controls;
    }

    public function add_control( Control\Abstract_Control $control ) {
        $this->controls[] = $control;
    }

    public function has_control( Control\Abstract_Control $control ) {
        $key = array_search( $control, $this->controls );

        return $key !== false;
    }

    public function remove_control( Control\Abstract_Control $control ) {
        $key = array_search( $control, $this->controls );

        if ( $key !== false ) {
            unset( $this->controls[ $key ] );
        }
    }

    public function get_structure() {
        $data = parent::get_structure();

        $data['controls'] = [];

        foreach ( $this->get_controls() as $control ) {
            $data['controls'][] = $control->get_structure();
        }

        return $data;
    }

    public function get_panel_layout_type() {
        return 'List';
    }

    public function render_panel() {
        $this->render('panel/list.php', [
            'controls' => $this->get_controls()
        ] );
    }
}