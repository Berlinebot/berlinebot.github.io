$(function () {
    var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;
    $(".fullscreen").css("height", window_height);
    $(".fitscreen").css("height", fitscreen);
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".default-header").addClass("header-scrolled");
        } else {
            $(".default-header").removeClass("header-scrolled");
        }
    });
    if ($("select")) {
        $("select").niceSelect();
    }
    $(".img-pop-up").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });
    $("#search-input-box").hide();
    $("#search").on("click", function () {
        $("#search-input-box").slideToggle();
        $("#search-input").focus();
    });
    $("#close-search").on("click", function () {
        $("#search-input-box").slideUp(500);
    });
    $(".counter").counterUp({
        delay: 10,
        time: 1e3
    });
    $(".play-btn").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $(".popuar-course-carusel").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        margin: 30,
        nav: true,
        stagePadding: 60,
        navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            575: {
                items: 2,
                stagePadding: 0
            },
            768: {
                items: 2,
                stagePadding: 0
            },
            992: {
                items: 3,
                stagePadding: 0
            },
            1200: {
                items: 3,
                stagePadding: 60
            },
            1440: {
                items: 4,
                stagePadding: 60
            }
        }
    });
    $(".video-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"]
    });
    $(".testi-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        margin: 30,
        nav: true,
        navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"]
    });
    $('.navbar-nav a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .on("click", function (event) {
            if (
                location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ?
                    target :
                    $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    event.preventDefault();
                    $("html, body").animate({
                            scrollTop: target.offset().top - 50
                        },
                        1e3,
                        function () {
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) {
                                return false;
                            } else {
                                $target.attr("tabindex", "-1");
                                $target.focus();
                            }
                        }
                    );
                }
            }
        });
    if (document.getElementById("map")) {
        google.maps.event.addDomListener(window, "load", init);

        function init() {
            var mapOptions = {
                zoom: 11,
                center: new google.maps.LatLng(40.67, -73.94),
                styles: [{
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                                color: "#e9e9e9"
                            },
                            {
                                lightness: 17
                            }
                        ]
                    },
                    {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                                color: "#f5f5f5"
                            },
                            {
                                lightness: 20
                            }
                        ]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                                color: "#ffffff"
                            },
                            {
                                lightness: 17
                            }
                        ]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                                color: "#ffffff"
                            },
                            {
                                lightness: 29
                            },
                            {
                                weight: 0.2
                            }
                        ]
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                                color: "#ffffff"
                            },
                            {
                                lightness: 18
                            }
                        ]
                    },
                    {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                                color: "#ffffff"
                            },
                            {
                                lightness: 16
                            }
                        ]
                    },
                    {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                                color: "#f5f5f5"
                            },
                            {
                                lightness: 21
                            }
                        ]
                    },
                    {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{
                                color: "#dedede"
                            },
                            {
                                lightness: 21
                            }
                        ]
                    },
                    {
                        elementType: "labels.text.stroke",
                        stylers: [{
                                visibility: "on"
                            },
                            {
                                color: "#ffffff"
                            },
                            {
                                lightness: 16
                            }
                        ]
                    },
                    {
                        elementType: "labels.text.fill",
                        stylers: [{
                                saturation: 36
                            },
                            {
                                color: "#333333"
                            },
                            {
                                lightness: 40
                            }
                        ]
                    },
                    {
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    },
                    {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                                color: "#f2f2f2"
                            },
                            {
                                lightness: 19
                            }
                        ]
                    },
                    {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                                color: "#fefefe"
                            },
                            {
                                lightness: 20
                            }
                        ]
                    },
                    {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                                color: "#fefefe"
                            },
                            {
                                lightness: 17
                            },
                            {
                                weight: 1.2
                            }
                        ]
                    }
                ]
            };
            var mapElement = document.getElementById("map");
            var map = new google.maps.Map(mapElement, mapOptions);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.67, -73.94),
                map: map,
                title: "Snazzy!"
            });
        }
    }
    $(document).ready(function () {
        $("#mc_embed_signup")
            .find("form")
            .ajaxChimp();
    });
});

// Smooth Scroll
$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - navHeight + 5)
            }, 1000, "easeInOutExpo");
            return false;
        }
    }
});
