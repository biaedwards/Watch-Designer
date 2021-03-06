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

    $('#customizer-menu .selectable').on('click', function () {
        var $selectedMenu = $('#customizer-menu .selected');
        $selectedMenu.addClass('selectable').removeClass('selected');
        $selectedMenu = $(this);
        $selectedMenu.removeClass('selectable').addClass('selected');
        var $shownMenu = $('#customizer-current .myShow');
        $shownMenu.removeClass('myShow').addClass('hide');
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
        } else if ($selectedMenu.attr('id') === 'photos') {
            $shownMenu = $('#photo-options');
        }
        $shownMenu.removeClass('hide').addClass('myShow');
    });

    $(function () {
        var scrollHandle = 0;
        var scrollStep = 5;
        var $parent = $('#inspo-images');

        $('.panner').on('mouseenter', function () {
            var data = $(this).data('scrollModifier');
            var direction = parseInt(data, 10);
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

    var imageIndex = 1;

    $('.options .selectable').on('click', function () {
        $clicked = $(this);
        $clicked.parent().children().removeClass('selected');
        $clicked.addClass('selected');
        var imgID = $clicked.attr('id');
        var imgPath = 'img/visualizer/' + imgID + '.png';
        if (imgID.includes('case')) {
            $('#case-vis img').attr('src', imgPath);
        } else if (imgID.includes('strap')) {
            $('#strap-vis img').attr('src', imgPath);
        } else if (imgID.includes('numbers')) {
            $('#numbers-vis img').attr('src', imgPath);
        } else if (imgID.includes('outer')) {
            $('#outer-vis img').attr('src', imgPath);
        } else if (imgID.includes('hands')) {
            $('#hands-vis img').attr('src', imgPath);
        } else if (imgID.includes('pic')) {
            $clicked.siblings().find('p').html('');
            $clicked.find('p').html('Double click to remove.');
            var $img = $('<img/>').attr({
                'id': 'myImage' + imageIndex,
                'src': imgPath,
                'alt': 'myImage' + imageIndex,
                'width': '200px',
                'height': '200px'
            }).appendTo('#image-text-vis');
            $img.resizable({
                aspectRatio: 1 / 1,
                autoHide: true
            });
            $img.parent().draggable();
            imageIndex++;
        }
    });

    $('#image-text-vis').on('dblclick', 'img, h2', function () {
        $(this).remove();
    });

    $('#ready').on('click', function () {
        $('#ready').removeClass('myShow').addClass('hide');
        $('#enter-email').removeClass('hide').addClass('myShow');

    });

    $('#submit').on('click', function () {
        if ($('#email').val().includes('@')) {
            $('#enter-email').removeClass('myShow').addClass('hide');
            $('#submitted').removeClass('hide').addClass('myShow');
        } else {
            alert('Please enter valid email!');
        }
    });

    $('#start-over').on('click', function () {
        $('#submitted').removeClass('myShow').addClass('hide');
        $('#ready').removeClass('hide').addClass('myShow');
    });

    $('#fonts a').on('click', function () {
        var $textBox = $('#see-text h2');
        var font = $(this).html().toLowerCase();
        $textBox.attr('class', font);
        var textToAdd = $('#text-to-add').val();
        $('#see-text h2').html(textToAdd);
    });

    $('#font-size-button').on('click', function () {
        var $textBox = $('#see-text h2');
        var fontSize = $('#font-size').val() + 'pt';
        $textBox.css('font-size', fontSize);
    });

    $('#add-text').on('click', function () {
        var $text = $('#see-text h2').clone();
        $text.appendTo('#image-text-vis');
        $text.draggable();
    });

    $('#add-photo').on('click', function () {
        var imgSrc = $('#photo-url').val();
        var $img = $('<img/>').attr({
            'id': 'myImage' + imageIndex,
            'src': imgSrc,
            'alt': 'myImage' + imageIndex,
            'max-width': 'parent',
            'height': 'auto'
        }).appendTo('#image-text-vis');
        $img.resizable({
            autoHide: true
        });
        $img.parent().draggable();
        imageIndex++;
    });
});