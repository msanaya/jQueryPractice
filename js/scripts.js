// ! This is needed since we need to tell jquery to wait for the whole document to load so it can work //

jQuery(document).ready(function () {
    // You can use JQuery or the $ symbol //
    /// For html-help.html file ///
    // $("h1").click(function () {
    //     alert("This is a heading.");
    //     alert("I told you, THIS IS A HEADING!");
    // });

    // $("p").click(function () {
    //     alert("This is a paragraph.");
    // });

    // $("img").click(function () {
    //     alert("This is an image.");
    // });

    $(".clickable").click(function () {
        $("#walrus-showing").toggle();
        $("#walrus-hidden").toggle();

    });

    $("button#green").click(function () {
        $("body").addClass("green-background");
    });

    $("button#yellow").click(function () {
        $("body").addClass("yellow-background");
    });

    $("button#red").click(function () {
        $("body").addClass("red-background");
    });

    $("button#green").click(function () {
        $("body").removeClass();
        $("body").addClass("green-background");
    });

    $("button#yellow").click(function () {
        $("body").removeClass();
        $("body").addClass("yellow-background");
    });

    $("button#red").click(function () {
        $("body").removeClass();
        $("body").addClass("red-background");
    });

    $("button#hello").click(function () {
        $("ul#user").prepend("<li>Hello!</li>");
        $("ul#webpage").prepend("<li>Why hello there!</li>");
        $("ul#user").children("li").first().click(function () {
            $(this).remove();
        });
        $("ul#webpage").children("li").first().click(function () {
            $(this).remove();
        });
    });

    $("button#goodbye").click(function () {
        $("ul#user").prepend("<li>Goodbye!</li>");
        $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    });

    $("button#stop").click(function () {
        $("ul#user").prepend("<li>Stop copying me!</li>");
        $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    });

    $("form#insurance").submit(function (event) {
        const age = parseInt($("input#age").val());
        const gender = $("select#gender").val();

        const quote = (100 - age) * 3;

        $("#rate").text(quote);
        $("#quote").show();

        event.preventDefault();

    });
});