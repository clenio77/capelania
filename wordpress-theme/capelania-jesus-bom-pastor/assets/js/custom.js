/**
 * Custom JavaScript para o tema Capelania Jesus Bom Pastor
 */

(function($) {
    'use strict';
    
    $(document).ready(function() {
        
        // Carrossel de Comunidades
        initCarousel();
        
        // Menu Mobile
        initMobileMenu();
        
        // Smooth Scroll
        initSmoothScroll();
        
        // Animações ao Scroll
        initScrollAnimations();
    });
    
    /**
     * Inicializa o carrossel
     */
    function initCarousel() {
        var $carousel = $('.carousel-container');
        if ($carousel.length === 0) return;
        
        var currentSlide = 0;
        var slides = $carousel.find('.carousel-slide');
        var totalSlides = slides.length;
        var autoplayInterval;
        
        // Função para mostrar slide
        function showSlide(index) {
            slides.removeClass('active');
            slides.eq(index).addClass('active');
            $('.carousel-indicator').removeClass('active');
            $('.carousel-indicator').eq(index).addClass('active');
        }
        
        // Próximo slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }
        
        // Slide anterior
        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }
        
        // Controles
        $('.carousel-controls.next').on('click', function() {
            nextSlide();
            resetAutoplay();
        });
        
        $('.carousel-controls.prev').on('click', function() {
            prevSlide();
            resetAutoplay();
        });
        
        // Indicadores
        $('.carousel-indicator').on('click', function() {
            var index = $(this).index();
            currentSlide = index;
            showSlide(currentSlide);
            resetAutoplay();
        });
        
        // Autoplay
        function startAutoplay() {
            autoplayInterval = setInterval(nextSlide, 5000);
        }
        
        function resetAutoplay() {
            clearInterval(autoplayInterval);
            startAutoplay();
        }
        
        // Pausar ao passar mouse
        $carousel.on('mouseenter', function() {
            clearInterval(autoplayInterval);
        }).on('mouseleave', function() {
            startAutoplay();
        });
        
        // Iniciar
        showSlide(0);
        startAutoplay();
    }
    
    /**
     * Menu Mobile
     */
    function initMobileMenu() {
        var $menuToggle = $('.menu-toggle');
        var $menu = $('.main-navigation');
        
        if ($menuToggle.length === 0) return;
        
        $menuToggle.on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $menu.toggleClass('active');
            $('body').toggleClass('menu-open');
        });
        
        // Fechar ao clicar em link
        $menu.find('a').on('click', function() {
            if ($(window).width() < 768) {
                $menuToggle.removeClass('active');
                $menu.removeClass('active');
                $('body').removeClass('menu-open');
            }
        });
    }
    
    /**
     * Smooth Scroll
     */
    function initSmoothScroll() {
        $('a[href^="#"]').on('click', function(e) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 600);
            }
        });
    }
    
    /**
     * Animações ao Scroll
     */
    function initScrollAnimations() {
        var $animatedElements = $('.fade-in, .slide-in');
        
        if ($animatedElements.length === 0) return;
        
        function checkScroll() {
            var windowBottom = $(window).scrollTop() + $(window).height();
            
            $animatedElements.each(function() {
                var $element = $(this);
                var elementTop = $element.offset().top;
                
                if (elementTop < windowBottom - 100) {
                    $element.addClass('animated');
                }
            });
        }
        
        $(window).on('scroll', checkScroll);
        checkScroll(); // Verificar ao carregar
    }
    
    /**
     * Formulário de Contato - Validação
     */
    $('form.contact-form').on('submit', function(e) {
        var isValid = true;
        var $form = $(this);
        
        // Validar campos obrigatórios
        $form.find('[required]').each(function() {
            var $field = $(this);
            if (!$field.val().trim()) {
                isValid = false;
                $field.addClass('error');
            } else {
                $field.removeClass('error');
            }
        });
        
        // Validar email
        var $email = $form.find('input[type="email"]');
        if ($email.length && $email.val()) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test($email.val())) {
                isValid = false;
                $email.addClass('error');
            }
        }
        
        if (!isValid) {
            e.preventDefault();
            alert('Por favor, preencha todos os campos obrigatórios corretamente.');
        }
    });
    
})(jQuery);

