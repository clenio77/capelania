<?php
/**
 * Custom Post Types
 * Registra os Custom Post Types necessários para o portal
 */

if (!defined('ABSPATH')) {
    exit;
}

// Registrar Custom Post Type: Comunidade
function capelania_register_comunidade_post_type() {
    $labels = array(
        'name'                  => _x('Comunidades', 'Post Type General Name', 'capelania'),
        'singular_name'         => _x('Comunidade', 'Post Type Singular Name', 'capelania'),
        'menu_name'             => __('Comunidades', 'capelania'),
        'name_admin_bar'        => __('Comunidade', 'capelania'),
        'archives'              => __('Arquivo de Comunidades', 'capelania'),
        'attributes'            => __('Atributos da Comunidade', 'capelania'),
        'parent_item_colon'     => __('Comunidade Pai:', 'capelania'),
        'all_items'             => __('Todas as Comunidades', 'capelania'),
        'add_new_item'          => __('Adicionar Nova Comunidade', 'capelania'),
        'add_new'               => __('Adicionar Nova', 'capelania'),
        'new_item'              => __('Nova Comunidade', 'capelania'),
        'edit_item'             => __('Editar Comunidade', 'capelania'),
        'update_item'           => __('Atualizar Comunidade', 'capelania'),
        'view_item'             => __('Ver Comunidade', 'capelania'),
        'view_items'            => __('Ver Comunidades', 'capelania'),
        'search_items'          => __('Buscar Comunidade', 'capelania'),
        'not_found'             => __('Não encontrado', 'capelania'),
        'not_found_in_trash'    => __('Não encontrado na lixeira', 'capelania'),
        'featured_image'        => __('Imagem da Comunidade', 'capelania'),
        'set_featured_image'    => __('Definir imagem da comunidade', 'capelania'),
        'remove_featured_image' => __('Remover imagem da comunidade', 'capelania'),
        'use_featured_image'    => __('Usar como imagem da comunidade', 'capelania'),
        'insert_into_item'      => __('Inserir na comunidade', 'capelania'),
        'uploaded_to_this_item' => __('Enviado para esta comunidade', 'capelania'),
        'items_list'            => __('Lista de comunidades', 'capelania'),
        'items_list_navigation' => __('Navegação da lista de comunidades', 'capelania'),
        'filter_items_list'     => __('Filtrar lista de comunidades', 'capelania'),
    );
    
    $args = array(
        'label'                 => __('Comunidade', 'capelania'),
        'description'           => __('Comunidades da Capelania Jesus Bom Pastor', 'capelania'),
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-groups',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
        'rewrite'               => array('slug' => 'comunidade'),
    );
    
    register_post_type('comunidade', $args);
}
add_action('init', 'capelania_register_comunidade_post_type', 0);

// Registrar Custom Post Type: Evento
function capelania_register_evento_post_type() {
    $labels = array(
        'name'                  => _x('Eventos', 'Post Type General Name', 'capelania'),
        'singular_name'         => _x('Evento', 'Post Type Singular Name', 'capelania'),
        'menu_name'             => __('Eventos', 'capelania'),
        'name_admin_bar'        => __('Evento', 'capelania'),
        'archives'              => __('Arquivo de Eventos', 'capelania'),
        'attributes'            => __('Atributos do Evento', 'capelania'),
        'parent_item_colon'     => __('Evento Pai:', 'capelania'),
        'all_items'             => __('Todos os Eventos', 'capelania'),
        'add_new_item'          => __('Adicionar Novo Evento', 'capelania'),
        'add_new'               => __('Adicionar Novo', 'capelania'),
        'new_item'              => __('Novo Evento', 'capelania'),
        'edit_item'             => __('Editar Evento', 'capelania'),
        'update_item'           => __('Atualizar Evento', 'capelania'),
        'view_item'             => __('Ver Evento', 'capelania'),
        'view_items'            => __('Ver Eventos', 'capelania'),
        'search_items'          => __('Buscar Evento', 'capelania'),
        'not_found'             => __('Não encontrado', 'capelania'),
        'not_found_in_trash'    => __('Não encontrado na lixeira', 'capelania'),
        'featured_image'        => __('Imagem do Evento', 'capelania'),
        'set_featured_image'    => __('Definir imagem do evento', 'capelania'),
        'remove_featured_image' => __('Remover imagem do evento', 'capelania'),
        'use_featured_image'    => __('Usar como imagem do evento', 'capelania'),
        'insert_into_item'      => __('Inserir no evento', 'capelania'),
        'uploaded_to_this_item' => __('Enviado para este evento', 'capelania'),
        'items_list'            => __('Lista de eventos', 'capelania'),
        'items_list_navigation' => __('Navegação da lista de eventos', 'capelania'),
        'filter_items_list'     => __('Filtrar lista de eventos', 'capelania'),
    );
    
    $args = array(
        'label'                 => __('Evento', 'capelania'),
        'description'           => __('Eventos e celebrações da Capelania', 'capelania'),
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 6,
        'menu_icon'             => 'dashicons-calendar-alt',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
        'rewrite'               => array('slug' => 'evento'),
    );
    
    register_post_type('evento', $args);
}
add_action('init', 'capelania_register_evento_post_type', 0);

// Registrar Custom Post Type: Pastoral
function capelania_register_pastoral_post_type() {
    $labels = array(
        'name'                  => _x('Pastorais', 'Post Type General Name', 'capelania'),
        'singular_name'         => _x('Pastoral', 'Post Type Singular Name', 'capelania'),
        'menu_name'             => __('Pastorais', 'capelania'),
        'name_admin_bar'        => __('Pastoral', 'capelania'),
        'archives'              => __('Arquivo de Pastorais', 'capelania'),
        'attributes'            => __('Atributos da Pastoral', 'capelania'),
        'parent_item_colon'     => __('Pastoral Pai:', 'capelania'),
        'all_items'             => __('Todas as Pastorais', 'capelania'),
        'add_new_item'          => __('Adicionar Nova Pastoral', 'capelania'),
        'add_new'               => __('Adicionar Nova', 'capelania'),
        'new_item'              => __('Nova Pastoral', 'capelania'),
        'edit_item'             => __('Editar Pastoral', 'capelania'),
        'update_item'           => __('Atualizar Pastoral', 'capelania'),
        'view_item'             => __('Ver Pastoral', 'capelania'),
        'view_items'            => __('Ver Pastorais', 'capelania'),
        'search_items'          => __('Buscar Pastoral', 'capelania'),
        'not_found'             => __('Não encontrado', 'capelania'),
        'not_found_in_trash'    => __('Não encontrado na lixeira', 'capelania'),
        'featured_image'        => __('Imagem da Pastoral', 'capelania'),
        'set_featured_image'    => __('Definir imagem da pastoral', 'capelania'),
        'remove_featured_image' => __('Remover imagem da pastoral', 'capelania'),
        'use_featured_image'    => __('Usar como imagem da pastoral', 'capelania'),
        'insert_into_item'      => __('Inserir na pastoral', 'capelania'),
        'uploaded_to_this_item' => __('Enviado para esta pastoral', 'capelania'),
        'items_list'            => __('Lista de pastorais', 'capelania'),
        'items_list_navigation' => __('Navegação da lista de pastorais', 'capelania'),
        'filter_items_list'     => __('Filtrar lista de pastorais', 'capelania'),
    );
    
    $args = array(
        'label'                 => __('Pastoral', 'capelania'),
        'description'           => __('Pastorais da Capelania Jesus Bom Pastor', 'capelania'),
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 7,
        'menu_icon'             => 'dashicons-heart',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
        'rewrite'               => array('slug' => 'pastoral'),
    );
    
    register_post_type('pastoral', $args);
}
add_action('init', 'capelania_register_pastoral_post_type', 0);

