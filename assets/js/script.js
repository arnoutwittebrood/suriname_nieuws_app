$(document).ready(function() {

    var bgImageTotal=4;
    var randomNumber = Math.round(Math.random()*(bgImageTotal-1))+1;
    var imgPath=('./assets/img/bg/'+randomNumber+'.jpg');
    $('body').css('background-image', ('url("'+imgPath+'")'));

});
