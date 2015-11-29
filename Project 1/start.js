$(document).on('ready',function(){
    defineSizes();
})
function defineSizes(){
    $('.form_container.slide').each(function(i,el){
        $(el).css({
            'background-image' : "url("+$(el).data("backgroud")+")",
            'height': ($('.form_container').width() * 0.45)+'px',
            'with': ($('.form_container').width()) + 'px'
        });
    });      
}