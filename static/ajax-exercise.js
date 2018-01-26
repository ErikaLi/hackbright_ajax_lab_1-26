"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);

function showFortune() {
    $.get('/fortune', (result) => $('#fortune-text').html(result));
}




// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
    $.get(url, formData, (results) => $('#weather-info').html(results['forecast']));


    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();
    // let data = {
    //     'qty': $("#qty-field").val(),
    //     'melon_type': $('#melon-type-field').val(),
    // };
    // console.dir(data);
    let data = $('#order-form').serialize();

    $.post('order-melons.json', data, showMessage);



    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

function showMessage(results) {
    if (results['code'] == 'ERROR') {
        $('#order-status').addClass('order-error');
    } else {
        $('#order-status').removeClass('order-error');
    }
    $('#order-status').html(results['msg']);
}

$("#order-form").on('submit', orderMelons);


