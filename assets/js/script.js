// $(document).ready(function(){
//     alert("Helo")
// })
// type script

var typed = new Typed("#multiple-text", {
    strings: ["Web Designer" , "Frontend Developer" , "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay : 1000,
    loop: true,
});

var typed2 = new Typed(".name", {
    strings: ["saaim ahmed"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay : 1000,
    loop: true,
});

// landing page id wise show content
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-item a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});


// Get all the nav links active
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Add click event listeners to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove the "active" class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add the "active" class to the clicked link
        this.classList.add('active');
    });
});

//Sticky Navbar

const header_section = document.querySelector(".header-section");
const section_hero = document.querySelector(".hero-section");
const observer = new IntersectionObserver((entries) => {
        const ent = entries[0];
        ent.isIntersecting === false ? header_section.classList.add('sticky') : header_section.classList.remove('sticky');
    },
    {
        root: null,
        rootMargin: "-40px",
        threshold: 0,


    });
observer.observe(section_hero)

//custom cursor
$(document).ready(function () {
    var cursor = $(".cursor");

    $(document).mousemove(function (details) {
        cursor.css("left", details.pageX + "px");
        cursor.css("top", details.pageY + "px");
    });
});





//Custom Scrollbar
let calcScrollValue = () => {
    let scrollProgress = document.querySelector("#progress-bar-custom");
    let progressValue = document.querySelector("#progress-bar-value");

    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100){
        scrollProgress.style.display = "flex";

    }
    else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient( #00F260 ${scrollValue}%, var(--color_secondary) ${scrollValue}%)`;

}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// Skills
$('.skill').waypoint(function () {
    $('.progress .progress-bar').each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
}, {offset: '80%'});



//projects

/**
 * Porfolio  and filter
 */



