// ======================================
// MOBILE MENU
// ======================================

const toggle = document.getElementById("mobileToggle");
const menu = document.getElementById("mobileMenu");

if (toggle && menu) {

    toggle.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}

const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");
const closeMenu = document.getElementById("closeMenu");

if (
    mobileToggle &&
    mobileMenu &&
    mobileOverlay &&
    closeMenu
) {

    mobileToggle.addEventListener("click", () => {

        mobileMenu.classList.add("active");
        mobileOverlay.classList.add("active");

    });

    closeMenu.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
        mobileOverlay.classList.remove("active");

    });

    mobileOverlay.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
        mobileOverlay.classList.remove("active");

    });

}


/* =========================================
   NOVA BANK — HEADER SCROLL EFFECT
========================================= */

const siteHeader = document.querySelector("header");

if (siteHeader) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            siteHeader.classList.add("scrolled");

        } else {

            siteHeader.classList.remove("scrolled");

        }

    });

}


/* =========================================
   NOVA BANK — SCROLL REVEAL
========================================= */

document.body.classList.add("reveal-ready");

const revealSections = document.querySelectorAll("section");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealSections.forEach(section => {

    if (!section.classList.contains("hero")) {
        revealObserver.observe(section);
    }

});


// ======================================
// FAQ SECTION
// ======================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    if (question) {

        question.addEventListener("click", () => {

            faqItems.forEach(faq => {

                if (faq !== item) {

                    faq.classList.remove("active");

                    const faqIcon = faq.querySelector("i");

                    if (faqIcon) {

                        faqIcon.className =
                            "fa-solid fa-plus";

                    }

                }

            });

            item.classList.toggle("active");

            const icon = item.querySelector("i");

            if (icon) {

                if (item.classList.contains("active")) {

                    icon.className =
                        "fa-solid fa-minus";

                } else {

                    icon.className =
                        "fa-solid fa-plus";

                }

            }

        });

    }

});


