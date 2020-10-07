<?php

namespace WooCommerce_Product_Filter_Plugin\Admin\Editor\Projection;

use WooCommerce_Product_Filter_Plugin\Structure;

abstract class Abstract_Projection extends Structure\Component {
    protected $projection_params = [];

    protected $template_root_path = null;

    public function __construct( array $params = [] ) {
        parent::__construct();

        $this->template_root_path = dirname( dirname( __DIR__ ) ) . '/views';

        $this->projection_params = $params;
    }

    protected function render( $template_path, array $context = [] ) {
        $context = array_merge( $this->projection_params, $context );

        $this->get_template_loader()->render_template( $template_path, $context, $this->template_root_path );
    }

    public abstract function render_projection();
}