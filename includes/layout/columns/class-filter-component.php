<?php

namespace WooCommerce_Product_Filter_Plugin\Layout\Columns;

use WooCommerce_Product_Filter_Plugin\Filter\Component;

class Filter_Component extends Component\Base_Component implements Component\Rendering_Template_Interface {
    public function template_render() {
        $this->get_template_loader()->render_template( 'layout/columns.php', [
            'entity_id' => $this->get_entity_id(),
            'columns' => $this->get_columns()
        ] );
    }

    public function get_columns() {
        $option_columns = $this->get_option( 'columns' );

        $columns = [];

        if ( ! is_array( $option_columns ) || ! $option_columns ) {
            return $columns;
        }

        foreach ( $option_columns as $column ) {
            $components = [];

            foreach ( $column['entities'] as $child_entity_id ) {
                $child_component = $this->get_child_filter_component_by_entity_id( $child_entity_id );

                if ( $child_component instanceof Component\Rendering_Template_Interface ) {
                    $order = $child_component->get_entity()->get_entity_post()->menu_order;

                    $components[ $order ] = $child_component;
                }
            }

            ksort( $components );

            $columns[] = [
                'components' => $components,
                'options' => $column['options']
            ];
        }

        return $columns;
    }
}