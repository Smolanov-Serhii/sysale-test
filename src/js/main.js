$( document ).ready(function(){
    $('select').selectric({
        maxHeight: 200
    });
    $(".selectric-scroll").mCustomScrollbar({
        theme:"dark"
    });
    $('.selectric-wrapper, .selectric-items').mouseleave(function(){
        $('select').selectric('close');
    });
    $( '.container__bottom' ).each(function( index ) {
        let col = $(this).find('.col');
        let plus = $(this).find('.plus');
        let minus = $(this).find('.minus');
        plus.click(function() {
            col.val(parseInt(col.val())+1);
            var check = col.val();
            if (check > 1){
                minus.removeClass('disable');
            }
        });
        minus.click(function() {
            var check = col.val();
            if (check > 1){
                col.val(parseInt(col.val())-1);
                minus.removeClass('disable');
            } else {
                minus.addClass('disable');
            }

        });
    });

});


