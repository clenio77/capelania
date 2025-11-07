<?php
/**
 * Enqueue Scripts and Styles
 * Carrega CSS e JavaScript do tema
 */

if (!defined('ABSPATH')) {
    exit;
}

function capelania_enqueue_scripts() {
    // CSS
    wp_enqueue_style(
        'capelania-style',
        get_stylesheet_uri(),
        array(),
        CAPELANIA_VERSION
    );
    
    wp_enqueue_style(
        'capelania-custom',
        CAPELANIA_THEME_URI . '/assets/css/custom.css',
        array('capelania-style'),
        CAPELANIA_VERSION
    );
    
    // Google Fonts
    wp_enqueue_style(
        'capelania-fonts',
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Inter:wght@400;500;600&display=swap',
        array(),
        null
    );
    
    // JavaScript
    wp_enqueue_script(
        'capelania-custom',
        CAPELANIA_THEME_URI . '/assets/js/custom.js',
        array('jquery'),
        CAPELANIA_VERSION,
        true
    );
    
    // Localize script para Ajax
    wp_localize_script('capelania-custom', 'capelaniaAjax', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('capelania_nonce'),
    ));
    
    // Comentários (se necessário)
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'capelania_enqueue_scripts');

