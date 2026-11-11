
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });
}


// =====================================
// CONTACT FORM — SERVICE PRESELECTION
// =====================================

const contactForm = document.getElementById("contactForm");
const serviceSelect = document.getElementById("service");
const formStatus = document.getElementById("formStatus");

if (contactForm && serviceSelect) {

    // Read service selected on Services or Portfolio page
    const urlParams = new URLSearchParams(window.location.search);
    const requestedService = urlParams.get("service");

    if (requestedService) {
        const validOption = Array.from(serviceSelect.options)
            .some(option => option.value === requestedService);

        if (validOption) {
            serviceSelect.value = requestedService;
        }
    }

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = serviceSelect.value;
        const message = document.getElementById("message").value.trim();

        // Replace this with your real business email
        const businessEmail = "prideedenmajabvu@gmail.com";

        if (!businessEmail) {
            formStatus.textContent =
                "Business email is not configured yet. " +
                "Please add your contact email in js/script.js.";
            return;
        }

        const subject = encodeURIComponent(
            "SentrionOne Enquiry: " + service
        );

        const body = encodeURIComponent(
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Service: " + service + "\n\n" +
            "Message:\n" + message
        );

        window.location.href =
            "mailto:" + businessEmail +
            "?subject=" + subject +
            "&body=" + body;

        formStatus.textContent =
            "Your email application should open with the prepared message. " +
            "Please send it from there.";
    });
}
