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


