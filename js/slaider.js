/**
 * Created by stanislaw on 04.07.17.
 */
jssor_1_slider_init = function() {
    var windowWidth = $(window).width();
    var jssor_1_options = {

        $SlideWidth: 200,
        $Cols:11,
        $Align: 45,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};