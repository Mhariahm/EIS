// ==================== DÉBUT SECTION BACKGROUND SLIDER ====================
const home = document.querySelector('.home');
const images = [
    "Images et Icones/Acceuil1.jpg",
    "Images et Icones/P-University.jpg",
    "Images et Icones/Waliman1.jpg",
    "Images et Icones/YearParty1.jpg",
];

let index = 0;

// Créer les éléments d'arrière-plan
const bg1 = document.createElement('div');
const bg2 = document.createElement('div');

bg1.className = 'home-bg active';
bg2.className = 'home-bg';

[bg1, bg2].forEach(bg => {
    Object.assign(bg.style, {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: '-2',
        transition: 'opacity 1.5s ease-in-out'
    });
    home.appendChild(bg);
});

// Initialisation
bg1.style.backgroundImage = `url('${images[0]}')`;

function changeBackground() {
    index = (index + 1) % images.length;

    const currentBg = document.querySelector('.home-bg.active');
    const nextBg = document.querySelector('.home-bg:not(.active)');

    nextBg.style.backgroundImage = `url('${images[index]}')`;
    nextBg.classList.add('active');
    currentBg.classList.remove('active');
}

setInterval(changeBackground, 3000);
// ==================== FIN SECTION BACKGROUND SLIDER ====================

// ==================== DÉBUT SECTION NAVIGATION FLUIDE ====================
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
// ==================== FIN SECTION NAVIGATION FLUIDE ====================

// ==================== DÉBUT SECTION GESTION POPUP ====================
document.addEventListener('DOMContentLoaded', function () {
    // Variables du popup
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close');
    const programCards = document.querySelectorAll('.program-card');
    const programDetailsContainer = document.getElementById('program-details');

    // Données des programmes en anglais
    const programData = {
        "English Excellence": {
            instructors: "Our English instructors are highly qualified, certified, and dedicated to providing a learning experience that inspires confidence. With international teaching backgrounds, they ensure every student receives personalized attention and professional guidance.",
            skills: "Students master speaking, writing, listening, and reading with a focus on real-life communication. From grammar and vocabulary to pronunciation and confidence building, every lesson is designed to turn learners into fluent, expressive communicators.",
            experience: "Through interactive lessons, debates, workshops, and multimedia learning, our program creates an immersive and motivating environment. We encourage creativity, teamwork, and public speaking to make learning dynamic and impactful.",
            value: "Graduates from the English Excellence program stand out for their communication skills and global mindset. Whether for academic success or international careers, our students are prepared to thrive anywhere.",
            promise: "We nurture excellence, curiosity, and ambition—helping each learner unlock their full potential and communicate with confidence across borders.",
            recognitions: ["Common Entrance (CE)", "Junior WAEC / Junior High Certificate", "WAEC / NABTEB"]
        },
        "Arabic Windows": {
            instructors: "Our Arabic program is led by qualified native instructors who bring cultural depth and linguistic precision to every lesson. Their certified expertise ensures students learn both the language and the richness of its heritage.",
            skills: "Students acquire strong reading, writing, and conversational skills. They also explore Arabic culture, literature, and classical expressions, fostering a deeper appreciation of the language.",
            experience: "The program blends modern teaching techniques with traditional learning values — memorization, comprehension, and daily conversation practice. Immersive sessions and cultural workshops make Arabic come alive in every classroom.",
            value: "Graduates of Arabic Windows become confident in using Arabic in academic, professional, and religious contexts. The program opens doors to intercultural understanding and excellence.",
            promise: "We cultivate discipline, confidence, and a love for language that goes beyond the classroom — connecting hearts through culture and knowledge.",
            recognitions: ["Walimat Al-Qur'an", "Aflatun Idadi", "Shahadat Al-Thanawiya"]
        },
        "French Excellence": {
            instructors: "Our French teachers are graduates, certified and passionate. Their approach is based on listening, active pedagogy and personalized support to guarantee real progress.",
            skills: "Learners develop complete mastery of French both orally and in writing, enrich their vocabulary and improve their expression. The program emphasizes understanding, communication and linguistic confidence.",
            experience: "We offer a stimulating environment where learning takes place through interactive activities, cultural discussions and collaborative projects. Each course is designed to combine rigor, pleasure and creativity.",
            value: "Our students become confident communicators, ready for academic paths of excellence and international careers.",
            promise: "Promote excellence, intellectual curiosity and personal success. We train open and ambitious minds, capable of evolving in a globalized world.",
            recognitions: ["Certificat d'Études Primaires Élémentaires (CEPE)", "Brevet d'Études du Premier Cycle (BEPC)", "Baccalauréat (BAC)"]
        }
    };

    // Ouvrir le popup
    programCards.forEach(card => {
        card.addEventListener('click', function () {
            const overlay = this.querySelector('.overlay');
            const title = overlay.getAttribute('data-title');
            const message = overlay.getAttribute('data-message');
            const image = overlay.getAttribute('data-image');
            const additionalImagesJSON = overlay.getAttribute('data-additional-images');

            document.getElementById('popup-title').textContent = title;
            document.getElementById('popup-message').textContent = message;
            document.getElementById('popup-img').src = image;

            // GESTION DES IMAGES SUPPLÉMENTAIRES
            const additionalImagesContainer = document.getElementById('additional-images');
            additionalImagesContainer.innerHTML = '';

            if (additionalImagesJSON) {
                const additionalImages = JSON.parse(additionalImagesJSON);
                additionalImages.forEach(imgSrc => {
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.alt = title;
                    img.className = 'additional-image';
                    img.onclick = function () {
                        document.getElementById('popup-img').src = imgSrc;
                    };
                    additionalImagesContainer.appendChild(img);
                });
            }

            // Insérer les détails du programme
            if (programData[title]) {
                const data = programData[title];
                programDetailsContainer.innerHTML = `
                    <div class="detail-section">
                        <h3><i class="fas fa-user-graduate"></i> Certified Instructors</h3>
                        <p>${data.instructors}</p>
                    </div>
                    <div class="detail-section">
                        <h3><i class="fas fa-lightbulb"></i> Skills Development</h3>
                        <p>${data.skills}</p>
                    </div>
                    <div class="detail-section">
                        <h3><i class="fas fa-globe"></i> Learning Experience</h3>
                        <p>${data.experience}</p>
                    </div>
                    <div class="detail-section">
                        <h3><i class="fas fa-rocket"></i> Value & Future Opportunities</h3>
                        <p>${data.value}</p>
                    </div>
                    <div class="detail-section">
                        <h3><i class="fas fa-star"></i> Our Promise</h3>
                        <p>${data.promise}</p>
                    </div>
                    <div class="detail-section">
                        <h3><i class="fas fa-award"></i> Official Recognitions & Levels</h3>
                        <div class="recognitions">
                            <ul>
                                ${data.recognitions.map(rec => `<li>${rec}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
            }

            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    // Fermer le popup
    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && popup.style.display === 'flex') {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
// ==================== FIN SECTION GESTION POPUP ====================

// ==================== DÉBUT SECTION ANIMATION AU SCROLL ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.querySelectorAll('.program-card, .about-section, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
// ==================== FIN SECTION ANIMATION AU SCROLL ====================

// ==================== DÉBUT SECTION HEADER SHADOW ====================
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});
// ==================== FIN SECTION HEADER SHADOW ====================

// ==================== DÉBUT SECTION FORMULAIRE WHATSAPP ====================
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Récupère les valeurs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const category = document.getElementById('category').value;
        const message = document.getElementById('message').value;

        // Crée le message WhatsApp
        const whatsappMessage = `📋 NOUVEAU MESSAGE - BUREAU DU DIRECTEUR\n\n👤 INFORMATIONS:\n• Nom: ${name}\n• Email: ${email}\n• Téléphone: ${phone}\n• Catégorie: ${category}\n• MESSAGE:\n${message}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappNumber = "2250505944492";
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
    });
});
// ==================== FIN SECTION FORMULAIRE WHATSAPP ====================

// ==================== NAVIGATION MOBILE CORRIGÉE ====================

// ==================== NAVIGATION MOBILE FONCTIONNELLE ====================
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const contactToggle = document.querySelector('.contact-toggle');
    const mainNav = document.querySelector('.main-nav');
    const contactInfo = document.querySelector('.contact-info:not(.desktop-contact)');
    const navOverlay = document.querySelector('.nav-overlay');

    // Menu Hamburger
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            mainNav.classList.toggle('active');
            navOverlay.classList.toggle('active');
            // Fermer contact info si ouvert
            if (contactInfo) contactInfo.classList.remove('active');
        });
    }

    // Contact Toggle
    if (contactToggle && contactInfo) {
        contactToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            contactInfo.classList.toggle('active');
            // Fermer menu nav si ouvert
            if (mainNav) mainNav.classList.remove('active');
            if (navOverlay) navOverlay.classList.remove('active');
        });
    }

    // Fermer en cliquant sur l'overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', function () {
            if (mainNav) mainNav.classList.remove('active');
            if (contactInfo) contactInfo.classList.remove('active');
            navOverlay.classList.remove('active');
        });
    }

    // Fermer en cliquant sur un lien du menu
    if (mainNav) {
        mainNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function () {
                mainNav.classList.remove('active');
                if (navOverlay) navOverlay.classList.remove('active');
            });
        });
    }

    // Fermer en appuyant sur Echap
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            if (mainNav) mainNav.classList.remove('active');
            if (contactInfo) contactInfo.classList.remove('active');
            if (navOverlay) navOverlay.classList.remove('active');
        }
    });
}); // ==================== Fin SECTION CONTACT MOBILE ====================

//====================        MESSAGE D'OUVERTURE           ====================

// ==================== POPUP DE BIENVENUE ====================
function initWelcomePopup() {
    const popup = document.getElementById('welcomePopup');
    const closeBtn = document.getElementById('closePopup');
    const startBtn = document.getElementById('startBtn');

    // Vérifier que tous les éléments existent
    if (!popup || !closeBtn || !startBtn) {
        console.log('Éléments du popup non trouvés');
        return;
    }

    // Fonction pour montrer le popup
    function showPopup() {
        popup.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    // Fonction pour cacher le popup
    function hidePopup() {
        popup.classList.remove('show');
        document.body.style.overflow = 'auto';
        localStorage.setItem('welcomeSeen', 'true');
    }

    // Événements
    closeBtn.addEventListener('click', hidePopup);
    startBtn.addEventListener('click', hidePopup);

    // Fermer en cliquant en dehors
    popup.addEventListener('click', function (e) {
        if (e.target === popup) {
            hidePopup();
        }
    });

    // Fermer avec Echap
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && popup.classList.contains('show')) {
            hidePopup();
        }
    });

    // Afficher le popup si pas déjà vu
    if (!localStorage.getItem('welcomeSeen')) {
        setTimeout(showPopup, 1000);
    }
}

// Démarrer quand la page est chargée
document.addEventListener('DOMContentLoaded', initWelcomePopup);

// TEST : FORCER L'AFFICHAGE - SUPPRIMEZ APRÈS TEST
setTimeout(() => {
    const popup = document.getElementById('welcomePopup');
    if (popup) {
        popup.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}, 500);

// ==================== Fin MESSAGE D'OUVERTURE ====================

// ==================== JS : ouvrir / fermer la modale ====================

const modal = document.getElementById('calendarModal');
const openLink = document.getElementById('openCalendar');
const closeBtn = document.getElementById('closeModal');

openLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Fermer la modale en cliquant en dehors
// modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         modal.style.display = 'none';
//         document.body.style.overflow = 'auto';
//     }
// });

// ==================== JS : ouvrir / fermer la modale ====================