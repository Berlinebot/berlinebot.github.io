const staticBerlineBot = "/berline-bot";
const assets = [
    "/",
    "/about.html",
    "/bug.html",
    "/chat.html",
    "/contact.html",
    "/ebook.html",
    "/feature.html",
    "/index.html",
    "/partnership.html",
    "/privacy.html",
    "/terms.html",
    "/text.html",
    "/blog/blog-home.html",
    "/blog/blog-single.html",
    "/blog/blog.html",
    "/blog/course-details.html",
    "/blog/courses.html",
    "/blog/deadly-dangers.html",
    "/blog/infatuation.html",
    "/blog/love-instead.html",
    "/css/reset.css",
    "/css/animate.css",
    "/css/linearicons.css",
    "/css/bootstrap.css",
    "/css/magnific-popup.css",
    "/css/owl.carousel.css",
    "/css/normalize.css",
    "/css/nice-select.css",
    "/css/hexagons.min.css",
    "/css/main.css",
    "/css/font-awesome.min.css",
    "/css/chat-window.css",
    "/css/font-awesome.min.css",
    "/css/jquery.convform.css",
    "https://cdn.jsdelivr.net/themify-icons/0.1.2/css/themify-icons.css",
    "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css",
    "/js/vendor/jquery-2.2.4.min.js",
    "/js/conversations.js",
    "/js/contact.js",
    "/js/settings.js",
    "/js/manipulations.js",
    "/js/vendor/bootstrap.min.js",
    "/js/jquery.ajaxchimp.min.js",
    "/js/jquery.magnific-popup.min.js",
    "/js/parallax.min.js",
    "/js/owl.carousel.min.js",
    "/js/bootstrap.min.js",
    "/js/jquery.sticky.js",
    "/js/jquery.counterup.min.js",
    "/js/jquery.counterup.min.js",
    "/js/jquery.nice-select.min.js",
    "/js/main.js",
    "/js/app.js",
    "/js/serviceWorker.js",
    "/js/autosize.min.js",
    "/js/jquery.convform.js",
    "/js/jquery-3.1.1.min.js",
    "/js/convForm.feedback.js",
    "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js",
    "https://downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js",
    "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js",
    "/img/books/the_den.jpeg",
    "/img/books/every_kiss.jpg",
    "/img/books/transatlantic_love_affair.jpg",
    "/img/books/dept_of_speculation.jpg",
    "/img/books/infatuation.jpg",
    "/img/books/love_or_infatuation.jpg",
    "/img/books/autobiography.jpg",
    "/img/book2.png",
    "/img/berlinebot.png",
    "/img/video-img.jpg",
    "/img/play-img.jpg",
    "/img/quote.png",
    "/img/testimonial/t1.jpg",
    "/img/testimonial/t2.jpg",
    "/img/testimonial/t3.jpg",
    "/img/blog-post/b1.jpg",
    "/img/blog-post/b2.jpg",
    "/img/blog-post/b3.jpg",
    "/img/video-img.jpg",
    "/img/video-area-bg.png",
    "/img/terms.png",
    "/img/registration-bg.png",
    "/img/quote.png",
    "/img/privacy.png",
    "/img/prev.png",
    "/img/play-btn.png",
    "/img/paperplane.svg",
    "/img/next.png",
    "/img/icon.png",
    "/img/i8.jpg",
    "/img/i7.jpg",
    "/img/i6.jpg",
    "/img/i5.jpg",
    "/img/i4.jpg",
    "/img/i3.jpg",
    "/img/i2.jpg",
    "/img/i1.jpg",
    "/img/home-banner-bg.png",
    "/img/footer-bg.png",
    "/img/flowerTopRight.png",
    "/img/flowerTopLeft.png",
    "/img/berlineImg.png",
    "/img/berlinebot.png",
    "/img/berlinebot-chat.png",
    "/img/banner-bg.png",
    "/img/favicon.ico",
    "/img/favicon-512.ico",
    "/img/favicon-192.ico",
    "/img/favicon-144.ico",
    "/img/favicon-120.ico",
    "/img/favicon-96.ico",
    "/img/favicon-92.ico",
    "/img/favicon-72.ico",
    "/img/favicon-64.ico",
    "/img/favicon-52.ico",
    "/img/favicon-32.ico",
    "/img/favicon-16.ico",
    "/img/testimonial/t3.jpg",
    "/img/testimonial/t2.jpg",
    "/img/testimonial/t3.jpg",
    "/img/blog-post/b3.jpg",
    "/img/blog-post/b2.jpg",
    "/img/blog-post/b1.jpg",
    "/img/blog/user-info.png",
    "/img/blog/s-img.jpg",
    "/img/blog/prev.jpg",
    "/img/blog/pp4.jpg",
    "/img/blog/blog-home-banner.jpg",
    "/img/blog/ads-banner.jpg"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticBerlineBot).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});