<?php

namespace WooCommerce_Product_Filter_Plugin\Admin;

use WooCommerce_Product_Filter_Plugin\Structure;

class Assets extends Structure\Component {
    public function get_project_post_type() {
        return $this->get_component_register()->get( 'Project/Post_Type')->get_post_type();
    }

    public function attach_hooks( Structure\Hook_Manager $hook_manager ) {
        $hook_manager->add_action( 'admin_enqueue_scripts', 'register_assets' );

        $hook_manager->add_action( 'admin_enqueue_scripts', 'assets_fix', 15 );
    }

    public function assets_fix() {
        $screen = get_current_screen();

        if ( $screen->post_type != $this->get_project_post_type() ) {
            return;
        }

        wp_deregister_script( 'select2' );
    }


    public function register_assets() {
        $screen = get_current_screen();

        if ( $screen->id == 'woocommerce_page_wc-settings' && isset( $_GET['section'] ) && $_GET['section'] == 'wcpf' ) {
            wp_enqueue_code_editor( [ 'type' => 'text/html' ] );
        }

        if ( $screen->post_type != $this->get_project_post_type() ) {
            return;
        }

        wp_enqueue_media();

        wp_enqueue_script( 'wcpf-plugin-polyfills-script', $this->get_plugin()->get_assets_url() . 'scripts/polyfills.js' );

        wp_enqueue_script( 'wcpf-admin-vendor-script', $this->get_plugin()->get_assets_url() . 'scripts/admin-vendor.js', [ 'jquery' ] );

        wp_enqueue_script(
            'wcpf-admin-script',
            $this->get_plugin()->get_assets_url() . 'scripts/admin.js',
            [
                'jquery',
                'wp-util',
                'wp-color-picker',
                'jquery-ui-sortable',
                'wcpf-plugin-polyfills-script',
                'wcpf-admin-vendor-script'
            ]
        );

        wp_enqueue_style( 'wcpf-admin-vendor', $this->get_plugin()->get_assets_url() . 'styles/admin-vendor.css' );

        wp_enqueue_style( 'wcpf-admin-style', $this->get_plugin()->get_assets_url() . 'styles/admin.css', [ 'wp-color-picker', 'wcpf-admin-vendor' ] );
    }
}