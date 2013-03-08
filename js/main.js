$(document).ready(function() {

    var viewport = document.querySelector("meta[name=viewport]");

    if ( screen.width > 640 ) {
        viewport.setAttribute('content', 'width=device-width; initial-scale=1.0;');
    }

    $('#goButton').click(function() {
        var that = $(this);
        var clicked = that.attr('data-clicked') === 'true';
        var instructionsOld = $('.instructions h1');
        var instructionsNew = $('.instructions div');

        if ( !clicked ) {
            that.attr('data-clicked', 'true');
            instructionsOld.addClass('hidden');
            instructionsNew.removeClass('hidden');
            that.html('Try Again');
        }

        window.location.href = 'http://beardbro.com/mailTo/association.zip';

        $(document).scrollTop(0);

    });

});