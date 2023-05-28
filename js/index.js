$('[data-modal=obratnay_svyaz]').on('click', function(){
    $('.overlay, #obratnay_svyaz').fadeIn('slow');
    $('#obratnay_svyaz').on('click', function(){
        $('#obratnay_svyaz').fadeOut();
        $('.overlay, #zayavka').fadeIn('slow');
    });
});
$('.modal_close').on('click', function (){
    $('.overlay, #obratnay_svyaz, #zayavka').fadeOut('slow');

});

$('#obratnay_svyaz').on('click', function(){
    $('#obratnay_svyaz').fadeOut();
    $('.overlay, #zayavka').fadeIn('slow');
});


$(document).ready(function(){
$("#phone").mask("+7(999) 999-9999");
});