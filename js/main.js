// Enhanced Gallery Data with all product categories
const galleryData = {
  machine: [
    { 
      image: './img/أدوات قطع جلخ 10', 
      title: 'أدوات قطع ماكينة 1',
      description: 'أدوات قطع عالية الدقة للآلات الصناعية'
    },
    { 
      image: './img/أدوات قطع جلخ 11', 
      title: 'أدوات قطع ماكينة 2',
      description: 'أدوات قطع متقدمة للاستخدام المهني'
    },
    { 
      image: './img/أدوات قطع جلخ 12', 
      title: 'أدوات قطع ماكينة 3',
      description: 'مجموعة شاملة من أدوات القطع الآلي'
    }
  ],
  grind: [
    { 
      image: './img/ادوات قطع جلخ1.jpg', 
      title: 'أدوات قطع جلخ 1',
      description: 'أدوات جلخ عالية الجودة للرخام والجرانيت'
    },
    { 
      image: './img/أدوات قطع جلخ 20.jpg', 
      title: 'أدوات قطع جلخ 20',
      description: 'أدوات قطع وجلخ عالية الدقة مقاس 20'
    },
    { 
      image: './img/أدوات قطع جلخ 21.jpg', 
      title: 'أدوات قطع جلخ 21',
      description: 'أدوات قطع وجلخ متقدمة مقاس 21'
    },
    { 
      image: './img/أدوات قطع جلخ 22.jpg', 
      title: 'أدوات قطع جلخ 22',
      description: 'أدوات قطع وجلخ احترافية مقاس 22'
    },
    { 
      image: './img/أدوات قطع جلخ 24.jpg', 
      title: 'أدوات قطع جلخ 24',
      description: 'أدوات قطع وجلخ عالية الجودة مقاس 24'
    },
    { 
      image: './img/أدوات قطع جلخ 25.jpg', 
      title: 'أدوات قطع جلخ 25',
      description: 'أدوات قطع وجلخ متطورة مقاس 25'
    },
    { 
      image: './img/أدوات قطع جلخ 26.jpg', 
      title: 'أدوات قطع جلخ 26',
      description: 'أدوات قطع وجلخ متميزة مقاس 26'
    }
  ],
  porcelain: [
    { 
      image: './img/ادوات بورسلين1.jpg', 
      title: 'أدوات قطع بورسلين 1',
      description: 'أدوات متخصصة لقطع البورسلين بدقة عالية'
    },
    { 
      image: './img/ادوات بورسلين2.jpg', 
      title: 'أدوات قطع بورسلين 2',
      description: 'مجموعة متقدمة لتشكيل البورسلين'
    },
    { 
      image: './img/ادوات بورسلين3.jpg', 
      title: 'أدوات قطع بورسلين 3',
      description: 'أدوات احترافية للبورسلين عالي الجودة'
    }
  ],
  drill: [
    { 
      image: './img/ادوات ثقب رخام وجرانيت وبورسلين.jpg', 
      title: 'أدوات ثقب رخام وجرانيت',
      description: 'أدوات ثقب احترافية للحصول على نتائج مثالية'
    },
    { 
      image: './img/ادوات ثقب2.jpg', 
      title: 'أدوات ثقب متقدمة 2',
      description: 'مثاقب عالية الدقة لجميع أنواع الحجر'
    },
    { 
      image: './img/ادوات ثقب3.jpg', 
      title: 'أدوات ثقب متخصصة 3',
      description: 'حلول ثقب شاملة للمشاريع الكبيرة'
    }
  ],
  misc: [
    { 
      image: './img/ادوات متنوعة اخرى.jpg', 
      title: 'أدوات متنوعة أخرى',
      description: 'مجموعة متنوعة من الأدوات المساعدة والمستلزمات'
    },
    { 
      image: './img/ادوات متنوعة2.jpg', 
      title: 'مستلزمات إضافية',
      description: 'أدوات مساعدة لتحسين جودة العمل'
    },
    { 
      image: './img/ادوات متنوعة3.jpg', 
      title: 'معدات تكميلية',
      description: 'مجموعة شاملة من المعدات التكميلية'
    }
  ]
};

// GSAP Image Slider Class
class GSAPSlider {
  constructor(selector) {
    this.slider = document.querySelector(selector);
    if (!this.slider) return;
    
    this.slides = this.slider.querySelectorAll('.slide');
    this.indicators = this.slider.querySelectorAll('.indicator');
    this.prevBtn = this.slider.querySelector('.prev-btn');
    this.nextBtn = this.slider.querySelector('.next-btn');
    this.progressBar = this.slider.querySelector('.progress-bar');
    
    this.currentSlide = 0;
    this.totalSlides = this.slides.length;
    this.isAnimating = false;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 5000;
    this.progressDuration = this.autoPlayDelay / 1000;
    
    this.init();
  }
  
  init() {
    if (this.slides.length === 0) return;
    
    gsap.registerPlugin(ScrollTrigger);
    this.setupSlides();
    this.bindEvents();
    this.startAutoPlay();
    this.initScrollTrigger();
  }
  
  setupSlides() {
    this.slides.forEach((slide, index) => {
      if (index === 0) {
        slide.classList.add('active');
        gsap.set(slide, { opacity: 1, x: 0, scale: 1 });
      } else {
        slide.classList.remove('active');
        gsap.set(slide, { opacity: 0, x: '100%', scale: 0.9 });
      }
    });
    
    this.updateIndicators();
    this.animateProgressBar();
  }
  
  bindEvents() {
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());
    
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
    });
    
    this.initTouchEvents();
    this.slider.addEventListener('mouseenter', () => this.pauseAutoPlay());
    this.slider.addEventListener('mouseleave', () => this.resumeAutoPlay());
    this.initKeyboardEvents();
    
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pauseAutoPlay();
      } else {
        this.resumeAutoPlay();
      }
    });
  }
  
  initTouchEvents() {
    let startX = 0;
    let startY = 0;
    let isSwiping = false;
    
    this.slider.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isSwiping = false;
      this.pauseAutoPlay();
    });
    
    this.slider.addEventListener('touchmove', (e) => {
      if (!startX || !startY) return;
      
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = startX - currentX;
      const diffY = startY - currentY;
      
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
        isSwiping = true;
        e.preventDefault();
      }
    });
    
    this.slider.addEventListener('touchend', (e) => {
      if (!isSwiping || !startX) return;
      
      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;
      
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
      
      startX = 0;
      startY = 0;
      isSwiping = false;
      this.resumeAutoPlay();
    });
  }
  
  initKeyboardEvents() {
    document.addEventListener('keydown', (e) => {
      if (!this.slider.matches(':hover')) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          this.prevSlide();
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.nextSlide();
          break;
        case ' ':
          e.preventDefault();
          this.toggleAutoPlay();
          break;
        default:
          if (e.key >= '1' && e.key <= '9') {
            const slideIndex = parseInt(e.key) - 1;
            if (slideIndex < this.totalSlides) {
              e.preventDefault();
              this.goToSlide(slideIndex);
            }
          }
      }
    });
  }
  
  initScrollTrigger() {
    ScrollTrigger.create({
      trigger: this.slider,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.fromTo(this.slider, 
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" }
        );
      }
    });
  }
  
  nextSlide() {
    if (this.isAnimating) return;
    const nextIndex = (this.currentSlide + 1) % this.totalSlides;
    this.goToSlide(nextIndex);
  }
  
  prevSlide() {
    if (this.isAnimating) return;
    const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.goToSlide(prevIndex);
  }
  
  goToSlide(index) {
    if (this.isAnimating || index === this.currentSlide) return;
    
    this.isAnimating = true;
    const currentSlideEl = this.slides[this.currentSlide];
    const nextSlideEl = this.slides[index];
    
    const tl = gsap.timeline({
      onComplete: () => {
        this.isAnimating = false;
        this.currentSlide = index;
        this.updateIndicators();
        this.animateProgressBar();
      }
    });
    
    tl.to(currentSlideEl, {
      opacity: 0,
      x: index > this.currentSlide ? '-100%' : '100%',
      scale: 0.9,
      duration: 0.6,
      ease: "power2.inOut"
    })
    .fromTo(nextSlideEl, 
      {
        opacity: 0,
        x: index > this.currentSlide ? '100%' : '-100%',
        scale: 0.9
      },
      {
        opacity: 1,
        x: '0%',
        scale: 1,
        duration: 0.6,
        ease: "power2.inOut"
      },
      "-=0.3"
    );
    
    currentSlideEl.classList.remove('active');
    nextSlideEl.classList.add('active');
    
    const slideContent = nextSlideEl.querySelector('.slide-content');
    if (slideContent) {
      const contentElements = slideContent.children;
      gsap.fromTo(contentElements,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3
        }
      );
    }
  }
  
  updateIndicators() {
    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentSlide);
      indicator.setAttribute('aria-pressed', index === this.currentSlide);
    });
  }
  
  animateProgressBar() {
    if (!this.progressBar) return;
    
    gsap.set(this.progressBar, { width: '0%' });
    gsap.to(this.progressBar, {
      width: '100%',
      duration: this.progressDuration,
      ease: "none"
    });
  }
  
  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDelay);
  }
  
  pauseAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
  
  resumeAutoPlay() {
    if (!this.autoPlayInterval && !document.hidden) {
      this.startAutoPlay();
      this.animateProgressBar();
    }
  }
  
  toggleAutoPlay() {
    if (this.autoPlayInterval) {
      this.pauseAutoPlay();
    } else {
      this.resumeAutoPlay();
    }
  }
  
  destroy() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf(this.slider);
    gsap.killTweensOf(this.slides);
  }
}

// Enhanced Gallery System
class GalleryManager {
  constructor() {
    this.currentFilter = 'all';
    this.galleryGrid = document.querySelector('#gallery-grid');
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.filterTriggers = document.querySelectorAll('.filter-trigger');
    
    this.init();
  }
  
  init() {
    this.populateGallery('all');
    this.bindFilterEvents();
    this.bindTriggerEvents();
  }
  
  bindFilterEvents() {
    this.filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = button.dataset.filter;
        this.applyFilter(filter);
      });
    });
  }
  
  bindTriggerEvents() {
    this.filterTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = trigger.dataset.filter;
        
        // Scroll to gallery section with smooth animation
        this.scrollToGallery(() => {
          // Apply filter after scrolling
          setTimeout(() => {
            this.applyFilter(filter);
          }, 500);
        });
      });
    });
  }
  
  scrollToGallery(callback) {
    const gallerySection = document.querySelector('#gallery');
    if (!gallerySection) return;
    
    // Add visual feedback
    const clickedButton = event.target.closest('.filter-trigger');
    if (clickedButton) {
      clickedButton.classList.add('loading');
      clickedButton.style.pointerEvents = 'none';
      
      setTimeout(() => {
        clickedButton.classList.remove('loading');
        clickedButton.style.pointerEvents = '';
      }, 1500);
    }
    
    // Smooth scroll with custom animation
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: gallerySection,
        offsetY: 100
      },
      ease: "power2.inOut",
      onComplete: callback
    });
  }
  
  applyFilter(filter) {
    // Update active button
    this.filterButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    
    this.currentFilter = filter;
    
    // Animate transition
    this.animateFilterTransition(() => {
      this.populateGallery(filter);
    });
  }
  
  animateFilterTransition(callback) {
    if (!this.galleryGrid) return;
    
    // Animate out current items
    gsap.to(this.galleryGrid.children, {
      opacity: 0,
      y: 30,
      scale: 0.9,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.inOut",
      onComplete: () => {
        callback();
        
        // Animate in new items
        gsap.fromTo(this.galleryGrid.children, {
          opacity: 0,
          y: 30,
          scale: 0.9
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        });
      }
    });
  }
  
  populateGallery(filter) {
    if (!this.galleryGrid) return;
    
    let items = [];
    
    if (filter === 'all') {
      // Combine all categories
      Object.values(galleryData).forEach(categoryItems => {
        items = items.concat(categoryItems);
      });
    } else if (galleryData[filter]) {
      items = galleryData[filter];
    }
    
    // Generate gallery HTML
    this.galleryGrid.innerHTML = items.map((item, index) => `
      <div class="gallery-item" data-category="${filter}" data-index="${index}">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <h5>${item.title}</h5>
          <p class="gallery-description">${item.description}</p>
          <button class="btn btn-sm btn-primary gallery-view-btn" onclick="galleryManager.openLightbox('${item.image}', '${item.title}', '${item.description}')">
            عرض التفاصيل
          </button>
        </div>
      </div>
    `).join('');
    
    // Add loading animation for images
    this.initImageLoading();
  }
  
  initImageLoading() {
    const images = this.galleryGrid.querySelectorAll('img');
    
    images.forEach(img => {
      img.addEventListener('load', () => {
        img.closest('.gallery-item').classList.add('loaded');
      });
      
      img.addEventListener('error', () => {
        img.closest('.gallery-item').classList.add('error');
      });
    });
  }
  
  openLightbox(imageSrc, title, description) {
    // Create lightbox modal
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-modal';
    lightbox.innerHTML = `
      <div class="lightbox-backdrop" onclick="this.parentElement.remove()"></div>
      <div class="lightbox-content">
        <button class="lightbox-close" onclick="this.closest('.lightbox-modal').remove()">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="lightbox-image">
          <img src="${imageSrc}" alt="${title}" loading="lazy">
        </div>
        <div class="lightbox-info">
          <h3>${title}</h3>
          <p>${description}</p>
          <div class="lightbox-actions">
            <button class="btn btn-primary" onclick="this.closest('.lightbox-modal').remove()">إغلاق</button>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(lightbox);
    
    // Animate lightbox appearance
    gsap.fromTo(lightbox, 
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    
    gsap.fromTo(lightbox.querySelector('.lightbox-content'), 
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)", delay: 0.1 }
    );
  }
}

// Enhanced Website Class
class MarmaraWebsite {
  constructor() {
    this.currentLanguage = 'ar';
    this.eventListeners = new Map();
    this.observers = new Map();
    this.gsapSlider = null;
    this.galleryManager = null;
    
    this.translations = {
      ar: {
        'nav-home': 'الرئيسية',
        'nav-about': 'من نحن',
        'nav-products': 'المنتجات',
        'nav-gallery': 'المعارض',
        'nav-slider': 'عرض الشرائح',
        'nav-map': 'فروعنا',
        'nav-contact': 'تواصل معنا',
        'brand-hero-title': 'مرمرة™',
        'brand-hero-subtitle': 'أدوات احترافية • جودة استثنائية • خبرة موثوقة',
        'brand-hero-cta1': 'اكتشف منتجاتنا',
        'brand-hero-cta2': 'تواصل معنا',
        'header-cta': 'ابدأ الآن',
        'about-eyebrow': 'قصة النجاح',
        'about-title': 'رحلة التميز في عالم الحجر الطبيعي',
        'about-desc': 'منذ أكثر من عقد ونحن نرسم ملامح المستقبل في صناعة مستلزمات الرخام والجرانيت',
        'about-desc1': 'في مرمرة، نؤمن بأن كل قطعة رخام تحكي قصة، وكل أداة تصنع تحفة فنية. نحن لا نبيع منتجات فحسب، بل نقدم حلولاً متكاملة تلبي أحلام المهندسين والمصممين.',
        'about-cta1': 'استكشف المجموعات',
        'about-cta2': 'تحدث معنا',
        'products-eyebrow': 'مجموعاتنا المميزة',
        'products-title': 'أدوات احترافية لمشاريع استثنائية',
        'products-desc': 'مجموعة شاملة من أفضل الأدوات والمستلزمات مع أسعار تنافسية وجودة مضمونة',
        'cat-machine': 'أدوات قطع ماكينة',
        'cat-grind': 'أدوات قطع وجلخ',
        'cat-porcelain': 'أدوات قطع بورسلين',
        'cat-drill': 'أدوات ثقب متقدمة',
        'cat-misc': 'أدوات متنوعة أخرى',
        'view-gallery': 'استعرض المجموعة'
      },
      en: {
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-products': 'Products',
        'nav-gallery': 'Gallery',
        'nav-slider': 'Image Slider',
        'nav-map': 'Our Branches',
        'nav-contact': 'Contact Us',
        'brand-hero-title': 'Marmara™',
        'brand-hero-subtitle': 'Professional Tools • Exceptional Quality • Trusted Experience',
        'brand-hero-cta1': 'Discover Our Products',
        'brand-hero-cta2': 'Contact Us',
        'header-cta': 'Get Started',
        'about-eyebrow': 'Success Story',
        'about-title': 'Journey of Excellence in Natural Stone World',
        'about-desc': 'For over a decade, we have been shaping the future of marble and granite supplies industry',
        'about-desc1': 'At Marmara, we believe that every piece of marble tells a story, and every tool creates a masterpiece. We don\'t just sell products, we provide integrated solutions that fulfill the dreams of engineers and designers.',
        'about-cta1': 'Explore Collections',
        'about-cta2': 'Talk to Us',
        'products-eyebrow': 'Our Distinguished Collections',
        'products-title': 'Professional Tools for Exceptional Projects',
        'products-desc': 'Comprehensive range of the finest tools and supplies with competitive prices and guaranteed quality',
        'cat-machine': 'Machine Cutting Tools',
        'cat-grind': 'Cutting & Grinding Tools',
        'cat-porcelain': 'Porcelain Cutting Tools',
        'cat-drill': 'Advanced Drilling Tools',
        'cat-misc': 'Miscellaneous Tools',
        'view-gallery': 'View Collection'
      }
    };
    
    this.init();
  }
  
  async init() {
    try {
      this.showLoadingIndicator();
      
      await Promise.all([
        this.initLanguageSystem(),
        this.initMobileNavigation(),
        this.initScrollProgress(),
        this.initHeaderEffects(),
        this.initGSAPSlider(),
        this.initGallerySystem(),
        this.initRevealAnimations(),
        this.initStatsCounter(),
        this.initFormValidation()
      ]);
      
      this.loadSavedLanguage();
      this.hideLoadingIndicator();
      
      console.log('Marmara Website with enhanced gallery system initialized successfully');
      
    } catch (error) {
      console.error('Error initializing website:', error);
      this.hideLoadingIndicator();
    }
  }
  
  initGSAPSlider() {
    this.gsapSlider = new GSAPSlider('#gsap-slider');
    
    const sliderNavLink = document.querySelector('[href="#slider-section"]');
    if (sliderNavLink) {
      sliderNavLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#slider-section').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  }
  
  initGallerySystem() {
    this.galleryManager = new GalleryManager();
    
    // Make gallery manager globally available
    window.galleryManager = this.galleryManager;
  }
  
  initLanguageSystem() {
    const langButtons = document.querySelectorAll('[data-lang]');
    
    langButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetLang = button.dataset.lang;
        if (targetLang !== this.currentLanguage) {
          this.switchLanguage(targetLang);
        }
      });
    });
    
    this.updateLanguage();
  }
  
  switchLanguage(targetLang) {
    this.currentLanguage = targetLang;
    
    document.documentElement.lang = targetLang;
    document.documentElement.dir = targetLang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-lang]').forEach(btn => {
      const isActive = btn.dataset.lang === targetLang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });
    
    this.updateLanguage();
    localStorage.setItem('preferred-language', targetLang);
    
    document.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: targetLang }
    }));
  }
  
  updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.translations[this.currentLanguage]?.[key];
      if (translation) {
        element.textContent = translation;
      }
    });
  }
  
  loadSavedLanguage() {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && savedLang !== this.currentLanguage) {
      this.switchLanguage(savedLang);
    }
  }
  
  initMobileNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.classList.contains('active');
      
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      navOverlay?.classList.toggle('active');
      
      menuToggle.setAttribute('aria-expanded', !isOpen);
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });
    
    navOverlay?.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('open');
      navOverlay.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
    
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('open');
        navOverlay?.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
  
  initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    if (!progressBar) return;
    
    const updateProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    };
    
    window.addEventListener('scroll', this.throttle(updateProgress, 10));
  }
  
  initHeaderEffects() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      header.classList.toggle('scrolled', currentScrollY > 100);
      
      if (currentScrollY > 200) {
        if (currentScrollY > lastScrollY && !header.classList.contains('hidden')) {
          header.classList.add('hidden');
        } else if (currentScrollY < lastScrollY && header.classList.contains('hidden')) {
          header.classList.remove('hidden');
        }
      } else {
        header.classList.remove('hidden');
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', this.throttle(handleScroll, 100));
  }
  
  initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .card, .stat-item');
    
    if (!revealElements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
      observer.observe(element);
    });
    
    this.observers.set('reveal', observer);
  }
  
  initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (!statNumbers.length) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const finalValue = parseInt(target.dataset.count) || 0;
          
          gsap.fromTo(target, {
            textContent: 0
          }, {
            textContent: finalValue,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate: function() {
              target.textContent = Math.ceil(target.textContent) + (target.textContent > 1 ? '+' : '');
            }
          });
          
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
  }
  
  initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
          } else {
            field.classList.remove('error');
          }
        });
        
        if (isValid) {
          this.showNotification(
            this.currentLanguage === 'ar' ? 'تم إرسال الرسالة بنجاح!' : 'Message sent successfully!',
            'success'
          );
          form.reset();
        }
      });
    });
  }
  
  showLoadingIndicator() {
    if (document.querySelector('.loading-indicator')) return;
    
    const loader = document.createElement('div');
    loader.className = 'loading-indicator';
    loader.innerHTML = `
      <div class="loading-spinner"></div>
      <span class="loading-text">جاري التحميل...</span>
    `;
    
    document.body.appendChild(loader);
  }
  
  hideLoadingIndicator() {
    const loader = document.querySelector('.loading-indicator');
    if (loader) {
      loader.classList.add('loading-fade-out');
      setTimeout(() => {
        if (document.body.contains(loader)) {
          document.body.removeChild(loader);
        }
      }, 500);
    }
  }
  
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--color-primary);
      color: white;
      padding: 1rem 1.5rem;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      z-index: 10000;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }
  
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  
  cleanup() {
    this.eventListeners.forEach((listeners, element) => {
      listeners.forEach(({ event, handler }) => {
        element.removeEventListener(event, handler);
      });
    });
    this.eventListeners.clear();
    
    this.observers.forEach((observer) => {
      observer.disconnect();
    });
    this.observers.clear();
    
    if (this.gsapSlider) {
      this.gsapSlider.destroy();
    }
  }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const website = new MarmaraWebsite();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    gsap.globalTimeline.pause();
  } else {
    gsap.globalTimeline.resume();
  }
});
