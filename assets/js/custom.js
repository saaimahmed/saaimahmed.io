
    // $(document).on(".projects-filter li",function () {
    //     $(this).addClass("project-filter-active").siblings().removeClass("project-filter-active")
    // })
    // //for project
    // $(document).ready(function () {
    //
    //   $(".list").click(function () {
    //     const value = $(this).attr("data-filter");
    //     if (value == "all"){
    //
    //         $(".project-box").show('1000')
    //     }
    //     else{
    //         $(".project-box").not('.'+value).hide('1000');
    //         $(".project-box").filter('.'+value).show('1000');
    //     }
    //   })
    // });

    //project Box
    $(document).ready(function () {
        // Initialize the click event for all list items
        $(".list").click(function () {
            // Remove the project-filter-active class from all list items
            $(".list").removeClass("project-filter-active");

            // Add the project-filter-active class to the clicked list item
            $(this).addClass("project-filter-active");

            // Rest of your filtering code here...
            const value = $(this).attr("data-filter");
            if (value == "all") {
                // Show all projects
                $(".project-box").show('1000');
            } else {
                // Hide projects that don't match the selected category
                // and show projects that match
                $(".project-box").not('.' + value).hide('1000');
                $(".project-box").filter('.' + value).show('1000');
            }
        });
    });


    //Slider
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            991: {
                slidesPerView: 2, // Number of slides per view for screens larger than 991px
            },
            0: {
                slidesPerView: 1, // Number of slides per view for screens 991px and smaller
            },
        },
    });

//Start GSAP
    var tl = gsap.timeline();

    tl.from(".navbar .logo-part, .navbar ul li a, .navbar .nav-part",{
        y: -100,
        duration: .5,
        delay: 0.5,
        opacity:0,
        stagger:0.2
    });
    tl.from(".hero-section",{
        opacity:0,
        delay: 0.3,

    });
    tl.from(".hero-section .hero-img, .hero-section .nav-part2 ",{
        y: 100,
        // duration: 1,
        opacity: 0,
        stagger: 0.2
    });


    tl.from(".hero-section .right-side .wrapper, .hero-section .right-side .nav-part",{
        x: 100,
        opacity:0,
        stagger:0.2
    })
    tl.to(".nav-part", {
        y:3,
        repeat:-1,
        duration: 0.7,
        yoyo:true

    });
    //Hero Section

    tl.from(".hero-section .email-contact",{
        x: -100,
        opacity:0,
        stagger:0.2
    });



//    About-section
    tl.from(".about-section",{
        y: 100,
        duration: 1,
        delay:0.5,
        opacity: 0,
        stagger: 0.2,

    });

//Projects section
    tl.from(".project-title, .heading-line-projects",{
        y: 100,
        // duration: 2,
        opacity:0,
        stagger:0.3
    });
    tl.from(".projects-filter",{
        x: 100,
        // duration: 1.5,
        opacity:0,
        stagger:0.3
    });
    tl.from(".project-container", {
        x: -50,
        duration: 1,
        opacity: 0,
        stagger: 0.3
    });
    //Service Section
    tl.from("#services", {
        y: -200,
        duration: 1,
        opacity: 0,
        stagger: 0.3
    });
//    testimonial section
    tl.from("#testimonial", {
        x: -100,
        duration: 1,
        opacity: 0,
        stagger: 0.3
    });
//    contact-section
    tl.from("#contact", {
        y:100,
        duration: 1,
        opacity: 0,
        stagger: 0.3
    });
    tl.to("#contact button", {
        x:10,
        repeat:-1,
        duration: 0.7,
        yoyo:true

    });
//    Footer-section
    tl.from("#footer", {
        y:100,
        duration: 1,
        opacity: 0,
        stagger: 0.3
    });

