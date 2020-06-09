$( document ).ready(function(){

    var menuBtn= $('.menu'),
        menu=$('.lista');
     var uno =$('#enlaces-fondo');

    menuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else{
            menu.addClass('show');
        }

    });
});


