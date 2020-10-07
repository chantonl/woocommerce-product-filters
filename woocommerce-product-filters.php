<?php
/*
    Plugin Name: Product Filters for WooCommerce
    Plugin URI: https://woocommerce.com/products/product-filters/
    Description: This is a tool to create product filters that make the process of finding products in your store simple and fast
    Version: 1.1.16
    Author: Nexter
    Author URI: http://woocommerce.com/
    Developer: Alex Vasilyev
    Text Domain: wcpf
    Domain Path: /languages

    Woo: 3546049:762bae993b965c395f0bf27fe08dd4cd
    WC requires at least: 3.3.5
    WC tested up to: 3.7.0

    License: GNU General Public License v3.0
    License URI: http://www.gnu.org/licenses/gpl-3.0.html
*/

if ( ! defined( 'WPINC' ) ) {
    die();
}

define( 'WC_PRODUCT_FILTER_VERSION', '1.1.16' );

define( 'WC_PRODUCT_FILTER_INDEX', 'wcpf' );

define( 'WC_PRODUCT_FILTER_PLUGIN_FILE', __FILE__ );

require_once __DIR__ . '/includes/functions.php';

require_once __DIR__ . '/includes/class-plugin.php';

$GLOBALS['wcpf_plugin'] = new WooCommerce_Product_Filter_Plugin\Plugin();