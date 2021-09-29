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

});