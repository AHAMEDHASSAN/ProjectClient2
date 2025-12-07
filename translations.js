// Translation data
const translations = {
    en: {
        // Navigation
        navHome: "Home",
        navFeatures: "Features",
        navProcess: "How It Works",
        navTestimonials: "Testimonials",
        navFAQ: "FAQ",
        navPhone: "+1 (555) 123-4567",
        
        // Hero Section - Video Captions
        videoCaptionTop: "Meet Peterson — The Person Who Makes Sure Every Floor Is Installed Perfectly.",
        videoCaptionBottom: "A quick message from Peterson about how we help homeowners get beautiful, durable floors.",
        
        // Stats
        statYears: "Years Experience",
        statProjects: "Projects Completed",
        statSatisfaction: "Client Satisfaction",
        
        // Form
        formTitle: "Book Free Consultation",
        formSubtitle: "Fill in your details and we'll contact you within 24 hours",
        formName: "Full Name",
        formPhone: "Phone Number",
        formEmail: "Email Address",
        formCity: "City",
        formPropertyType: "Property Type",
        formPropertyTypeLabel: "Select Property Type",
        formPropertyResidential: "Residential",
        formPropertyCommercial: "Commercial",
        formFlooringType: "Flooring Type",
        formFlooringTypeLabel: "Select Flooring Type",
        formFlooringHardwood: "Hardwood",
        formFlooringLaminate: "Laminate",
        formFlooringVinyl: "Vinyl/LVT",
        formWhenToBegin: "When to Begin?",
        formWhenToBeginLabel: "Select Timeline",
        formWhenNextWeek: "Next week",
        formWhenNextMonth: "Next month",
        formWhenDeciding: "Still deciding",
        formBudgetRange: "Budget Range",
        formBudgetRangeLabel: "Select Budget Range",
        formBudgetUnder2500: "Under $2,500",
        formBudgetUnder5000: "Under $5,000",
        formBudgetUnder10000: "Under $10,000",
        formBudgetUnder20000: "Under $20,000",
        formBudgetOver20000: "Over $20,000",
        formSubmit: "Get My Free Estimate",
        formReviewText: "Over 200 happy customer and counting!",
        
        // Features Section
        featuresTitle: "Why Homeowners Choose Alpha Flooring",
        feature1Title: "5/5 ⭐ Google rating — trusted by hundreds of families",
        feature2Title: "Clear, upfront pricing — no hidden fees",
        feature3Title: "Real samples brought directly to your home",
        
        // Problem Solution Section
        problemSolutionTitle: "No More Worn-Out or Uneven Floors",
        problemSolutionProblem: "Are you tired of floors that start warping, cracking, or looking uneven just months after installation?",
        problemSolutionSolution: "We fix that problem by using high-quality materials and precise techniques that ensure durability and a flawless finish that lasts for years.",
        
        // Problem Solution with Image
        problemSolutionImageTitle: "Your Floors Shouldn't Stress You Out . We Fix Everything.",
        problemSolutionImageText: "If your floors are damaged, outdated, noisy, bubbling, lifting, or simply not matching your home anymore… you deserve a real solution, not another quick fix. At Alpha Flooring, we help Orlando homeowners replace or restore their floors with materials that last in Florida humidity, heat, and day-to-day life. No pushy sales tactics. No hidden fees. No low-quality installations. Just quality flooring, transparent pricing, and expert installers who treat your home like their own. If you want floors that look beautiful, last longer, and never bubble or warp again — you're in the right place.",
        
        // Process Section
        processTitle: "The Real Advantage of Choosing Us",
        processLongevityTitle: "Longevity",
        processLongevityDesc: "Our goal isn't to finish fast and disappear. We focus on long-term quality, durability, and customer loyalty.",
        processTransparencyTitle: "Transparency",
        processTransparencyDesc: "You'll always understand what's happening in your project. Pricing, timeline, materials, potential issues — everything is communicated clearly.",
        processHonestyTitle: "Honesty",
        processHonestyDesc: "From your first measurement to the final walkthrough, you'll deal with people who simply tell the truth — always with your best interest in mind.",
        
        // Detailed Process
        detailedProcessTitle: "Here's how it works...",
        detailedStep1Number: "Step 01",
        detailedStep1Title: "Send Us Your Room Size & Details",
        detailedStep1Desc: "Just share your approximate room measurements, the type of flooring you want, and any photos of the space. This helps us understand your project before the visit.",
        detailedStep2Number: "Step 02",
        detailedStep2Title: "Get Your Customized Flooring Estimate",
        detailedStep2Desc: "Our team reviews your details and sends you a clear, honest estimate—no hidden fees, no surprises. You'll know exactly what the project will cost before anything starts.",
        detailedStep3Number: "Step 03",
        detailedStep3Title: "Professional Installation Scheduled & Completed",
        detailedStep3Desc: "Once you approve the estimate, we book your installation with our certified team. We handle everything: delivery, preparation, installation, cleanup, and final walkthrough. You get durable, beautiful floors with a flawless finish.",
        
        // Testimonial Highlight
        testimonialHighlightTitle: "Don't take our word for it...",
        testimonialHighlightText: "Our old floors were bubbling and lifting everywhere. Alpha Flooring explained exactly what was wrong and replaced everything in just a few days. The floors look amazing.",
        testimonialHighlightAuthor: "brandon ellison",
        testimonialHighlightLocation: "Orlando FL",
        testimonialVideoLabel: "Watch our satisfied customers",
        testimonialVideoButton: "Watch on YouTube",
        
        // Review Cards
        reviewCard1Text: "The transformation is unbelievable. Our floors went from dull and damaged to looking like a brand-new home. If you want quality work, these guys are the real deal.",
        reviewCard1Author: "Robert H.",
        reviewCard1Location: "Lake Nona FL",
        reviewCard2Text: "Super professional from start to finish. They gave us a real quote, showed all the samples in our home, and the installation was flawless. Highly recommend.",
        reviewCard2Author: "Emily D.",
        reviewCard2Location: "Winter Park FL",
        reviewCard3Text: "The transformation is unbelievable. Our floors went from dull and damaged to looking like a brand-new home. If you want quality work, these guys are the real deal.",
        reviewCard3Author: "Melissa G.",
        reviewCard3Location: "Orlando FL",
        
        // What You'll Get Section
        whatYouGetTitle: "What you'll get...",
        whatYouGet1Title: "Free In-Home or Virtual Estimate",
        whatYouGet1Desc: "We measure your space, answer questions, and help you choose the right flooring — no pressure, no fees.",
        whatYouGet2Title: "Real Flooring Samples Brought to Your Home",
        whatYouGet2Desc: "See how each option looks with your lighting, walls, and furniture.",
        whatYouGet3Title: "Premium, Florida-Proof Materials",
        whatYouGet3Desc: "High-quality LVP, tile, engineered hardwood, or laminate — all tested for humidity, moisture, and durability.",
        whatYouGet4Title: "Full Moisture & Subfloor Inspection",
        whatYouGet4Desc: "We check for concrete moisture, uneven slabs, cracks, and conditions that could damage flooring later",
        whatYouGet5Title: "Professional, Certified Installation Team",
        whatYouGet5Desc: "Experienced installers who follow correct procedures — no shortcuts, no cheap labor",
        whatYouGet6Title: "Proper Underlayment & Adhesive System",
        whatYouGet6Desc: "We use the right materials for noise reduction, stability, and long-lasting results",
        
        // FAQ
        faqTitle: "Frequently Asked Questions",
        faqSubtitle: "Answers to the most common questions",
        faq1Question: "What is the warranty period on flooring?",
        faq1Answer: "We provide a comprehensive warranty of up to 10 years on all installation work and materials used.",
        faq2Question: "How long does flooring installation take?",
        faq2Answer: "It depends on the size of the area, but on average, installing a medium-sized room takes 1-2 working days.",
        faq3Question: "Do you offer maintenance services?",
        faq3Answer: "Yes, we provide regular maintenance services and comprehensive repair for all types of wood flooring.",
        faq4Question: "What payment methods are available?",
        faq4Answer: "We accept all payment methods: cash, bank transfer, credit cards, and flexible installment plans.",
        
        // CTA
        ctaTitle: "Ready To Get Started",
        ctaButton: "Get Started",
        
        // Footer
        footerText: "© All rights reserved",
        
        // Notifications
        notifRequired: "Please fill in all required fields",
        notifEmail: "Please enter a valid email address",
        notifPhone: "Please enter a valid phone number",
        notifSending: "Sending...",
        notifSuccess: "Your request has been sent successfully! We will contact you soon",
        notifVideo: "Video will play soon"
    },
    ar: {
        // Navigation
        navHome: "الرئيسية",
        navFeatures: "المميزات",
        navProcess: "كيف نعمل",
        navTestimonials: "آراء العملاء",
        navFAQ: "الأسئلة الشائعة",
        navPhone: "+966 50 123 4567",
        
        // Hero Section - Video Captions
        videoCaptionTop: "تعرف على بيترسون — الشخص الذي يتأكد من تركيب كل أرضية بشكل مثالي.",
        videoCaptionBottom: "رسالة سريعة من بيترسون حول كيف نساعد أصحاب المنازل في الحصول على أرضيات جميلة ومتينة.",
        
        // Stats
        statYears: "سنة خبرة",
        statProjects: "مشروع مكتمل",
        statSatisfaction: "رضا العملاء",
        
        // Form
        formTitle: "احجز استشارة مجانية",
        formSubtitle: "املأ بياناتك وسنتواصل معك خلال 24 ساعة",
        formName: "الاسم الكامل",
        formPhone: "رقم الهاتف",
        formEmail: "البريد الإلكتروني",
        formCity: "المدينة",
        formPropertyType: "نوع العقار",
        formPropertyTypeLabel: "اختر نوع العقار",
        formPropertyResidential: "سكني",
        formPropertyCommercial: "تجاري",
        formFlooringType: "نوع الأرضية",
        formFlooringTypeLabel: "اختر نوع الأرضية",
        formFlooringHardwood: "خشب صلب",
        formFlooringLaminate: "لامينيت",
        formFlooringVinyl: "فينيل/LVT",
        formWhenToBegin: "متى تريد البدء؟",
        formWhenToBeginLabel: "اختر الوقت المناسب",
        formWhenNextWeek: "الأسبوع القادم",
        formWhenNextMonth: "الشهر القادم",
        formWhenDeciding: "لا زلت أفكر",
        formBudgetRange: "نطاق الميزانية",
        formBudgetRangeLabel: "اختر نطاق الميزانية",
        formBudgetUnder2500: "أقل من 2,500$",
        formBudgetUnder5000: "أقل من 5,000$",
        formBudgetUnder10000: "أقل من 10,000$",
        formBudgetUnder20000: "أقل من 20,000$",
        formBudgetOver20000: "أكثر من 20,000$",
        formSubmit: "احصل على تقديري المجاني",
        formReviewText: "أكثر من 200 عميل سعيد والعدد في ازدياد!",
        
        // Features Section
        featuresTitle: "لماذا يختار أصحاب المنازل ألفا للأرضيات",
        feature1Title: "تقييم 5/5 ⭐ على جوجل — موثوق به من مئات العائلات",
        feature2Title: "أسعار واضحة ومقدمة — بدون رسوم مخفية",
        feature3Title: "عينات حقيقية تُحضر مباشرة إلى منزلك",
        
        // Problem Solution Section
        problemSolutionTitle: "لا مزيد من الأرضيات البالية أو غير المستوية",
        problemSolutionProblem: "هل سئمت من الأرضيات التي تبدأ في الالتواء أو التشقق أو تبدو غير مستوية بعد أشهر فقط من التركيب؟",
        problemSolutionSolution: "نحن نحل هذه المشكلة باستخدام مواد عالية الجودة وتقنيات دقيقة تضمن المتانة والتشطيب الخالي من العيوب الذي يدوم لسنوات.",
        
        // Problem Solution with Image
        problemSolutionImageTitle: "أرضياتك لا يجب أن تسبب لك التوتر. نحن نصلح كل شيء.",
        problemSolutionImageText: "إذا كانت أرضياتك تالفة أو قديمة أو صاخبة أو بها فقاعات أو ترتفع، أو ببساطة لم تعد تتناسب مع منزلك... فأنت تستحق حلاً حقيقياً، وليس مجرد إصلاح سريع آخر. في ألفا للأرضيات، نساعد أصحاب المنازل في أورلاندو على استبدال أو ترميم أرضياتهم بمواد تدوم في رطوبة فلوريدا وحرارتها والحياة اليومية. لا توجد تكتيكات بيع قوية. لا رسوم مخفية. لا تركيبات منخفضة الجودة. فقط أرضيات عالية الجودة، وأسعار شفافة، ومثبتون خبراء يعاملون منزلك كأنه منزلهم. إذا كنت تريد أرضيات تبدو جميلة، وتدوم لفترة أطول، ولا تنتفخ أو تلتوي مرة أخرى — فأنت في المكان الصحيح.",
        
        // Process Section
        processTitle: "الميزة الحقيقية لاختيارنا",
        processLongevityTitle: "طول العمر",
        processLongevityDesc: "هدفنا ليس الانتهاء بسرعة والاختفاء. نحن نركز على الجودة طويلة الأمد والمتانة وولاء العملاء.",
        processTransparencyTitle: "الشفافية",
        processTransparencyDesc: "ستفهم دائماً ما يحدث في مشروعك. التسعير، الجدول الزمني، المواد، المشاكل المحتملة — كل شيء يتم توصيله بوضوح.",
        processHonestyTitle: "الصدق",
        processHonestyDesc: "من أول قياس لك إلى الجولة النهائية، ستتعامل مع أشخاص يقولون الحقيقة ببساطة — دائماً مع مصلحتك في الاعتبار.",
        
        // Detailed Process
        detailedProcessTitle: "إليك كيف يعمل الأمر...",
        detailedStep1Number: "الخطوة 01",
        detailedStep1Title: "أرسل لنا حجم غرفتك والتفاصيل",
        detailedStep1Desc: "فقط شارك قياسات غرفتك التقريبية، ونوع الأرضية التي تريدها، وأي صور للمساحة. هذا يساعدنا على فهم مشروعك قبل الزيارة.",
        detailedStep2Number: "الخطوة 02",
        detailedStep2Title: "احصل على تقدير الأرضيات المخصص الخاص بك",
        detailedStep2Desc: "يراجع فريقنا تفاصيلك ويرسل لك تقديراً واضحاً وصادقاً — بدون رسوم مخفية، بدون مفاجآت. ستعرف بالضبط تكلفة المشروع قبل أن يبدأ أي شيء.",
        detailedStep3Number: "الخطوة 03",
        detailedStep3Title: "التركيب الاحترافي المجدول والمكتمل",
        detailedStep3Desc: "بمجرد الموافقة على التقدير، نحجز تركيبك مع فريقنا المعتمد. نتعامل مع كل شيء: التسليم، التحضير، التركيب، التنظيف، والجولة النهائية. تحصل على أرضيات متينة وجميلة مع تشطيب خالٍ من العيوب.",
        
        // Testimonial Highlight
        testimonialHighlightTitle: "لا تأخذ كلامنا فقط...",
        testimonialHighlightText: "كانت أرضياتنا القديمة تنتفخ وترتفع في كل مكان. شرح ألفا للأرضيات بالضبط ما كان الخطأ واستبدل كل شيء في بضعة أيام فقط. الأرضيات تبدو رائعة.",
        testimonialHighlightAuthor: "براندون إليسون",
        testimonialHighlightLocation: "أورلاندو، فلوريدا",
        testimonialVideoLabel: "شاهد عملائنا الراضين",
        testimonialVideoButton: "شاهد على يوتيوب",
        
        // Review Cards
        reviewCard1Text: "التحول لا يصدق. ذهبت أرضياتنا من باهتة وتالفة إلى تبدو وكأنها منزل جديد تماماً. إذا كنت تريد عملاً عالي الجودة، فهؤلاء الرجال هم الحقيقيون.",
        reviewCard1Author: "روبرت هـ.",
        reviewCard1Location: "ليك نونا، فلوريدا",
        reviewCard2Text: "محترفون للغاية من البداية إلى النهاية. أعطونا عرض أسعار حقيقياً، وأظهروا جميع العينات في منزلنا، وكان التركيب لا تشوبه شائبة. أوصي بشدة.",
        reviewCard2Author: "إميلي د.",
        reviewCard2Location: "وينتر بارك، فلوريدا",
        reviewCard3Text: "التحول لا يصدق. ذهبت أرضياتنا من باهتة وتالفة إلى تبدو وكأنها منزل جديد تماماً. إذا كنت تريد عملاً عالي الجودة، فهؤلاء الرجال هم الحقيقيون.",
        reviewCard3Author: "ميليسا ج.",
        reviewCard3Location: "أورلاندو، فلوريدا",
        
        // What You'll Get Section
        whatYouGetTitle: "ما الذي ستحصل عليه...",
        whatYouGet1Title: "تقدير مجاني في المنزل أو افتراضي",
        whatYouGet1Desc: "نقيس مساحتك، ونجيب على الأسئلة، ونساعدك في اختيار الأرضية المناسبة — بدون ضغط، بدون رسوم.",
        whatYouGet2Title: "عينات أرضيات حقيقية تُحضر إلى منزلك",
        whatYouGet2Desc: "انظر كيف يبدو كل خيار مع إضاءتك وجدرانك وأثاثك.",
        whatYouGet3Title: "مواد متميزة ومقاومة لمناخ فلوريدا",
        whatYouGet3Desc: "LVP عالي الجودة، بلاط، خشب صلب مهندس، أو لامينيت — كلها مختبرة للرطوبة والمتانة.",
        whatYouGet4Title: "فحص كامل للرطوبة والأرضية السفلية",
        whatYouGet4Desc: "نتحقق من رطوبة الخرسانة، والألواح غير المستوية، والشقوق، والظروف التي قد تتلف الأرضيات لاحقاً",
        whatYouGet5Title: "فريق تركيب محترف ومعتمد",
        whatYouGet5Desc: "مثبتون ذوو خبرة يتبعون الإجراءات الصحيحة — بدون اختصارات، بدون عمالة رخيصة",
        whatYouGet6Title: "نظام طبقة سفلية ولاصق مناسب",
        whatYouGet6Desc: "نستخدم المواد المناسبة لتقليل الضوضاء والاستقرار والنتائج طويلة الأمد",
        
        // FAQ
        faqTitle: "الأسئلة الشائعة",
        faqSubtitle: "إجابات على أكثر الأسئلة شيوعاً",
        faq1Question: "ما هي مدة الضمان على الأرضيات؟",
        faq1Answer: "نوفر ضماناً شاملاً يصل إلى 10 سنوات على جميع أعمال التركيب والمواد المستخدمة.",
        faq2Question: "كم يستغرق تركيب الأرضيات؟",
        faq2Answer: "يعتمد ذلك على حجم المساحة، لكن في المتوسط يستغرق تركيب غرفة متوسطة من 1-2 يوم عمل.",
        faq3Question: "هل تقدمون خدمة الصيانة؟",
        faq3Answer: "نعم، نقدم خدمات صيانة دورية وإصلاح شامل لجميع أنواع الأرضيات الخشبية.",
        faq4Question: "ما هي طرق الدفع المتاحة؟",
        faq4Answer: "نقبل جميع طرق الدفع: نقداً، تحويل بنكي، بطاقات الائتمان، وخطط التقسيط المرنة.",
        
        // CTA
        ctaTitle: "جاهز للبدء",
        ctaButton: "ابدأ الآن",
        
        // Footer
        footerText: "© جميع الحقوق محفوظة",
        
        // Notifications
        notifRequired: "الرجاء ملء جميع الحقول المطلوبة",
        notifEmail: "الرجاء إدخال بريد إلكتروني صحيح",
        notifPhone: "الرجاء إدخال رقم هاتف صحيح",
        notifSending: "جاري الإرسال...",
        notifSuccess: "تم إرسال طلبك بنجاح! سنتواصل معك قريباً",
        notifVideo: "سيتم تشغيل الفيديو قريباً"
    }
};

// Get current language from localStorage or default to 'en'
let currentLang = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    applyLanguage(currentLang);
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    });
}

function applyTheme(theme) {
    const body = document.body;
    const themeIcon = themeToggle?.querySelector('i');
    
    if (theme === 'light') {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    } else {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
}

// Language Toggle Functionality
const langToggle = document.getElementById('langToggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        applyLanguage(currentLang);
        localStorage.setItem('language', currentLang);
    });
}

function applyLanguage(lang) {
    const html = document.documentElement;
    const langText = langToggle?.querySelector('.lang-text');
    
    // Set language and direction
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update button text
    if (langText) {
        langText.textContent = lang === 'en' ? 'AR' : 'EN';
    }
    
    // Update all translatable elements
    updateContent(lang);
}

function updateContent(lang) {
    const t = translations[lang];
    
    // Navigation
    document.querySelectorAll('.nav__link').forEach((link, index) => {
        const keys = ['navHome', 'navFeatures', 'navProcess', 'navTestimonials', 'navFAQ'];
        if (keys[index]) link.textContent = t[keys[index]];
    });
    
    const phoneLink = document.querySelector('.nav__phone span');
    if (phoneLink) phoneLink.textContent = t.navPhone;
    
    // Video Captions
    const videoCaptionTop = document.querySelector('.video-caption--top');
    if (videoCaptionTop) {
        const textContent = videoCaptionTop.innerHTML;
        if (lang === 'ar') {
            videoCaptionTop.innerHTML = 'تعرف على <span class="text-highlight">بيترسون</span> — الشخص الذي يتأكد من تركيب كل أرضية <span class="text-highlight">بشكل مثالي</span>.';
        } else {
            videoCaptionTop.innerHTML = 'Meet <span class="text-highlight">Peterson</span> — The Person Who Makes Sure Every Floor Is Installed <span class="text-highlight">Perfectly</span>.';
        }
    }
    
    const videoCaptionBottom = document.querySelector('.video-caption--bottom');
    if (videoCaptionBottom) videoCaptionBottom.textContent = t.videoCaptionBottom;
    
    // Stats
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels[0]) statLabels[0].textContent = t.statYears;
    if (statLabels[1]) statLabels[1].textContent = t.statProjects;
    if (statLabels[2]) statLabels[2].textContent = t.statSatisfaction;
    
    // Form
    const formTitle = document.querySelector('.form-title');
    if (formTitle) formTitle.textContent = t.formTitle;
    
    const formSubtitle = document.querySelector('.form-subtitle');
    if (formSubtitle) formSubtitle.textContent = t.formSubtitle;
    
    document.getElementById('fullName')?.setAttribute('placeholder', t.formName);
    document.getElementById('phone')?.setAttribute('placeholder', t.formPhone);
    document.getElementById('email')?.setAttribute('placeholder', t.formEmail);
    document.getElementById('city')?.setAttribute('placeholder', t.formCity);
    
    // Property Type
    const propertyTypeSelect = document.getElementById('propertyType');
    if (propertyTypeSelect) {
        propertyTypeSelect.options[0].textContent = t.formPropertyTypeLabel;
        propertyTypeSelect.options[1].textContent = t.formPropertyResidential;
        propertyTypeSelect.options[2].textContent = t.formPropertyCommercial;
    }
    
    // Flooring Type
    const flooringTypeSelect = document.getElementById('flooringType');
    if (flooringTypeSelect) {
        flooringTypeSelect.options[0].textContent = t.formFlooringTypeLabel;
        flooringTypeSelect.options[1].textContent = t.formFlooringHardwood;
        flooringTypeSelect.options[2].textContent = t.formFlooringLaminate;
        flooringTypeSelect.options[3].textContent = t.formFlooringVinyl;
    }
    
    // When to Begin
    const whenToBeginSelect = document.getElementById('whenToBegin');
    if (whenToBeginSelect) {
        whenToBeginSelect.options[0].textContent = t.formWhenToBeginLabel;
        whenToBeginSelect.options[1].textContent = t.formWhenNextWeek;
        whenToBeginSelect.options[2].textContent = t.formWhenNextMonth;
        whenToBeginSelect.options[3].textContent = t.formWhenDeciding;
    }
    
    // Budget Range
    const budgetRangeSelect = document.getElementById('budgetRange');
    if (budgetRangeSelect) {
        budgetRangeSelect.options[0].textContent = t.formBudgetRangeLabel;
        budgetRangeSelect.options[1].textContent = t.formBudgetUnder2500;
        budgetRangeSelect.options[2].textContent = t.formBudgetUnder5000;
        budgetRangeSelect.options[3].textContent = t.formBudgetUnder10000;
        budgetRangeSelect.options[4].textContent = t.formBudgetUnder20000;
        budgetRangeSelect.options[5].textContent = t.formBudgetOver20000;
    }
    
    // Form Labels
    const formLabels = document.querySelectorAll('.form-label');
    if (formLabels[0]) formLabels[0].innerHTML = t.formPropertyType + ' <span class="required">*</span>';
    if (formLabels[1]) formLabels[1].innerHTML = t.formFlooringType + ' <span class="required">*</span>';
    if (formLabels[2]) formLabels[2].innerHTML = t.formWhenToBegin + ' <span class="required">*</span>';
    if (formLabels[3]) formLabels[3].textContent = t.formBudgetRange;
    
    const formSubmit = document.querySelector('.form-submit span');
    if (formSubmit) formSubmit.textContent = t.formSubmit;
    
    const reviewText = document.querySelector('.review-text');
    if (reviewText) reviewText.textContent = t.formReviewText;
    
    // Features
    const featuresTitle = document.querySelector('#features .section-titl');
    if (featuresTitle) featuresTitle.textContent = t.featuresTitle;
    
    const featureTitles = document.querySelectorAll('.feature-titl');
    if (featureTitles[0]) {
        if (lang === 'ar') {
            featureTitles[0].innerHTML = 'تقييم 5/5 ⭐ على جوجل — <span class="text-highlight">موثوق به</span> من مئات العائلات';
        } else {
            featureTitles[0].innerHTML = '5/5 ⭐ Google rating — <span class="text-highlight">trusted</span> by hundreds of families';
        }
    }
    if (featureTitles[1]) {
        if (lang === 'ar') {
            featureTitles[1].innerHTML = 'أسعار واضحة <span class="text-highlight">ومقدمة</span> — بدون رسوم مخفية';
        } else {
            featureTitles[1].innerHTML = 'Clear, <span class="text-highlight">upfront pricing</span> — no hidden fees';
        }
    }
    if (featureTitles[2]) {
        if (lang === 'ar') {
            featureTitles[2].innerHTML = '<span class="text-highlight">عينات حقيقية</span> تُحضر مباشرة إلى منزلك';
        } else {
            featureTitles[2].innerHTML = '<span class="text-highlight">Real samples</span> brought directly to your home';
        }
    }
    
    // Problem Solution
    const problemSolutionTitle = document.querySelector('.problem-solution__title');
    if (problemSolutionTitle) problemSolutionTitle.textContent = t.problemSolutionTitle;
    
    const problemSolutionProblem = document.querySelector('.problem-solution__problem');
    if (problemSolutionProblem) problemSolutionProblem.textContent = t.problemSolutionProblem;
    
    const problemSolutionSolution = document.querySelector('.problem-solution__solution');
    if (problemSolutionSolution) problemSolutionSolution.textContent = t.problemSolutionSolution;
    
    // Problem Solution with Image
    const problemSolutionImageTitle = document.querySelector('.problem-solution-image__title');
    if (problemSolutionImageTitle) problemSolutionImageTitle.textContent = t.problemSolutionImageTitle;
    
    const problemSolutionImageText = document.querySelector('.problem-solution-image__problem');
    if (problemSolutionImageText) problemSolutionImageText.textContent = t.problemSolutionImageText;
    
    // Process Section
    const processTitle = document.querySelector('#process .section-title');
    if (processTitle) processTitle.textContent = t.processTitle;
    
    const stepTitles = document.querySelectorAll('.step-title');
    if (stepTitles[0]) {
        if (lang === 'ar') {
            stepTitles[0].innerHTML = '<span class="text-highlight">طول العمر</span>';
        } else {
            stepTitles[0].innerHTML = '<span class="text-highlight">Longevity</span>';
        }
    }
    if (stepTitles[1]) {
        if (lang === 'ar') {
            stepTitles[1].innerHTML = '<span class="text-highlight">الشفافية</span>';
        } else {
            stepTitles[1].innerHTML = '<span class="text-highlight">Transparency</span>';
        }
    }
    if (stepTitles[2]) {
        if (lang === 'ar') {
            stepTitles[2].innerHTML = '<span class="text-highlight">الصدق</span>';
        } else {
            stepTitles[2].innerHTML = '<span class="text-highlight">Honesty</span>';
        }
    }
    
    const stepDescriptions = document.querySelectorAll('.step-description');
    if (stepDescriptions[0]) stepDescriptions[0].textContent = t.processLongevityDesc;
    if (stepDescriptions[1]) stepDescriptions[1].textContent = t.processTransparencyDesc;
    if (stepDescriptions[2]) stepDescriptions[2].textContent = t.processHonestyDesc;
    
    // Detailed Process
    const detailedProcessTitle = document.querySelector('.detailed-process .section-title');
    if (detailedProcessTitle) detailedProcessTitle.textContent = t.detailedProcessTitle;
    
    const detailedStepNumbers = document.querySelectorAll('.detailed-step__number');
    if (detailedStepNumbers[0]) detailedStepNumbers[0].textContent = t.detailedStep1Number;
    if (detailedStepNumbers[1]) detailedStepNumbers[1].textContent = t.detailedStep2Number;
    if (detailedStepNumbers[2]) detailedStepNumbers[2].textContent = t.detailedStep3Number;
    
    const detailedStepTitles = document.querySelectorAll('.detailed-step__title');
    if (detailedStepTitles[0]) {
        if (lang === 'ar') {
            detailedStepTitles[0].innerHTML = 'أرسل لنا <span class="text-highlight">حجم غرفتك</span> والتفاصيل';
        } else {
            detailedStepTitles[0].innerHTML = 'Send Us Your <span class="text-highlight">Room Size</span> & Details';
        }
    }
    if (detailedStepTitles[1]) {
        if (lang === 'ar') {
            detailedStepTitles[1].innerHTML = 'احصل على تقدير الأرضيات <span class="text-highlight">المخصص</span> الخاص بك';
        } else {
            detailedStepTitles[1].innerHTML = 'Get Your <span class="text-highlight">Customized</span> Flooring Estimate';
        }
    }
    if (detailedStepTitles[2]) {
        if (lang === 'ar') {
            detailedStepTitles[2].innerHTML = '<span class="text-highlight">التركيب الاحترافي</span> المجدول والمكتمل';
        } else {
            detailedStepTitles[2].innerHTML = '<span class="text-highlight">Professional Installation</span> Scheduled & Completed';
        }
    }
    
    const detailedStepDescs = document.querySelectorAll('.detailed-step__description');
    if (detailedStepDescs[0]) detailedStepDescs[0].textContent = t.detailedStep1Desc;
    if (detailedStepDescs[1]) detailedStepDescs[1].textContent = t.detailedStep2Desc;
    if (detailedStepDescs[2]) {
        if (lang === 'ar') {
            detailedStepDescs[2].innerHTML = t.detailedStep3Desc;
        } else {
            detailedStepDescs[2].innerHTML = 'Once you approve the estimate, we book your installation with our certified team. We handle everything: delivery, preparation, installation, cleanup, and final walkthrough.<br><br>You get durable, beautiful floors with a flawless finish.';
        }
    }
    
    // Testimonial Highlight
    const testimonialHighlightTitle = document.querySelector('.testimonial-highlight__title');
    if (testimonialHighlightTitle) {
        if (lang === 'ar') {
            testimonialHighlightTitle.innerHTML = 'لا تأخذ <span class="text-highlight">كلامنا</span> فقط...';
        } else {
            testimonialHighlightTitle.innerHTML = 'Don\'t take <span class="text-highlight">our word</span> for it...';
        }
    }
    
    const testimonialHighlightText = document.querySelector('.testimonial-highlight__text');
    if (testimonialHighlightText) testimonialHighlightText.textContent = t.testimonialHighlightText;
    
    const testimonialHighlightAuthor = document.querySelector('.testimonial-highlight__author .author-name');
    if (testimonialHighlightAuthor) testimonialHighlightAuthor.textContent = t.testimonialHighlightAuthor;
    
    const testimonialHighlightLocation = document.querySelector('.testimonial-highlight__author .author-location');
    if (testimonialHighlightLocation) testimonialHighlightLocation.textContent = t.testimonialHighlightLocation;
    
    const videoLabel = document.querySelector('.video-label');
    if (videoLabel) videoLabel.textContent = t.testimonialVideoLabel;
    
    const videoPlatform = document.querySelector('.video-platform');
    if (videoPlatform) {
        if (lang === 'ar') {
            videoPlatform.innerHTML = 'شاهد على <i class="fab fa-youtube"></i> يوتيوب';
        } else {
            videoPlatform.innerHTML = 'Watch on <i class="fab fa-youtube"></i> YouTube';
        }
    }
    
    // Review Cards
    const reviewCards = document.querySelectorAll('.review-card');
    if (reviewCards[0]) {
        reviewCards[0].querySelector('.review-text').textContent = t.reviewCard1Text;
        reviewCards[0].querySelector('.review-author').textContent = t.reviewCard1Author;
        reviewCards[0].querySelector('.review-location').textContent = t.reviewCard1Location;
    }
    if (reviewCards[1]) {
        reviewCards[1].querySelector('.review-text').textContent = t.reviewCard2Text;
        reviewCards[1].querySelector('.review-author').textContent = t.reviewCard2Author;
        reviewCards[1].querySelector('.review-location').textContent = t.reviewCard2Location;
    }
    if (reviewCards[2]) {
        reviewCards[2].querySelector('.review-text').textContent = t.reviewCard3Text;
        reviewCards[2].querySelector('.review-author').textContent = t.reviewCard3Author;
        reviewCards[2].querySelector('.review-location').textContent = t.reviewCard3Location;
    }
    
    // What You'll Get Section
    const whatYouGetTitle = document.querySelector('#testimonials .section-title');
    if (whatYouGetTitle) whatYouGetTitle.textContent = t.whatYouGetTitle;
    
    const testimonialCards = document.querySelectorAll('.testimonial-card h2');
    if (testimonialCards[0]) {
        if (lang === 'ar') {
            testimonialCards[0].innerHTML = 'تقدير <span class="text-highlight">مجاني</span> في المنزل أو افتراضي';
        } else {
            testimonialCards[0].innerHTML = '<span class="text-highlight">Free</span> In-Home or Virtual Estimate';
        }
    }
    if (testimonialCards[1]) {
        if (lang === 'ar') {
            testimonialCards[1].innerHTML = '<span class="text-highlight">عينات أرضيات حقيقية</span> تُحضر إلى منزلك';
        } else {
            testimonialCards[1].innerHTML = '<span class="text-highlight">Real Flooring Samples</span> Brought to Your Home';
        }
    }
    if (testimonialCards[2]) {
        if (lang === 'ar') {
            testimonialCards[2].innerHTML = 'مواد <span class="text-highlight">متميزة</span> ومقاومة لمناخ فلوريدا';
        } else {
            testimonialCards[2].innerHTML = '<span class="text-highlight">Premium</span>, Florida-Proof Materials';
        }
    }
    if (testimonialCards[3]) {
        if (lang === 'ar') {
            testimonialCards[3].innerHTML = 'فحص كامل <span class="text-highlight">للرطوبة</span> والأرضية السفلية';
        } else {
            testimonialCards[3].innerHTML = '<span class="text-highlight">Full Moisture</span> & Subfloor Inspection';
        }
    }
    if (testimonialCards[4]) {
        if (lang === 'ar') {
            testimonialCards[4].innerHTML = 'فريق تركيب <span class="text-highlight">محترف</span> ومعتمد';
        } else {
            testimonialCards[4].innerHTML = '<span class="text-highlight">Professional</span>, Certified Installation Team';
        }
    }
    if (testimonialCards[5]) {
        if (lang === 'ar') {
            testimonialCards[5].innerHTML = 'نظام طبقة سفلية ولاصق <span class="text-highlight">مناسب</span>';
        } else {
            testimonialCards[5].innerHTML = '<span class="text-highlight">Proper</span> Underlayment & Adhesive System';
        }
    }
    
    const testimonialTexts = document.querySelectorAll('.testimonial-card .testimonial-text');
    if (testimonialTexts[0]) testimonialTexts[0].textContent = t.whatYouGet1Desc;
    if (testimonialTexts[1]) testimonialTexts[1].textContent = t.whatYouGet2Desc;
    if (testimonialTexts[2]) testimonialTexts[2].textContent = t.whatYouGet3Desc;
    if (testimonialTexts[3]) testimonialTexts[3].textContent = t.whatYouGet4Desc;
    if (testimonialTexts[4]) testimonialTexts[4].textContent = t.whatYouGet5Desc;
    if (testimonialTexts[5]) testimonialTexts[5].textContent = t.whatYouGet6Desc;
    
    // FAQ
    const faqTitle = document.querySelector('#faq .section-title');
    if (faqTitle) faqTitle.textContent = t.faqTitle;
    
    const faqSubtitle = document.querySelector('#faq .section-subtitle');
    if (faqSubtitle) faqSubtitle.textContent = t.faqSubtitle;
    
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems[0]) {
        faqItems[0].querySelector('.faq-question h3').textContent = t.faq1Question;
        faqItems[0].querySelector('.faq-answer p').textContent = t.faq1Answer;
    }
    if (faqItems[1]) {
        faqItems[1].querySelector('.faq-question h3').textContent = t.faq2Question;
        faqItems[1].querySelector('.faq-answer p').textContent = t.faq2Answer;
    }
    if (faqItems[2]) {
        faqItems[2].querySelector('.faq-question h3').textContent = t.faq3Question;
        faqItems[2].querySelector('.faq-answer p').textContent = t.faq3Answer;
    }
    if (faqItems[3]) {
        faqItems[3].querySelector('.faq-question h3').textContent = t.faq4Question;
        faqItems[3].querySelector('.faq-answer p').textContent = t.faq4Answer;
    }
    
    // CTA
    const ctaTitle = document.querySelector('.cta__title');
    if (ctaTitle) ctaTitle.textContent = t.ctaTitle;
    
    const ctaButton = document.querySelector('.cta__button span');
    if (ctaButton) ctaButton.textContent = t.ctaButton;
    
    // Footer
    const footerText = document.querySelector('.footer__content p');
    if (footerText) footerText.textContent = t.footerText;
}
