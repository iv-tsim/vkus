document.addEventListener('DOMContentLoaded', function() {

    new WOW().init();

    let slider = new Swiper('.slider-slider', {

        slidesPerGroup: 1,
        observer: true,
        observeParents: true,
        touchEventsTarget: 'wrapper',
        navigation: {
            nextEl: '.slider-arrow.slider-arrow__right',
            prevEl: '.slider-arrow.slider-arrow__left',
        },
        pagination: {
            el: '.slider-pagination',
            type: 'bullets',
            clickable: 'true'
        },
        breakpoints: {
            1500: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
        }

    });

    let cardSlider = new Swiper('.card-img__slider', {

        slidesPerGroup: 1,
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        touchEventsTarget: 'wrapper',
        navigation: {
            nextEl: '.slider-arrow.card-img__slider-arrow__right',
            prevEl: '.slider-arrow.card-img__slider-arrow__left',
        }
    });

    if (document.querySelector('div#map')) {
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map', {
                center: [59.20603356511487,39.94885349999999],
                zoom: 15
            });
            
            var myPlacemark = new ymaps.Placemark([59.20603356511487,39.94885349999999], {
                hintContent: 'г. Вологда, 2-й Турундаевский переулок, 2-а Вологодская область',
                balloonContent: 'г. Вологда, ул. Преображенского, д. 145, оф. 345'
            },
            {
                preset: 'islands#redIcon',
                iconLayout: 'default#image',
                iconImageHref: '../img/general/mark.svg',
                iconImageSize: [35, 49],
                iconImageOffset: [-19, -52]
            });

            myMap.geoObjects.add(myPlacemark);

            myMap.controls
                .remove('geolocationControl')
                .remove('fullscreenControl')
                .remove('typeSelector')
                .remove('searchControl')
                .remove('trafficControl')
                .remove('zoomControl')
                .remove('rulerControl');

            myMap.behaviors.disable([
                'scrollZoom',
                'dblClickZoom'
            ]);
        });
    }

    const menu = document.querySelector('.menu');

    document.addEventListener('click', function(event) {
        const target = event.target;

        if (menu.classList.contains('active') && (!target.closest('.menu') || target.matches('.menu-close'))) {
            event.preventDefault();
            menu.classList.remove('active');
        }

        if (target.matches('.header-burger')) {
            menu.classList.add('active');
        }
    });

    let imgs = document.querySelectorAll('.leaf');
    imgs.forEach(function(item, index) {
        window.addEventListener('mousemove', function(e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            let movement = (index % 2 === 0 ? -39 : 21);
            item.style.transform = 'translate(' + x * movement + 'px, ' + y * movement + 'px)';
        });
    });

});