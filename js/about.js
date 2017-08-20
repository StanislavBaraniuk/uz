/**
 * Created by stanislaw on 19.07.17.
 */
function load() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    $("body").css('height', windowHeight*2);
    $(".logo").css('margin-top', windowHeight/2 - windowHeight * 0.18);
    $(".aboutText").css('margin-top', windowHeight);
    alert(windowHeight);
    // alert(windowHeight);
    // alert(windowHeight/2 - windowHeight * 0.18);
}
