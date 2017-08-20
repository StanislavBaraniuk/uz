/**
 * Created by stanislaw on 05.07.17.
 */

$(document).ready(function(){
    $('.parallax').parallax();
});
$(document).ready(function(){
    $('.materialboxed').materialbox();
});

function autoSize() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var windowLine = $(".about").width();
    $(".autoSizeSection").css('height', windowHeight/2);
    $(".fonOpacity").css('height', windowHeight/2);
    $(".parallax-container").css('height', windowHeight/2);
    $(".GalerrySect").css('margin-top', windowHeight/2);
    $(".line").css('margin-left', windowLine);
    $(".ParSect").css('margin-top', windowHeight + $(".GalerrySect").height() - $(".autoSizeSection").height());
    $(".ParSect").css('height', windowHeight/2);
    $(".imH").css('width', windowHeight*2.5);
    $(".imH").css('height', windowHeight*2);
    $(".imHFooter").css('width', windowHeight*2.5);
    $(".imHFooter").css('height', windowHeight*2);
    $(".headCenterText").css('font-size', windowWidth / windowHeight * 25);
    if (windowWidth < 992) {
        $(".headCenterText").css('margin-left', windowWidth - ($(".headCenterText").width()*1.2));
    } else {
        $(".headCenterText").css('margin-left', windowWidth/6);
    }
}