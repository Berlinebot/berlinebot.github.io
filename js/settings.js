// Global Variables ---------------------- //
var currentQuestion = 0,
    lastQuestion = questions.length - 1;

var local = (!document.location.hostname); // check if local
// --------------------------------------- //

/***********************************
                GREETINGS START
    ***********************************/
jQuery(document).ready(function ($) {
    var greet;
    var date = new Date();
    var sec = date.getSeconds();
    var min = date.getMinutes();
    var hour = date.getHours();
    var year = date.getFullYear();
    var copyrightYear = date.getFullYear();

    if (hour === 5 || hour === 6 || hour === 7 || hour === 8 || hour === 9 || hour === 10 || hour === 11) {

        greet = '<div class=\"incoming_msg\"><div class=\"received_msg\"><div class=\"animated fadeInUp bubbleLeft received_withd_msg\"><p>  Hi. Good morning, I\'m Berline</p></div></div>';


    } else if (hour === 12) {

        greet = '<div class=\"incoming_msg\"><div class=\"received_msg\"><div class=\"animated fadeInUp bubbleLeft received_withd_msg\"><p>  Hi. Good noon, I\'m Berline</p></div></div>';


    } else if (hour === 13 || hour === 14 || hour === 15 || hour === 16 || hour === 17) {

        greet = '<div class=\"incoming_msg\"><div class=\"received_msg\"><div class=\"animated fadeInUp bubbleLeft received_withd_msg\"><p>  Hi. Good afternoon, I\'m Berline</p></div></div>';


    } else if (hour === 18 || hour === 19 || hour === 20 || hour === 21 || hour === 22 || hour === 23 || hour === 0 || hour === 1 || hour === 2 || hour === 3 || hour === 4) {

        greet = '<div class=\"incoming_msg\"><div class=\"received_msg\"><div class=\"animated fadeInUp bubbleLeft received_withd_msg\"><p>  Hi. Good evening, I\'m Berline</p></div></div>';


    }

    $("#welcomeMsg").html(greet);
    $("#welcomeMsg").fadeIn(600);
    $("#copyright").text(copyrightYear); // SET CURRENT YEAR AS COPYRIGHT YEAR



    /*************************
             Greetings End 
    *************************/
});

// ********** CHAT SETTINGS START ********//

function smoothScrollBottom() {
    $(".chatbox__body.active").stop().animate({
        scrollTop: $(".chatbox__body.active")[0].scrollHeight
    }, 1500) // delay with 1.5s
}

function storyController(questions) {
    current = 0;

    createMessage(questions[0].question);
}

// Recursive function that goes through the set of messages it is given
function createMessage(messagesArray, i, response) {

    // i is optional - i is the current message in the array the system is displaying
    i = typeof i !== 'undefined' ? i : 0;

    // response is optional - response is a boolean that refers to whether the set of messages is a response to a question or the question itself
    response = typeof response !== 'undefined' ? response : 0;

    // add this HTML to the front and back of the message for #style
    var htmlWrapperBeginning = "<div class=\"msg_history\"><div class=\"incoming_msg\"><div class=\"received_msg\"><div class=\"animated fadeInUp bubbleLeft received_withd_msg\"><p>",
        htmlWrapperEnding = " </p><span class=\"voice\"></span></div></div></div>";

    // If this message is not the first, use the previous to calculate a delay, otherwise use a number
    var delay = (i > 0) ? calculateDelay(messagesArray[i - 1]) : 1000;
    // delay override - Make first responses quick
    if (!response && questions[currentQuestion].intro && i == 0) {
        delay = 50;
    }

    setTimeout(function () {
        // if it's the last message in the series
        if (i >= messagesArray.length) {

            // if it's the last response to an answer
            if (response) {
                currentQuestion++;
                createMessage(questions[currentQuestion].question);
                return 1;
            }
            // If it's the last question before an answer
            else {
                createAnswerField(delay);
                return 1;
            }
        }
        // if it's not the last message, display the next one
        else {

            $('#chat-container').append(htmlWrapperBeginning + messagesArray[i] + htmlWrapperEnding);
            //Special case for chat
            if ($(".active").attr('id') == "chat") {
                smoothScrollBottom();
            }
            i++;
            createMessage(messagesArray, i, response);
        }
    }, delay);
}

// Creates an answer input field
function createAnswerField() {
    var htmlAnswerField = "<div class=\"outgoing_msg\" id=\"answer-container\"> <div class=\"line animated fadeInUp bubbleRight sent_msg p\"><form action=\"#\" onsubmit=\"return false;\"><label for=\"answer\"></label><input required=\"required\" novalidate=\"novalidate\" autocomplete=\"on\" min=\"2\" max=\"40\" formnovalidate=\"formnovalidate\" spellcheck=\"true\" autofocus=\"autofocus\" type=\"text\" name=\"answer\" id=\"answer\" class=\"\" value=\"\" placeholder=\"Type response…\"></form></div></div>";

    if (questions[currentQuestion].ending) {
        return 1;
    }

    $('#chat-container').append(htmlAnswerField);

    $('#answer').keyup(function (event) {
        if (event.keyCode == 13) {
            var answer = $.trim($('#answer').val());
            if (answer != "") {
                $('#answer-container').remove();
                createAnswerMessage(answer);
            } else {
                $('#answer').removeClass('shake').removeClass('fadeInUp');
                $('#answer').addClass('shake');
                $('#answer').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass('shake').removeClass('fadeInUp');
                });
            }
        }
    });

    $('#answer').focus();

    //Special case for chat
    if ($(".active").attr('id') == "chat") {
        smoothScrollBottom();
    }
}

function createAnswerMessage(answer) {
    var htmlWrapperBeginning = "<div class=\"outgoing_msg\"><div class=\"animated fadeInUp bubbleRight sent_msg\"><p>",
        htmlWrapperEnding = "</p><span class=\"voice\"></span></div></div>";

    $('#chat-container').append(htmlWrapperBeginning + answer + htmlWrapperEnding);

    if (local) {
        console.log(answer);
        console.log(questions[currentQuestion]);
    }

    // --- ANALYTICS --- //
    var dimensions = {
        question: questions[currentQuestion].name, // Which question is this?
        answer: answer,
        created_at: String(Date.now())
    };

    if (!local) {
        // Send the dimensions to Parse along with the 'search' event
        Parse.Analytics.track('read', dimensions);
    } else {
        // console.log(dimensions);
    }
    // ------------------ //

    createMessage(findResponseForAnswer(answer, questions[currentQuestion].answers), 0, 1);
}

function findResponseForAnswer(answer, possibleAnswers) { //responses
    //for (k = 0; k < numOfElements(possibleAnswers); k++) {
    for (key in possibleAnswers) {
        // console.log(k + " - " + responses[k][0] + " == " + answer);
        if (answer.toLowerCase().match(key)) {
            return possibleAnswers[key].replies;
        }
    }
    console.log("!= " + answer);
    return possibleAnswers["default"].replies; // Default reponse
}

// Calculates the delay based on whatever string you give it
function calculateDelay(string) {
    // 275 words per minute in milliseconds plus a constant
    let delayPerWord = 218;
    let delay = string.split(" ").length * delayPerWord;
    delay = (delay < delayPerWord * 3) ? delay + 400 : delay;
    return delay;
}

// function smoothScrollBottom() {
//     $('.chatbox__body').animate({
//         scrollTop: $('.chatbox__body')[0].scrollHeight
//     }, 600); // delay with 600ms
// }



// Tabs

function tabHandler() {}

// Amplitude Analytics

(function (e, t) {
    var n = e.amplitude || {
        _q: [],
        _iq: {}
    };
    var r = t.createElement("script");
    r.type = "text/javascript";
    r.async = true;
    r.src = "https://cdn.amplitude.com/libs/amplitude-4.4.0-min.gz.js";
    r.onload = function () {
        if (e.amplitude.runQueuedFunctions) {
            e.amplitude.runQueuedFunctions()
        } else {
            console.log("[Amplitude] Error: could not load SDK")
        }
    };
    var i = t.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(r, i);

    function s(e, t) {
        e.prototype[t] = function () {
            this._q.push([t].concat(Array.prototype.slice.call(arguments, 0)));
            return this
        }
    }
    var o = function () {
        this._q = [];
        return this
    };
    var a = ["add", "append", "clearAll", "prepend", "set", "setOnce", "unset"];
    for (var u = 0; u < a.length; u++) {
        s(o, a[u])
    }
    n.Identify = o;
    var c = function () {
        this._q = [];
        return this
    };
    var l = ["setProductId", "setQuantity", "setPrice", "setRevenueType", "setEventProperties"];
    for (var p = 0; p < l.length; p++) {
        s(c, l[p])
    }
    n.Revenue = c;
    var d = ["init", "logEvent", "logRevenue", "setUserId", "setUserProperties", "setOptOut", "setVersionName", "setDomain", "setDeviceId", "setGlobalUserProperties", "identify", "clearUserProperties", "setGroup", "logRevenueV2", "regenerateDeviceId", "logEventWithTimestamp", "logEventWithGroups", "setSessionId", "resetSessionId"];

    function v(e) {
        function t(t) {
            e[t] = function () {
                e._q.push([t].concat(Array.prototype.slice.call(arguments, 0)))
            }
        }
        for (var n = 0; n < d.length; n++) {
            t(d[n])
        }
    }
    v(n);
    n.getInstance = function (e) {
        e = (!e || e.length === 0 ? "$default_instance" : e).toLowerCase();
        if (!n._iq.hasOwnProperty(e)) {
            n._iq[e] = {
                _q: []
            };
            v(n._iq[e])
        }
        return n._iq[e]
    };
    e.amplitude = n
})(window, document);

amplitude.getInstance().init("111e23aa04758bb44c182605a4a7a536");

// })(); END GLOBAL

$(document).ready(function () {
    new storyController(questions);
    new tabHandler();
});
