# Design System - Portal Capelania Jesus Bom Pastor

## Filosofia de Design

**Conservador mas Moderno** - Respeitando a tradição católica com design contemporâneo e profissional.

---

## 🎨 Paleta de Cores

### Cores Primárias

```css
/* Dourado Sacra - Elegante e respeitoso */
--dourado-sacra: #C9A961;
--dourado-claro: #E5D4A1;
--dourado-escuro: #A68B3D;

/* Azul Profundo - Sóbrio e profissional */
--azul-profundo: #1A3A5C;
--azul-medio: #2D5A7F;
--azul-claro: #4A90A4;

/* Branco e Off-White */
--branco-puro: #FFFFFF;
--off-white: #F8F7F4;
--cinza-claro: #F5F5F5;
```

### Cores Secundárias

```css
/* Marrom Elegante */
--marrom-claro: #8B7355;
--marrom-medio: #6B5B47;
--marrom-escuro: #4A3E2F;

/* Verde Oliva Discreto */
--verde-oliva: #6B7D47;
--verde-oliva-claro: #8B9D67;

/* Terracota Sutil */
--terracota: #A0522D;
--terracota-claro: #C97A5A;
```

### Tons Neutros

```css
--cinza-1: #F9FAFB;  /* Background muito claro */
--cinza-2: #F3F4F6;  /* Background claro */
--cinza-3: #E5E7EB;  /* Borda clara */
--cinza-4: #D1D5DB;  /* Borda */
--cinza-5: #9CA3AF;  /* Texto secundário */
--cinza-6: #6B7280;  /* Texto médio */
--cinza-7: #4B5563;  /* Texto escuro */
--cinza-8: #374151;  /* Texto muito escuro */
--cinza-9: #1F2937;  /* Texto principal */
```

### Acentos e Estados

```css
/* Sucesso */
--verde-sucesso: #10B981;

/* Aviso */
--amarelo-aviso: #F59E0B;

/* Erro */
--vermelho-erro: #EF4444;

/* Info */
--azul-info: #3B82F6;

/* Links */
--link-normal: var(--azul-profundo);
--link-hover: var(--dourado-sacra);
```

---

## 📝 Tipografia

### Fontes

```css
/* Títulos - Serifada Elegante */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
--fonte-titulo: 'Cormorant Garamond', serif;

/* Corpo - Moderna e Legível */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
--fonte-texto: 'Inter', sans-serif;

/* Alternativa Serifada para Corpo */
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap');
--fonte-texto-serif: 'Crimson Text', serif;
```

### Hierarquia Tipográfica

```css
/* Desktop */
--h1-size: 3.5rem;      /* 56px - Hero */
--h1-line: 1.1;
--h1-weight: 700;

--h2-size: 2.5rem;      /* 40px - Seções */
--h2-line: 1.2;
--h2-weight: 600;

--h3-size: 2rem;        /* 32px - Subsseções */
--h3-line: 1.3;
--h3-weight: 600;

--h4-size: 1.5rem;      /* 24px - Cards */
--h4-line: 1.4;
--h4-weight: 600;

--h5-size: 1.25rem;     /* 20px */
--h5-line: 1.5;
--h5-weight: 600;

--h6-size: 1.125rem;    /* 18px */
--h6-line: 1.5;
--h6-weight: 600;

--body-size: 1.125rem;   /* 18px */
--body-line: 1.7;
--body-weight: 400;

--small-size: 0.875rem;  /* 14px */
--small-line: 1.6;
--small-weight: 400;

/* Mobile */
@media (max-width: 768px) {
  --h1-size: 2.5rem;     /* 40px */
  --h2-size: 2rem;      /* 32px */
  --h3-size: 1.75rem;   /* 28px */
  --h4-size: 1.5rem;    /* 24px */
  --body-size: 1rem;    /* 16px */
}
```

### Estilos de Texto

```css
.text-hero {
  font-family: var(--fonte-titulo);
  font-size: var(--h1-size);
  line-height: var(--h1-line);
  font-weight: var(--h1-weight);
  color: var(--azul-profundo);
  letter-spacing: -0.02em;
}

.text-section {
  font-family: var(--fonte-titulo);
  font-size: var(--h2-size);
  line-height: var(--h2-line);
  font-weight: var(--h2-weight);
  color: var(--azul-profundo);
}

.text-body {
  font-family: var(--fonte-texto);
  font-size: var(--body-size);
  line-height: var(--body-line);
  font-weight: var(--body-weight);
  color: var(--cinza-9);
}

.text-lead {
  font-family: var(--fonte-texto);
  font-size: 1.25rem;
  line-height: 1.8;
  font-weight: 400;
  color: var(--cinza-7);
}

.text-caption {
  font-family: var(--fonte-texto);
  font-size: var(--small-size);
  line-height: var(--small-line);
  font-weight: 400;
  color: var(--cinza-6);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

## 📐 Espaçamento

### Sistema de Espaçamento (8px base)

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.5rem;     /* 24px */
--space-6: 2rem;       /* 32px */
--space-7: 2.5rem;     /* 40px */
--space-8: 3rem;       /* 48px */
--space-9: 4rem;       /* 64px */
--space-10: 5rem;      /* 80px */
--space-12: 6rem;      /* 96px */
--space-16: 8rem;      /* 128px */
--space-20: 10rem;     /* 160px */
```

### Container e Layout

```css
--container-max: 1200px;
--container-padding: var(--space-4);
--section-padding: var(--space-16);
--section-padding-mobile: var(--space-8);
```

---

## 🎭 Componentes de Design

### Botões

```css
/* Botão Primário */
.btn-primary {
  background: var(--dourado-sacra);
  color: var(--branco-puro);
  padding: var(--space-4) var(--space-6);
  border-radius: 4px;
  font-family: var(--fonte-texto);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background: var(--dourado-escuro);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(201, 169, 97, 0.3);
}

/* Botão Secundário */
.btn-secondary {
  background: transparent;
  color: var(--azul-profundo);
  padding: var(--space-4) var(--space-6);
  border-radius: 4px;
  border: 2px solid var(--azul-profundo);
  font-family: var(--fonte-texto);
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: var(--azul-profundo);
  color: var(--branco-puro);
}

/* Botão Texto */
.btn-text {
  color: var(--azul-profundo);
  font-family: var(--fonte-texto);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
}

.btn-text:hover {
  color: var(--dourado-sacra);
  border-bottom-color: var(--dourado-sacra);
}
```

### Cards

```css
.card {
  background: var(--branco-puro);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.card-image {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.card-content {
  padding: var(--space-6);
}

.card-title {
  font-family: var(--fonte-titulo);
  font-size: var(--h4-size);
  font-weight: 600;
  color: var(--azul-profundo);
  margin-bottom: var(--space-3);
}

.card-excerpt {
  font-family: var(--fonte-texto);
  font-size: var(--body-size);
  line-height: var(--body-line);
  color: var(--cinza-7);
  margin-bottom: var(--space-4);
}
```

### Carrossel

```css
.carousel-container {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.carousel-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(26, 58, 92, 0.9), transparent);
  padding: var(--space-12);
  color: var(--branco-puro);
}

.carousel-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-controls:hover {
  background: var(--branco-puro);
  transform: translateY(-50%) scale(1.1);
}

.carousel-controls.prev {
  left: var(--space-6);
}

.carousel-controls.next {
  right: var(--space-6);
}

.carousel-indicators {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--space-2);
}

.carousel-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-indicator.active {
  background: var(--branco-puro);
  width: 32px;
  border-radius: 6px;
}
```

### Inputs e Formulários

```css
.input {
  width: 100%;
  padding: var(--space-4);
  border: 2px solid var(--cinza-3);
  border-radius: 4px;
  font-family: var(--fonte-texto);
  font-size: var(--body-size);
  transition: all 0.3s ease;
  background: var(--branco-puro);
}

.input:focus {
  outline: none;
  border-color: var(--dourado-sacra);
  box-shadow: 0 0 0 3px rgba(201, 169, 97, 0.1);
}

.input::placeholder {
  color: var(--cinza-5);
}

.textarea {
  min-height: 120px;
  resize: vertical;
}
```

---

## 🎬 Animações

### Transições Padrão

```css
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
```

### Efeitos de Hover

```css
.hover-lift:hover {
  transform: translateY(-4px);
  transition: transform var(--transition-normal);
}

.hover-glow:hover {
  box-shadow: 0 8px 24px rgba(201, 169, 97, 0.2);
  transition: box-shadow var(--transition-normal);
}
```

### Animações de Entrada

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}
```

---

## 📱 Responsividade

### Breakpoints

```css
--breakpoint-sm: 640px;   /* Mobile grande */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop pequeno */
--breakpoint-xl: 1280px;  /* Desktop */
--breakpoint-2xl: 1536px; /* Desktop grande */
```

### Grid System

```css
.grid {
  display: grid;
  gap: var(--space-6);
}

.grid-cols-1 {
  grid-template-columns: repeat(1, 1fr);
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 1024px) {
  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: repeat(1, 1fr);
  }
}
```

---

## 🎯 Guia de Uso

### Quando Usar Cada Cor

- **Dourado Sacra**: Destaques, CTAs, elementos importantes
- **Azul Profundo**: Títulos, textos principais, navegação
- **Branco/Off-White**: Backgrounds, espaços limpos
- **Marrom/Escuro**: Textos secundários, elementos sutis

### Quando Usar Cada Fonte

- **Cormorant Garamond (Títulos)**: Títulos de seções, hero, destaques
- **Inter (Corpo)**: Textos principais, botões, navegação
- **Crimson Text (Alternativa)**: Textos longos, artigos, conteúdo editorial

### Princípios de Layout

1. **Espaçamento Generoso** - Respiro visual importante
2. **Hierarquia Clara** - Tamanhos e pesos distintos
3. **Contraste Adequado** - Legibilidade sempre primeiro
4. **Consistência** - Mesmos padrões em todo o site
5. **Elegância Sutil** - Animações discretas e refinadas

---

**Versão:** 1.0  
**Status:** Design System Completo ✅

