/**
 * Created by stanislaw on 04.07.17.
 */

function scrollOn() {
    var windowHeight = $(window).height();
    $("html, body").animate({scrollTop: $(".autoSizeSection").height()+10 },"slow");
}


function mouseOnYear(element, num) {
    if (num != 0000) {
        if ($(".yearBlock").hasClass("active")) {
            $($(".active").children(".yearBlockText")).removeClass("yearBlockTextActive");
            $(".yearBlockText").removeClass("actUZ");
            $(".yearBlock").removeClass("active");
        }
        if (num == 1) {
            $(element).addClass("active");
            $($(".active").children(".yearBlockText")).addClass("actUZ");
        }
        $(element).addClass("active");
        $($(".active").children(".yearBlockText")).addClass("yearBlockTextActive");
        DoActive();
        ChangeInfo(num);
    } else {
        ChangeInfo(1);
    }
}

function autoSizeIndex() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var elH = $(".informationHistoryBlockText").width();
    $('#autoSizeSectionID').css('height', windowHeight);
    $(".fonOpacity").css('height', windowHeight);
    $(".historyBlock").css('margin-top', windowHeight+20);
    $(".runDown").css('margin-top', windowHeight-50);
    $(".informationHistoryBlock").css('margin-top', windowHeight+280);
    $('#yearNow').css('margin-top', windowHeight + 168);
    $('#jssor_1').css('width', windowWidth);
    $(".slaider").css('width', windowWidth);

    $(".headCenterText").css('font-size', windowWidth / windowHeight * 25);
    $("footer").css('font-size', windowWidth / windowHeight * 7);
    // alert(windowWidth / windowHeight * 7);
    DoActive();
    mouseOnYear(this,0000);
}

function DoActive() {
    if ($(".yearBlock").hasClass("active")) {
        var yearLoc = $(".active");
        var offset = yearLoc.offset().left;
        // alert("left: " + yearLoc.left + ", top: " + yearLoc.top);
        $(".yearNowTr").css('margin-left', offset + 55);
    }

}

function DoActiveArrow(side) {
    if (side == 0) {
        if ($(".yearBlock").hasClass("active")) {
            var yearLoc = $(".active");
            var offset = yearLoc.offset().left;
            // alert("left: " + yearLoc.left + ", top: " + yearLoc.top);
            $(".yearNowTr").css('margin-left', offset - 140);
        }
    } else if (side == 1) {
        if ($(".yearBlock").hasClass("active")) {
            var yearLoc = $(".active");
            var offset = yearLoc.offset().left;
            // alert("left: " + yearLoc.left + ", top: " + yearLoc.top);
            $(".yearNowTr").css('margin-left', offset + 250);
        }
    }

}
