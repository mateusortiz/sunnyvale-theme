(function (window, document, undefined) {

    'use strict';

    var button = document.querySelector('.btn-devtools'),
        img = document.querySelector('img');

    button.addEventListener('click', function(e) {
        e.preventDefault();
        img.src = 'assets/img/chrome.png';
    });

})(window, document);
