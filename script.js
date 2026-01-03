// ===== DÉBUT DU BLOC DE TRADUCTION : DICTIONNAIRE MIS À JOUR =====
/*const translations = {
    // Navigation
    "nav_home": {"fr": "Accueil", "en": "Home"},
    "nav_about": {"fr": "À propos", "en": "About"},
    "nav_skills": {"fr": "Compétences", "en": "Skills"},
    "nav_projects": {"fr": "Projets", "en": "Projects"},
    "nav_contact": {"fr": "Contact", "en": "Contact"},

    // Section Hero
    "hero_subtitle": {"fr": "Hey, moi c'est", "en": "Hey, I'm"},
    "hero_main_title": {"fr": "Imene · Créatif", "en": "Imene · Creative"},
    "hero_description": {"fr": "Étudiant en informatique passionné par la data, le code, le design et la photographie. Je crée des projets qui mélangent technologie et créativité.", "en": "Computer science student passionate about data, code, design, and photography. I build projects that blend technology and creativity."},
    "btn_stage": {"fr": "Je cherche un stage 🚀", "en": "Seeking an internship 🚀"},
    "btn_projects": {"fr": "Mes projets", "en": "My Projects"},
    "status_availability": {"fr": "Disponible pour stage & alternance", "en": "Available for internship & apprenticeship"},
    
    // Section About
    "title_about": {"fr": "Qui suis-je ?", "en": "About Me?"},
    "about_title_1": {"fr": "Mon parcours", "en": "My Journey"},
    "about_p1": {"fr": "Actuellement étudiant en informatique, je suis fasciné par l'intersection entre la technologie et la créativité. Pour moi, le code n'est pas juste des lignes - c'est un moyen de créer, d'innover et de résoudre des problèmes.", "en": "Currently a computer science student, I'm fascinated by the intersection of technology and creativity. For me, code isn't just lines—it's a way to create, innovate, and solve problems."},
    "about_p2": {"fr": "Passionné par la data, j'adore extraire des insights et créer des visualisations qui racontent une histoire. Mais je ne m'arrête pas là : le design, le dessin et la photographie sont mes autres terrains de jeu.", "en": "Passionate about data, I love extracting insights and creating visualizations that tell a story. But I don't stop there: design, drawing, and photography are my other playgrounds."},
    "about_tip": {"fr": "Toujours curieux d'apprendre et d'explorer de nouvelles technologies", "en": "Always curious to learn and explore new technologies"},
    "passion_data": {"fr": "Data & Analytics", "en": "Data & Analytics"},
    "passion_data_desc": {"fr": "Analyser, visualiser et donner du sens aux données", "en": "Analyze, visualize, and give meaning to data"},
    "passion_dev": {"fr": "Développement", "en": "Development"},
    "passion_dev_desc": {"fr": "Créer des applications et automatiser des processus", "en": "Create applications and automate processes"},
    "passion_design": {"fr": "Design & Art", "en": "Design & Art"},
    "passion_design_desc": {"fr": "Dessiner, créer et explorer l'univers visuel", "en": "Draw, create, and explore the visual universe"},
    "passion_photo": {"fr": "Photographie", "en": "Photography"},
    "passion_photo_desc": {"fr": "Capturer des moments et raconter des histoires", "en": "Capture moments and tell stories"},

    // Section Skills
    "title_skills": {"fr": "Mes Compétences", "en": "My Skills"},
    "skills_subtitle": {"fr": "Un mix de compétences techniques en développement et data, combinées à une sensibilité créative", "en": "A mix of technical skills in development and data, combined with a creative sensitivity"},
    "skill_cat_lang": {"fr": "Langages de programmation", "en": "Programming Languages"},
    "skill_cat_data": {"fr": "Data & Analyse", "en": "Data & Analysis"},
    "skill_cat_tools": {"fr": "Outils & Technologies", "en": "Tools & Technologies"},
    "skill_cat_creative": {"fr": "Créativité & Design", "en": "Creativity & Design"},
    "skills_mastery_title": {"fr": "Niveau de maîtrise", "en": "Mastery Level"},
    "skills_fun_fact": {"fr": "💡 Fun fact: J'adore combiner mes compétences en data avec mes passions créatives pour créer des projets uniques qui sortent de l'ordinaire !", "en": "💡 Fun fact: I love combining my data skills with my creative passions to build unique, out-of-the-ordinary projects!"},
    
    // Section Projects
    "title_projects": {"fr": "Mes Projets", "en": "My Projects"},
    "projects_subtitle": {"fr": "Une sélection de projets qui démontrent mes compétences", "en": "A selection of projects that demonstrate my skills"},
    "project_1_title": {"fr": "Visualisation de Données Météo", "en": "Weather Data Visualization"},
    "project_1_desc": {"fr": "Dashboard interactif en Python affichant des tendances météorologiques avec des graphiques dynamiques. Utilise Pandas pour le traitement et Plotly pour la visualisation.", "en": "Interactive dashboard in Python showing weather trends with dynamic charts. Uses Pandas for processing and Plotly for visualization."},
    "project_2_title": {"fr": "Application de Gestion de Tâches", "en": "Task Management Application"},
    "project_2_desc": {"fr": "App web full-stack avec authentification, CRUD complet et interface intuitive. Base de données PostgreSQL et backend REST API.", "en": "Full-stack web app with authentication, complete CRUD, and intuitive interface. PostgreSQL database and REST API backend."},
    "project_3_title": {"fr": "Générateur d'Art Génératif", "en": "Generative Art Generator"},
    "project_3_desc": {"fr": "Créations visuelles algorithmiques avec Processing. Exploration de patterns mathématiques et formes organiques pour produire des œuvres uniques.", "en": "Algorithmic visual creations using Processing. Exploration of mathematical patterns and organic shapes to produce unique artwork."},
    "project_4_title": {"fr": "Analyse Exploratoire de Datasets", "en": "Exploratory Dataset Analysis"},
    "project_4_desc": {"fr": "Notebook d'analyse de données publiques avec nettoyage, exploration statistique et insights visuels. Focus sur la qualité des données et storytelling.", "en": "Notebook for public data analysis with cleaning, statistical exploration, and visual insights. Focus on data quality and storytelling."},
    "btn_view_project": {"fr": "Voir le projet", "en": "View Project"},
    "btn_view_code": {"fr": "Code source", "en": "Source Code"},

    // Section Opportunity
    "status_available_opp": {"fr": "Disponible immédiatement", "en": "Available immediately"},
    "title_opportunity": {"fr": "Je recherche une opportunité", "en": "I'm seeking an opportunity"},
    "opportunity_subtitle": {"fr": "Motivé, curieux et prêt à relever de nouveaux défis dans le monde de la tech et de la data", "en": "Motivated, curious, and ready to take on new challenges in the world of tech and data"},
    "opp_stage_title": {"fr": "Stage (immédiat)", "en": "Internship (immediate)"},
    "opp_stage_desc": {"fr": "Je recherche activement un stage pour mettre en pratique mes compétences et apprendre auprès de professionnels", "en": "I am actively looking for an internship to put my skills into practice and learn from professionals"},
    "opp_stage_duration": {"fr": "Durée: 2-6 mois", "en": "Duration: 2-6 months"},
    "opp_alternance_title": {"fr": "Alternance (après stage)", "en": "Apprenticeship (post-internship)"},
    "opp_alternance_desc": {"fr": "Intéressé par une alternance pour combiner formation académique et expérience professionnelle concrète", "en": "Interested in an apprenticeship to combine academic training with concrete professional experience"},
    "opp_alternance_duration": {"fr": "Durée: 1-2 ans", "en": "Duration: 1-2 years"},
    "interests_title": {"fr": "Ce qui m'intéresse", "en": "What interests me"},
    "interests_subtitle": {"fr": "Domaines et technologies qui me passionnent", "en": "Areas and technologies I am passionate about"},
    "interest_data_viz": {"fr": "Analyse et visualisation de données", "en": "Data analysis and visualization"},
    "interest_ml": {"fr": "Machine Learning & IA", "en": "Machine Learning & AI"},
    "interest_dev_app": {"fr": "Développement d'applications", "en": "Application development"},
    "interest_creative": {"fr": "Projets créatifs & innovants", "en": "Creative & innovative projects"},
    "interest_web": {"fr": "Web & technologies modernes", "en": "Web & modern technologies"},
    "interest_automation": {"fr": "Automatisation & outils", "en": "Automation & tools"},
    "cta_title": {"fr": "Vous avez une opportunité ?", "en": "Do you have an opportunity?"},
    "cta_text": {"fr": "Je suis ouvert à discuter de projets passionnants, de stages ou d'alternances. N'hésitez pas à me contacter pour échanger !", "en": "I am open to discussing exciting projects, internships, or apprenticeships. Feel free to contact me to discuss!"},
    "btn_contact_me_cta": {"fr": "Me contacter", "en": "Contact Me"},
    "btn_download_cv": {"fr": "Télécharger mon CV", "en": "Download my CV"},
    "location": {"fr": "France (flexible sur la localisation)", "en": "France (flexible on location)"},
    "available_now": {"fr": "Disponible dès maintenant", "en": "Available now"},
    
    // Section Contact & Footer
    "title_contact": {"fr": "Contactez-moi", "en": "Contact Me"},
    "contact_subtitle": {"fr": "Une question ou une opportunité de collaboration ? N'hésitez pas à me contacter !", "en": "A question or a collaboration opportunity? Don't hesitate to contact me!"},
    "contact_info_title": {"fr": "Informations de contact", "en": "Contact Information"},
    "contact_label_email": {"fr": "Email", "en": "Email"},
    "contact_label_linkedin": {"fr": "LinkedIn", "en": "LinkedIn"},
    "contact_label_github": {"fr": "GitHub", "en": "GitHub"},
    "contact_label_location": {"fr": "Localisation", "en": "Location"},
    "contact_location_value": {"fr": "Paris, France", "en": "Paris, France"},
    "contact_tip_title": {"fr": "Pourquoi me contacter ?", "en": "Why contact me?"},
    "contact_list_opp": {"fr": "✨ Opportunités de stage ou alternance", "en": "✨ Internship or apprenticeship opportunities"},
    "contact_list_collab": {"fr": "🤝 Collaborations sur des projets", "en": "🤝 Collaborations on projects"},
    "contact_list_discussion": {"fr": "💬 Discussions tech, data ou créatives", "en": "💬 Tech, data, or creative discussions"},
    "contact_list_share": {"fr": "📸 Partage d'idées et de passions", "en": "📸 Sharing ideas and passions"},
    "form_label_name": {"fr": "Nom", "en": "Name"},
    "form_placeholder_name": {"fr": "Votre nom", "en": "Your name"},
    "form_label_email": {"fr": "Email", "en": "Email"},
    "form_placeholder_email": {"fr": "votre.email@example.com", "en": "your.email@example.com"},
    "form_label_message": {"fr": "Message", "en": "Message"},
    "form_placeholder_message": {"fr": "Votre message...", "en": "Your message..."},
    "form_send_btn": {"fr": "Envoyer le message", "en": "Send Message"},
    "form_success_alert": {"fr": "Message envoyé avec succès ! 🚀\n\nNote: Ceci est une démo. Pour un vrai envoi, vous devrez connecter un service backend.", "en": "Message sent successfully! 🚀\n\nNote: This is a demo. For a real submission, you'll need to connect a backend service."},
    "footer_copyright": {"fr": "© 2025 Portfolio créé avec passion 🚀", "en": "© 2025 Portfolio created with passion 🚀"},
    "footer_tagline": {"fr": "Code · Data · Design · Photographie", "en": "Code · Data · Design · Photography"}
};

let currentLang = 'fr'; // Langue par défaut

function updateContent(lang) {
    // 1. Mise à jour de tous les éléments avec data-translate-key (textContent)
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
        }
    });

    // 2. Mise à jour des placeholders de formulaire (pour les inputs/textarea)
    document.querySelectorAll('[data-placeholder-key]').forEach(element => {
        const key = element.getAttribute('data-placeholder-key');
        if (translations[key] && translations[key][lang]) {
            element.placeholder = translations[key][lang];
        }
    });
    
    // 3. Mise à jour des classes 'active' sur les boutons FR/EN
    document.getElementById('lang-fr').classList.remove('active');
    document.getElementById('lang-en').classList.remove('active');
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    currentLang = lang;
    
    // Mise à jour du titre de l'onglet
    if (lang === 'en') {
        document.title = 'Portfolio - Creative Student';
    } else {
        document.title = 'Portfolio - Étudiant Créatif';
    }
}
// ===== FIN DU BLOC DE TRADUCTION =====


// ===== INITIALISATION GLOBALE (Fusion de l'initialisation et de la traduction) =====
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Initialiser la traduction au chargement
    updateContent(currentLang);

    // 2. Événements pour les boutons de langue
    document.getElementById('lang-fr').addEventListener('click', () => updateContent('fr'));
    document.getElementById('lang-en').addEventListener('click', () => updateContent('en'));


    // 3. Initialiser les fonctionnalités existantes
    lucide.createIcons();
    initParticles();
    initNavigation();
    initScrollAnimations();
    initSkillBars();
    initContactForm();
});

// ===== PARTICULES ANIMÉES (Fonction existante) =====
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const moveX = (Math.random() - 0.5) * 200;
        const moveY = (Math.random() - 0.5) * 200;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.setProperty('--x', moveX + 'px');
        particle.style.setProperty('--y', moveY + 'px');
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// ===== NAVIGATION (Fonction existante) =====
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    
    // Navigation au clic
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-section');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            // Mettre à jour l'état actif (géré ici pour le clic)
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Détection du scroll pour mettre à jour la navigation
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    function updateActiveNav() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 150) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === currentSection) {
                item.classList.add('active');
            }
        });
    }
}

// ===== ANIMATIONS AU SCROLL (Fonction existante) =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observer les éléments à animer
    const animatedElements = document.querySelectorAll(
        '.passion-card, .skill-category, .project-card, .opportunity-card, .interest-item'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ===== BARRES DE COMPÉTENCES (Fonction existante) =====
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percent = bar.getAttribute('data-percent');
                bar.style.width = percent + '%';
                observer.unobserve(bar);
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// ===== FORMULAIRE DE CONTACT (Adapté pour la traduction) =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        console.log('Formulaire soumis:', formData);
        
        // Afficher le message de succès traduit
        const alertMessage = translations["form_success_alert"][currentLang] || translations["form_success_alert"]["fr"];
        alert(alertMessage);
        
        // Réinitialiser le formulaire
        form.reset();
    });
}

// ===== EFFET DE SURVOL PERSONNALISÉ (Fonction existante) =====
document.addEventListener('mousemove', function(e) {
    const cards = document.querySelectorAll('.project-card, .passion-card, .opportunity-card');
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
    });
});

// ===== SMOOTH SCROLL POUR LES LIENS (Fonction existante) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== RÉINITIALISER LES ICÔNES APRÈS CHARGEMENT (Fonction existante) =====
window.addEventListener('load', function() {
    lucide.createIcons();
});

*/


// ===== DÉBUT DU BLOC DE TRADUCTION : DICTIONNAIRE MIS À JOUR =====
const translations = {
    // Navigation
    "nav_home": {"fr": "Accueil", "en": "Home"},
    "nav_about": {"fr": "À propos", "en": "About"},
    "nav_skills": {"fr": "Compétences", "en": "Skills"},
    "nav_projects": {"fr": "Projets", "en": "Projects"},
    "nav_contact": {"fr": "Contact", "en": "Contact"},

    // Section Hero
    "hero_subtitle": {"fr": "Hey, moi c'est", "en": "Hey, I'm"},
    "hero_main_title": {"fr": "Imene ", "en": "Imene "},
    "hero_description": {"fr": "Étudiante en informatique passionné par la data, le code, le design et la photographie. Je crée des projets qui mélangent technologie et créativité.", "en": "Computer science student passionate about data, code, design, and photography. I build projects that blend technology and creativity."},
    "btn_stage": {"fr": "Je cherche un stage 🚀", "en": "Seeking an internship 🚀"},
    "btn_projects": {"fr": "Mes projets", "en": "My Projects"},
    "status_availability": {"fr": "Disponible pour stage & alternance", "en": "Available for internship & apprenticeship"},
    
    // Section About
    "title_about": {"fr": "Qui suis-je ?", "en": "About Me?"},
    "about_title_1": {"fr": "Mon parcours", "en": "My Journey"},
    "about_p1": {"fr": "Actuellement étudiante en  licence informatique , je suis fasciné par l'intersection entre la technologie et la créativité.", "en": "Currently a computer science student, I'm fascinated by the intersection of technology and creativity."},
    "about_p2": {"fr": "Passionné par la data, j'adore extraire des insights et créer des visualisations qui racontent une histoire. Mais je ne m'arrête pas là : le design, le dessin et la photographie sont mes autres terrains de jeu.", "en": "Passionate about data, I love extracting insights and creating visualizations that tell a story. But I don't stop there: design, drawing, and photography are my other playgrounds."},
    "about_tip": {"fr": "Toujours curieuse d'apprendre et d'explorer de nouvelles technologies", "en": "Always curious to learn and explore new technologies"},
    "passion_data": {"fr": "Data & Analytics", "en": "Data & Analytics"},
    "passion_data_desc": {"fr": "Analyser, visualiser et donner du sens aux données", "en": "Analyze, visualize, and make sense of data"},
    "passion_dev": {"fr": "Développement", "en": "Development"},
    "passion_dev_desc": {"fr": "Coder des solutions élégantes en Python, JS et plus", "en": "Code elegant solutions in Python, JS, and more"},
    "passion_design": {"fr": "Design & Art", "en": "Design & Art"},
    "passion_design_desc": {"fr": "Dessiner, créer et explorer l'univers visuel", "en": "Draw, create, and explore the visual universe"},
    "passion_photo": {"fr": "Photographie", "en": "Photography"},
    "passion_photo_desc": {"fr": "Capturer des moments et raconter des histoires", "en": "Capture moments and tell stories"},

    // Section Skills
    "title_skills": {"fr": "Mes Compétences", "en": "My Skills"},
    //"skills_subtitle": {"fr": "Expertise technique et qualités personnelles qui me définissent", "en": "Technical expertise and personal qualities that define me"},
    "skill_title_tech": {"fr": "Compétences Techniques", "en": "Technical Skills"},
    "skill_title_soft": {"fr": "Soft Skills (Qualités)", "en": "Soft Skills (Qualities)"},
    "soft_skill_1": {"fr": "Résolution de problèmes", "en": "Problem Solving"},
    "soft_skill_2": {"fr": "Autonomie", "en": "Autonomy"},
    "soft_skill_3": {"fr": "Créativité", "en": "Creativity"},
    "soft_skill_4": {"fr": "Adaptabilité", "en": "Adaptability"},
    "soft_skill_5": {"fr": "Esprit critique", "en": "Critical Thinking"},
    "soft_skill_6": {"fr": "Travail d'équipe", "en": "Teamwork"},
    "fun_fact": {"fr": "Fait amusant : J'utilise le dark mode 99% du temps (mais je sais coder le light mode aussi !) 💡", "en": "Fun fact: I use dark mode 99% of the time (but I know how to code light mode too!) 💡"},

    //niveux de metrise
    "skills_mastery_title": {"fr": "Niveau de maîtrise", "en": "Level of proficiency"},
    // Section Projects
    "title_projects": {"fr": "Mes Projets", "en": "My Projects"},
    "projects_subtitle": {"fr": "Une sélection de projets qui démontrent mes compétences", "en": "A selection of projects demonstrating my skills"},
    "project_1_title": {"fr": "Apprentissage des verbes irréguliers anglais – Application Android", "en": "Public Data Analysis"},
    "project_1_desc": {"fr":"Application interactive proposant exercices, quiz et suivi des progrès. Interface mobile intuitive avec sauvegarde locale des données pour une expérience personnalisée"},
  
    "project_2_title": {"fr": "Système de gestion des transports LIA", "en": "Web 3D Visualization Tool"},
    "project_2_desc": {"fr": "Application web permettant de gérer les lignes, arrêts et voyageurs du réseau de transport LIA. Le projet inclut la création, lecture, mise à jour et suppression (CRUD) des données, avec des formulaires dynamiques et une interface simple pour administrer efficacement la base de données."},
    "btn_view_project": {"fr": "Voir le projet", "en": "View Project"},
    "btn_view_code": {"fr": "Code source", "en": "Source Code"},



    "project_3_title": {"fr": "Analyse statistique – Test Beshdal", "en": "Statistical Analysis – Beshdal Test"},
    "project_3_desc": {"fr": "Projet d’analyse de données pour le Test Beshdal réalisé sur Google Colab. Le projet consistait à traiter et explorer des données expérimentales, calculer des indicateurs statistiques, visualiser les résultats et en tirer des conclusions pertinentes."  , "en" : "Data analysis project for the Beshdal Test carried out on Google Colab. The project involved processing and exploring experimental data, computing statistical indicators, visualizing the results, and drawing relevant conclusions."},




    // Section Opportunity
    "title_opportunity": {"fr": "Je recherche une opportunité", "en": "Seeking an Opportunity"},
    "status_available_opp": {"fr": "Disponible immédiatement", "en": "Available immediately"},
    "opp_subtitle": {"fr": "Je suis activement à la recherche d'un stage ou d'une alternance pour mettre en pratique mes compétences.", "en": "I am actively looking for an internship or apprenticeship to put my skills into practice."},
    "opp_type_title": {"fr": "Type de Contrat", "en": "Contract Type"},
    "opp_type_desc": {"fr": "Stage (3 à 6 mois) ou Alternance", "en": "Internship (3-6 months) or Apprenticeship"},
    "opportunity_subtitle" : { "fr" :"Motivé, curieux et prêt à relever de nouveaux défis dans le monde de la tech et de la data ",  "en": "Motivated, curious, and ready to take on new challenges in the tech and data world."},
    "opp_domain_title": {"fr": "Domaine Cible", "en": "Target Domain"},
    "opp_domain_desc": {"fr": "Data Science, Data Engineering, Développement Web/Full Stack", "en": "Data Science, Data Engineering, Web/Full Stack Development"},
    "interest_title": {"fr": "Mes Intérêts de Carrière", "en": "My Career Interests"},
    "interest_1": {"fr": "Intelligence Artificielle (IA)", "en": "Artificial Intelligence (AI)"},
    "interest_2": {"fr": "Sécurité des Données", "en": "Data Security"},
    "interest_3": {"fr": "Cloud Computing (AWS/Azure)", "en": "Cloud Computing (AWS/Azure)"},
    "interest_4": {"fr": "UX/UI Design", "en": "UX/UI Design"},
    "interest_5": {"fr": "Blockchains", "en": "Blockchains"},
    "interest_6": {"fr": "Génie Logiciel", "en": "Software Engineering"},
    "cta_title": {"fr": "Vous avez une opportunité", "en": "Ready to Collaborate?"},
    "cta_desc": {"fr": "Je suis toujours ouvert aux discussions sur de nouveaux projets passionnants.", "en": "I am always open to discussions about exciting new projects."},
    "btn_download_cv": {"fr": "Télécharger mon CV", "en": "Download my CV"},

    "opp_stage_title":{ "fr":"Stage (immédiat)", "en":"Internship (immediate)"},
    "opp_stage_desc" :{ "fr":"Je recherche activement un stage a partir du mois mars pour mettre en pratique mes compétences et apprendre auprès de professionnels", "en":"I am actively seeking an internship starting in March to apply my skills and learn from professionals"},
    "opp_stage_duration" :{ "fr":"Durée: 2-6 mois", "en":"Duration: 2–6 months"},

    "opp_alternance_title" :{ "fr":"Alternance", "en":"Apprenticeship"},
     "opp_alternance_desc" :{ "fr":"Intéressé par une alternance pour combiner formation académique et expérience professionnelle concrète", "en":"Interested in a work-study program to combine academic training with hands-on professional experience."},
"opp_alternance_duration":{ "fr":"Durée: 1-2 ans", "en":"Duration: 1–2 years"},

"interests_title":{ "fr":"Ce qui m'intéresse", "en":"What interests me"},
"interests_subtitle":{ "fr":"Domaines et technologies qui me passionnent", "en":"Fields and technologies I am passionate about"},


"cta_text" :{ "fr": "Je suis ouvert à discuter de projets passionnants, de stages ou d'alternances. N'hésitez pas à me contacter pour échanger !" , "en":  "I am open to discussing exciting projects, internships, or apprenticeships. Feel free to reach out to connect!"} ,


"contact_label_location"  :{ "fr": "Localisation" , "en": "Location"} ,


"contact_tip_title"  :{ "fr": "Pourquoi me contacter ?" , "en": "Why contact me?"} ,
"contact_list_opp"   :{ "fr": "Opportunités de stage ou alternance" , "en": "Internship or apprenticeship opportunities"} ,
"contact_list_collab"  :{ "fr": "Collaborations sur des projets" , "en": "Collaborations on projects"} ,

"contact_list_discussion"  :{ "fr": " Discussions tech, data ou créatives" , "en": "Tech, data, or creative discussions"} ,
"contact_list_share"   :{ "fr": "Partage d'idées et de passions" , "en": "Sharing ideas and passions"} ,

    // Section Contact & Footer
    "title_contact": {"fr": "Contactez-moi", "en": "Contact Me"},
    "contact_subtitle": {"fr": "Une question ou une opportunité  ? N'hésitez pas à me contacter !", "en": "A question or a opportunity? Feel free to contact me!"},
    "contact_title_info": {"fr": "Informations de contact", "en": "Contact Information"},
    "contact_title_tip": {"fr": "Conseil pour la candidature", "en": "Application Tip"},
    "contact_tip_1": {"fr": "Mentionnez un projet spécifique de mon portfolio.", "en": "Mention a specific project from my portfolio."},
    "contact_tip_2": {"fr": "Décrivez brièvement votre besoin.", "en": "Briefly describe your need."},
    "contact_tip_3": {"fr": "Utilisez le canal qui vous convient le mieux.", "en": "Use the channel that suits you best."},
    "form_label_name": {"fr": "Nom", "en": "Name"},
    "form_label_email": {"fr": "Email", "en": "Email"},
    "form_label_message": {"fr": "Message", "en": "Message"},
    "form_placeholder_name": {"fr": "Votre nom", "en": "Your name"},
    "form_placeholder_email": {"fr": "votre.email@example.com", "en": "your.email@example.com"},
    "form_placeholder_message": {"fr": "Votre message...", "en": "Your message..."},
    "form_send_btn": {"fr": "Envoyer le message", "en": "Send Message"},
    "form_success_alert": {"fr": "Message envoyé avec succès ! 🚀\n\nNote: Ceci est une démo. Pour un vrai envoi, vous devrez connecter un service backend.", "en": "Message sent successfully! 🚀\n\nNote: This is a demo. For a real submission, you need to connect a backend service."},
    "footer_copyright": {"fr": "© 2025 Portfolio créé avec passion ", "en": "© 2025 Portfolio created with passion "},
    "footer_tagline": {"fr": "Code · Data · Design · Photographie", "en": "Code · Data · Design · Photography"},
};

let currentLang = 'fr'; // Langue par défaut

function updateContent(lang) {
    // 1. Mise à jour de tous les éléments avec data-translate-key (textContent)
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
        }
    });

    // 2. Mise à jour des placeholders de formulaire (pour les inputs/textarea)
    document.querySelectorAll('[data-placeholder-key]').forEach(element => {
        const key = element.getAttribute('data-placeholder-key');
        if (translations[key] && translations[key][lang]) {
            element.placeholder = translations[key][lang];
        }
    });
    
    // 3. Mise à jour des classes 'active' sur les boutons FR/EN
    document.getElementById('lang-fr').classList.remove('active');
    document.getElementById('lang-en').classList.remove('active');
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    currentLang = lang;
    
    // Mise à jour du titre de l'onglet
    if (lang === 'en') {
        document.title = 'Portfolio - Creative Student';
    } else {
        document.title = 'Portfolio - Étudiant Créatif';
    }
}
// ===== FIN DU BLOC DE TRADUCTION =====


// ===== NOUVEAU: FONCTIONNALITÉ DU THÈME (Dark/Light Mode) =====
function initThemeToggle() {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    
    // --- 1. Charger le thème sauvegardé ou utiliser le mode sombre par défaut ---
    // Le mode sombre est la valeur par défaut pour ce portfolio (pas de classe)
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light-mode') {
        body.classList.add('light-mode');
        // Mettre à jour l'icône vers "moon" (pour indiquer le retour au mode sombre)
        toggleButton.innerHTML = '<i data-lucide="moon"></i>';
    } else {
        body.classList.remove('light-mode');
        // Mettre à jour l'icône vers "sun" (pour indiquer le passage au mode clair)
        toggleButton.innerHTML = '<i data-lucide="sun"></i>';
    }
    
    // On recrée les icônes si nécessaire après la modification du innerHTML
    // On fera un appel global à lucide.createIcons() dans DOMContentLoaded après cette fonction.

    // --- 2. Événement de bascule au clic ---
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        // --- 3. Sauvegarder et mettre à jour l'icône ---
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
            toggleButton.innerHTML = '<i data-lucide="moon"></i>'; // Icône Lune pour retourner au Sombre
        } else {
            localStorage.setItem('theme', 'dark-mode');
            toggleButton.innerHTML = '<i data-lucide="sun"></i>'; // Icône Soleil pour retourner au Clair
        }
        
        // Re-créer l'icône Lucide après avoir changé son innerHTML
        lucide.createIcons();
    });
}


// ===== INITIALISATION GLOBALE (Mise à jour pour inclure le thème) =====
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Initialiser le thème (pour charger le mode sauvegardé AVANT de créer les icônes)
    initThemeToggle();

    // 2. Initialiser la traduction au chargement
    updateContent(currentLang);

    // 3. Événements pour les boutons de langue
    document.getElementById('lang-fr').addEventListener('click', () => updateContent('fr'));
    document.getElementById('lang-en').addEventListener('click', () => updateContent('en'));


    // 4. Initialiser toutes les icônes (y compris celles du toggle de thème)
    lucide.createIcons();
    
    // 5. Initialiser les autres fonctionnalités
    initParticles();
    initNavigation();
    initScrollAnimations();
    initSkillBars();
    initContactForm();
});

// ===== PARTICULES ANIMÉES (Fonction existante) =====
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const moveX = (Math.random() - 0.5) * 200;
        const moveY = (Math.random() - 0.5) * 200;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.setProperty('--x', moveX + 'px');
        particle.style.setProperty('--y', moveY + 'px');
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// ===== NAVIGATION (Fonction existante) =====
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section[id]');
    
    // 1. Active Link on Click
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            const targetSectionId = item.getAttribute('data-section');
            const targetSection = document.getElementById(targetSectionId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Active Link on Scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50% 0px', // Active la section quand elle atteint le milieu de la fenêtre
        threshold: 0.01 
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.id;
                navItems.forEach(item => item.classList.remove('active'));
                
                const activeItem = document.querySelector(`.nav-item[data-section="${currentId}"]`);
                if (activeItem) {
                    activeItem.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// ===== ANIMATIONS AU SCROLL (Fonction existante) =====
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.intro-card, .passion-card, .skill-category, .project-card, .opportunity-card, .interest-item'
    );

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionnel: Arrêter d'observer une fois visible
                // scrollObserver.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        scrollObserver.observe(element);
    });
}
/*
// ===== BARRES DE COMPÉTENCES (Fonction existante) =====
function initSkillBars() {
    const skillFills = document.querySelectorAll('.skill-level-fill');
    
    // On utilise un observer sur la section entière pour lancer les animations en même temps
    const skillsSection = document.getElementById('skills');

    const skillsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillFills.forEach(fill => {
                    // La largeur est stockée dans un attribut 'data-level'
                    const level = fill.closest('.skill-item').querySelector('.skill-level-container').getAttribute('data-level');
                    fill.style.width = level + '%';
                });
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.2 });

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
}*/
// ===== BARRES DE COMPÉTENCES =====
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.getElementById('skills');

    const skillsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const percent = bar.getAttribute('data-percent');
                    bar.style.width = percent + '%';
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
}


// ===== FORMULAIRE DE CONTACT (Adapté pour la traduction - Fonction existante) =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        console.log('Formulaire soumis:', formData);
        
        // Afficher le message de succès traduit
        const alertMessage = translations["form_success_alert"][currentLang] || translations["form_success_alert"]["fr"];
        alert(alertMessage);
        
        // Réinitialiser le formulaire
        form.reset();
    });
}

// ===== EFFET DE SURVOL PERSONNALISÉ (Fonction existante) =====
document.addEventListener('mousemove', function(e) {
    const cards = document.querySelectorAll('.project-card, .passion-card, .opportunity-card');
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
    });
});

// ===== SMOOTH SCROLL POUR LES LIENS (Fonction existante) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== RÉINITIALISER LES ICÔNES APRÈS CHARGEMENT (Fonction existante) =====
window.addEventListener('load', function() {
    // On appelle lucide.createIcons une seconde fois pour les éléments chargés dynamiquement
    lucide.createIcons();
});