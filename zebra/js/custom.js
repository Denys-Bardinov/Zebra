jQuery(function ($) {
    $(function () {
        $('.basket_trigger').click(function () {
            $('.triangle-list').toggleClass('triangle_opened');
        });
    });

    $(function () {
        $('.basket_trigger').click(function () {
            $('.triangle').toggleClass('triangle-rotate');
        });
    });

    $(function () {
        $('.burger_trigger').click(function () {
            $('.menu').toggleClass('menu_opened');
        });
    });

    var tab;
    var tabContent;

    window.onload = function () {
        tabContent = document.getElementsByClassName('tabContent');
        tab = document.getElementsByClassName('tab');
        hideTabsContent(1);
    }

    document.getElementById('tabs').onclick = function (event) {
        var target = event.target;
        if (target.className == 'tab') {
            for (var i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabsContent(i);
                    break;
                }
            }

        }
    }


    function hideTabsContent(a) {
        for (var i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add("hide");
            tab[i].classList.remove('whiteborder');
        }
    }


    function showTabsContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabsContent(0);
            tab[b].classList.add('whiteborder');
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

});

