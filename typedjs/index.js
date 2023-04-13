// var typed_strings = $(".text-slider-items").text();
var text = "carier fox";
var typed = new Typed("#header_text", {
    strings: text.split(", "),
    typeSpeed: 50,
    loop: true,
    backDelay: 900,
    backSpeed: 50,
    showCursor:false
});
