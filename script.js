function toggleMenu() {
    var navbar = document.getElementById("myLinks");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}

 document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, 300); // Adjust delay as needed
            }
        });
    }, {
        threshold: 0.2, // Adjust this for earlier/later activation
    });

    sections.forEach(section => observer.observe(section));
});

 


var typed = new Typed(".text", {
    strings: ["Programming" , "Cybersecurity" , "Data Science"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let responseMessage = document.getElementById('response-message');

    if (name === "" || email === "" || message === "") {
        responseMessage.style.color = "red";
        responseMessage.textContent = "Please fill out all fields.";
        return;
    }

    responseMessage.style.color = "yellow";
    responseMessage.textContent = "Message sent successfully!";
    this.reset();
});
