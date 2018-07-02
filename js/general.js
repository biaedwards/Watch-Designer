jQuery(document).ready(function ($) {
    var $modal = $('#myModal');
    var $modalImg = $('#img01');
    var $images = $('#inspo-images img');
    var size = $images.length;
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
        if (index < 0) index = size;
        $modalImg.attr('src', $($images.get(index)).attr('src'));
    });

    $('#next-button').on('click', function () {
        index = index + 1;
        if (index == size) index = 0;
        $modalImg.attr('src', $($images.get(index)).attr('src'));
    });

    var $selectedMenu = $('#cistomizer-menu .selected');
    var $selectedCase = $('#case-options .selected');
    var $selectedStrap = $('#strap-options .selected');
    var $selectedFace = $('#face-options .selected');
    var $selectedHands = $('#hands-options .selected');


    $('#customizer-menu .selectable').on('click', function () {

        if ($selectedMenu) {
            $selectedMenu.addClass('selectable');
            $selectedMenu.removeClass('selected');
        }
        $selectedMenu = $(this);
        $selectedMenu.removeClass('selectable').addClass('selected');
        var $shownMenu = $('.show');
        $shownMenu.removeClass('show').addClass('hide');
        if ($selectedMenu.attr('id') === 'case') {
            $shownMenu = $('#case-options');
        } else if ($selectedMenu.attr('id') === 'strap') {
            $shownMenu = $('#strap-options');
        } else if ($selectedMenu.attr('id') === 'numbers') {
            $shownMenu = $('#numbers-options');
        } else if ($selectedMenu.attr('id') === 'outer') {
            $shownMenu = $('#outer-options');
        } else if ($selectedMenu.attr('id') === 'hands') {
            $shownMenu = $('#hands-options');
        } else if ($selectedMenu.attr('id') === 'text') {
            $shownMenu = $('#text-options');
        } else if ($selectedMenu.attr('id') === 'image') {
            $shownMenu = $('#image-options');
        }
        $shownMenu.removeClass('hide').addClass('show');
    });

    $(function () {
        var scrollHandle = 0;
        var scrollStep = 5;
        var $parent = $('#inspo-images');

        $('.panner').on('mouseenter', function () {
            var data = $(this).data('scrollModifier'),
                direction = parseInt(data, 10);
            $(this).addClass('active');

            startScrolling(direction, scrollStep);
        });

        $('.panner').on('mouseleave', function () {
            stopScrolling();
            $(this).removeClass('active');
        });

        function startScrolling(modifier, step) {
            if (scrollHandle === 0) {
                scrollHandle = setInterval(function () {
                    var newOffset = $parent.scrollLeft() + (scrollStep * modifier);
                    $parent.scrollLeft(newOffset);
                }, 10);
            }
        }

        function stopScrolling() {
            clearInterval(scrollHandle);
            scrollHandle = 0;
        }
    }());
});