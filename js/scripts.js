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

    $("p").click(function () {
        $(".walrus-showing").show();
        $(".walrus-hidden").hide();

    });


});