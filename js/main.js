// Enhanced Marmara Website 2025 - Complete Modern Implementation with Fixed Language Toggle
class MarmaraWebsite {
  constructor() {
    this.currentLanguage = 'ar'; // Default to Arabic
    this.eventListeners = new Map();
    this.observers = new Map();
    this.liveRegion = null;
    this.currentFilter = 'all';
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.supportsWebP = false;
    
    // Enhanced Translation Dictionary - Fixed and Complete
    this.translations = {
      ar: {
        // Navigation
        'nav-home': 'الرئيسية',
        'nav-about': 'من نحن',
        'nav-products': 'المنتجات',
        'nav-gallery': 'المعارض',
        'nav-map': 'فروعنا',
        'nav-contact': 'تواصل معنا',
        
        // Hero Section
        'brand-hero-title': 'مرمرة™',
        'brand-hero-subtitle': 'أدوات احترافية • جودة استثنائية • خبرة موثوقة',
        'brand-hero-cta1': 'اكتشف منتجاتنا',
        'brand-hero-cta2': 'تواصل معنا',
        
        // Header
        'header-cta': 'ابدأ الآن',
        'site-title': 'مرمرة لمستلزمات الرخام والجرانيت',
        
        // About Section
        'about-eyebrow': 'قصة النجاح',
        'about-title': 'رحلة التميز في عالم الحجر الطبيعي',
        'about-desc': 'منذ أكثر من عقد ونحن نرسم ملامح المستقبل في صناعة مستلزمات الرخام والجرانيت',
        'about-desc1': 'في مرمرة، نؤمن بأن كل قطعة رخام تحكي قصة، وكل أداة تصنع تحفة فنية. نحن لا نبيع منتجات فحسب، بل نقدم حلولاً متكاملة تلبي أحلام المهندسين والمصممين.',
        'about-cta1': 'استكشف المجموعات',
        'about-cta2': 'تحدث معنا',
        
        // Products Section
        'products-eyebrow': 'مجموعاتنا المميزة',
        'products-title': 'أدوات احترافية لمشاريع استثنائية',
        'products-desc': 'مجموعة شاملة من أفضل الأدوات والمستلزمات مع أسعار تنافسية وجودة مضمونة',
        'view-gallery': 'استعرض المجموعة',
        
        // Product Categories
        'cat-machine': 'أدوات قطع ماكينة',
        'cat-grind': 'أدوات قطع وجلخ',
        'cat-porcelain': 'أدوات قطع بورسلين',
        'cat-drill': 'أدوات ثقب متقدمة',
        'cat-misc': 'أدوات متنوعة أخرى',
        
        // Gallery Section
        'gallery-eyebrow': 'معرض تفاعلي',
        'gallery-title': 'استكشف منتجاتنا بالتفصيل',
        
        // Filter Buttons
        'filter-all': 'جميع المنتجات',
        'filter-machine': 'ماكينة',
        'filter-grind': 'جلخ',
        'filter-porcelain': 'بورسلين',
        'filter-drill': 'ثقب',
        'filter-misc': 'أخرى',
        
        // Map Section
        'map-title': 'فروعنا في ليبيا',
        'map-desc': 'زوروا أقرب فرع إليكم للحصول على أفضل الخدمات والمنتجات',
        'branch-misrata': 'فرع مصراتة',
        'branch-tripoli': 'فرع طرابلس',
        'working-hours': 'ساعات العمل:',
        
        // Contact Section
        'contact-title': 'تواصل معنا',
        'contact-desc': 'نحن هنا لمساعدتكم في كل ما تحتاجونه',
        'phone': 'الهاتف',
        'email': 'البريد الإلكتروني',
        'address': 'العنوان',
        
        // Footer
        'footer-desc': 'شركة رائدة في توفير أدوات ومستلزمات الرخام والجرانيت بأعلى معايير الجودة والاحترافية',
        'newsletter-title': 'اشترك في نشرتنا',
        'newsletter-desc': 'احصل على آخر الأخبار والعروض الخاصة',
        'email-placeholder': 'أدخل بريدك الإلكتروني',
        'subscribe': 'اشترك',
        
        // UI Elements
        'loading': 'جاري التحميل...',
        'close': 'إغلاق',
        'skip-to-content': 'انتقل إلى المحتوى'
      },
      
      en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-products': 'Products',
        'nav-gallery': 'Gallery',
        'nav-map': 'Our Branches',
        'nav-contact': 'Contact Us',
        
        // Hero Section
        'brand-hero-title': 'Marmara™',
        'brand-hero-subtitle': 'Professional Tools • Exceptional Quality • Trusted Experience',
        'brand-hero-cta1': 'Discover Our Products',
        'brand-hero-cta2': 'Contact Us',
        
        // Header
        'header-cta': 'Get Started',
        'site-title': 'Marmara - Marble & Granite Supplies',
        
        // About Section
        'about-eyebrow': 'Success Story',
        'about-title': 'Journey of Excellence in Natural Stone World',
        'about-desc': 'For over a decade, we have been shaping the future of marble and granite supplies industry',
        'about-desc1': 'At Marmara, we believe that every piece of marble tells a story, and every tool creates a masterpiece. We don\'t just sell products, we provide integrated solutions that fulfill the dreams of engineers and designers.',
        'about-cta1': 'Explore Collections',
        'about-cta2': 'Talk to Us',
        
        // Products Section
        'products-eyebrow': 'Our Distinguished Collections',
        'products-title': 'Professional Tools for Exceptional Projects',
        'products-desc': 'Comprehensive range of the finest tools and supplies with competitive prices and guaranteed quality',
        'view-gallery': 'View Collection',
        
        // Product Categories
        'cat-machine': 'Machine Cutting Tools',
        'cat-grind': 'Cutting & Grinding Tools',
        'cat-porcelain': 'Porcelain Cutting Tools',
        'cat-drill': 'Advanced Drilling Tools',
        'cat-misc': 'Miscellaneous Tools',
        
        // Gallery Section
        'gallery-eyebrow': 'Interactive Gallery',
        'gallery-title': 'Explore Our Products in Detail',
        
        // Filter Buttons
        'filter-all': 'All Products',
        'filter-machine': 'Machine',
        'filter-grind': 'Grinding',
        'filter-porcelain': 'Porcelain',
        'filter-drill': 'Drilling',
        'filter-misc': 'Others',
        
        // Map Section
        'map-title': 'Our Branches in Libya',
        'map-desc': 'Visit the nearest branch to get the best services and products',
        'branch-misrata': 'Misrata Branch',
        'branch-tripoli': 'Tripoli Branch',
        'working-hours': 'Working Hours:',
        
        // Contact Section
        'contact-title': 'Contact Us',
        'contact-desc': 'We are here to help you with everything you need',
        'phone': 'Phone',
        'email': 'Email',
        'address': 'Address',
        
        // Footer
        'footer-desc': 'Leading company in providing marble and granite tools and supplies with the highest quality and professionalism standards',
        'newsletter-title': 'Subscribe to Our Newsletter',
        'newsletter-desc': 'Get the latest news and special offers',
        'email-placeholder': 'Enter your email address',
        'subscribe': 'Subscribe',
        
        // UI Elements
        'loading': 'Loading...',
        'close': 'Close',
        'skip-to-content': 'Skip to content'
      }
    };
    
    this.init();
  }

  // Enhanced Initialization
  async init() {
    try {
      this.showLoadingIndicator();
      
      // Initialize core features
      await Promise.all([
        this.initLanguageSystem(),
        this.initMobileNavigation(),
        this.initScrollProgress(),
        this.initHeaderEffects(),
        this.initGalleryFilters(),
        this.initLightbox(),
        this.initRevealAnimations(),
        this.initStatsCounter(),
        this.initLazyLoading(),
        this.initAccessibility(),
        this.initPerformanceOptimizations(),
        this.initFormValidation(),
        this.initNewsletterSignup(),
        this.initCookieConsent(),
        this.initErrorHandling(),
        this.setupVisibilityHandler(),
        this.initSwipeGestures(),
        this.initBrandHeroEffects()
      ]);
      
      // Load saved language preference
      this.loadSavedLanguage();
      
      this.hideLoadingIndicator();
      console.log('Marmara Website initialized successfully');
      
    } catch (error) {
      console.error('Error initializing website:', error);
      this.hideLoadingIndicator();
      this.showNotification('Error loading website features', 'error');
    }
  }

  // FIXED Enhanced Language System - Complete Implementation
  initLanguageSystem() {
    const langButtons = document.querySelectorAll('[data-lang]');
    
    if (langButtons.length === 0) {
      console.warn('No language buttons found');
      return;
    }

    // Add click event listeners to all language buttons
    langButtons.forEach(button => {
      this.addEventListenerWithCleanup(button, 'click', (e) => {
        e.preventDefault();
        const targetLang = button.dataset.lang;
        if (targetLang && targetLang !== this.currentLanguage) {
          this.switchLanguage(targetLang);
          this.announceToScreenReader(`Language switched to ${targetLang === 'ar' ? 'Arabic' : 'English'}`);
        }
      });
    });

    // Add keyboard support
    langButtons.forEach(button => {
      this.addEventListenerWithCleanup(button, 'keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          button.click();
        }
      });
    });

    console.log('Language system initialized with buttons:', langButtons.length);
  }

  // FIXED Enhanced Language Switching - Complete Implementation
  switchLanguage(lang) {
    if (!this.translations[lang]) {
      console.error(`Translation for language "${lang}" not found`);
      return;
    }

    console.log(`Switching language from ${this.currentLanguage} to ${lang}`);
    
    this.currentLanguage = lang;
    const dict = this.translations[lang];
    const htmlElement = document.documentElement;
    
    // Update document attributes with proper RTL/LTR support
    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update document title
    if (dict['site-title']) {
      document.title = dict['site-title'];
    }
    
    // Update all translatable elements with enhanced animation
    const translatableElements = document.querySelectorAll('[data-i18n]');
    
    translatableElements.forEach((element, index) => {
      const key = element.getAttribute('data-i18n');
      
      if (dict[key]) {
        // Add exit animation
        element.style.opacity = '0.7';
        element.style.transform = 'translateY(-10px)';
        element.style.transition = 'all 0.2s ease-out';
        
        setTimeout(() => {
          // Update content based on element type
          if (element.tagName === 'INPUT') {
            if (element.type === 'submit' || element.type === 'button') {
              element.value = dict[key];
            } else if (element.placeholder !== undefined) {
              element.placeholder = dict[key];
            }
          } else {
            element.textContent = dict[key];
          }
          
          // Add entrance animation
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, 100 + (index % 10) * 20); // Stagger animation for visual appeal
      }
    });

    // Update placeholder attributes
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        element.placeholder = dict[key];
      }
    });

    // FIXED: Update ALL language button states (both desktop and mobile)
    this.updateLanguageButtonStates(lang);
    
    // Update layout direction with smooth transition
    this.updateLayoutDirection();
    
    // Save preference to localStorage
    localStorage.setItem('marmara-language', lang);
    
    // Dispatch custom event for other components
    this.dispatchCustomEvent('languageChanged', { 
      language: lang,
      direction: lang === 'ar' ? 'rtl' : 'ltr'
    });
    
    // Update any dynamic content
    this.updateDynamicContent(lang);
    
    console.log(`Language switched to ${lang} successfully`);
  }

  // NEW: Update Language Button States - Fixes toggle issue
  updateLanguageButtonStates(activeLang) {
    const allLangButtons = document.querySelectorAll('[data-lang]');
    
    allLangButtons.forEach(button => {
      const buttonLang = button.dataset.lang;
      const isActive = buttonLang === activeLang;
      
      // Update classes
      button.classList.toggle('active', isActive);
      
      // Update ARIA attributes
      button.setAttribute('aria-pressed', isActive.toString());
      
      // Update visual state with animation
      if (isActive) {
        button.style.transform = 'scale(1.05)';
        setTimeout(() => {
          button.style.transform = '';
        }, 200);
      }
      
      // Update accessible labels
      const langName = buttonLang === 'ar' ? 'Arabic' : 'English';
      button.setAttribute('aria-label', 
        isActive ? `Current language: ${langName}` : `Switch to ${langName}`
      );
    });
    
    console.log(`Updated ${allLangButtons.length} language buttons for language: ${activeLang}`);
  }

  // Enhanced Layout Direction Update
  updateLayoutDirection() {
    const isRTL = this.currentLanguage === 'ar';
    const body = document.body;
    
    // Update body classes with transition
    body.style.transition = 'all 0.3s ease-out';
    body.classList.toggle('rtl', isRTL);
    body.classList.toggle('ltr', !isRTL);
    
    // Update CSS custom properties for direction
    document.documentElement.style.setProperty('--text-direction', isRTL ? 'rtl' : 'ltr');
    document.documentElement.style.setProperty('--start-direction', isRTL ? 'right' : 'left');
    document.documentElement.style.setProperty('--end-direction', isRTL ? 'left' : 'right');
    
    // Update any swiper instances if they exist
    if (window.swiper) {
      window.swiper.changeLanguageDirection(isRTL ? 'rtl' : 'ltr');
      window.swiper.update();
    }
    
    // Remove transition after animation
    setTimeout(() => {
      body.style.transition = '';
    }, 300);
  }

  // Enhanced Load Saved Language
  loadSavedLanguage() {
    const savedLang = localStorage.getItem('marmara-language');
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['ar', 'en'];
    
    let targetLang = 'ar'; // Default to Arabic
    
    if (savedLang && supportedLangs.includes(savedLang)) {
      targetLang = savedLang;
    } else if (supportedLangs.includes(browserLang)) {
      targetLang = browserLang;
    }
    
    console.log(`Loading language: ${targetLang} (saved: ${savedLang}, browser: ${browserLang})`);
    this.switchLanguage(targetLang);
  }

  // Update Dynamic Content
  updateDynamicContent(lang) {
    // Update any dynamically generated content
    const dynamicElements = document.querySelectorAll('.dynamic-content');
    dynamicElements.forEach(element => {
      // Update content based on language
      if (lang === 'ar') {
        element.style.fontFamily = '"Tajawal", "Cairo", system-ui, sans-serif';
      } else {
        element.style.fontFamily = '"Inter", system-ui, sans-serif';
      }
    });
    
    // Update form validation messages if any forms are present
    this.updateFormValidationMessages(lang);
  }

  // Update Form Validation Messages
  updateFormValidationMessages(lang) {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      inputs.forEach(input => {
        // Set custom validation messages based on language
        if (lang === 'ar') {
          input.setCustomValidity('');
          input.oninvalid = function() {
            if (this.type === 'email') {
              this.setCustomValidity('يرجى إدخال بريد إلكتروني صحيح');
            } else if (this.hasAttribute('required') && !this.value) {
              this.setCustomValidity('هذا الحقل مطلوب');
            }
          };
        } else {
          input.setCustomValidity('');
          input.oninvalid = function() {
            if (this.type === 'email') {
              this.setCustomValidity('Please enter a valid email address');
            } else if (this.hasAttribute('required') && !this.value) {
              this.setCustomValidity('This field is required');
            }
          };
        }
        
        input.oninput = function() {
          this.setCustomValidity('');
        };
      });
    });
  }

  // Enhanced Mobile Navigation
  initMobileNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuToggle || !navMenu) {
      console.warn('Mobile navigation elements not found');
      return;
    }

    // Toggle menu
    this.addEventListenerWithCleanup(menuToggle, 'click', () => {
      this.toggleMobileMenu();
    });

    // Close menu when clicking overlay
    if (navOverlay) {
      this.addEventListenerWithCleanup(navOverlay, 'click', () => {
        this.closeMobileMenu();
      });
    }

    // Close menu when clicking nav links
    navLinks.forEach(link => {
      this.addEventListenerWithCleanup(link, 'click', () => {
        this.closeMobileMenu();
      });
    });

    // Enhanced keyboard navigation
    this.addEventListenerWithCleanup(document, 'keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        this.closeMobileMenu();
        menuToggle.focus();
      }
    });

    // Setup focus trap for mobile menu
    this.setupMobileMenuFocusTrap();
  }

  toggleMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    
    const isOpen = navMenu.classList.contains('open');
    
    menuToggle.classList.toggle('active', !isOpen);
    navMenu.classList.toggle('open', !isOpen);
    if (navOverlay) navOverlay.classList.toggle('active', !isOpen);
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : '';
    
    // Update ARIA attributes
    menuToggle.setAttribute('aria-expanded', !isOpen);
    const currentLang = this.currentLanguage;
    const label = !isOpen ? 
      (currentLang === 'ar' ? 'إغلاق القائمة' : 'Close menu') : 
      (currentLang === 'ar' ? 'فتح القائمة' : 'Open menu');
    menuToggle.setAttribute('aria-label', label);
    
    // Focus management
    if (!isOpen) {
      const firstLink = navMenu.querySelector('.nav-link');
      if (firstLink) {
        setTimeout(() => firstLink.focus(), 100);
      }
    }
  }

  closeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    
    menuToggle.classList.remove('active');
    navMenu.classList.remove('open');
    if (navOverlay) navOverlay.classList.remove('active');
    
    document.body.style.overflow = '';
    
    menuToggle.setAttribute('aria-expanded', false);
    const currentLang = this.currentLanguage;
    const label = currentLang === 'ar' ? 'فتح القائمة' : 'Open menu';
    menuToggle.setAttribute('aria-label', label);
  }

  setupMobileMenuFocusTrap() {
    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) return;

    const getFocusableElements = () => {
      return navMenu.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
    };

    this.addEventListenerWithCleanup(navMenu, 'keydown', (e) => {
      if (e.key === 'Tab' && navMenu.classList.contains('open')) {
        const focusableElements = getFocusableElements();
        if (focusableElements.length === 0) return;
        
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

  // Enhanced Gallery Filters with Animation
  initGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleries = document.querySelectorAll('.gallery');
    const filterTriggers = document.querySelectorAll('.filter-trigger');
    
    if (filterButtons.length === 0) {
      console.warn('No filter buttons found');
      return;
    }

    // Add click listeners to filter buttons
    filterButtons.forEach(button => {
      this.addEventListenerWithCleanup(button, 'click', () => {
        const filter = button.dataset.filter || 'all';
        this.filterGallery(filter);
        this.updateActiveFilter(button);
      });
    });

    // Add click listeners to filter triggers (from cards and footer)
    filterTriggers.forEach(trigger => {
      this.addEventListenerWithCleanup(trigger, 'click', (e) => {
        e.preventDefault();
        const filter = trigger.dataset.filter || 'all';
        this.filterGallery(filter);
        
        // Find and update the corresponding filter button
        const filterButton = document.querySelector(`[data-filter="${filter}"]`);
        if (filterButton) {
          this.updateActiveFilter(filterButton);
        }
        
        // Scroll to gallery section
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
          gallerySection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Initialize with all items visible
    this.filterGallery('all');
  }

  filterGallery(category) {
    this.currentFilter = category;
    const galleries = document.querySelectorAll('.gallery');
    
    galleries.forEach((gallery, index) => {
      const galleryCategory = gallery.dataset.category;
      const shouldShow = category === 'all' || galleryCategory === category;
      
      if (shouldShow) {
        gallery.style.display = 'block';
        setTimeout(() => {
          gallery.classList.add('visible');
        }, index * 50);
      } else {
        gallery.classList.remove('visible');
        setTimeout(() => {
          gallery.style.display = 'none';
        }, 300);
      }
    });
    
    // Update URL without page reload
    if (history.pushState && category !== 'all') {
      const newUrl = `${window.location.pathname}?filter=${category}`;
      history.pushState({ filter: category }, '', newUrl);
    } else if (history.pushState && category === 'all') {
      history.pushState({ filter: 'all' }, '', window.location.pathname);
    }
  }

  updateActiveFilter(activeButton) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', false);
      btn.setAttribute('aria-selected', false);
    });
    
    activeButton.classList.add('active');
    activeButton.setAttribute('aria-pressed', true);
    activeButton.setAttribute('aria-selected', true);
  }

  // Enhanced Scroll Progress Indicator
  initScrollProgress() {
    let progressBar = document.querySelector('.scroll-progress-bar');
    
    if (!progressBar) {
      const progressContainer = document.createElement('div');
      progressContainer.className = 'scroll-progress';
      progressBar = document.createElement('div');
      progressBar.className = 'scroll-progress-bar';
      progressContainer.appendChild(progressBar);
      document.body.appendChild(progressContainer);
    }

    const updateProgress = () => {
      const scrolled = window.pageYOffset;
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min((scrolled / maxHeight) * 100, 100);
      
      progressBar.style.width = `${progress}%`;
    };

    this.addEventListenerWithCleanup(window, 'scroll', this.throttle(updateProgress, 16));
  }

  // Enhanced Header Effects
  initHeaderEffects() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScrollY = window.pageYOffset;

    const updateHeader = () => {
      const currentScrollY = window.pageYOffset;
      const scrollDifference = currentScrollY - lastScrollY;
      
      // Add scrolled class for styling
      header.classList.toggle('scrolled', currentScrollY > 50);
      
      // Hide/show header based on scroll direction
      if (Math.abs(scrollDifference) > 10) {
        const isScrollingDown = scrollDifference > 0;
        
        if (isScrollingDown && currentScrollY > 200) {
          header.classList.add('hidden');
        } else {
          header.classList.remove('hidden');
        }
        
        lastScrollY = currentScrollY;
      }
    };

    this.addEventListenerWithCleanup(window, 'scroll', this.throttle(updateHeader, 16));
  }

  // Enhanced Lightbox System
  initLightbox() {
    const galleryImages = document.querySelectorAll('.gallery-item img');
    
    if (galleryImages.length === 0) return;

    galleryImages.forEach((img, index) => {
      // Add click listener
      this.addEventListenerWithCleanup(img, 'click', () => {
        this.openLightbox(img.src, index, galleryImages);
      });
      
      // Add keyboard support
      img.parentElement.tabIndex = 0;
      this.addEventListenerWithCleanup(img.parentElement, 'keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openLightbox(img.src, index, galleryImages);
        }
      });
    });
  }

  openLightbox(imageSrc, currentIndex, allImages) {
    const currentLang = this.currentLanguage;
    const closeLabel = currentLang === 'ar' ? 'إغلاق' : 'Close';
    const prevLabel = currentLang === 'ar' ? 'السابق' : 'Previous';
    const nextLabel = currentLang === 'ar' ? 'التالي' : 'Next';
    
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox active';
    lightbox.innerHTML = `
      <div class="lightbox-overlay"></div>
      <div class="lightbox-container">
        <button class="lightbox-close" aria-label="${closeLabel}">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <button class="lightbox-prev" aria-label="${prevLabel}">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <img class="lightbox-image" src="${imageSrc}" alt="Gallery image" loading="eager">
        <button class="lightbox-next" aria-label="${nextLabel}">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
        <div class="lightbox-counter">
          <span class="current-image">${currentIndex + 1}</span>
          <span class="separator">/</span>
          <span class="total-images">${allImages.length}</span>
        </div>
      </div>
    `;

    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';

    // Setup lightbox controls
    this.setupLightboxControls(lightbox, currentIndex, allImages);
    
    // Focus the close button
    lightbox.querySelector('.lightbox-close').focus();
  }

  setupLightboxControls(lightbox, currentIndex, allImages) {
    let currentIdx = currentIndex;
    
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const overlay = lightbox.querySelector('.lightbox-overlay');
    const image = lightbox.querySelector('.lightbox-image');
    const counter = lightbox.querySelector('.lightbox-counter');

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      setTimeout(() => {
        if (document.body.contains(lightbox)) {
          document.body.removeChild(lightbox);
          document.body.style.overflow = '';
        }
      }, 300);
    };

    const updateImage = (newIndex) => {
      if (newIndex < 0 || newIndex >= allImages.length) return;
      
      currentIdx = newIndex;
      image.style.opacity = '0';
      
      setTimeout(() => {
        image.src = allImages[currentIdx].src;
        counter.querySelector('.current-image').textContent = currentIdx + 1;
        image.style.opacity = '1';
      }, 150);
    };

    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', () => updateImage(currentIdx - 1));
    nextBtn.addEventListener('click', () => updateImage(currentIdx + 1));

    // Keyboard navigation
    const keyHandler = (e) => {
      switch(e.key) {
        case 'Escape':
          closeLightbox();
          document.removeEventListener('keydown', keyHandler);
          break;
        case 'ArrowLeft':
          updateImage(currentIdx - 1);
          break;
        case 'ArrowRight':
          updateImage(currentIdx + 1);
          break;
      }
    };
    
    document.addEventListener('keydown', keyHandler);

    // Touch gestures for mobile
    if (this.isTouchDevice) {
      this.setupLightboxTouchGestures(lightbox, updateImage, closeLightbox, currentIdx, allImages.length);
    }
  }

  setupLightboxTouchGestures(lightbox, updateImage, closeLightbox, currentIdx, totalImages) {
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;

    const image = lightbox.querySelector('.lightbox-image');

    image.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
    });

    image.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      distX = touch.clientX - startX;
      distY = touch.clientY - startY;
    });

    image.addEventListener('touchend', () => {
      const threshold = 50;
      
      if (Math.abs(distX) > Math.abs(distY)) {
        if (Math.abs(distX) > threshold) {
          if (distX > 0 && currentIdx > 0) {
            updateImage(currentIdx - 1);
          } else if (distX < 0 && currentIdx < totalImages - 1) {
            updateImage(currentIdx + 1);
          }
        }
      } else if (Math.abs(distY) > threshold && distY > 0) {
        closeLightbox();
      }
      
      distX = 0;
      distY = 0;
    });
  }

  // Enhanced Reveal Animations
  initRevealAnimations() {
    if (!('IntersectionObserver' in window) || this.isReducedMotion) return;

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Add reveal classes to elements
    const revealElements = document.querySelectorAll('.card, .section-header, .gallery, .stat-item');
    revealElements.forEach((el, index) => {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', `${(index % 4) * 100}ms`);
      revealObserver.observe(el);
    });

    this.observers.set('reveal', revealObserver);
  }

  // Enhanced Stats Counter
  initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length === 0) return;

    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
      countObserver.observe(stat);
    });

    this.observers.set('counter', countObserver);
  }

  animateCounter(element) {
    const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
    const suffix = element.textContent.replace(/[\d]/g, '');
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + suffix;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + suffix;
      }
    }, 16);
  }

  // Enhanced Lazy Loading
  initLazyLoading() {
    if (!('IntersectionObserver' in window)) {
      // Fallback for browsers without Intersection Observer
      const lazyImages = document.querySelectorAll('[data-src]');
      lazyImages.forEach(img => this.loadResponsiveImage(img));
      return;
    }

    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadResponsiveImage(entry.target);
          lazyObserver.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '100px'
    });

    document.querySelectorAll('[data-src]').forEach(img => {
      lazyObserver.observe(img);
    });

    this.observers.set('lazy', lazyObserver);
  }

  loadResponsiveImage(img) {
    const src = img.dataset.src || img.src;
    
    if (src) {
      const newImg = new Image();
      newImg.onload = () => {
        img.src = src;
        img.classList.add('loaded');
      };
      newImg.onerror = () => {
        img.classList.add('error');
      };
      newImg.src = src;
    }
  }

  // Enhanced Accessibility Features
  initAccessibility() {
    this.createSkipLink();
    this.enhanceFocusIndicators();
    this.setupLiveRegions();
    this.enhanceKeyboardNavigation();
    this.setupScreenReaderSupport();
  }

  createSkipLink() {
    if (document.querySelector('.skip-link')) return;
    
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    const currentLang = this.currentLanguage;
    skipLink.textContent = currentLang === 'ar' ? 'انتقل إلى المحتوى' : 'Skip to content';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  enhanceFocusIndicators() {
    const focusableElements = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
      this.addEventListenerWithCleanup(element, 'mousedown', () => {
        element.classList.add('mouse-focus');
      });
      
      this.addEventListenerWithCleanup(element, 'keydown', () => {
        element.classList.remove('mouse-focus');
      });
    });
  }

  setupLiveRegions() {
    if (this.liveRegion) return;
    
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
    
    this.liveRegion = liveRegion;
  }

  announceToScreenReader(message, priority = 'polite') {
    if (this.liveRegion) {
      this.liveRegion.setAttribute('aria-live', priority);
      this.liveRegion.textContent = message;
      
      setTimeout(() => {
        this.liveRegion.textContent = '';
      }, 1000);
    }
  }

  enhanceKeyboardNavigation() {
    document.querySelectorAll('.card, .gallery-item').forEach(element => {
      if (!element.hasAttribute('tabindex')) {
        element.setAttribute('tabindex', '0');
      }
      
      this.addEventListenerWithCleanup(element, 'keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          element.click();
        }
      });
    });
  }

  setupScreenReaderSupport() {
    // Add descriptive labels for filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      const category = btn.dataset.filter;
      const currentLang = this.currentLanguage;
      const label = currentLang === 'ar' ? 
        `تصفية حسب ${category}` : 
        `Filter by ${category}`;
      btn.setAttribute('aria-label', label);
    });
  }

  // Enhanced Performance Optimizations
  initPerformanceOptimizations() {
    this.preloadCriticalResources();
    this.optimizeImageLoading();
    this.initServiceWorker();
    this.monitorPerformance();
  }

  preloadCriticalResources() {
    const criticalImages = [
      './img/logo1.jpg',
      './img/logo2.jpg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }

  optimizeImageLoading() {
    // Add WebP support detection
    this.supportsWebP = false;
    
    const webp = new Image();
    webp.onload = webp.onerror = () => {
      this.supportsWebP = (webp.height === 2);
    };
    webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  initServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }

  monitorPerformance() {
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }

  // Enhanced Form Validation
  initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      this.addEventListenerWithCleanup(form, 'submit', (e) => {
        if (!this.validateForm(form)) {
          e.preventDefault();
        }
      });

      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        this.addEventListenerWithCleanup(input, 'blur', () => {
          this.validateField(input);
        });
        
        this.addEventListenerWithCleanup(input, 'input', () => {
          if (input.classList.contains('error')) {
            this.validateField(input);
          }
        });
      });
    });
  }

  validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  validateField(input) {
    const value = input.value.trim();
    let isValid = true;
    let message = '';
    const currentLang = this.currentLanguage;

    if (input.hasAttribute('required') && !value) {
      isValid = false;
      message = currentLang === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required';
    }

    if (input.type === 'email' && value && !this.isValidEmail(value)) {
      isValid = false;
      message = currentLang === 'ar' ? 
        'يرجى إدخال بريد إلكتروني صحيح' : 
        'Please enter a valid email address';
    }

    if (input.type === 'tel' && value && !this.isValidPhone(value)) {
      isValid = false;
      message = currentLang === 'ar' ? 
        'يرجى إدخال رقم هاتف صحيح' : 
        'Please enter a valid phone number';
    }

    this.showFieldValidation(input, isValid, message);
    return isValid;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  }

  showFieldValidation(input, isValid, message) {
    input.classList.toggle('error', !isValid);
    input.classList.toggle('valid', isValid);
    
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }

    if (!isValid && message) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = message;
      input.parentNode.appendChild(errorDiv);
    }
  }

  // Enhanced Newsletter Signup
  initNewsletterSignup() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (!newsletterForm) return;

    this.addEventListenerWithCleanup(newsletterForm, 'submit', async (e) => {
      e.preventDefault();
      
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const submitBtn = newsletterForm.querySelector('button[type="submit"]');
      
      if (!this.validateField(emailInput)) return;

      submitBtn.classList.add('btn-loading');
      submitBtn.disabled = true;

      try {
        await this.subscribeToNewsletter(emailInput.value);
        const currentLang = this.currentLanguage;
        const message = currentLang === 'ar' ? 
          'تم الاشتراك في النشرة بنجاح!' : 
          'Successfully subscribed to newsletter!';
        this.showNotification(message, 'success');
        emailInput.value = '';
      } catch (error) {
        const currentLang = this.currentLanguage;
        const message = currentLang === 'ar' ? 
          'فشل في الاشتراك. يرجى المحاولة مرة أخرى.' : 
          'Failed to subscribe. Please try again.';
        this.showNotification(message, 'error');
        console.error('Newsletter subscription error:', error);
      } finally {
        submitBtn.classList.remove('btn-loading');
        submitBtn.disabled = false;
      }
    });
  }

  async subscribeToNewsletter(email) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.1) {
          resolve();
        } else {
          reject(new Error('Network error'));
        }
      }, 1500);
    });
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button class="notification-close" aria-label="Close notification">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('notification-exit');
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 5000);

    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
      notification.classList.add('notification-exit');
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    });
  }

  // Enhanced Cookie Consent
  initCookieConsent() {
    if (localStorage.getItem('marmara-cookies-accepted')) return;

    const currentLang = this.currentLanguage;
    const consent = document.createElement('div');
    consent.className = 'cookie-consent';
    
    const cookieText = currentLang === 'ar' ? 
      'نحن نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل حركة المرور. بمتابعة استخدام هذا الموقع، فإنك توافق على استخدامنا لملفات تعريف الارتباط.' :
      'We use cookies to enhance your browsing experience and analyze our traffic. By continuing to use this site, you consent to our use of cookies.';
      
    const acceptText = currentLang === 'ar' ? 'موافق' : 'Accept';
    const declineText = currentLang === 'ar' ? 'رفض' : 'Decline';
    
    consent.innerHTML = `
      <div class="cookie-content">
        <p>${cookieText}</p>
        <div class="cookie-actions">
          <button class="btn btn-primary btn-sm cookie-accept">${acceptText}</button>
          <button class="btn btn-outline btn-sm cookie-decline">${declineText}</button>
        </div>
      </div>
    `;

    document.body.appendChild(consent);

    consent.querySelector('.cookie-accept').addEventListener('click', () => {
      localStorage.setItem('marmara-cookies-accepted', 'true');
      consent.remove();
    });

    consent.querySelector('.cookie-decline').addEventListener('click', () => {
      consent.remove();
    });
  }

  // Enhanced Swipe Gestures
  initSwipeGestures() {
    if (!this.isTouchDevice) return;

    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;
    let startTime = 0;
    const threshold = 50;
    const maxTime = 300;

    this.addEventListenerWithCleanup(document, 'touchstart', (e) => {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      startTime = Date.now();
    });

    this.addEventListenerWithCleanup(document, 'touchend', (e) => {
      const touch = e.changedTouches[0];
      distX = touch.clientX - startX;
      distY = touch.clientY - startY;
      const elapsedTime = Date.now() - startTime;

      if (elapsedTime <= maxTime && Math.abs(distX) > threshold && Math.abs(distX) > Math.abs(distY)) {
        if (distX > 0) {
          this.handleSwipeRight();
        } else {
          this.handleSwipeLeft();
        }
      }
    });
  }

  handleSwipeRight() {
    if (this.currentLanguage === 'en') {
      this.switchLanguage('ar');
    }
  }

  handleSwipeLeft() {
    if (this.currentLanguage === 'ar') {
      this.switchLanguage('en');
    }
  }

  // Enhanced Brand Hero Effects
  initBrandHeroEffects() {
    const hero = document.querySelector('.brand-hero');
    if (!hero) return;

    this.addEventListenerWithCleanup(window, 'scroll', this.throttle(() => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    }, 16));

    this.initFloatingShapes();
    this.initHeroEntranceAnimation();
  }

  initFloatingShapes() {
    const shapesContainer = document.querySelector('.brand-floating-shapes');
    if (!shapesContainer) {
      const container = document.createElement('div');
      container.className = 'brand-floating-shapes';
      
      for (let i = 0; i < 3; i++) {
        const shape = document.createElement('div');
        shape.className = 'brand-shape';
        container.appendChild(shape);
      }
      
      document.querySelector('.brand-hero').appendChild(container);
    }
  }

  initHeroEntranceAnimation() {
    const heroContent = document.querySelector('.brand-hero-content');
    if (!heroContent) return;

    const children = heroContent.children;
    Array.from(children).forEach((child, index) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(60px)';
      child.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      
      setTimeout(() => {
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      }, 200 + (index * 150));
    });
  }

  // Error Handling
  initErrorHandling() {
    window.addEventListener('error', (event) => {
      console.error('Global error:', event.error);
      const currentLang = this.currentLanguage;
      const message = currentLang === 'ar' ? 
        'حدث خطأ. يرجى تحديث الصفحة.' : 
        'An error occurred. Please refresh the page.';
      this.showNotification(message, 'error');
    });

    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      event.preventDefault();
    });
  }

  setupVisibilityHandler() {
    this.addEventListenerWithCleanup(document, 'visibilitychange', () => {
      if (document.hidden) {
        this.pauseNonEssentialFeatures();
      } else {
        this.resumeNonEssentialFeatures();
      }
    });
  }

  pauseNonEssentialFeatures() {
    document.body.classList.add('paused');
  }

  resumeNonEssentialFeatures() {
    document.body.classList.remove('paused');
  }

  showLoadingIndicator() {
    if (document.querySelector('.loading-indicator')) return;
    
    const currentLang = this.currentLanguage;
    const loadingText = currentLang === 'ar' ? 'جاري التحميل...' : 'Loading...';
    
    const loader = document.createElement('div');
    loader.className = 'loading-indicator';
    loader.innerHTML = `
      <div class="loading-spinner"></div>
      <span class="loading-text">${loadingText}</span>
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

  addEventListenerWithCleanup(element, event, handler) {
    element.addEventListener(event, handler);
    
    if (!this.eventListeners.has(element)) {
      this.eventListeners.set(element, []);
    }
    
    this.eventListeners.get(element).push({ event, handler });
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
  }

  dispatchCustomEvent(eventName, detail = {}) {
    const event = new CustomEvent(eventName, { detail });
    document.dispatchEvent(event);
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

  debounce(func, wait) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
}

// Initialize the website
const marmaraWebsite = new MarmaraWebsite();

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MarmaraWebsite;
}
