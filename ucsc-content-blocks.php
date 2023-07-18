<?php
/**
 * Plugin Name:       UCSC Content Blocks
 * Plugin URI:        https://github.com/ucsc/ucsc-content-blocks
 * Description:       Content blocks for UCSC WordPress Websites.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.1
 * Author:            ucsc
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ucsc
 * Domain Path:       content-blocks
 *
 * @package           ucsc-blocks
 */

/**
 * Enqueue theme scripts and styles.
 */
function ucsc_content_block_scripts() {

	wp_register_script( 'details-wrapper', plugin_dir_url( __FILE__ ) . 'js/detailswrapper.js', array(), wp_get_theme()->get( 'Version' ), true );
	wp_enqueue_script( 'details-wrapper' );

}
add_action( 'wp_enqueue_scripts', 'ucsc_content_block_scripts' );

/**
 * Register blocks
 */
function ucsc_register_content_blocks() {

	// Register blocks in the format $dir => $render_callback.
	$blocks = array(
		'details'  => '', // Static block. Doesn't need a callback
		'details-wrapper'  => '',
	);

	foreach ( $blocks as $dir => $render_callback ) {
		$args = array();
		if ( ! empty( $render_callback ) ) {
			$args['render_callback'] = $render_callback;
		}
		register_block_type( __DIR__ . '/blocks/build/' . $dir, $args );
	}
}
add_action( 'init', 'ucsc_register_content_blocks' );

/**
 * Dynamic blocks callbacks
 */
