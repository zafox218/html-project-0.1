// Ultra-Modern JavaScript for Marmara 2025 - Red Theme
'use strict';

class MarmaraWebsite {
  constructor() {
    this.isLoaded = false;
    this.scrollPosition = 0;
    this.ticking = false;
    
    this.init();
  }

  init() {
    // Wait for DOM and critical resources
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
    
    // Final setup after all resources load
    window.addEventListener('load', () => {
      this.isLoaded = true;
      document.body.classList.add('loaded');
      this.initAnimations();
    });
  }

  setup() {
    this.initScrollProgress();
    this.initMobileNavigation();
    this.initHeaderEffects();
    this.initLanguageToggle();
    this.initScrollSpy();
    this.initGalleryFilters();
    this.initLightbox();
    this.initRevealAnimations();
    this.initSmoothScrolling();
    this.initStatsCounter();
    this.initLazyLoading();
    this.initAccessibility();
    this.initBrandHeroEffects();
    this.initPerformanceOptimizations();
  }

  // Brand Hero Effects
  initBrandHeroEffects() {
    const brandHero = document.querySelector('.brand-hero');
    const brandLogo = document.querySelector('.brand-hero-logo');
    
    if (!brandHero) return;

    // Parallax effect for brand hero
    const handleBrandHeroParallax = () => {
      if (!this.ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;
          const heroHeight = brandHero.offsetHeight;
          const translateY = scrollTop * 0.5;
          
          if (scrollTop < heroHeight) {
            brandHero.style.transform = `translateY(${translateY}px)`;
          }
          
          this.ticking = false;
        });
        this.ticking = true;
      }
    };

    // Brand logo hover effect
    if (brandLogo) {
      brandLogo.addEventListener('mouseenter', () => {
        brandLogo.style.transform = 'scale(1.05) rotate(2deg)';
      });
      
      brandLogo.addEventListener('mouseleave', () => {
        brandLogo.style.transform = 'scale(1) rotate(0deg)';
      });
    }

    window.addEventListener('scroll', handleBrandHeroParallax, { passive: true });
  }

  // Scroll Progress Indicator
  initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    if (!progressBar) return;

    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      progressBar.style.width = `${Math.min(progress, 100)}%`;
    };

    window.addEventListener('scroll', () => {
      if (!this.ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          this.ticking = false;
        });
        this.ticking = true;
      }
    }, { passive: true });

    updateProgress();
  }

  // Enhanced Mobile Navigation
  initMobileNavigation() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-menu');
    const overlay = document.querySelector('[data-nav-overlay]');
    const body = document.body;

    if (!toggle || !nav) return;

    const toggleNav = (open) => {
      const isOpen = typeof open === 'boolean' ? open : !nav.classList.contains('open');
      
      nav.classList.toggle('open', isOpen);
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
      
      if (overlay) {
        overlay.toggleAttribute('hidden', !isOpen);
      }
      
      body.style.overflow = isOpen ? 'hidden' : '';
      
      // Focus management
      if (isOpen) {
        nav.querySelector('a')?.focus();
      } else {
        toggle.focus();
      }
    };

    toggle.addEventListener('click', () => toggleNav());
    overlay?.addEventListener('click', () => toggleNav(false));

    // Close nav on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        toggleNav(false);
      }
    });

    // Close nav when clicking internal links
    nav.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', () => toggleNav(false));
    });

    // Close nav on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        toggleNav(false);
      }
    });
  }

  // Advanced Header Effects
  initHeaderEffects() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScroll = 0;
    let headerHeight = header.offsetHeight;
    
    const updateHeader = () => {
      const currentScroll = window.pageYOffset;
      const scrollingDown = currentScroll > lastScroll;
      const scrolledPastHeader = currentScroll > headerHeight;

      // Add/remove scrolled class
      header.classList.toggle('scrolled', currentScroll > 50);

      // Show/hide header based on scroll direction
      if (scrolledPastHeader) {
        if (scrollingDown) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
      } else {
        header.style.transform = 'translateY(0)';
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', () => {
      if (!this.ticking) {
        requestAnimationFrame(() => {
          updateHeader();
          this.ticking = false;
        });
        this.ticking = true;
      }
    }, { passive: true });

    // Update header height on resize
    window.addEventListener('resize', () => {
      headerHeight = header.offsetHeight;
    });
  }

  // Enhanced Language Toggle
  initLanguageToggle() {
    const langButtons = document.querySelectorAll('[data-lang]');
    const htmlElement = document.documentElement;

    const translations = {
      ar: {
        'site-title': 'مرمرة لمستلزمات الرخام والجرانيت',
        'nav-home': 'الرئيسية',
        'nav-about': 'من نحن',
        'nav-products': 'المنتجات',
        'nav-gallery': 'المعارض',
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
        'gallery-eyebrow': 'معرض تفاعلي',
        'gallery-title': 'استكشف منتجاتنا بالتفصيل',
        'cat-machine': 'أدوات قطع ماكينة',
        'cat-grind': 'أدوات قطع وجلخ',
        'cat-porcelain': 'أدوات قطع بورسلين',
        'cat-drill': 'أدوات ثقب متقدمة',
        'cat-misc': 'أدوات متنوعة أخرى',
        'view-gallery': 'استعرض المجموعة',
        'filter-all': 'جميع المنتجات',
        'filter-machine': 'ماكينة',
        'filter-grind': 'جلخ',
        'filter-porcelain': 'بورسلين',
        'filter-drill': 'ثقب',
        'filter-misc': 'أخرى'
      },
      en: {
        'site-title': 'Marmara – Marble & Granite Supplies',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-products': 'Products',
        'nav-gallery': 'Gallery',
        'nav-map': 'Branches',
        'nav-contact': 'Contact',
        'brand-hero-title': 'Marmara™',
        'brand-hero-subtitle': 'Professional Tools • Exceptional Quality • Trusted Expertise',
        'brand-hero-cta1': 'Discover Our Products',
        'brand-hero-cta2': 'Contact Us',
        'header-cta': 'Get Started',
        'about-eyebrow': 'Success Story',
        'about-title': 'Excellence Journey in Natural Stone World',
        'about-desc': 'For more than a decade, we have been shaping the future in the marble and granite supplies industry',
        'about-desc1': 'At Marmara, we believe every marble piece tells a story, and every tool creates a masterpiece. We don\'t just sell products; we provide integrated solutions that fulfill engineers\' and designers\' dreams.',
        'about-cta1': 'Explore Collections',
        'about-cta2': 'Talk to Us',
        'products-eyebrow': 'Featured Collections',
        'products-title': 'Professional Tools for Exceptional Projects',
        'products-desc': 'Comprehensive collection of the finest tools and supplies with competitive prices and guaranteed quality',
        'gallery-eyebrow': 'Interactive Gallery',
        'gallery-title': 'Explore Our Products in Detail',
        'cat-machine': 'Machine Cutting Tools',
        'cat-grind': 'Cutting & Grinding Tools',
        'cat-porcelain': 'Porcelain Cutting Tools',
        'cat-drill': 'Advanced Drilling Tools',
        'cat-misc': 'Various Other Tools',
        'view-gallery': 'View Collection',
        'filter-all': 'All Products',
        'filter-machine': 'Machine',
        'filter-grind': 'Grinding',
        'filter-porcelain': 'Porcelain',
        'filter-drill': 'Drilling',
        'filter-misc': 'Other'
      }
    };

    const applyLanguage = (lang) => {
      const dict = translations[lang] || translations.ar;

      // Update all translatable elements
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (dict[key]) {
          if (element.tagName === 'INPUT' && element.type === 'submit') {
            element.value = dict[key];
          } else {
            element.textContent = dict[key];
          }
        }
      });

      // Update document attributes
      if (lang === 'en') {
        htmlElement.setAttribute('lang', 'en');
        htmlElement.setAttribute('dir', 'ltr');
        document.body.style.fontFamily = 'var(--font-family-sans)';
      } else {
        htmlElement.setAttribute('lang', 'ar');
        htmlElement.setAttribute('dir', 'rtl');
        document.body.style.fontFamily = '"Tajawal", var(--font-family-sans)';
      }

      // Update button states
      langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });

      // Save preference
      localStorage.setItem('preferredLang', lang);

      // Announce language change to screen readers
      this.announceToScreenReader(`Language changed to ${lang === 'ar' ? 'Arabic' : 'English'}`);
    };

    // Event listeners
    langButtons.forEach(button => {
      button.addEventListener('click', () => {
        applyLanguage(button.dataset.lang);
      });
    });

    // Apply saved language
    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    applyLanguage(savedLang);
  }

  // Advanced Scroll Spy
  initScrollSpy() {
    const sections = Array.from(document.querySelectorAll('main section[id], .brand-hero[id]'));
    const navLinks = Array.from(document.querySelectorAll('.nav-menu a[href^="#"]'));
    
    if (sections.length === 0 || navLinks.length === 0) return;

    const linkMap = new Map(
      navLinks.map(link => [link.getAttribute('href').slice(1), link])
    );

    const scrollSpy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const link = linkMap.get(entry.target.id);
        if (link) {
          if (entry.isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0.1, 0.3, 0.5]
    });

    sections.forEach(section => scrollSpy.observe(section));
  }

  // Enhanced Gallery Filters
  initGalleryFilters() {
    const filterBar = document.querySelector('.filter-bar');
    const galleries = document.querySelectorAll('.gallery');
    
    if (!filterBar || galleries.length === 0) return;

    const animateGalleries = (filterValue) => {
      galleries.forEach((gallery, index) => {
        const category = gallery.getAttribute('data-cat');
        const shouldShow = filterValue === 'all' || filterValue === category;
        
        // Add staggered animation delay
        const delay = index * 100;
        
        if (shouldShow) {
          setTimeout(() => {
            gallery.style.display = '';
            gallery.classList.add('visible');
          }, delay);
        } else {
          gallery.classList.remove('visible');
          setTimeout(() => {
            if (!gallery.classList.contains('visible')) {
              gallery.style.display = 'none';
            }
          }, 300);
        }
      });
    };

    filterBar.addEventListener('click', (e) => {
      const button = e.target.closest('[data-filter]');
      if (!button) return;

      e.preventDefault();
      
      const filterValue = button.getAttribute('data-filter');
      
      // Update active button
      filterBar.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('active');
      });
      button.classList.add('active');
      
      // Animate galleries
      animateGalleries(filterValue);
      
      // Update URL without page reload
      const url = new URL(window.location);
      if (filterValue === 'all') {
        url.searchParams.delete('filter');
      } else {
        url.searchParams.set('filter', filterValue);
      }
      history.replaceState(null, '', url);

      // Announce filter change
      this.announceToScreenReader(`Filtered to show ${filterValue === 'all' ? 'all products' : filterValue + ' products'}`);
    });

    // Apply filter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const initialFilter = urlParams.get('filter') || 'all';
    const initialButton = filterBar.querySelector(`[data-filter="${initialFilter}"]`);
    if (initialButton) {
      initialButton.click();
    }
  }

  // Premium Lightbox
  initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox?.querySelector('img');
    const closeBtn = lightbox?.querySelector('[data-close]');
    
    if (!lightbox || !lightboxImg) return;

    let currentImages = [];
    let currentIndex = 0;

    const openLightbox = (img, images) => {
      currentImages = images;
      currentIndex = images.indexOf(img);
      
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      
      lightbox.classList.add('open');
      lightbox.removeAttribute('hidden');
      lightbox.setAttribute('aria-hidden', 'false');
      
      document.body.style.overflow = 'hidden';
      
      // Focus management
      closeBtn?.focus();
      
      // Announce to screen readers
      this.announceToScreenReader(`Opened image ${currentIndex + 1} of ${currentImages.length}: ${img.alt}`);
    };

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('hidden', '');
      lightbox.setAttribute('aria-hidden', 'true');
      
      document.body.style.overflow = '';
      
      // Return focus to trigger element
      const triggerImg = currentImages[currentIndex];
      if (triggerImg) {
        triggerImg.focus();
      }
    };

    const navigateLightbox = (direction) => {
      if (currentImages.length <= 1) return;
      
      const newIndex = (currentIndex + direction + currentImages.length) % currentImages.length;
      const newImg = currentImages[newIndex];
      
      lightboxImg.style.opacity = '0';
      
      setTimeout(() => {
        lightboxImg.src = newImg.src;
        lightboxImg.alt = newImg.alt;
        lightboxImg.style.opacity = '1';
        currentIndex = newIndex;
        
        this.announceToScreenReader(`Image ${currentIndex + 1} of ${currentImages.length}: ${newImg.alt}`);
      }, 150);
    };

    // Add click handlers to gallery images
    document.addEventListener('click', (e) => {
      const img = e.target.closest('.gallery-item img');
      if (img) {
        e.preventDefault();
        const galleryImages = Array.from(
          img.closest('.gallery').querySelectorAll('.gallery-item img')
        );
        openLightbox(img, galleryImages);
      }
    });

    // Event listeners
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.hasAttribute('data-close')) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;

      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateLightbox(-1);
          break;
        case 'ArrowRight':
          navigateLightbox(1);
          break;
      }
    });
  }

  // Advanced Reveal Animations
  initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length === 0) return;

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          
          // Unobserve after revealing to improve performance
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  }

  // Smooth Scrolling Enhancement
  initSmoothScrolling() {
    // Handle all anchor links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        
        // Calculate offset for fixed header
        const header = document.querySelector('.site-header');
        const headerHeight = header ? header.offsetHeight + 20 : 80;
        
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        // Smooth scroll with easing
        this.smoothScrollTo(targetPosition, 800);
        
        // Update URL
        history.pushState(null, '', href);
        
        // Announce navigation
        this.announceToScreenReader(`Navigated to ${targetElement.textContent || targetId}`);
      }
    });
  }

  // Custom smooth scroll function
  smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = easeOutCubic(progress);
      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }

  // Animated Stats Counter
  initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length === 0) return;

    const animateNumber = (element) => {
      const target = parseInt(element.getAttribute('data-count')) || parseInt(element.textContent);
      const suffix = element.textContent.replace(/\d/g, '');
      const duration = 2000;
      const start = performance.now();

      const updateNumber = (currentTime) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * target);
        
        element.textContent = current + suffix;
        
        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        }
      };

      requestAnimationFrame(updateNumber);
    };

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumber(entry.target);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => statsObserver.observe(stat));
  }

  // Enhanced Lazy Loading
  initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            
            // Add loading state
            img.classList.add('loading');
            
            // Load image
            const tempImg = new Image();
            tempImg.onload = () => {
              img.src = tempImg.src;
              img.classList.remove('loading');
              img.classList.add('loaded');
            };
            tempImg.onerror = () => {
              img.classList.remove('loading');
              img.classList.add('error');
              img.alt = 'فشل في تحميل الصورة';
            };
            tempImg.src = img.src;
            
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '100px'
      });

      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }

  // Accessibility Enhancements
  initAccessibility() {
    // Skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(skipLink.getAttribute('href'));
        if (target) {
          target.focus();
          target.scrollIntoView();
        }
      });
    }

    // Enhanced focus management
    document.addEventListener('keydown', (e) => {
      // Tab trap for mobile menu
      if (e.key === 'Tab') {
        const nav = document.querySelector('.nav-menu');
        if (nav && nav.classList.contains('open')) {
          const focusableElements = nav.querySelectorAll(
            'a, button, [tabindex]:not([tabindex="-1"])'
          );
          
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    });

    // Reduced motion support
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--duration-150', '0ms');
      document.documentElement.style.setProperty('--duration-300', '0ms');
      document.documentElement.style.setProperty('--duration-500', '0ms');
      document.documentElement.style.setProperty('--duration-700', '0ms');
    }
  }

  // Performance Optimizations
  initPerformanceOptimizations() {
    // Prefetch important pages
    const prefetchLinks = [
      '#about',
      '#products',
      '#galleries'
    ];

    prefetchLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    });

    // Connection optimization
    if ('connection' in navigator) {
      const connection = navigator.connection;
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        // Reduce animations for slow connections
        document.documentElement.classList.add('slow-connection');
      }
    }

    // Resource hints
    const resourceHints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//www.google.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ];

    resourceHints.forEach(hint => {
      const link = document.createElement('link');
      Object.assign(link, hint);
      document.head.appendChild(link);
    });
  }

  // Animation Initialization
  initAnimations() {
    // Stagger reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((element, index) => {
      element.style.transitionDelay = `${index * 100}ms`;
    });

    // Initialize GSAP animations if available
    if (typeof gsap !== 'undefined') {
      this.initGSAPAnimations();
    }
  }

  // GSAP Animations (if library is loaded)
  initGSAPAnimations() {
    // Brand Hero animations
    gsap.from('.brand-hero-content', {
      duration: 1.5,
      y: 80,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.3
    });

    // Stagger product cards
    gsap.from('.product-grid .card', {
      duration: 0.8,
      y: 40,
      opacity: 0,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.product-grid',
        start: 'top 80%'
      }
    });
  }

  // Utility Functions
  announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.style.cssText = `
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    `;
    
    document.body.appendChild(announcement);
    announcement.textContent = message;
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  // Debounce utility
  debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  }

  // Throttle utility
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Initialize the application
const marmaraApp = new MarmaraWebsite();

// Global error handling
window.addEventListener('error', (e) => {
  console.error('JavaScript error:', e.error);
  
  // Send error to analytics if available
  if (typeof gtag !== 'undefined') {
    gtag('event', 'exception', {
      description: e.error.toString(),
      fatal: false
    });
  }
});

// Service Worker registration (if available)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MarmaraWebsite;
}
