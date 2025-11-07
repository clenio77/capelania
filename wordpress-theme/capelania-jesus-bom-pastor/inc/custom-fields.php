<?php
/**
 * Custom Fields Configuration
 * 
 * NOTA: Este arquivo assume que o plugin Advanced Custom Fields (ACF) está instalado.
 * Se não estiver usando ACF, você precisará criar os campos via código ou usar outro plugin.
 * 
 * Para usar este arquivo com ACF:
 * 1. Instale o plugin ACF
 * 2. Exporte os campos via ACF > Tools > Export
 * 3. Importe usando o código abaixo ou configure manualmente
 * 
 * Alternativamente, você pode usar a função register_meta() do WordPress.
 */

if (!defined('ABSPATH')) {
    exit;
}

// Exemplo de campos usando register_meta() (não requer ACF)
// Isso cria campos básicos que podem ser expandidos

// Campos para Comunidade
function capelania_register_comunidade_meta() {
    $meta_fields = array(
        'horarios_missa'      => 'Horários de Missa',
        'endereco'            => 'Endereço',
        'telefone'            => 'Telefone',
        'email'               => 'Email',
        'coordenadas_gps'     => 'Coordenadas GPS',
        'nome_padroeiro'      => 'Nome do Padroeiro/Padroeira',
    );
    
    foreach ($meta_fields as $key => $label) {
        register_meta('post', 'capelania_' . $key, array(
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'string',
            'auth_callback' => function() {
                return current_user_can('edit_posts');
            }
        ));
    }
}
add_action('init', 'capelania_register_comunidade_meta');

// Campos para Evento
function capelania_register_evento_meta() {
    $meta_fields = array(
        'data_inicio'          => 'Data de Início',
        'data_fim'             => 'Data de Término',
        'horario'              => 'Horário',
        'local'                => 'Local',
        'comunidade_relacionada' => 'Comunidade Relacionada',
    );
    
    foreach ($meta_fields as $key => $label) {
        register_meta('post', 'capelania_' . $key, array(
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'string',
            'auth_callback' => function() {
                return current_user_can('edit_posts');
            }
        ));
    }
}
add_action('init', 'capelania_register_evento_meta');

// Campos para Pastoral
function capelania_register_pastoral_meta() {
    $meta_fields = array(
        'coordenador'          => 'Coordenador',
        'telefone_coordenador' => 'Telefone do Coordenador',
        'email_coordenador'    => 'Email do Coordenador',
        'horario_reuniao'      => 'Horário de Reunião',
        'objetivos'            => 'Objetivos',
    );
    
    foreach ($meta_fields as $key => $label) {
        register_meta('post', 'capelania_' . $key, array(
            'show_in_rest' => true,
            'single'       => true,
            'type'         => 'string',
            'auth_callback' => function() {
                return current_user_can('edit_posts');
            }
        ));
    }
}
add_action('init', 'capelania_register_pastoral_meta');

// Função helper para obter meta fields
function capelania_get_meta($post_id, $key, $post_type = 'post') {
    return get_post_meta($post_id, 'capelania_' . $key, true);
}

// Função helper para atualizar meta fields
function capelania_update_meta($post_id, $key, $value) {
    return update_post_meta($post_id, 'capelania_' . $key, $value);
}

/**
 * NOTA IMPORTANTE:
 * 
 * Para uma implementação completa e profissional, recomenda-se usar:
 * 
 * 1. Advanced Custom Fields (ACF) - Plugin pago/gratuito mais popular
 *    - Interface visual para criar campos
 *    - Suporte a campos complexos (galeria, repetidor, etc.)
 *    - Melhor experiência para usuários não técnicos
 * 
 * 2. Meta Box - Alternativa gratuita ao ACF
 *    - Similar ao ACF mas totalmente gratuito
 *    - Boa documentação e comunidade
 * 
 * 3. Carbon Fields - Para desenvolvedores
 *    - Mais técnico, mas muito flexível
 *    - Requer conhecimento de PHP
 * 
 * O código acima usa register_meta() que é nativo do WordPress,
 * mas oferece funcionalidade limitada comparado aos plugins acima.
 */

