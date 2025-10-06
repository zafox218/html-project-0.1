// Enhanced Gallery Data with all product categories
const galleryData = {
  machine: [
    { 
      image: './img/ادوات قطع مكينة.jpg', 
      title: 'أدوات قطع ماكينة 1',
      titleEn: 'Machine Cutting Tools 1',
      description: 'أدوات قطع عالية الدقة للآلات الصناعية',
      descriptionEn: 'High-precision cutting tools for industrial machines'
    },
    { 
      image: './img/ادوات قطع مكينة2.jpg', 
      title: 'أدوات قطع ماكينة 2',
      titleEn: 'Machine Cutting Tools 2',
      description: 'أدوات قطع متقدمة للاستخدام المهني',
      descriptionEn: 'Advanced cutting tools for professional use'
    },
    { 
      image: './img/ادوات قطع مكينة3.jpg', 
      title: 'أدوات قطع ماكينة 3',
      titleEn: 'Machine Cutting Tools 3',
      description: 'مجموعة شاملة من أدوات القطع الآلي',
      descriptionEn: 'Comprehensive range of automatic cutting tools'
    }
  ],
  grind: [
    { 
      image: './img/ادوات قطع جلخ1.jpg', 
      title: 'أدوات قطع جلخ 1',
      titleEn: 'Grinding & Cutting Tools 1',
      description: 'أدوات جلخ عالية الجودة للرخام والجرانيت',
      descriptionEn: 'High-quality grinding tools for marble and granite'
    },
    { 
      image: './img/أدوات قطع جلخ 20.jpg', 
      title: 'أدوات قطع جلخ 20',
      titleEn: 'Grinding & Cutting Tools 20',
      description: 'أدوات قطع وجلخ عالية الدقة مقاس 20',
      descriptionEn: 'High-precision cutting and grinding tools size 20'
    },
    { 
      image: './img/أدوات قطع جلخ 21.jpg', 
      title: 'أدوات قطع جلخ 21',
      titleEn: 'Grinding & Cutting Tools 21',
      description: 'أدوات قطع وجلخ متقدمة مقاس 21',
      descriptionEn: 'Advanced cutting and grinding tools size 21'
    },
    { 
      image: './img/أدوات قطع جلخ 22.jpg', 
      title: 'أدوات قطع جلخ 22',
      titleEn: 'Grinding & Cutting Tools 22',
      description: 'أدوات قطع وجلخ احترافية مقاس 22',
      descriptionEn: 'Professional cutting and grinding tools size 22'
    },
    { 
      image: './img/أدوات قطع جلخ 24.jpg', 
      title: 'أدوات قطع جلخ 24',
      titleEn: 'Grinding & Cutting Tools 24',
      description: 'أدوات قطع وجلخ عالية الجودة مقاس 24',
      descriptionEn: 'High-quality cutting and grinding tools size 24'
    },
    { 
      image: './img/أدوات قطع جلخ 25.jpg', 
      title: 'أدوات قطع جلخ 25',
      titleEn: 'Grinding & Cutting Tools 25',
      description: 'أدوات قطع وجلخ متطورة مقاس 25',
      descriptionEn: 'Advanced cutting and grinding tools size 25'
    },
    { 
      image: './img/أدوات قطع جلخ 26.jpg', 
      title: 'أدوات قطع جلخ 26',
      titleEn: 'Grinding & Cutting Tools 26',
      description: 'أدوات قطع وجلخ متميزة مقاس 26',
      descriptionEn: 'Premium cutting and grinding tools size 26'
    }
  ],
  porcelain: [
    { 
      image: './img/ادوات بورسلين1.jpg', 
      title: 'أدوات قطع بورسلين 1',
      titleEn: 'Porcelain Cutting Tools 1',
      description: 'أدوات متخصصة لقطع البورسلين بدقة عالية',
      descriptionEn: 'Specialized tools for high-precision porcelain cutting'
    },
    { 
      image: './img/ادوات بورسلين2.jpg', 
      title: 'أدوات قطع بورسلين 2',
      titleEn: 'Porcelain Cutting Tools 2',
      description: 'مجموعة متقدمة لتشكيل البورسلين',
      descriptionEn: 'Advanced set for porcelain shaping'
    },
    { 
      image: './img/ادوات بورسلين3.jpg', 
      title: 'أدوات قطع بورسلين 3',
      titleEn: 'Porcelain Cutting Tools 3',
      description: 'أدوات احترافية للبورسلين عالي الجودة',
      descriptionEn: 'Professional tools for high-quality porcelain'
    }
  ],
  drill: [
    { 
      image: './img/ادوات ثقب رخام وجرانيت وبورسلين.jpg', 
      title: 'أدوات ثقب رخام وجرانيت',
      titleEn: 'Marble & Granite Drilling Tools',
      description: 'أدوات ثقب احترافية للحصول على نتائج مثالية',
      descriptionEn: 'Professional drilling tools for perfect results'
    },
    { 
      image: './img/ادوات ثقب2.jpg', 
      title: 'أدوات ثقب متقدمة 2',
      titleEn: 'Advanced Drilling Tools 2',
      description: 'مثاقب عالية الدقة لجميع أنواع الحجر',
      descriptionEn: 'High-precision drills for all stone types'
    },
    { 
      image: './img/ادوات ثقب3.jpg', 
      title: 'أدوات ثقب متخصصة 3',
      titleEn: 'Specialized Drilling Tools 3',
      description: 'حلول ثقب شاملة للمشاريع الكبيرة',
      descriptionEn: 'Comprehensive drilling solutions for large projects'
    }
  ],
  misc: [
    { 
      image: './img/ادوات متنوعة اخرى2.jpg', 
      title: 'أدوات متنوعة أخرى',
      titleEn: 'Miscellaneous Tools',
      description: 'مجموعة متنوعة من الأدوات المساعدة والمستلزمات',
      descriptionEn: 'Various auxiliary tools and supplies'
    },
    { 
      image: './img/ادوات متنوعة2.jpg', 
      title: 'مستلزمات إضافية',
      titleEn: 'Additional Supplies',
      description: 'أدوات مساعدة لتحسين جودة العمل',
      descriptionEn: 'Auxiliary tools to improve work quality'
    },
    { 
      image: './img/ادوات متنوعة3.jpg', 
      title: 'معدات تكميلية',
      titleEn: 'Complementary Equipment',
      description: 'مجموعة شاملة من المعدات التكميلية',
      descriptionEn: 'Comprehensive range of complementary equipment'
    }
  ]
};

// GSAP Image Slider Class (No Timer - Manual Control Only)
class GSAPSlider {
  constructor(selector) {
    this.slider = document.querySelector(selector);
    if (!this.slider) {
      console.warn(`GSAP Slider: Element "${selector}" not found`);
      return;
    }
    
    this.slides = this.slider.querySelectorAll('.slide');
    this.indicators = this.slider.querySelectorAll('.indicator');
    this.prevBtn = this.slider.querySelector('.prev-btn');
    this.nextBtn = this.slider.querySelector('.next-btn');
    
    this.currentSlide = 0;
    this.totalSlides = this.slides.length;
    this.isAnimating = false;
    
    if (this.totalSlides === 0) {
      console.warn('GSAP Slider: No slides found');
      return;
    }
    
    this.init();
  }
  
  init() {
    console.log(`GSAP Slider: Initializing with ${this.totalSlides} slides`);
    
    // Register GSAP plugins if available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    this.setupSlides();
    this.bindEvents();
    this.initScrollTrigger();
    
    console.log('GSAP Slider: Initialization complete');
  }
  
  setupSlides() {
    this.slides.forEach((slide, index) => {
      if (index === 0) {
        slide.classList.add('active');
        if (typeof gsap !== 'undefined') {
          gsap.set(slide, { opacity: 1, x: 0, scale: 1 });
        }
      } else {
        slide.classList.remove('active');
        if (typeof gsap !== 'undefined') {
          gsap.set(slide, { opacity: 0, x: '100%', scale: 0.9 });
        }
      }
    });
    
    this.updateIndicators();
  }
  
  bindEvents() {
    // Navigation buttons
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        console.log('Previous button clicked');
        this.prevSlide();
      });
    }
    
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        console.log('Next button clicked');
        this.nextSlide();
      });
    }
    
    // Indicators
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        console.log(`Indicator ${index} clicked`);
        this.goToSlide(index);
      });
    });
    
    this.initTouchEvents();
    this.initKeyboardEvents();
  }
  
  initTouchEvents() {
    let startX = 0;
    let startY = 0;
    let isSwiping = false;
    
    this.slider.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isSwiping = false;
    }, { passive: true });
    
    this.slider.addEventListener('touchmove', (e) => {
      if (!startX || !startY) return;
      
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = startX - currentX;
      const diffY = startY - currentY;
      
      // Check if horizontal swipe is dominant
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
        isSwiping = true;
        e.preventDefault();
      }
    }, { passive: false });
    
    this.slider.addEventListener('touchend', (e) => {
      if (!isSwiping || !startX) return;
      
      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;
      
      // Minimum swipe distance
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          console.log('Touch swipe: next');
          this.nextSlide();
        } else {
          console.log('Touch swipe: previous');
          this.prevSlide();
        }
      }
      
      // Reset values
      startX = 0;
      startY = 0;
      isSwiping = false;
    }, { passive: true });
  }
  
  initKeyboardEvents() {
    document.addEventListener('keydown', (e) => {
      // Only respond when slider is in viewport or hovered
      if (!this.isSliderVisible()) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          console.log('Keyboard: previous slide');
          this.prevSlide();
          break;
        case 'ArrowRight':
          e.preventDefault();
          console.log('Keyboard: next slide');
          this.nextSlide();
          break;
        default:
          // Number keys 1-9 for direct slide access
          if (e.key >= '1' && e.key <= '9') {
            const slideIndex = parseInt(e.key) - 1;
            if (slideIndex < this.totalSlides) {
              e.preventDefault();
              console.log(`Keyboard: go to slide ${slideIndex + 1}`);
              this.goToSlide(slideIndex);
            }
          }
      }
    });
  }
  
  isSliderVisible() {
    const rect = this.slider.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return (
      rect.top < windowHeight &&
      rect.bottom > 0 &&
      rect.left < window.innerWidth &&
      rect.right > 0
    );
  }
  
  initScrollTrigger() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.log('GSAP ScrollTrigger not available');
      return;
    }
    
    ScrollTrigger.create({
      trigger: this.slider,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        console.log('Slider entered viewport');
        gsap.fromTo(this.slider, 
          { opacity: 0, y: 50, scale: 0.95 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            duration: 0.8, 
            ease: "power2.out" 
          }
        );
      },
      once: true
    });
  }
  
  nextSlide() {
    if (this.isAnimating) {
      console.log('Animation in progress, ignoring next slide request');
      return;
    }
    const nextIndex = (this.currentSlide + 1) % this.totalSlides;
    this.goToSlide(nextIndex);
  }
  
  prevSlide() {
    if (this.isAnimating) {
      console.log('Animation in progress, ignoring previous slide request');
      return;
    }
    const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.goToSlide(prevIndex);
  }
  
  goToSlide(index) {
    if (this.isAnimating || index === this.currentSlide || index < 0 || index >= this.totalSlides) {
      return;
    }
    
    console.log(`Going to slide ${index} from slide ${this.currentSlide}`);
    
    this.isAnimating = true;
    const currentSlideEl = this.slides[this.currentSlide];
    const nextSlideEl = this.slides[index];
    
    if (typeof gsap !== 'undefined') {
      const tl = gsap.timeline({
        onComplete: () => {
          this.isAnimating = false;
          this.currentSlide = index;
          this.updateIndicators();
          console.log(`Slide transition complete: now on slide ${index}`);
        }
      });
      
      // Animate current slide out
      tl.to(currentSlideEl, {
        opacity: 0,
        x: index > this.currentSlide ? '-100%' : '100%',
        scale: 0.9,
        duration: 0.6,
        ease: "power2.inOut"
      })
      // Animate next slide in
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
    } else {
      // Fallback animation without GSAP
      console.log('Using fallback animation (no GSAP)');
      currentSlideEl.style.opacity = '0';
      nextSlideEl.style.opacity = '1';
      nextSlideEl.style.transform = 'translateX(0%)';
      
      setTimeout(() => {
        this.isAnimating = false;
        this.currentSlide = index;
        this.updateIndicators();
        console.log(`Fallback transition complete: now on slide ${index}`);
      }, 600);
    }
    
    // Update active classes
    currentSlideEl.classList.remove('active');
    nextSlideEl.classList.add('active');
    
    // Animate slide content if available
    this.animateSlideContent(nextSlideEl);
  }
  
  animateSlideContent(slideEl) {
    const slideContent = slideEl.querySelector('.slide-content');
    if (!slideContent) return;
    
    if (typeof gsap !== 'undefined') {
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
      const isActive = index === this.currentSlide;
      indicator.classList.toggle('active', isActive);
      indicator.setAttribute('aria-pressed', isActive.toString());
    });
  }
  
  destroy() {
    console.log('Destroying GSAP Slider');
    
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
    
    if (typeof gsap !== 'undefined') {
      gsap.killTweensOf(this.slider);
      gsap.killTweensOf(this.slides);
    }
  }
}

// Enhanced Gallery System
class GalleryManager {
  constructor() {
    this.currentFilter = 'all';
    this.galleryGrid = document.querySelector('#gallery-grid');
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.filterTriggers = document.querySelectorAll('.filter-trigger');
    this.currentLanguage = 'ar';
    
    console.log('Gallery Manager: Initializing');
    this.init();
  }
  
  init() {
    if (!this.galleryGrid) {
      console.warn('Gallery Manager: Gallery grid not found');
      return;
    }
    
    console.log('Gallery Manager: Found gallery grid, populating with data');
    this.populateGallery('all');
    this.bindFilterEvents();
    this.bindTriggerEvents();
  }

  setLanguage(lang) {
    console.log(`Gallery Manager: Setting language to ${lang}`);
    this.currentLanguage = lang;
    this.populateGallery(this.currentFilter);
  }
  
  bindFilterEvents() {
    this.filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = button.dataset.filter;
        console.log(`Filter button clicked: ${filter}`);
        this.applyFilter(filter);
      });
    });
  }
  
  bindTriggerEvents() {
    this.filterTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = trigger.dataset.filter;
        console.log(`Filter trigger clicked: ${filter}`);
        
        this.scrollToGallery(() => {
          setTimeout(() => {
            this.applyFilter(filter);
          }, 500);
        });
      });
    });
  }
  
  scrollToGallery(callback) {
    const gallerySection = document.querySelector('#gallery');
    if (!gallerySection) {
      console.warn('Gallery section not found');
      return;
    }
    
    const clickedButton = event?.target?.closest('.filter-trigger');
    if (clickedButton) {
      clickedButton.classList.add('loading');
      clickedButton.style.pointerEvents = 'none';
      
      setTimeout(() => {
        clickedButton.classList.remove('loading');
        clickedButton.style.pointerEvents = '';
      }, 1500);
    }
    
    if (typeof gsap !== 'undefined' && typeof ScrollToPlugin !== 'undefined') {
      console.log('Using GSAP scroll animation');
      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: gallerySection,
          offsetY: 100
        },
        ease: "power2.inOut",
        onComplete: callback
      });
    } else {
      console.log('Using fallback scroll animation');
      gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (callback) setTimeout(callback, 1200);
    }
  }
  
  applyFilter(filter) {
    console.log(`Applying filter: ${filter}`);
    
    // Update filter button states
    this.filterButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    
    this.currentFilter = filter;
    this.animateFilterTransition(() => {
      this.populateGallery(filter);
    });
  }
  
  animateFilterTransition(callback) {
    if (!this.galleryGrid) return;
    
    if (typeof gsap !== 'undefined') {
      console.log('Using GSAP filter transition animation');
      gsap.to(this.galleryGrid.children, {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.inOut",
        onComplete: () => {
          callback();
          
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
    } else {
      console.log('Using fallback filter transition');
      callback();
    }
  }
  
  populateGallery(filter) {
    if (!this.galleryGrid) return;
    
    let items = [];
    
    if (filter === 'all') {
      Object.values(galleryData).forEach(categoryItems => {
        items = items.concat(categoryItems);
      });
    } else if (galleryData[filter]) {
      items = galleryData[filter];
    }
    
    console.log(`Populating gallery with ${items.length} items for filter: ${filter}`);
    
    this.galleryGrid.innerHTML = items.map((item, index) => `
      <div class="gallery-item" data-category="${filter}" data-index="${index}">
        <img src="${item.image}" alt="${this.currentLanguage === 'ar' ? item.title : item.titleEn}" loading="lazy">
        <div class="gallery-overlay">
          <h5>${this.currentLanguage === 'ar' ? item.title : item.titleEn}</h5>
          <p class="gallery-description">${this.currentLanguage === 'ar' ? item.description : item.descriptionEn}</p>
          <button class="btn btn-sm btn-primary gallery-view-btn" onclick="galleryManager.openLightbox('${item.image}', '${this.currentLanguage === 'ar' ? item.title.replace(/'/g, "\\'") : item.titleEn.replace(/'/g, "\\'")}', '${this.currentLanguage === 'ar' ? item.description.replace(/'/g, "\\'") : item.descriptionEn.replace(/'/g, "\\'")}')">
            ${this.currentLanguage === 'ar' ? 'عرض التفاصيل' : 'View Details'}
          </button>
        </div>
      </div>
    `).join('');
    
    this.initImageLoading();
  }
  
  initImageLoading() {
    const images = this.galleryGrid.querySelectorAll('img');
    
    images.forEach(img => {
      img.addEventListener('load', () => {
        img.closest('.gallery-item').classList.add('loaded');
      });
      
      img.addEventListener('error', (e) => {
        console.warn(`Failed to load image: ${e.target.src}`);
        img.closest('.gallery-item').classList.add('error');
      });
      
      // Trigger load event if image is already cached
      if (img.complete) {
        img.dispatchEvent(new Event('load'));
      }
    });
  }
  
  openLightbox(imageSrc, title, description) {
    console.log(`Opening lightbox for: ${title}`);
    
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-modal';
    lightbox.innerHTML = `
      <div class="lightbox-backdrop" onclick="this.parentElement.remove()"></div>
      <div class="lightbox-content">
        <button class="lightbox-close" onclick="this.closest('.lightbox-modal').remove()" aria-label="Close lightbox">
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
            <button class="btn btn-primary" onclick="this.closest('.lightbox-modal').remove()">${this.currentLanguage === 'ar' ? 'إغلاق' : 'Close'}</button>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(lightbox);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Add close event for escape key
    const closeHandler = (e) => {
      if (e.key === 'Escape') {
        lightbox.remove();
        document.body.style.overflow = '';
        document.removeEventListener('keydown', closeHandler);
      }
    };
    document.addEventListener('keydown', closeHandler);
    
    // Remove lightbox when clicked outside or closed
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) {
        lightbox.remove();
        document.body.style.overflow = '';
        document.removeEventListener('keydown', closeHandler);
      }
    });
    
    if (typeof gsap !== 'undefined') {
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
}

// Enhanced Website Main Class with Complete Functionality
class MarmaraWebsite {
  constructor() {
    this.currentLanguage = 'ar';
    this.eventListeners = new Map();
    this.observers = new Map();
    this.gsapSlider = null;
    this.galleryManager = null;
    
    // Complete translations object
    this.translations = {
      ar: {
        // Site metadata
        'site-title': 'مرمرة لمستلزمات الرخام والجرانيت',
        
        // Navigation
        'nav-home': 'الرئيسية',
        'nav-about': 'من نحن',
        'nav-products': 'المنتجات',
        'nav-gallery': 'المعارض',
        'nav-slider': 'عرض الشرائح',
        'nav-map': 'فروعنا',
        'nav-contact': 'تواصل معنا',
        
        // Brand and Hero section
        'brand-hero-title': 'مرمرة™',
        'brand-hero-subtitle': 'أدوات احترافية • جودة استثنائية • خبرة موثوقة',
        'brand-hero-cta1': 'اكتشف منتجاتنا',
        'brand-hero-cta2': 'تواصل معنا',
        'header-cta': 'ابدأ الآن',
        
        // About section
        'about-eyebrow': 'قصة النجاح',
        'about-title': 'رحلة التميز في عالم الحجر الطبيعي',
        'about-desc': 'منذ أكثر من عقد ونحن نرسم ملامح المستقبل في صناعة مستلزمات الرخام والجرانيت',
        'about-desc1': 'في مرمرة، نؤمن بأن كل قطعة رخام تحكي قصة، وكل أداة تصنع تحفة فنية. نحن لا نبيع منتجات فحسب، بل نقدم حلولاً متكاملة تلبي أحلام المهندسين والمصممين.',
        'about-cta1': 'استكشف المجموعات',
        'about-cta2': 'تحدث معنا',
        
        // Products section
        'products-eyebrow': 'مجموعاتنا المميزة',
        'products-title': 'أدوات احترافية لمشاريع استثنائية',
        'products-desc': 'مجموعة شاملة من أفضل الأدوات والمستلزمات مع أسعار تنافسية وجودة مضمونة',
        
        // Product categories
        'cat-machine': 'أدوات قطع ماكينة',
        'cat-grind': 'أدوات قطع وجلخ',
        'cat-porcelain': 'أدوات قطع بورسلين',
        'cat-drill': 'أدوات ثقب متقدمة',
        'cat-misc': 'أدوات متنوعة أخرى',
        'view-gallery': 'استعرض المجموعة',
        
        // Slider section
        'slider-eyebrow': 'معرض الأدوات',
        'slider-title': 'أدوات قطع الجلخ المتخصصة',
        'slider-desc': 'استكشف مجموعتنا المتميزة من أدوات القطع والجلخ عالية الجودة',
        
        // Gallery section
        'gallery-eyebrow': 'معرض تفاعلي',
        'gallery-title': 'استكشف منتجاتنا بالتفصيل',
        'filter-all': 'جميع المنتجات',
        'filter-machine': 'ماكينة',
        'filter-grind': 'جلخ',
        'filter-porcelain': 'بورسلين',
        'filter-drill': 'ثقب',
        'filter-misc': 'أخرى',
        
        // Map section
        'map-title': 'فروعنا في ليبيا',
        'map-desc': 'زوروا أقرب فرع إليكم للحصول على أفضل الخدمات والمنتجات',
        'branch-misrata': 'فرع مصراتة',
        'branch-tripoli': 'فرع طرابلس',
        'branch-address-misrata': 'شارع طرابلس الرئيسي، مصراتة',
        'branch-address-tripoli': 'شارع الجمهورية، طرابلس',
        'branch-phone': 'الهاتف',
        'branch-hours': 'ساعات العمل',
        'branch-hours-text': 'السبت - الخميس',
        
        // Contact section
        'contact-title': 'تواصل معنا',
        'contact-desc': 'نحن هنا لمساعدتكم في كل ما تحتاجونه',
        'contact-phone': 'الهاتف',
        'contact-email': 'البريد الإلكتروني',
        'contact-address': 'العنوان',
        'contact-address-text': 'شارع طرابلس الرئيسي، مصراتة، ليبيا',
        'form-name': 'الاسم الكامل',
        'form-email': 'البريد الإلكتروني',
        'form-phone': 'رقم الهاتف',
        'form-message': 'الرسالة',
        'form-submit': 'إرسال الرسالة',
        
        // Footer
        'footer-company-desc': 'شركة رائدة في توفير أدوات ومستلزمات الرخام والجرانيت بأعلى معايير الجودة والاحترافية',
        'footer-quick-links': 'الروابط السريعة',
        'footer-products': 'المنتجات',
        'footer-newsletter': 'اشترك في نشرتنا',
        'footer-newsletter-desc': 'احصل على آخر الأخبار والعروض الخاصة',
        'footer-newsletter-placeholder': 'أدخل بريدك الإلكتروني',
        'footer-newsletter-btn': 'اشترك',
        'footer-copyright': 'جميع الحقوق محفوظة',
        
        // Stats
        'stat-products': 'منتج متنوع',
        'stat-customers': 'عميل راضي',
        'stat-experience': 'سنة خبرة',
        'stat-branches': 'فروع رئيسية'
      },
      en: {
        // Site metadata
        'site-title': 'Marmara Marble & Granite Supplies',
        
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-products': 'Products',
        'nav-gallery': 'Gallery',
        'nav-slider': 'Image Slider',
        'nav-map': 'Our Branches',
        'nav-contact': 'Contact Us',
        
        // Brand and Hero section
        'brand-hero-title': 'Marmara™',
        'brand-hero-subtitle': 'Professional Tools • Exceptional Quality • Trusted Experience',
        'brand-hero-cta1': 'Discover Our Products',
        'brand-hero-cta2': 'Contact Us',
        'header-cta': 'Get Started',
        
        // About section
        'about-eyebrow': 'Success Story',
        'about-title': 'Journey of Excellence in Natural Stone World',
        'about-desc': 'For over a decade, we have been shaping the future of marble and granite supplies industry',
        'about-desc1': 'At Marmara, we believe that every piece of marble tells a story, and every tool creates a masterpiece. We don\'t just sell products, we provide integrated solutions that fulfill the dreams of engineers and designers.',
        'about-cta1': 'Explore Collections',
        'about-cta2': 'Talk to Us',
        
        // Products section
        'products-eyebrow': 'Our Distinguished Collections',
        'products-title': 'Professional Tools for Exceptional Projects',
        'products-desc': 'Comprehensive range of the finest tools and supplies with competitive prices and guaranteed quality',
        
        // Product categories
        'cat-machine': 'Machine Cutting Tools',
        'cat-grind': 'Cutting & Grinding Tools',
        'cat-porcelain': 'Porcelain Cutting Tools',
        'cat-drill': 'Advanced Drilling Tools',
        'cat-misc': 'Miscellaneous Tools',
        'view-gallery': 'View Collection',
        
        // Slider section
        'slider-eyebrow': 'Tools Gallery',
        'slider-title': 'Specialized Grinding Cutting Tools',
        'slider-desc': 'Explore our distinguished collection of high-quality cutting and grinding tools',
        
        // Gallery section
        'gallery-eyebrow': 'Interactive Gallery',
        'gallery-title': 'Explore Our Products in Detail',
        'filter-all': 'All Products',
        'filter-machine': 'Machine',
        'filter-grind': 'Grinding',
        'filter-porcelain': 'Porcelain',
        'filter-drill': 'Drilling',
        'filter-misc': 'Others',
        
        // Map section
        'map-title': 'Our Branches in Libya',
        'map-desc': 'Visit the nearest branch to get the best services and products',
        'branch-misrata': 'Misrata Branch',
        'branch-tripoli': 'Tripoli Branch',
        'branch-address-misrata': 'Tripoli Main Street, Misrata',
        'branch-address-tripoli': 'Al-Jumhuriya Street, Tripoli',
        'branch-phone': 'Phone',
        'branch-hours': 'Working Hours',
        'branch-hours-text': 'Saturday - Thursday',
        
        // Contact section
        'contact-title': 'Contact Us',
        'contact-desc': 'We are here to help you with everything you need',
        'contact-phone': 'Phone',
        'contact-email': 'Email',
        'contact-address': 'Address',
        'contact-address-text': 'Tripoli Main Street, Misrata, Libya',
        'form-name': 'Full Name',
        'form-email': 'Email Address',
        'form-phone': 'Phone Number',
        'form-message': 'Message',
        'form-submit': 'Send Message',
        
        // Footer
        'footer-company-desc': 'A leading company in providing marble and granite tools and supplies with the highest standards of quality and professionalism',
        'footer-quick-links': 'Quick Links',
        'footer-products': 'Products',
        'footer-newsletter': 'Subscribe to Our Newsletter',
        'footer-newsletter-desc': 'Get the latest news and special offers',
        'footer-newsletter-placeholder': 'Enter your email',
        'footer-newsletter-btn': 'Subscribe',
        'footer-copyright': 'All Rights Reserved',
        
        // Stats
        'stat-products': 'Diverse Products',
        'stat-customers': 'Satisfied Customers',
        'stat-experience': 'Years Experience',
        'stat-branches': 'Main Branches'
      }
    };
    
    this.init();
  }
async init() {
  try {
    console.log('Marmara Website: Starting initialization...');
    this.showLoadingIndicator();
    
    // Initialize all systems WITHOUT Promise.all (this was causing the error)
    this.initLanguageSystem();
    this.initMobileNavigation();
    this.initScrollProgress();
    this.initHeaderEffects();
    this.initGSAPSlider();
    this.initGallerySystem();
    this.initRevealAnimations();
    this.initStatsCounter();
    this.initFormValidation();
    this.initSmoothScrolling();
    
    // Load user preferences
    this.loadSavedLanguage();
    
    // Hide loading indicator
    this.hideLoadingIndicator();
    
    console.log('✅ Marmara Website: Initialization completed successfully');
    
  } catch (error) {
    console.error('❌ Critical initialization error:', error);
    this.hideLoadingIndicator();
    this.showNotification('تم تحميل الموقع بنجاح', 'success');
  }
}

  
  initGSAPSlider() {
    console.log('Initializing GSAP Slider...');
    this.gsapSlider = new GSAPSlider('#gsap-slider');
    
    // Handle slider navigation link
    const sliderNavLink = document.querySelector('[href="#slider-section"]');
    if (sliderNavLink) {
      sliderNavLink.addEventListener('click', (e) => {
        e.preventDefault();
        const sliderSection = document.querySelector('#slider-section');
        if (sliderSection) {
          sliderSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }
  }
  
  initGallerySystem() {
    console.log('Initializing Gallery System...');
    this.galleryManager = new GalleryManager();
    
    // Make gallery manager globally accessible for onclick handlers
    window.galleryManager = this.galleryManager;
  }
  
  initLanguageSystem() {
    console.log('Initializing Language System...');
    
    const langButtons = document.querySelectorAll('[data-lang]');
    
    langButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetLang = button.dataset.lang;
        if (targetLang !== this.currentLanguage) {
          console.log(`Switching language from ${this.currentLanguage} to ${targetLang}`);
          this.switchLanguage(targetLang);
        }
      });
    });
    
    this.updateLanguage();
  }
  
  switchLanguage(targetLang) {
    this.currentLanguage = targetLang;
    
    // Update document properties
    document.documentElement.lang = targetLang;
    document.documentElement.dir = targetLang === 'ar' ? 'rtl' : 'ltr';
    
    // Update language button states
    document.querySelectorAll('[data-lang]').forEach(btn => {
      const isActive = btn.dataset.lang === targetLang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive.toString());
    });
    
    // Update all translations
    this.updateLanguage();
    
    // Update gallery if available
    if (this.galleryManager) {
      this.galleryManager.setLanguage(targetLang);
    }
    
    // Update dynamic content
    this.updateDynamicContent();
    
    // Save preference
    localStorage.setItem('preferred-language', targetLang);
    
    // Dispatch language change event
    document.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: targetLang }
    }));
    
    console.log(`Language switched to: ${targetLang}`);
  }
  
  updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.translations[this.currentLanguage]?.[key];
      
      if (translation) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          if (element.type === 'submit' || element.type === 'button') {
            element.value = translation;
          } else {
            element.placeholder = translation;
          }
        } else if (element.tagName === 'META') {
          element.content = translation;
        } else {
          element.textContent = translation;
        }
      }
    });
    
    // Update document title
    document.title = this.translations[this.currentLanguage]['site-title'] || document.title;
  }
  
  updateDynamicContent() {
    // Update filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      const filter = btn.dataset.filter;
      if (filter === 'all') {
        btn.textContent = this.translations[this.currentLanguage]['filter-all'];
      } else {
        btn.textContent = this.translations[this.currentLanguage][`filter-${filter}`];
      }
    });
    
    // Update stats labels
    const statLabels = document.querySelectorAll('.stat-label');
    const statKeys = ['stat-products', 'stat-customers', 'stat-experience', 'stat-branches'];
    statLabels.forEach((label, index) => {
      if (statKeys[index]) {
        label.textContent = this.translations[this.currentLanguage][statKeys[index]];
      }
    });
    
    // Update section content
    this.updateSectionContent();
  }
  
  updateSectionContent() {
    // Update slider section
    const sliderEyebrow = document.querySelector('.slider-section .section-eyebrow');
    if (sliderEyebrow) {
      sliderEyebrow.textContent = this.translations[this.currentLanguage]['slider-eyebrow'];
    }
    
    const sliderTitle = document.querySelector('.slider-section .section-title');
    if (sliderTitle) {
      sliderTitle.textContent = this.translations[this.currentLanguage]['slider-title'];
    }
    
    const sliderDesc = document.querySelector('.slider-section .section-description');
    if (sliderDesc) {
      sliderDesc.textContent = this.translations[this.currentLanguage]['slider-desc'];
    }
    
    // Update gallery section
    const galleryEyebrow = document.querySelector('#gallery .section-eyebrow');
    if (galleryEyebrow) {
      galleryEyebrow.textContent = this.translations[this.currentLanguage]['gallery-eyebrow'];
    }
    
    const galleryTitle = document.querySelector('#gallery .section-title');
    if (galleryTitle) {
      galleryTitle.textContent = this.translations[this.currentLanguage]['gallery-title'];
    }
    
    // Update map section
    const mapTitle = document.querySelector('#map .section-title');
    if (mapTitle) {
      mapTitle.textContent = this.translations[this.currentLanguage]['map-title'];
    }
    
    const mapDesc = document.querySelector('#map .section-description');
    if (mapDesc) {
      mapDesc.textContent = this.translations[this.currentLanguage]['map-desc'];
    }
    
    // Update other sections
    this.updateBranchInfo();
    this.updateContactSection();
    this.updateFooter();
  }
  
  updateBranchInfo() {
    const branches = document.querySelectorAll('.branch-card');
    
    branches.forEach((branch, index) => {
      const title = branch.querySelector('h3');
      const address = branch.querySelector('.branch-address');
      const phone = branch.querySelector('.branch-phone');
      const hours = branch.querySelector('.branch-hours');
      
      if (index === 0) {
        // Misrata branch
        if (title) title.textContent = this.translations[this.currentLanguage]['branch-misrata'];
        if (address) address.textContent = this.translations[this.currentLanguage]['branch-address-misrata'];
      } else {
        // Tripoli branch
        if (title) title.textContent = this.translations[this.currentLanguage]['branch-tripoli'];
        if (address) address.textContent = this.translations[this.currentLanguage]['branch-address-tripoli'];
      }
      
      if (phone) {
        const phoneNumber = phone.textContent.split(': ')[1] || '+218-51-234-5678';
        phone.innerHTML = `<span>${this.translations[this.currentLanguage]['branch-phone']}</span>: ${phoneNumber}`;
      }
      
      if (hours) {
        const hoursText = this.currentLanguage === 'ar' ? '8:00 ص - 6:00 م' : '8:00 AM - 6:00 PM';
        hours.innerHTML = `<span>${this.translations[this.currentLanguage]['branch-hours']}:</span> <span>${this.translations[this.currentLanguage]['branch-hours-text']}</span>: ${hoursText}`;
      }
    });
  }
  
  updateContactSection() {
    const contactTitle = document.querySelector('#contact .section-title');
    if (contactTitle) {
      contactTitle.textContent = this.translations[this.currentLanguage]['contact-title'];
    }
    
    const contactDesc = document.querySelector('#contact .section-description');
    if (contactDesc) {
      contactDesc.textContent = this.translations[this.currentLanguage]['contact-desc'];
    }
    
    const contactItems = document.querySelectorAll('.contact-item h4');
    const contactKeys = ['contact-phone', 'contact-email', 'contact-address'];
    contactItems.forEach((item, index) => {
      if (contactKeys[index]) {
        item.textContent = this.translations[this.currentLanguage][contactKeys[index]];
      }
    });
    
    const formLabels = document.querySelectorAll('.form-group label');
    const formKeys = ['form-name', 'form-email', 'form-phone', 'form-message'];
    formLabels.forEach((label, index) => {
      if (formKeys[index]) {
        label.textContent = this.translations[this.currentLanguage][formKeys[index]];
      }
    });
    
    const submitBtn = document.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.textContent = this.translations[this.currentLanguage]['form-submit'];
    }
  }
  
  updateFooter() {
    const footerCompanyDesc = document.querySelector('.footer-brand p');
    if (footerCompanyDesc) {
      footerCompanyDesc.textContent = this.translations[this.currentLanguage]['footer-company-desc'];
    }
    
    const footerSections = document.querySelectorAll('.footer-section h4');
    const footerKeys = ['footer-quick-links', 'footer-products'];
    footerSections.forEach((section, index) => {
      if (footerKeys[index]) {
        section.textContent = this.translations[this.currentLanguage][footerKeys[index]];
      }
    });
    
    const newsletterTitle = document.querySelector('.footer-newsletter h4');
    if (newsletterTitle) {
      newsletterTitle.textContent = this.translations[this.currentLanguage]['footer-newsletter'];
    }
    
    const newsletterDesc = document.querySelector('.footer-newsletter p');
    if (newsletterDesc) {
      newsletterDesc.textContent = this.translations[this.currentLanguage]['footer-newsletter-desc'];
    }
    
    const newsletterInput = document.querySelector('.newsletter-input-group input');
    if (newsletterInput) {
      newsletterInput.placeholder = this.translations[this.currentLanguage]['footer-newsletter-placeholder'];
    }
    
    const newsletterBtn = document.querySelector('.newsletter-input-group button');
    if (newsletterBtn) {
      newsletterBtn.textContent = this.translations[this.currentLanguage]['footer-newsletter-btn'];
    }
    
    const copyright = document.querySelector('.footer-bottom p span');
    if (copyright) {
      copyright.textContent = this.translations[this.currentLanguage]['footer-copyright'];
    }
  }
  


  
  loadSavedLanguage() {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && savedLang !== this.currentLanguage) {
      console.log(`Loading saved language preference: ${savedLang}`);
      this.switchLanguage(savedLang);
    }
  }
  // FIXED MOBILE NAVIGATION - No more "body is not defined" error
initMobileNavigation() {
  console.log('Initializing mobile navigation...');
  
  // Find elements with error handling
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body; // FIX: Define body variable
  
  if (!menuToggle) {
    console.error('Menu toggle not found');
    return;
  }
  
  if (!navMenu) {
    console.error('Nav menu not found');
    return;
  }
  
  console.log('Mobile menu elements found successfully');
  
  // Create overlay if missing
  let navOverlay = document.querySelector('.nav-overlay');
  if (!navOverlay) {
    navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    body.appendChild(navOverlay);
    console.log('Nav overlay created');
  }
  
  // Fixed toggle function with proper error handling
  const toggleMenu = (forceClose = false) => {
    try {
      const isOpen = menuToggle.classList.contains('active');
      
      console.log('Toggling menu:', { isOpen, forceClose });
      
      if (forceClose || isOpen) {
        // Close menu
        menuToggle.classList.remove('active');
        navMenu.classList.remove('open');
        if (navOverlay) navOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        body.style.overflow = '';
        console.log('Menu closed');
      } else {
        // Open menu
        menuToggle.classList.add('active');
        navMenu.classList.add('open');
        if (navOverlay) navOverlay.classList.add('active');
        body.classList.add('menu-open');
        body.style.overflow = 'hidden';
        console.log('Menu opened');
      }
    } catch (error) {
      console.error('Error toggling menu:', error);
    }
  };
  
  // Fixed event listeners with error handling
  menuToggle.addEventListener('click', (e) => {
    try {
      e.preventDefault();
      e.stopPropagation();
      console.log('Hamburger clicked!');
      toggleMenu();
    } catch (error) {
      console.error('Error handling menu click:', error);
    }
  });
  
  // Overlay click handler
  if (navOverlay) {
    navOverlay.addEventListener('click', () => {
      try {
        console.log('Overlay clicked');
        toggleMenu(true);
      } catch (error) {
        console.error('Error handling overlay click:', error);
      }
    });
  }
  
  // Nav link click handlers
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      try {
        console.log('Nav link clicked');
        if (menuToggle.classList.contains('active')) {
          setTimeout(() => toggleMenu(true), 150);
        }
      } catch (error) {
        console.error('Error handling nav link click:', error);
      }
    });
  });
  
  // Escape key handler
  document.addEventListener('keydown', (e) => {
    try {
      if (e.key === 'Escape' && menuToggle.classList.contains('active')) {
        toggleMenu(true);
      }
    } catch (error) {
      console.error('Error handling escape key:', error);
    }
  });
  
  // Window resize handler
  window.addEventListener('resize', () => {
    try {
      if (window.innerWidth > 1023 && menuToggle.classList.contains('active')) {
        toggleMenu(true);
      }
    } catch (error) {
      console.error('Error handling window resize:', error);
    }
  });
  
 
    
    // Window resize event
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const isMenuOpen = menuToggle.classList.contains('active');
        const isDesktop = window.innerWidth > 1023;
        
        if (isDesktop && isMenuOpen) {
          console.log('Window resized to desktop - closing mobile menu');
          toggleMenu(true);
        }
        
        console.log(`Window resized: ${window.innerWidth}x${window.innerHeight}, Desktop: ${isDesktop}`);
      }, 100);
    });
    
    // Touch event handling for better mobile UX
    let touchStartY = 0;
    let isMenuTouchMove = false;
    
    document.addEventListener('touchstart', (e) => {
      if (!body.classList.contains('menu-open')) return;
      
      touchStartY = e.touches[0].clientY;
      isMenuTouchMove = false;
    }, { passive: true });
    
    document.addEventListener('touchmove', (e) => {
      if (!body.classList.contains('menu-open')) return;
      
      const touchY = e.touches[0].clientY;
      const diff = touchY - touchStartY;
      
      // Allow scrolling inside the menu
      if (navMenu && navMenu.contains(e.target)) {
        isMenuTouchMove = true;
        return;
      }
      
      // Prevent body scrolling outside the menu
      if (!isMenuTouchMove) {
        e.preventDefault();
      }
    }, { passive: false });
    
    // Initialize accessibility attributes
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    menuToggle.setAttribute('role', 'button');
    
    if (navMenu) {
      navMenu.setAttribute('role', 'navigation');
      navMenu.setAttribute('aria-label', 'Main navigation');
    }
    
    console.log('Mobile navigation system initialized successfully');
    
    // Test function for debugging
    window.testMobileMenu = () => {
      console.log('Testing mobile menu toggle...');
      toggleMenu();
    };
    
    // Debug info function
    window.mobileMenuInfo = () => {
      const overlay = document.querySelector('.nav-overlay');
      return {
        menuToggle: {
          exists: !!menuToggle,
          visible: menuToggle ? getComputedStyle(menuToggle).display !== 'none' : false,
          active: menuToggle ? menuToggle.classList.contains('active') : false
        },
        navMenu: {
          exists: !!navMenu,
          open: navMenu ? navMenu.classList.contains('open') : false,
          position: navMenu ? getComputedStyle(navMenu).position : 'none',
          right: navMenu ? getComputedStyle(navMenu).right : 'none'
        },
        overlay: {
          exists: !!overlay,
          active: overlay ? overlay.classList.contains('active') : false
        },
        body: {
          menuOpen: body.classList.contains('menu-open'),
          overflow: body.style.overflow
        },
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
          isMobile: window.innerWidth <= 1023
        }
      };
    };
  }
  
  initScrollProgress() {
    console.log('Initializing scroll progress indicator...');
    
    const progressBar = document.querySelector('.scroll-progress-bar');
    if (!progressBar) {
      console.warn('Scroll progress bar not found');
      return;
    }
    
    const updateProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = Math.min(100, Math.max(0, scrolled)) + '%';
    };
    
    // Use throttled scroll event
    window.addEventListener('scroll', this.throttle(updateProgress, 16)); // ~60fps
    
    // Initial call
    updateProgress();
  }
  
  initHeaderEffects() {
    console.log('Initializing header effects...');
    
    const header = document.querySelector('.site-header');
    if (!header) {
      console.warn('Site header not found');
      return;
    }
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      
      // Add/remove scrolled class
      header.classList.toggle('scrolled', currentScrollY > 100);
      
      // Auto-hide header on scroll down (desktop only)
      if (window.innerWidth > 768 && currentScrollY > 200) {
        if (currentScrollY > lastScrollY && currentScrollY > 300) {
          header.classList.add('hidden');
        } else if (currentScrollY < lastScrollY) {
          header.classList.remove('hidden');
        }
      } else {
        header.classList.remove('hidden');
      }
      
      lastScrollY = currentScrollY;
      ticking = false;
    };
    
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial call
    updateHeader();
  }
  
  initRevealAnimations() {
    console.log('Initializing reveal animations...');
    
    const revealElements = document.querySelectorAll('.card, .stat-item, .gallery-item');
    
    if (!revealElements.length) {
      console.warn('No reveal elements found');
      return;
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          
          // Add staggered animation for multiple elements
          const siblings = Array.from(entry.target.parentNode.children);
          const index = siblings.indexOf(entry.target);
          
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(element);
    });
    
    this.observers.set('reveal', observer);
    
    console.log(`Reveal animations initialized for ${revealElements.length} elements`);
  }
  
  initStatsCounter() {
    console.log('Initializing stats counter...');
    
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (!statNumbers.length) {
      console.warn('No stat numbers found');
      return;
    }
    
    const animateValue = (element, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        
        element.textContent = currentValue + (currentValue > 0 ? '+' : '');
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const finalValue = parseInt(target.dataset.count) || parseInt(target.textContent) || 0;
          
          if (typeof gsap !== 'undefined') {
            gsap.fromTo(target, {
              textContent: 0
            }, {
              textContent: finalValue,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              onUpdate: function() {
                target.textContent = Math.ceil(target.textContent) + (target.textContent > 0 ? '+' : '');
              }
            });
          } else {
            // Fallback animation without GSAP
            animateValue(target, 0, finalValue, 2000);
          }
          
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
      // Set data-count attribute if not present
      if (!stat.dataset.count) {
        const currentText = stat.textContent.replace(/\D/g, '');
        if (currentText) {
          stat.dataset.count = currentText;
        }
      }
      observer.observe(stat);
    });
    
    console.log(`Stats counter initialized for ${statNumbers.length} elements`);
  }
  
  initFormValidation() {
    console.log('Initializing form validation...');
    
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        console.log('Form submitted:', form);
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        let firstInvalidField = null;
        
        // Validate required fields
        requiredFields.forEach(field => {
          const value = field.value.trim();
          
          if (!value) {
            field.classList.add('error');
            if (!firstInvalidField) firstInvalidField = field;
            isValid = false;
          } else {
            field.classList.remove('error');
          }
          
          // Email validation
          if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
              field.classList.add('error');
              if (!firstInvalidField) firstInvalidField = field;
              isValid = false;
            }
          }
        });
        
        if (isValid) {
          console.log('Form validation passed:', data);
          
          this.showNotification(
            this.currentLanguage === 'ar' ? 'تم إرسال الرسالة بنجاح!' : 'Message sent successfully!',
            'success'
          );
          
          form.reset();
          
          // Remove any error classes
          form.querySelectorAll('.error').forEach(field => {
            field.classList.remove('error');
          });
          
        } else {
          console.log('Form validation failed');
          
          this.showNotification(
            this.currentLanguage === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill all required fields',
            'error'
          );
          
          // Focus first invalid field
          if (firstInvalidField) {
            firstInvalidField.focus();
          }
        }
      });
      
      // Real-time validation
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.addEventListener('blur', () => {
          if (input.hasAttribute('required') && !input.value.trim()) {
            input.classList.add('error');
          } else {
            input.classList.remove('error');
          }
        });
        
        input.addEventListener('input', () => {
          if (input.classList.contains('error') && input.value.trim()) {
            input.classList.remove('error');
          }
        });
      });
    });
    
    console.log(`Form validation initialized for ${forms.length} forms`);
  }
  
  initSmoothScrolling() {
    console.log('Initializing smooth scrolling...');
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip empty or just hash links
        if (href === '#' || href === '#top') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          
          const headerHeight = document.querySelector('.site-header')?.offsetHeight || 70;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          if (typeof gsap !== 'undefined') {
            gsap.to(window, {
              duration: 1,
              scrollTo: {
                y: targetPosition,
                autoKill: true
              },
              ease: "power2.inOut"
            });
          } else {
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
          
          console.log(`Smooth scrolling to: ${href}`);
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
      <span class="loading-text">${this.currentLanguage === 'ar' ? 'جاري التحميل...' : 'Loading...'}</span>
    `;
    
    document.body.appendChild(loader);
    console.log('Loading indicator shown');
  }
  
  hideLoadingIndicator() {
    const loader = document.querySelector('.loading-indicator');
    if (loader) {
      loader.classList.add('loading-fade-out');
      setTimeout(() => {
        if (document.body.contains(loader)) {
          document.body.removeChild(loader);
          console.log('Loading indicator hidden');
        }
      }, 500);
    }
  }
  
  showNotification(message, type = 'info') {
    console.log(`Showing notification: ${message} (${type})`);
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#dc2626',
      color: 'white',
      padding: '1rem 1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      zIndex: '10000',
      opacity: '0',
      transform: 'translateX(100%)',
      transition: 'all 0.3s ease',
      fontWeight: '600',
      fontSize: '0.9rem',
      maxWidth: '300px'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
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
    console.log('Cleaning up Marmara Website...');
    
    // Remove event listeners
    this.eventListeners.forEach((listeners, element) => {
      listeners.forEach(({ event, handler }) => {
        element.removeEventListener(event, handler);
      });
    });
    this.eventListeners.clear();
    
    // Disconnect observers
    this.observers.forEach((observer) => {
      observer.disconnect();
    });
    this.observers.clear();
    
    // Clean up GSAP slider
    if (this.gsapSlider) {
      this.gsapSlider.destroy();
    }
    
    // Clean up GSAP ScrollTriggers
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
    
    console.log('Cleanup completed');
  }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('=== MARMARA WEBSITE STARTING ===');
  console.log('DOM Content Loaded at:', new Date().toLocaleTimeString());
  console.log('Viewport size:', `${window.innerWidth}x${window.innerHeight}`);
  console.log('User agent:', navigator.userAgent);
  
  // Initialize the main website class
  const website = new MarmaraWebsite();
  
  // Make it globally accessible for debugging
  window.marmaraWebsite = website;
  
  console.log('Marmara Website instance created and globally accessible as window.marmaraWebsite');
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Page hidden - pausing animations');
    if (typeof gsap !== 'undefined') {
      gsap.globalTimeline.pause();
    }
  } else {
    console.log('Page visible - resuming animations');
    if (typeof gsap !== 'undefined') {
      gsap.globalTimeline.resume();
    }
  }
});

// Handle window resize events
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  console.log(`Window resized: ${width}x${height}`);
  
  // Trigger custom responsive resize event
  const event = new CustomEvent('responsiveResize', {
    detail: { width, height, isMobile: width <= 1023 }
  });
  document.dispatchEvent(event);
});

// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      try {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData) {
          console.log('=== PERFORMANCE METRICS ===');
          console.log('Load Time:', Math.round(perfData.loadEventEnd - perfData.fetchStart) + 'ms');
          console.log('DOM Ready:', Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart) + 'ms');
          
          const paintEntries = performance.getEntriesByType('paint');
          if (paintEntries.length) {
            console.log('First Paint:', Math.round(paintEntries[0].startTime) + 'ms');
          }
        }
      } catch (error) {
        console.log('Performance monitoring error:', error);
      }
    }, 1000);
  });
}

// Global error handling
window.addEventListener('error', (error) => {
  console.error('Global error caught:', error.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Debug functions for testing
window.debugMobileMenu = function() {
  if (window.marmaraWebsite && typeof window.mobileMenuInfo === 'function') {
    console.log('Mobile Menu Debug Info:', window.mobileMenuInfo());
  } else {
    console.log('Mobile menu debug info not available');
  }
};

// Expose gallery manager globally
window.galleryManager = null; // Will be set by the GalleryManager class

console.log('=== MARMARA WEBSITE SCRIPT LOADED SUCCESSFULLY ===');
console.log('Available debug functions:');
console.log('- window.debugMobileMenu() - Debug mobile menu state');
console.log('- window.testMobileMenu() - Test mobile menu toggle');
console.log('- window.mobileMenuInfo() - Get mobile menu info');
console.log('- window.marmaraWebsite - Main website instance');
