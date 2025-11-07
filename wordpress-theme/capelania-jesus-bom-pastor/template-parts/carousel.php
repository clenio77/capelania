<?php
/**
 * Template Part: Carrossel de Comunidades
 * 
 * Exibe o carrossel com as 4 comunidades na página inicial
 */

if (!defined('ABSPATH')) {
    exit;
}

// Buscar comunidades
$comunidades = get_posts(array(
    'post_type' => 'comunidade',
    'posts_per_page' => 4,
    'orderby' => 'menu_order',
    'order' => 'ASC'
));

if (empty($comunidades)) {
    return;
}
?>

<div class="carousel-container">
    <?php foreach ($comunidades as $index => $comunidade) : 
        $thumbnail = get_the_post_thumbnail_url($comunidade->ID, 'capelania-carousel');
        $nome_padroeiro = get_post_meta($comunidade->ID, 'capelania_nome_padroeiro', true);
        $link = get_permalink($comunidade->ID);
    ?>
        <div class="carousel-slide <?php echo $index === 0 ? 'active' : ''; ?>">
            <?php if ($thumbnail) : ?>
                <img src="<?php echo esc_url($thumbnail); ?>" alt="<?php echo esc_attr($comunidade->post_title); ?>">
            <?php else : ?>
                <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/placeholder-banner.jpg'); ?>" alt="<?php echo esc_attr($comunidade->post_title); ?>">
            <?php endif; ?>
            
            <div class="carousel-caption">
                <h2><?php echo esc_html($comunidade->post_title); ?></h2>
                <?php if ($nome_padroeiro) : ?>
                    <p><?php echo esc_html($nome_padroeiro); ?></p>
                <?php endif; ?>
                <a href="<?php echo esc_url($link); ?>" class="btn btn-primary">Conheça Mais</a>
            </div>
        </div>
    <?php endforeach; ?>
    
    <!-- Controles -->
    <button class="carousel-controls prev" aria-label="Slide anterior">‹</button>
    <button class="carousel-controls next" aria-label="Próximo slide">›</button>
    
    <!-- Indicadores -->
    <div class="carousel-indicators">
        <?php foreach ($comunidades as $index => $comunidade) : ?>
            <button class="carousel-indicator <?php echo $index === 0 ? 'active' : ''; ?>" aria-label="Ir para slide <?php echo $index + 1; ?>"></button>
        <?php endforeach; ?>
    </div>
</div>

