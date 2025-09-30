// Ultra-Modern JavaScript for Marmara 2025 - Fully Responsive
'use strict';

class MarmaraWebsite {
  constructor() {
    this.isLoaded = false;
    this.scrollPosition = 0;
    this.ticking = false;
    this.touchStartY = 0;
    this.touchEndY = 0;
    this.isTouchDevice = false;
    this.currentFilter = 'all';
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    this.init();
  }

  init() {
    // Detect touch device
    this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (this.isTouchDevice) {
      document.documentElement.classList.add('touch-device');
    }

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
      this.hideLoadingIndicator();
    });

    // Handle page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pauseAnimations();
      } else {
        this.resumeAnimations();
      }
    });
  }

  setup() {
    this.showLoadingIndicator();
    this.initResponsiveFeatures();
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
    this.initErrorHandling();
    this.initSwipeGestures();
    this.initKeyboardNavigation();
    this.hideLoadingIndicator();
  }

  // Enhanced Responsive Features
  initResponsiveFeatures() {
    // Viewport height fix for mobile browsers
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', this.debounce(setVH, 100));
    window.addEventListener('orientationchange', () => {
      setTimeout(setVH, 100);
    });

    // Enhanced responsive image loading
    this.initResponsiveImages();
    
    // Mobile-specific optimizations
    this.initMobileOptimizations();
    
    // Handle resize events
    this.initResizeHandler();
  }

  initResponsiveImages() {
    const images = document.querySelectorAll('img[data-src], img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            
            // Add loading state
            img.classList.add('loading');
            
            // Load appropriate image size based on screen width
            let imageSrc = img.dataset.src || img.src;
            const screenWidth = window.innerWidth;
            
            if (screenWidth <= 480 && img.dataset.srcSmall) {
              imageSrc = img.dataset.srcSmall;
            } else if (screenWidth <= 768 && img.dataset.srcMedium) {
              imageSrc = img.dataset.srcMedium;
            } else if (screenWidth <= 1200 && img.dataset.srcLarge) {
              imageSrc = img.dataset.srcLarge;
            }
            
            // Create new image to preload
            const newImg = new Image();
            newImg.onload = () => {
              img.src = imageSrc;
              img.classList.remove('loading');
              img.classList.add('loaded');
              
              // Remove lazy loading attribute
              img.removeAttribute('loading');
            };
            
            newImg.onerror = () => {
              img.classList.remove('loading');
              img.classList.add('error');
              img.alt = 'فشل في تحميل الصورة';
              console.error('Failed to load image:', imageSrc);
            };
            
            newImg.src = imageSrc;
            imageObserver.unobserve(
            newImg.src = imageSrc;
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px'
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }

  initMobileOptimizations() {
    // Prevent zoom on input focus for iOS
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      const inputs = document.querySelectorAll('input, select, textarea');
      inputs.forEach(input => {
        if (parseFloat(getComputedStyle(input).fontSize) < 16) {
          input.style.fontSize = '16px';
        }
      });
    }

    // Add mobile class for specific styling
    if (window.innerWidth <= 768) {
      document.body.classList.add('mobile-device');
    }

    // Optimize touch scrolling
    if (this.isTouchDevice) {
      document.body.style.webkitOverflowScrolling = 'touch';
    }

    // Handle safe area for newer mobile devices
    const setSafeArea = () => {
      const safeAreaTop = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sat') || '0');
      const safeAreaBottom = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sab') || '0');
      
      if (safeAreaTop > 0) {
        document.documentElement.style.setProperty('--safe-area-top', `${safeAreaTop}px`);
      }
      if (safeAreaBottom > 0) {
        document.documentElement.style.setProperty('--safe-area-bottom', `${safeAreaBottom}px`);
      }
    };
    
    setSafeArea();
  }

  initResizeHandler() {
    const handleResize = this.debounce(() => {
      const width = window.innerWidth;
      
      // Update mobile/desktop classes
      if (width <= 768) {
        document.body.classList.add('mobile-device');
        document.body.classList.remove('desktop-device');
      } else {
        document.body.classList.remove('mobile-device');
        document.body.classList.add('desktop-device');
      }
      
      // Close mobile menu if screen becomes larger
      if (width > 991) {
        const nav = document.querySelector('.nav-menu');
        const toggle = document.querySelector('.menu-toggle');
        const overlay = document.querySelector('[data-nav-overlay]');
        
        if (nav && nav.classList.contains('open')) {
          nav.classList.remove('open');
          toggle?.classList.remove('active');
          toggle?.setAttribute('aria-expanded', 'false');
          overlay?.setAttribute('hidden', '');
          document.body.style.overflow = '';
        }
      }
      
      // Update gallery grid columns
      this.updateGalleryLayout();
      
      // Dispatch custom resize event
      window.dispatchEvent(new CustomEvent('optimizedResize', {
        detail: { width, height: window.innerHeight }
      }));
      
    }, 250);

    window.addEventListener('resize', handleResize);
  }

  // Brand Hero Effects
  initBrandHeroEffects() {
    const brandHero = document.querySelector('.brand-hero');
    const brandLogo = document.querySelector('.brand-hero-logo');
    
    if (!brandHero) return;

    // Parallax effect for brand hero
    const handleBrandHeroParallax = () => {
      if (this.isReducedMotion) return;
      
      if (!this.ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;
          const heroHeight = brandHero.offsetHeight;
          const translateY = scrollTop * 0.3; // Reduced for better mobile performance
          
          if (scrollTop < heroHeight && window.innerWidth > 768) {
            brandHero.style.transform = `translateY(${translateY}px)`;
          } else {
            brandHero.style.transform = 'translateY(0px)';
          }
          
          this.ticking = false;
        });
        this.ticking = true;
      }
    };

    // Brand logo hover/touch effect
    if (brandLogo) {
      const applyLogoEffect = () => {
        brandLogo.style.transform = 'scale(1.05) rotate(2deg)';
      };
      
      const resetLogoEffect = () => {
        brandLogo.style.transform = 'scale(1) rotate(0deg)';
      };
      
      if (this.isTouchDevice) {
        brandLogo.addEventListener('touchstart', applyLogoEffect, { passive: true });
        brandLogo.addEventListener('touchend', resetLogoEffect, { passive: true });
      } else {
        brandLogo.addEventListener('mouseenter', applyLogoEffect);
        brandLogo.addEventListener('mouseleave', resetLogoEffect);
      }
    }

    // Only add parallax on non-touch devices for performance
    if (!this.isTouchDevice) {
      window.addEventListener('scroll', handleBrandHeroParallax, { passive: true });
    }
  }

  // Enhanced Scroll Progress Indicator
  initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    if (!progressBar) return;

    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.max(0, Math.min((scrollTop / docHeight) * 100, 100));
      
      progressBar.style.width = `${progress}%`;
      progressBar.setAttribute('aria-valuenow', progress.toFixed(0));
    };

    const throttledUpdate = this.throttle(updateProgress, 16); // ~60fps
    window.addEventListener('scroll', throttledUpdate, { passive: true });
    updateProgress(); // Initial call
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
      toggle.setAttribute('aria-expanded', isOpen.toString());
      
      if (overlay) {
        if (isOpen) {
          overlay.removeAttribute('hidden');
          overlay.setAttribute('aria-hidden', 'false');
        } else {
          overlay.setAttribute('hidden', '');
          overlay.setAttribute('aria-hidden', 'true');
        }
      }
      
      // Prevent body scroll when menu is open
      if (isOpen) {
        this.scrollPosition = window.pageYOffset;
        body.style.position = 'fixed';
        body.style.top = `-${this.scrollPosition}px`;
        body.style.width = '100%';
      } else {
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        window.scrollTo(0, this.scrollPosition);
      }
      
      // Focus management
      if (isOpen) {
        const firstLink = nav.querySelector('a');
        if (firstLink) {
          setTimeout(() => firstLink.focus(), 100);
        }
      } else {
        toggle.focus();
      }
      
      // Announce state change
      this.announceToScreenReader(
        isOpen ? 'القائمة مفتوحة' : 'القائمة مغلقة'
      );
    };

    // Toggle button event
    toggle.addEventListener('click', () => toggleNav());
    
    // Overlay click event
    overlay?.addEventListener('click', () => toggleNav(false));

    // Close nav on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        toggleNav(false);
      }
    });

    // Close nav when clicking internal links
    nav.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', () => {
        toggleNav(false);
      });
    });

    // Handle focus trap in mobile menu
    if (this.isTouchDevice) {
      this.setupFocusTrap(nav, toggle);
    }
  }

  setupFocusTrap(container, trigger) {
    const getFocusableElements = () => {
      return container.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
    };

    container.addEventListener('keydown', (e) => {
      if (!container.classList.contains('open')) return;
      
      if (e.key === 'Tab') {
        const focusableElements = getFocusableElements();
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
    });
  }

  // Advanced Header Effects
  initHeaderEffects() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScroll = 0;
    let headerHeight = header.offsetHeight;
    let isHeaderHidden = false;
    
    const updateHeader = () => {
      const currentScroll = window.pageYOffset;
      const scrollingDown = currentScroll > lastScroll;
      const scrolledPastHeader = currentScroll > headerHeight;

      // Add/remove scrolled class with smooth transition
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Show/hide header based on scroll direction (desktop only)
      if (window.innerWidth > 768) {
        if (scrolledPastHeader && scrollingDown && !isHeaderHidden) {
          header.style.transform = 'translateY(-100%)';
          isHeaderHidden = true;
        } else if ((!scrollingDown || currentScroll <= headerHeight) && isHeaderHidden) {
          header.style.transform = 'translateY(0)';
          isHeaderHidden = false;
        }
      } else {
        // Always show header on mobile
        header.style.transform = 'translateY(0)';
        isHeaderHidden = false;
      }

      lastScroll = currentScroll;
    };

    const throttledUpdate = this.throttle(updateHeader, 16);
    window.addEventListener('scroll', throttledUpdate, { passive: true });

    // Update header height on resize
    window.addEventListener('optimizedResize', () => {
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

      // Update all translatable elements with animation
      document.querySelectorAll('[data-i18n]').forEach((element, index) => {
        const key = element.getAttribute('data-i18n');
        if (dict[key]) {
          // Add fade effect for smooth transition
          element.style.opacity = '0.7';
          
          setTimeout(() => {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
              element.value = dict[key];
            } else {
              element.textContent = dict[key];
            }
            element.style.opacity = '1';
          }, index * 10); // Staggered animation
        }
      });

      // Update document attributes
      if (lang === 'en') {
        htmlElement.setAttribute('lang', 'en');
        htmlElement.setAttribute('dir', 'ltr');
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
      } else {
        htmlElement.setAttribute('lang', 'ar');
        htmlElement.setAttribute('dir', 'rtl');
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
      }

      // Update button states
      langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
        btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
      });

      // Save preference
      try {
        localStorage.setItem('marmaraPreferredLang', lang);
      } catch (e) {
        console.warn('Could not save language preference:', e);
      }

      // Announce language change
      this.announceToScreenReader(
        `Language changed to ${lang === 'ar' ? 'Arabic' : 'English'}`
      );
    };

    // Event listeners with enhanced accessibility
    langButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        applyLanguage(button.dataset.lang);
      });
      
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          applyLanguage(button.dataset.lang);
        }
      });
    });

    // Apply saved language with fallback
    const savedLang = (() => {
      try {
        return localStorage.getItem('marmaraPreferredLang') || 'ar';
      } catch (e) {
        return 'ar';
      }
    })();
    
    applyLanguage(savedLang);
  }

  // Advanced Scroll Spy with Intersection Observer
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
            // Remove active class from all links
            navLinks.forEach(l => {
              l.classList.remove('active');
              l.setAttribute('aria-current', 'false');
            });
            
            // Add active class to current link
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
            
            // Update URL without scrolling
            if (history.pushState) {
              const newUrl = `${window.location.origin}${window.location.pathname}#${entry.target.id}`;
              history.replaceState(null, '', newUrl);
            }
          }
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0.1, 0.3, 0.5]
    });

    sections.forEach(section => scrollSpy.observe(section));
  }

  // Enhanced Gallery Filters with ARIA support
  initGalleryFilters() {
    const filterBar = document.querySelector('.filter-bar');
    const galleries = document.querySelectorAll('.gallery');
    
    if (!filterBar || galleries.length === 0) return;

    const animateGalleries = (filterValue) => {
      // Update filter buttons state
      filterBar.querySelectorAll('button').forEach(btn => {
        const isActive = btn.getAttribute('data-filter') === filterValue;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive.toString());
      });

      galleries.forEach((gallery, index) => {
        const category = gallery.getAttribute('data-cat');
        const shouldShow = filterValue === 'all' || filterValue === category;
        
        if (shouldShow) {
          // Show gallery with staggered animation
          const delay = this.isReducedMotion ? 0 : index * 100;
          
          setTimeout(() => {
            gallery.style.display = '';
            gallery.classList.add('visible');
            gallery.setAttribute('aria-hidden', 'false');
            
            // Focus management for keyboard users
            if (document.activeElement && document.activeElement.matches('[data-filter]')) {
              const firstImage = gallery.querySelector('.gallery-item img');
              if (firstImage) {
                firstImage.setAttribute('tabindex', '0');
              }
            }
          }, delay);
        } else {
          // Hide gallery
          gallery.classList.remove('visible');
          gallery.setAttribute('aria-hidden', 'true');
          
          setTimeout(() => {
            if (!gallery.classList.contains('visible')) {
              gallery.style.display = 'none';
            }
          }, this.isReducedMotion ? 0 : 300);
        }
      });
    };

    filterBar.addEventListener('click', (e) => {
      const button = e.target.closest('[data-filter]');
      if (!button) return;

      e.preventDefault();
      
      const filterValue = button.getAttribute('data-filter');
      this.currentFilter = filterValue;
      
      // Animate galleries
      animateGalleries(filterValue);
      
      // Update URL
      const url = new URL(window.location);
      if (filterValue === 'all') {
        url.searchParams.delete('filter');
      } else {
        url.searchParams.set('filter', filterValue);
      }
      history.replaceState(null, '', url);

      // Announce filter change
      const productCount = document.querySelectorAll(`.gallery[data-cat="${filterValue}"] .gallery-item`).length;
      const totalCount = document.querySelectorAll('.gallery-item').length;
      const count = filterValue === 'all' ? totalCount : productCount;
      
      this.announceToScreenReader(
        `عرض ${count} منتج${count > 1 ? 'ات' : ''} ${filterValue === 'all' ? 'جميع الفئات' : 'فئة ' + button.textContent}`
      );
    });

    // Keyboard navigation for filters
    filterBar.addEventListener('keydown', (e) => {
      const buttons = Array.from(filterBar.querySelectorAll('[data-filter]'));
      const currentIndex = buttons.findIndex(btn => btn === e.target);
      
      let newIndex = currentIndex;
      
      switch (e.key) {
        case 'ArrowLeft':
          newIndex = currentIndex > 0 ? currentIndex - 1 : buttons.length - 1;
          break;
        case 'ArrowRight':
          newIndex = currentIndex < buttons.length - 1 ? currentIndex + 1 : 0;
          break;
        case 'Home':
          newIndex = 0;
          break;
        case 'End':
          newIndex = buttons.length - 1;
          break;
        default:
          return;
      }
      
      e.preventDefault();
      buttons[newIndex].focus();
    });

    // Apply filter from URL on page load
    const urlParams = new URLSearchParams(window.location.search);
    const initialFilter = urlParams.get('filter') || 'all';
    const initialButton = filterBar.querySelector(`[data-filter="${initialFilter}"]`);
    
    if (initialButton) {
      setTimeout(() => {
        initialButton.click();
      }, 100);
    }
  }

  updateGalleryLayout() {
    // Recalculate gallery layout on screen resize
    const galleries = document.querySelectorAll('.gallery-grid');
    
    galleries.forEach(gallery => {
      // Force reflow for grid recalculation
      gallery.style.display = 'none';
      gallery.offsetHeight; // Trigger reflow
      gallery.style.display = '';
    });
  }

  // Premium Responsive Lightbox
  initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox?.querySelector('#lightbox-image');
    const closeBtn = lightbox?.querySelector('[data-close]');
    
    if (!lightbox || !lightboxImg) return;

    let currentImages = [];
    let currentIndex = 0;
    let startX = 0;
    let startY = 0;

    const openLightbox = (img, images) => {
      currentImages = images;
      currentIndex = images.indexOf(img);
      
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      
      lightbox.classList.add('open');
      lightbox.removeAttribute('hidden');
      lightbox.setAttribute('aria-hidden', 'false');
      
      // Prevent body scroll
      this.scrollPosition = window.pageYOffset;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = '100%';
      
      // Focus management
      closeBtn?.focus();
      
      // Add swipe listeners for mobile
      if (this.isTouchDevice) {
        lightbox.addEventListener('touchstart', handleTouchStart, { passive: true });
        lightbox.addEventListener('touchmove', handleTouchMove, { passive: false });
        lightbox.addEventListener('touchend', handleTouchEnd, { passive: true });
      }
      
      // Announce to screen readers
      this.announceToScreenReader(
        `فتح الصورة ${currentIndex + 1} من ${currentImages.length}: ${img.alt}`
      );
    };

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('hidden', '');
      lightbox.setAttribute('aria-hidden', 'true');
      
      // Restore body scroll
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, this.scrollPosition);
      
      // Remove touch listeners
      if (this.isTouchDevice) {
        lightbox.removeEventListener('touchstart', handleTouchStart);
        lightbox.removeEventListener('touchmove', handleTouchMove);
        lightbox.removeEventListener('touchend', handleTouchEnd);
      }
      
      // Return focus
      const triggerImg = currentImages[currentIndex];
      if (triggerImg) {
        setTimeout(() => triggerImg.focus(), 100);
      }
      
      this.announceToScreenReader('تم إغلاق الصورة');
    };

    const navigateLightbox = (direction) => {
      if (currentImages.length <= 1) return;
      
      const newIndex = (currentIndex + direction + currentImages.length) % currentImages.length;
      const newImg = currentImages[newIndex];
      
      // Add loading effect
      lightboxImg.style.opacity = '0.5';
      
      setTimeout(() => {
        lightboxImg.src = newImg.src;
        lightboxImg.alt = newImg.alt;
        lightboxImg.style.opacity = '1';
        currentIndex = newIndex;
        
        this.announceToScreenReader(
          `الصورة ${currentIndex + 1} من ${currentImages.length}: ${newImg.alt}`
        );
      }, 150);
    };

    // Touch handlers for swipe gestures
    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!startX || !startY) return;
      
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      
      const diffX = startX - currentX;
      const diffY = startY - currentY;
      
      // Prevent vertical scroll if horizontal swipe is detected
      if (Math.abs(diffX) > Math.abs(diffY)) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      if (!startX || !startY) return;
      
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      
      const diffX = startX - endX;
      const diffY = startY - endY;
      
      // Check if it's a horizontal swipe (more horizontal than vertical)
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          navigateLightbox(1); // Swipe left - next image
        } else {
          navigateLightbox(-1); // Swipe right - previous image
        }
      }
      
      startX = 0;
      startY = 0;
    };

    // Click handlers for gallery images
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

    // Enhanced keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;

      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          closeLightbox();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          navigateLightbox(-1);
          break;
        case 'ArrowRight':
          e.preventDefault();
          navigateLightbox(1);
          break;
        case 'Home':
          e.preventDefault();
          if (currentImages.length > 1) {
            currentIndex = 0;
            navigateLightbox(0);
          }
          break;
        case 'End':
          e.preventDefault();
          if (currentImages.length > 1) {
            currentIndex = currentImages.length - 1;
            navigateLightbox(0);
          }
          break;
      }
    });
  }

  // Advanced Reveal Animations with Performance Optimization
  initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length === 0 || this.isReducedMotion) {
      // Skip animations but still add class for layout
      revealElements.forEach(element => {
        element.classList.add('in-view');
      });
      return;
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation with slight delay for staggered effect
          const delay = parseInt(entry.target.style.transitionDelay) || 0;
          
          setTimeout(() => {
            entry.target.classList.add('in-view');
          }, delay);
          
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

  // Enhanced Smooth Scrolling
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
        
        // Close mobile menu if open
        const nav = document.querySelector('.nav-menu');
        if (nav && nav.classList.contains('open')) {
          const toggle = document.querySelector('.menu-toggle');
          toggle?.click();
        }
        
        // Calculate offset for fixed header
        const header = document.querySelector('.site-header');
        const headerHeight = header ? header.offsetHeight + 20 : 80;
        
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        // Use native smooth scroll if supported, fallback to custom
        if ('scrollBehavior' in document.documentElement.style && !this.isReducedMotion) {
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        } else {
          this.smoothScrollTo(targetPosition, this.isReducedMotion ? 0 : 800);
        }
        
        // Update URL
        history.pushState(null, '', href);
        
        // Announce navigation
        this.announceToScreenReader(`انتقال إلى ${targetElement.textContent || targetId}`);
        
        // Focus target element for accessibility
        setTimeout(() => {
          targetElement.focus();
        }, 100);
      }
    });
  }

  // Custom smooth scroll function with easing
  smoothScrollTo(targetPosition, duration) {
    if (duration === 0) {
      window.scrollTo(0, targetPosition);
      return;
    }

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

  // Animated Stats Counter with Intersection Observer
  initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length === 0) return;

    const animateNumber = (element) => {
      const target = parseInt(element.getAttribute('data-count')) || parseInt(element.textContent);
      const suffix = element.textContent.replace(/\d/g, '');
      const duration = this.isReducedMotion ? 100 : 2000;
      const start = performance.now();

      const updateNumber = (currentTime) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * target);
        
        element.textContent = current + suffix;
        element.setAttribute('aria-valuenow', current);
        
        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          // Announce completion
          this.announceToScreenReader(`إحصائية مكتملة: ${target}${suffix}`);
        }
      };

      requestAnimationFrame(updateNumber);
    };

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add slight delay for better visual effect
          setTimeout(() => {
            animateNumber(entry.target);
          }, 200);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.5,
      rootMargin: '0px 0px -10% 0px'
    });

    statNumbers.forEach(stat => {
      stat.setAttribute('aria-live', 'polite');
      stat.setAttribute('role', 'status');
      statsObserver.observe(stat);
    });
  }

  // Enhanced Lazy Loading with Error Handling
  initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            
            // Add loading state
            img.classList.add('loading');
            
            // Create a new image to handle loading
            const tempImg = new Image();
            
            tempImg.onload = () => {
              img.src = tempImg.src;
              img.classList.remove('loading');
              img.classList.add('loaded');
              img.removeAttribute('loading');
            };
            
            tempImg.onerror = () => {
              img.classList.remove('loading');
              img.classList.add('error');
              img.alt = 'فشل في تحميل الصورة';
              
              // Try to load a placeholder image
              img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDMyMCAyNDAiIGZpbGw9Im5vbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5mYWlsZWQgdG8gbG9hZDwvdGV4dD4KPHN2Zz4=';
            };
            
            tempImg.src = img.src;
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '100px'
      });

      lazyImages.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for browsers without IntersectionObserver
      lazyImages.forEach(img => {
        img.src = img.src; // Force load
        img.removeAttribute('loading');
      });
    }
  }

  // Enhanced Accessibility Features
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

    // Enhanced focus management for dynamic content
    this.setupFocusManagement();
    
    // Keyboard navigation improvements
    this.initKeyboardNavigation();
    
    // ARIA live regions for dynamic updates
    this.setupARIALiveRegions();
    
    // High contrast mode detection
    if (window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches) {
      document.documentElement.classList.add('high-contrast');
    }

    // Reduced motion handling
    if (this.isReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
      this.disableAnimations();
    }
  }

  setupFocusManagement() {
    // Manage focus for modal dialogs
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        const lightbox = document.getElementById('lightbox');
        const nav = document.querySelector('.nav-menu');
        
        // Focus trap for lightbox
        if (lightbox && lightbox.classList.contains('open')) {
          const focusableElements = lightbox.querySelectorAll(
            'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          
          if (focusableElements.length > 0) {
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
      }
    });

    // Focus visible elements only
    document.addEventListener('focusin', (e) => {
      if (e.target.offsetParent === null) {
        e.target.blur();
      }
    });
  }

  initKeyboardNavigation() {
    // Enhanced keyboard support for gallery items
    document.addEventListener('keydown', (e) => {
      const galleryItem = e.target.closest('.gallery-item img');
      
      if (galleryItem && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        galleryItem.click();
      }
      
      // Navigation for filter buttons
      if (e.target.matches('[data-filter]')) {
        switch (e.key) {
          case 'Enter':
          case ' ':
            e.preventDefault();
            e.target.click();
            break;
        }
      }
    });

    // Add tab index to interactive elements
    document.querySelectorAll('.gallery-item img, .card').forEach((element, index) => {
      element.setAttribute('tabindex', '0');
      element.setAttribute('role', 'button');
    });
  }

  setupARIALiveRegions() {
    // Create announcement region if not exists
    if (!document.getElementById('aria-live-announcements')) {
      const liveRegion = document.createElement('div');
      liveRegion.id = 'aria-live-announcements';
      liveRegion.className = 'sr-only';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      document.body.appendChild(liveRegion);
    }
  }

  disableAnimations() {
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Enhanced Performance Optimizations
  initPerformanceOptimizations() {
    // Prefetch important resources
    this.prefetchResources();
    
    // Connection-based optimizations
    this.optimizeForConnection();
    
    // Resource hints
    this.addResourceHints();
    
    // Memory management
    this.setupMemoryManagement();
  }

  prefetchResources() {
    const importantLinks = [
      '#about',
      '#products',
      '#galleries'
    ];

    // Only prefetch on desktop with good connection
    if (window.innerWidth > 768 && !this.isSlowConnection()) {
      importantLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
      });
    }
  }

  optimizeForConnection() {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        document.documentElement.classList.add('slow-connection');
        
        // Disable non-essential animations
        this.isReducedMotion = true;
        
        // Reduce image quality
        this.optimizeImages();
      }
    }
  }

  isSlowConnection() {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      return connection.effectiveType === 'slow-2g' || 
             connection.effectiveType === '2g' ||
             connection.saveData;
    }
    return false;
  }

  optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.dataset.srcSmall) {
        img.src = img.dataset.srcSmall;
      }
    });
  }

  addResourceHints() {
    const hints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//www.google.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ];

    hints.forEach(hint => {
      if (!document.querySelector(`link[href="${hint.href}"]`)) {
        const link = document.createElement('link');
        Object.assign(link, hint);
        document.head.appendChild(link);
      }
    });
  }

  setupMemoryManagement() {
    // Clean up unused observers on page unload
    window.addEventListener('beforeunload', () => {
      // Disconnect all observers
      if (this.resizeObserver) this.resizeObserver.disconnect();
      if (this.intersectionObserver) this.intersectionObserver.disconnect();
      
      // Remove event listeners
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
    });
  }

  // Error Handling and Logging
  initErrorHandling() {
    // Global error handler
    window.addEventListener('error', (e) => {
      console.error('JavaScript error:', e.error);
      this.logError('JavaScript Error', e.error?.message || 'Unknown error', e.filename, e.lineno);
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (e) => {
      console.error('Unhandled promise rejection:', e.reason);
      this.logError('Promise Rejection', e.reason?.message || 'Unknown rejection');
    });

    // Image loading error handler
    document.addEventListener('error', (e) => {
      if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        e.target.classList.add('error');
      }
    }, true);
  }

  logError(type, message, filename = '', lineno = 0) {
    // In production, you would send this to your logging service
    const errorData = {
      type,
      message,
      filename,
      lineno,
      userAgent: navigator.userAgent,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };

    // For development, just log to console
    console.error('Error logged:', errorData);

    // You could send to analytics or logging service here
    // if (typeof gtag !== 'undefined') {
    //   gtag('event', 'exception', {
    //     description: message,
    //     fatal: false
    //   });
    // }
  }

  // Swipe Gestures for Mobile
  initSwipeGestures() {
    if (!this.isTouchDevice) return;

    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      this.handleGesture();
    }, { passive: true });

    const handleGesture = () => {
      const swipeThreshold = 50;
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;
      
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
        if (diffX > 0) {
          // Swipe left
          this.handleSwipeLeft();
        } else {
          // Swipe right
          this.handleSwipeRight();
        }
      } else if (Math.abs(diffY) > swipeThreshold) {
        if (diffY > 0) {
          // Swipe up
          this.handleSwipeUp();
        } else {
          // Swipe down
          this.handleSwipeDown();
        }
      }
    };

    this.handleGesture = handleGesture;
  }

  handleSwipeLeft() {
    // Could be used for gallery navigation
    console.log('Swipe left detected');
  }

  handleSwipeRight() {
    // Could be used for gallery navigation
    console.log('Swipe right detected');
  }

  handleSwipeUp() {
    // Could be used for quick navigation
    console.log('Swipe up detected');
  }

  handleSwipeDown() {
    // Could be used to refresh or close mobile menu
    const nav = document.querySelector('.nav-menu');
    if (nav && nav.classList.contains('open')) {
      const toggle = document.querySelector('.menu-toggle');
      toggle?.click();
    }
  }

  // Animation and State Management
  initAnimations() {
    if (this.isReducedMotion) return;

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

  initGSAPAnimations() {
    // Enhanced animations with GSAP
    if (window.innerWidth > 768) {
      gsap.from('.brand-hero-content', {
        duration: 1.5,
        y: 80,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
      });

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
  }

  pauseAnimations() {
    document.documentElement.style.setProperty('--duration-300', '0ms');
    document.documentElement.style.setProperty('--duration-500', '0ms');
  }

  resumeAnimations() {
    if (!this.isReducedMotion) {
      document.documentElement.style.setProperty('--duration-300', '300ms');
      document.documentElement.style.setProperty('--duration-500', '500ms');
    }
  }

  // Loading Indicators
  showLoadingIndicator() {
    const indicator = document.getElementById('loading-indicator');
    if (indicator) {
      indicator.textContent = 'جاري التحميل...';
      indicator.classList.remove('sr-only');
    }
  }

  hideLoadingIndicator() {
    const indicator = document.getElementById('loading-indicator');
    if (indicator) {
      indicator.textContent = '';
      indicator.classList.add('sr-only');
    }
  }

  // Utility Functions
  announceToScreenReader(message) {
    const announcement = document.getElementById('aria-live-announcements') || document.createElement('div');
    
    if (!announcement.id) {
      announcement.id = 'aria-live-announcements';
      announcement.className = 'sr-only';
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      document.body.appendChild(announcement);
    }
    
    announcement.textContent = message;
    
    // Clear after announcement
    setTimeout(() => {
      announcement.textContent = '';
    }, 1000);
  }

  debounce(func, wait, immediate = false) {
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

  // Public API methods
  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const header = document.querySelector('.site-header');
      const headerHeight = header ? header.offsetHeight + 20 : 80;
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      this.smoothScrollTo(targetPosition, 800);
    }
  }

  filterGallery(category) {
    const filterBtn = document.querySelector(`[data-filter="${category}"]`);
    if (filterBtn) {
      filterBtn.click();
    }
  }

  changeLanguage(lang) {
    const langBtn = document.querySelector(`[data-lang="${lang}"]`);
    if (langBtn) {
      langBtn.click();
    }
  }
}

// Initialize the application
const marmaraApp = new MarmaraWebsite();

// Global error handling
window.addEventListener('error', (e) => {
  console.error('JavaScript error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
  e.preventDefault(); // Prevent console warning
});

// Service Worker registration (Progressive Web App)
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

// Add to global scope for debugging
window.MarmaraApp = marmaraApp;

// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
      console.log(`Page load time: ${loadTime}ms`);
      
      // You could send this data to analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'timing_complete', {
          name: 'page_load',
          value: Math.round(loadTime)
        });
      }
    }, 0);
  });
}
