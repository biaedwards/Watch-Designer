jQuery(document).ready(function ($) {

    var jssor_1_SlideoTransitions = [
        [{
            b: 500,
            d: 200,
            c: {
                x: 487
            }
        }, {
            b: 700,
            d: 200,
            c: {
                x: -487
            }
        }],
        [{
            b: 700,
            d: 200,
            o: -1
        }, {
            b: 900,
            d: 200,
            o: 1
        }],
        [{
            b: -1,
            d: 1,
            o: -1
        }, {
            b: 100,
            d: 300,
            o: 1
        }],
        [{
            b: 200,
            d: 300,
            o: -1
        }],
        [{
            b: -1,
            d: 1,
            sX: -0.2
        }, {
            b: 300,
            d: 400,
            sX: 0.3,
            sY: 0.4,
            e: {
                sX: 7,
                sY: 7
            }
        }],
        [{
            b: -1,
            d: 1,
            sX: -0.8,
            sY: -0.8
        }, {
            b: 100,
            d: 480,
            x: -32,
            y: 38,
            r: 180,
            sX: 0.8,
            sY: 0.8
        }],
        [{
            b: -1,
            d: 1,
            o: -1
        }, {
            b: 100,
            d: 480,
            c: {
                t: -199
            }
        }, {
            b: 580,
            d: 220,
            y: 28,
            o: 1,
            c: {
                t: 199
            }
        }],
        [{
            b: -1,
            d: 1,
            o: -1
        }, {
            b: 100,
            d: 880,
            c: {
                m: -119
            }
        }, {
            b: 980,
            d: 600,
            y: 28,
            o: 1,
            c: {
                m: 119
            }
        }],
        [{
            b: -1,
            d: 1,
            o: -1
        }, {
            b: 100,
            d: 640,
            c: {
                t: -413
            }
        }, {
            b: 740,
            d: 340,
            y: 31,
            o: 1,
            c: {
                t: 413
            }
        }],
        [{
            b: -1,
            d: 1,
            o: -1
        }, {
            b: 1440,
            d: 260,
            y: 78,
            o: 1
        }],
        [{
            b: -1,
            d: 1,
            o: -1
        }, {
            b: 320,
            d: 380,
            o: 1
        }],
        [{
            b: 120,
            d: 400,
            c: {
                x: 198.0,
                t: -22.0
            },
            e: {
                c: {
                    x: 5,
                    t: 5
                }
            }
        }],
        [{
            b: -1,
            d: 1,
            c: {
                t: -521.36
            }
        }, {
            b: 800,
            d: 500,
            x: 13,
            c: {
                t: 521.36
            }
        }, {
            b: 1600,
            d: 480,
            x: -13,
            y: 1,
            c: {
                x: 532,
                t: -532
            }
        }],
        [{
            b: -1,
            d: 1,
            c: {
                t: -356
            }
        }, {
            b: 100,
            d: 380,
            c: {
                t: 356
            }
        }],
        [{
            b: -1,
            d: 1,
            c: {
                t: -153
            }
        }, {
            b: 100,
            d: 440,
            x: -33,
            y: -119
        }, {
            b: 540,
            d: 260,
            x: 103,
            y: 2,
            c: {
                t: 153
            }
        }],
        [{
            b: -1,
            d: 1,
            c: {
                m: -226
            }
        }, {
            b: 1820,
            d: 460,
            c: {
                m: 226
            }
        }, {
            b: 2280,
            d: 420,
            c: {
                y: 180.8
            }
        }],
        [{
            b: -1,
            d: 1,
            c: {
                y: 53.5,
                m: -107
            }
        }, {
            b: 100,
            d: 380,
            c: {
                y: -53.5,
                m: 107
            }
        }],
        [{
            b: -1,
            d: 1,
            o: -1
        }, {
            b: 380,
            d: 100,
            c: {
                y: 61
            }
        }, {
            b: 480,
            d: 600,
            o: 1,
            c: {
                y: -61
            }
        }],
        [{
            b: -1,
            d: 1,
            o: -1,
            sY: 0.5
        }, {
            b: 780,
            d: 100,
            c: {
                x: 333
            }
        }, {
            b: 880,
            d: 400,
            o: 1,
            c: {
                x: -333
            }
        }],
        [{
            b: -1,
            d: 1,
            o: -1
        }, {
            b: 380,
            d: 100,
            i: 100,
            c: {
                m: -43
            }
        }, {
            b: 480,
            d: 400,
            o: 1,
            c: {
                m: 43
            }
        }],
        [{
            b: -1,
            d: 1,
            c: {
                t: -1414
            }
        }, {
            b: 100,
            d: 580,
            c: {
                t: 1414
            }
        }, {
            b: 680,
            d: 300,
            y: -61
        }, {
            b: 980,
            d: 400,
            y: 61
        }],
        [{
            b: -1,
            d: 1,
            o: -1
        }, {
            b: 1280,
            d: 100,
            y: 75,
            c: {
                y: 72
            }
        }, {
            b: 1380,
            d: 400,
            y: -75,
            o: 1,
            c: {
                y: -72
            }
        }],
        [{
            b: -1,
            d: 1,
            c: {
                t: -608
            }
        }, {
            b: 1080,
            d: 500,
            c: {
                t: 608
            }
        }],
        [{
            b: -1,
            d: 1,
            o: -1,
            c: {
                t: -608
            }
        }, {
            b: 100,
            d: 380,
            o: 1,
            c: {
                t: 608
            }
        }, {
            b: 880,
            d: 400,
            c: {
                x: 608
            }
        }],
        [{
            b: -1,
            d: 1,
            o: -1,
            c: {
                x: 608
            }
        }, {
            b: 280,
            d: 400,
            o: 1,
            c: {
                x: -608
            }
        }, {
            b: 1780,
            d: 400,
            c: {
                x: 608
            }
        }],
        [{
            b: -1,
            d: 1,
            o: -1,
            c: {
                x: 608
            }
        }, {
            b: 480,
            d: 400,
            o: 1,
            c: {
                x: -608
            }
        }, {
            b: 1680,
            d: 400,
            c: {
                t: -608
            }
        }],
        [{
            b: -1,
            d: 1,
            o: -1,
            c: {
                x: 505
            }
        }, {
            b: 1480,
            d: 400,
            x: -36,
            o: 1,
            c: {
                x: -505
            }
        }]
    ];

    var jssor_1_options = {
        $AutoPlay: 0,
        $Idle: 2000,
        $SlideEasing: $Jease$.$InOutSine,
        $DragOrientation: 3,
        $CaptionSliderOptions: {
            $Class: $JssorCaptionSlideo$,
            $Transitions: jssor_1_SlideoTransitions
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    //make sure to clear margin of the slider container element
    jssor_1_slider.$Elmt.style.margin = "";

    /*#region responsive code begin*/

    /*
        parameters to scale jssor slider to fill parent container

        MAX_WIDTH
            prevent slider from scaling too wide
        MAX_HEIGHT
            prevent slider from scaling too high, default value is original height
        MAX_BLEEDING
            prevent slider from bleeding outside too much, default value is 1
            0: contain mode, allow up to 0% to bleed outside, the slider will be all inside parent container
            1: cover mode, allow up to 100% to bleed outside, the slider will cover full area of parent container
            0.1: flex mode, allow up to 10% to bleed outside, this is better way to make full window slider, especially for mobile devices
    */

    var MAX_WIDTH = 3000;
    var MAX_HEIGHT = 3000;
    var MAX_BLEEDING = 0.3;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {
            var originalWidth = jssor_1_slider.$OriginalWidth();
            var originalHeight = jssor_1_slider.$OriginalHeight();

            var containerHeight = containerElement.clientHeight || originalHeight;

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
            var expectedHeight = Math.min(MAX_HEIGHT || containerHeight, containerHeight);

            //scale the slider to expected size
            jssor_1_slider.$ScaleSize(expectedWidth, expectedHeight, MAX_BLEEDING);

            //position slider at center in vertical orientation
            jssor_1_slider.$Elmt.style.top = ((containerHeight - expectedHeight) / 2) + "px";

            //position slider at center in horizontal orientation
            jssor_1_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 2) + "px";
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*#endregion responsive code end*/

    //Modal images in inspiration gallery
    var $modal = $('#myModal');
    var $modalImg = $('#img01');
    var $images = $('#inspo-images img');
    var index = 0;

    $('#inspo-images').on('click', 'img', function () {
        $modal.css('display', 'block');
        $modalImg.attr('src', $(this).attr('src'));
        index = $images.index($(this));
    });

    $('#close-button').on('click', function () {
        $modal.css('display', 'none');
    });

    $('#previous-button').on('click', function () {
        index = index - 1;
        if (index < 0) index = $images.size();
        $modalImg.attr('src', $($images.get(index)).attr('src'));
    });

    $('#next-button').on('click', function () {
        index = index + 1;
        if (index == $images.size()) index = 0;
        $modalImg.attr('src', $($images.get(index)).attr('src'));
    });

    var distance = $('#inspiration').offset().top,
        $window = $(window);

    $window.scroll(function () {
        if ($window.scrollTop() >= distance) {
            $('#inspiration').css('overflow', 'auto');
        }
        if($('#inspiration').css('overflow')==='auto' && ($window.scrollTop() >= distance*2||$window.scrollTop() < distance) ){
            $('#inspiration').css('overflow', 'hidden');
        }
    });
});