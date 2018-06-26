/*window.addEventListener("load",bindEvents);

function bindEvents(){
    buttoncollapse();
};


function buttoncollapse(){
    $("navbarToggle").blur(function(event){
        var scrWidth = window.innerWidth;
        if (scrWidth<786){
            $("collapsable-nav").collpase('hide');
        }
    });
    $("#navbarToggle").click(function(event){
        $(event.target).focus();
    });
};*/

$(function(){
    
    $("#navbarToggle").blur(function(event){
        var scrWidth = window.innerWidth;
        if(scrWidth < 768){
            $("#collapsable-nav").collapse('hide');
        }
    });
});