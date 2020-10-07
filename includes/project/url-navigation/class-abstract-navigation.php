<?php

namespace WooCommerce_Product_Filter_Plugin\Project\URL_Navigation;

use WooCommerce_Product_Filter_Plugin\Structure;

abstract class Abstract_Navigation extends Structure\Component {
    protected $navigation_options = [];

    public function set_navigation_options( array $options ) {
        $this->navigation_options = $options;
    }

    public function get_navigation_options() {
        return $this->navigation_options;
    }

    public abstract function decode( $value );

    public abstract function has_attribute( $key );

    public abstract function get_attribute( $key );
}