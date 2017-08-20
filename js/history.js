/**
 * Created by stanislaw on 05.07.17.
 */
function ChangeInfo(num) {
    if (num == 1) {
        $(".informationHistoryBlockTextHead").text("УЖГОРОД");
        $(".informationHistoryBlockTextT").text("Mісто на ріці Уж, адміністративний центр Закарпатської області " +
            "та Ужгородського району. Розташоване за 785 км від Києва, на кордоні зі Словаччиною." +
            "Місто біля підніжжя Карпат є найменшим обласним центром країни, проте має багату і давню " +
            "історію. Засноване у XI столітті, ставши фортецею роду Другетів, воно опинилося під владою " +
            "Угорщини, а пізніше — Австро-Угорщини. Ужгород розвивався як промисловий та культурний центр Закарпаття. " +
            "У 1919 році був столицею Підкарпатської Русі у складі Чехословаччини, 1945-го перейшов до УРСР." +
            "Серцем Ужгорода є його замок, численних туристів також приваблюють костел, синагога та резиденція єпископа. " +
            "У 1646 році під егідою Ватикану проголошено Ужгородську унію та утворено греко-католицьку церкву на Закарпатті.");
        // alert($(".informationHistoryBlockTextT").height());
    } else if (num == 2) {
        $(".informationHistoryBlockTextHead").text("1925");
        $(".informationHistoryBlockTextT").text("Where i must find so more information about Uzhgorod??????");
    } else if (num == 3) {
        $(".informationHistoryBlockTextHead").text("1233");
        $(".informationHistoryBlockTextT").text("Aaaahhhhhh....!!!!!!");
    } else if (num == 4) {
        $(".informationHistoryBlockTextHead").text("УЖГОРОД");
        $(".informationHistoryBlockTextT").text("");
    } else if (num == 2) {
        $(".informationHistoryBlockTextHead").text("УЖГОРОД");
        $(".informationHistoryBlockTextT").text("");
    } else if (num == 2) {
        $(".informationHistoryBlockTextHead").text("УЖГОРОД");
        $(".informationHistoryBlockTextT").text("");
    } else if (num == 2) {
        $(".informationHistoryBlockTextHead").text("УЖГОРОД");
        $(".informationHistoryBlockTextT").text("");
    } else if (num == 2) {
        $(".informationHistoryBlockTextHead").text("УЖГОРОД");
        $(".informationHistoryBlockTextT").text("");
    } else if (num == 2) {
        $(".informationHistoryBlockTextHead").text("УЖГОРОД");
        $(".informationHistoryBlockTextT").text("");
    } else if (num == 2) {
        $(".informationHistoryBlockTextHead").text("УЖГОРОД");
        $(".informationHistoryBlockTextT").text("");
    } else if (num == 2) {
        $(".informationHistoryBlockTextHead").text("УЖГОРОД");
        $(".informationHistoryBlockTextT").text("");
    } else if (num == 2) {
        $(".informationHistoryBlockTextHead").text("УЖГОРОД");
        $(".informationHistoryBlockTextT").text("");
    } else if (num == 2) {
        $(".informationHistoryBlockTextHead").text("УЖГОРОД");
        $(".informationHistoryBlockTextT").text("");
    }
    var windowHeight = $(window).height();
    var s = windowHeight * 2 + $(".informationHistoryBlockTextT").height();
    // alert(s);
    $("footer").css('margin-top', s);
}