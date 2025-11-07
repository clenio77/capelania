<?php
/**
 * Custom Taxonomies
 * Registra as taxonomias customizadas
 */

if (!defined('ABSPATH')) {
    exit;
}

// Registrar Taxonomia: Tipo de Evento
function capelania_register_tipo_evento_taxonomy() {
    $labels = array(
        'name'                       => _x('Tipos de Evento', 'Taxonomy General Name', 'capelania'),
        'singular_name'              => _x('Tipo de Evento', 'Taxonomy Singular Name', 'capelania'),
        'menu_name'                  => __('Tipos de Evento', 'capelania'),
        'all_items'                  => __('Todos os Tipos', 'capelania'),
        'parent_item'                => __('Tipo Pai', 'capelania'),
        'parent_item_colon'          => __('Tipo Pai:', 'capelania'),
        'new_item_name'              => __('Novo Tipo de Evento', 'capelania'),
        'add_new_item'               => __('Adicionar Novo Tipo', 'capelania'),
        'edit_item'                  => __('Editar Tipo', 'capelania'),
        'update_item'                => __('Atualizar Tipo', 'capelania'),
        'view_item'                  => __('Ver Tipo', 'capelania'),
        'separate_items_with_commas' => __('Separar tipos com vírgulas', 'capelania'),
        'add_or_remove_items'        => __('Adicionar ou Remover Tipos', 'capelania'),
        'choose_from_most_used'      => __('Escolher dos mais usados', 'capelania'),
        'popular_items'              => __('Tipos Populares', 'capelania'),
        'search_items'               => __('Buscar Tipos', 'capelania'),
        'not_found'                  => __('Não encontrado', 'capelania'),
        'no_terms'                   => __('Sem tipos', 'capelania'),
        'items_list'                 => __('Lista de tipos', 'capelania'),
        'items_list_navigation'      => __('Navegação da lista de tipos', 'capelania'),
    );
    
    $args = array(
        'labels'                     => $labels,
        'hierarchical'               => true,
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => true,
        'show_in_rest'               => true,
        'rewrite'                    => array('slug' => 'tipo-evento'),
    );
    
    register_taxonomy('tipo_evento', array('evento'), $args);
}
add_action('init', 'capelania_register_tipo_evento_taxonomy', 0);

// Registrar Taxonomia: Categoria de Comunidade
function capelania_register_categoria_comunidade_taxonomy() {
    $labels = array(
        'name'                       => _x('Categorias de Comunidade', 'Taxonomy General Name', 'capelania'),
        'singular_name'              => _x('Categoria de Comunidade', 'Taxonomy Singular Name', 'capelania'),
        'menu_name'                  => __('Categorias', 'capelania'),
        'all_items'                  => __('Todas as Categorias', 'capelania'),
        'parent_item'                => __('Categoria Pai', 'capelania'),
        'parent_item_colon'          => __('Categoria Pai:', 'capelania'),
        'new_item_name'              => __('Nova Categoria', 'capelania'),
        'add_new_item'               => __('Adicionar Nova Categoria', 'capelania'),
        'edit_item'                  => __('Editar Categoria', 'capelania'),
        'update_item'                => __('Atualizar Categoria', 'capelania'),
        'view_item'                  => __('Ver Categoria', 'capelania'),
        'separate_items_with_commas' => __('Separar categorias com vírgulas', 'capelania'),
        'add_or_remove_items'        => __('Adicionar ou Remover Categorias', 'capelania'),
        'choose_from_most_used'      => __('Escolher das mais usadas', 'capelania'),
        'popular_items'              => __('Categorias Populares', 'capelania'),
        'search_items'               => __('Buscar Categorias', 'capelania'),
        'not_found'                  => __('Não encontrado', 'capelania'),
        'no_terms'                   => __('Sem categorias', 'capelania'),
        'items_list'                 => __('Lista de categorias', 'capelania'),
        'items_list_navigation'      => __('Navegação da lista de categorias', 'capelania'),
    );
    
    $args = array(
        'labels'                     => $labels,
        'hierarchical'               => true,
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => false,
        'show_in_rest'               => true,
        'rewrite'                    => array('slug' => 'categoria-comunidade'),
    );
    
    register_taxonomy('categoria_comunidade', array('comunidade'), $args);
}
add_action('init', 'capelania_register_categoria_comunidade_taxonomy', 0);

