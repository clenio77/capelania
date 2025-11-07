<?php
/**
 * Theme Setup
 * Configurações básicas do tema
 */

if (!defined('ABSPATH')) {
    exit;
}

function capelania_theme_setup() {
    // Suporte a tradução
    load_theme_textdomain('capelania', CAPELANIA_THEME_DIR . '/languages');
    
    // Suporte a título automático
    add_theme_support('title-tag');
    
    // Suporte a logo customizado
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    
    // Suporte a imagens destacadas
    add_theme_support('post-thumbnails');
    
    // Tamanhos de imagem customizados
    add_image_size('capelania-carousel', 1920, 800, true);
    add_image_size('capelania-card', 400, 300, true);
    add_image_size('capelania-thumbnail', 150, 150, true);
    
    // Suporte a HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
    
    // Suporte a feed RSS
    add_theme_support('automatic-feed-links');
    
    // Suporte a alinhamento de blocos
    add_theme_support('align-wide');
    
    // Suporte a cores customizadas
    add_theme_support('editor-color-palette', array(
        array(
            'name'  => __('Azul Primário', 'capelania'),
            'slug'  => 'primary-blue',
            'color' => '#1e3a8a',
        ),
        array(
            'name'  => __('Dourado', 'capelania'),
            'slug'  => 'gold',
            'color' => '#d97706',
        ),
        array(
            'name'  => __('Verde', 'capelania'),
            'slug'  => 'green',
            'color' => '#059669',
        ),
    ));
    
    // Registrar menus
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'capelania'),
        'footer'  => __('Menu Rodapé', 'capelania'),
    ));
}
add_action('after_setup_theme', 'capelania_theme_setup');

// Registrar áreas de widgets
function capelania_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar Principal', 'capelania'),
        'id'            => 'sidebar-1',
        'description'   => __('Widgets que aparecem na sidebar', 'capelania'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
    
    register_sidebar(array(
        'name'          => __('Rodapé 1', 'capelania'),
        'id'            => 'footer-1',
        'description'   => __('Primeira coluna do rodapé', 'capelania'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => __('Rodapé 2', 'capelania'),
        'id'            => 'footer-2',
        'description'   => __('Segunda coluna do rodapé', 'capelania'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => __('Rodapé 3', 'capelania'),
        'id'            => 'footer-3',
        'description'   => __('Terceira coluna do rodapé', 'capelania'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => __('Rodapé 4', 'capelania'),
        'id'            => 'footer-4',
        'description'   => __('Quarta coluna do rodapé', 'capelania'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'capelania_widgets_init');

