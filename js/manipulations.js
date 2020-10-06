$(window).on("load", function showPage() {
    $("body").ready(function () {
        $("header,section,footer")
            .hide()
            .delay(1000)
            .fadeIn(2000)
            .removeClass("startHide");
        // delay before fadeIn of the contents of header, section, and footer then .removeClass('startHide')
        $("#loader")
            .show()
            .delay(1000)
            .fadeOut(1000);
        // delay before fadeOut of the loader
    });
});

// Chat window manipulation START
$(window).on("load", function () {
    $("body").ready(function () {
        // Chatbox window for home START
        $(".chatbox_container__home").removeClass("displayNoneChat");
        $(".chatbox_container__home")
            .hide()
            .delay(2000)
            .fadeIn(1e3); // delay (2s) before fadeIn (100ms) of the chat window
        // Chatbox window for home END

        // floatingBubble START
        $(".floatingBubble")
            .hide()
            .fadeIn(1e3); // fadeIn (100ms) of the floatingBubble
        // floatingBubble END

        // Feedback form START
        $(".chatbox_container__feedback")
            .hide()
            .delay(90000)
            .fadeIn(1e3); // delay (90s) before fadeIn (100ms) of the feedback window
        $(".chatbox_container__feedback").removeClass("displayNoneChat"); // Removes .displayNoneChat to display the Chatbox container
        // Feedback form END
    });
});

(function ($) {
    $(document).ready(function () {
        var $chatbox = $(".chatbox"),
            $chatboxTitle = $(".chatbox__title"),
            $chatboxTitleClose = $(".chatbox__title__close"),
            $chatboxCredentials = $(".chatbox__credentials"),
            $chatbox_container = $(".chatbox_container"),
            $floatingBubble = $(".floatingBubble"),
            $berlineImg = $(".berlineImg");

        $(
            "#instantChat,#instantChat0,#instantChat1,#instantChat2,#instantChat3,#instantChat4"
        ).on("click", function () {
            $floatingBubble.fadeOut(1e3).hide(); // fadeOut (100ms) of the floatingBubble
            $chatbox_container.removeClass("displayNoneChat"); // Removes .displayNoneChat to display the Chatbox container
            $chatbox.removeClass("chatbox--closed");
            $chatbox.toggleClass("chatbox--tray");
        });
        $(".floatingBubble").on("click", function () {
            $chatbox_container.removeClass("displayNoneChat");
            $chatbox.removeClass("chatbox--closed");
            $chatbox.toggleClass("chatbox--tray");
            $floatingBubble.fadeOut(1e3).hide(); // fadeOut (100ms) of the floatingBubble
        });
        $(".closeChatWindow").on("click", function () {
            // Closes the chat window once anywhere on the page is clicked apart from footer
            $chatbox.addClass("chatbox--tray");
        });
        $chatboxTitleClose.on("click", function (e) {
            e.stopPropagation();
            $chatbox.addClass("chatbox--closed");
            $(".floatingBubble")
                .hide()
                .fadeIn(1e3); // fadeIn (100ms) of the floatingBubble
        });
        $berlineImg.mouseover(function () {
            $(".berlineImg").addClass("bounceIn rotateIn");
        });
        $berlineImg.mouseleave(function () {
            $(".berlineImg").removeClass("bounceIn rotateIn");
        });
    });
})(jQuery);
// Chat window manipulation END