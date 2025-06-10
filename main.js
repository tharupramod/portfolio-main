var typed = new Typed(".text", {
    strings: ["CAD Designer", "FEA Analyst", "Aeronautical Engineering Student"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your Public Key
    emailjs.init("H7GBSon_YnHjdTVD_"); // Replace with your actual EmailJS Public Key

    // Select the button and add an event listener
    document.getElementById("send-message").addEventListener("click", function (event) {
        event.preventDefault(); // ✅ Prevent page reload

        // Get form values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;

        // Check if all fields are filled
        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields!");
            return;
        }

        // Prepare email parameters
        let params = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        };

        // Send the email using EmailJS
        emailjs.send("service_xwodzjn", "template_5dmsq9j", params)
            .then(function (response) {
                alert("Message sent successfully!");
                document.getElementById("contact-form").reset(); // ✅ Reset form after submission
            })
            .catch(function (error) {
                alert("Failed to send message. Please try again.");
                console.error("EmailJS Error:", error);
            });
    });
});



// Mobile Menu Toggle Function
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking a link (for better UX)
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 991) {
                navLinks.classList.remove('active');
            }
        });
    });
});