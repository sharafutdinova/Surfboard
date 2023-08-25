let myMap;
let myGeoObject

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.749805, 37.605726],
        zoom: 15,
        controls: []
    })
    const myPlacemark = new ymaps.Placemark([55.749805, 37.605726], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/map_icon.png',
        icon_imagesize: [58, 73],
        iconImageOffset: [-3, -42]
    });

    myMap.geoObjects.add(myPlacemark);
};

ymaps.ready(init);