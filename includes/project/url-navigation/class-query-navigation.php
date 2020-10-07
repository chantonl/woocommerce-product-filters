<?php

namespace WooCommerce_Product_Filter_Plugin\Project\URL_Navigation;

class Query_Navigation extends Abstract_Navigation {
    public function decode( $value ) {
        $value = wc_clean( wp_unslash( urldecode( $value ) ) );

        if ( strpos( $value, ',' ) !== false ) {
            $value = explode( ',', $value );
        }

        return $value;
    }

    public function has_attribute( $key ) {
        return array_key_exists( $key, $_GET ) || array_key_exists( $key, $_POST );
    }

    public function get_attribute( $key ) {
        $value = '';

        if ( array_key_exists( $key, $_GET ) ) {
            $value = $_GET[ $key ];
        } else if ( array_key_exists( $key, $_POST ) ) {
            $value = $_POST[ $key ];
        }

        return $this->decode( $value );
    }
}