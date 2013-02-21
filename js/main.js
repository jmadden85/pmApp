$(document).ready(function() {

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var viewport = document.querySelector("meta[name=viewport]");

    if ( width > 640 ) {
        viewport.setAttribute('content', 'width=1024; initial-scale=1.0;');
    }

});