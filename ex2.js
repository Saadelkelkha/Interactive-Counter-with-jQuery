$(document).ready(function(){
    $("#increase").click(function(){
        var count = parseInt($(".counter").text());
        count += 1;
        $(".counter").text(count);
    })
    $("#decrease").click(function(){
        var count = parseInt($(".counter").text());
        count -= 1;
        $(".counter").text(count);
    })
    $("#reset").click(function(){
        $(".counter").text(0);
    })
})