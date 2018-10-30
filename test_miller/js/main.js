window.onload = function(){
    var text = document.querySelector('.text');
    var amimate_wrap = document.querySelector('.amimate_wrap');
    var animate_element = document.querySelector('.animate_element');


function scrollCenter() {
    
    var amimate_wrap_callBack = function(){
        amimate_wrap.classList.remove('amimate_end');
        text.classList.remove('text_and');

        requestFrame(function() {
            animate_element.classList.add('animate_element_end');

        });
        
        amimate_wrap.removeEventListener('transitionend',amimate_wrap_callBack);
        
    };

    //animate left block
    text.classList.remove('text_start');
    text.classList.add('text_and');
    // animate right block
    amimate_wrap.classList.remove('amimate_start');
    amimate_wrap.classList.add('amimate_end');
    // animate callback 

    requestFrame(function(){
        amimate_wrap.addEventListener('transitionend', amimate_wrap_callBack);
    });
    

};

function scrollTop() {
    
    var animate_element_callBack = function() {
        animate_element.classList.remove('animate_element_start');
        amimate_wrap.classList.add('amimate_start');
        amimate_wrap.classList.remove('animate_element_end');
        text.classList.remove('text_end');
        text.classList.add('text_start');
        animate_element.removeEventListener('transitionend', animate_element_callBack);
    };
    //animate 
    animate_element.classList.add('animate_element_start');
    animate_element.classList.remove('animate_element_end');
    

    requestFrame(function() {
        animate_element.addEventListener('transitionend', animate_element_callBack);
    });

};


var com = false;
window.onscroll = function() {
    
    var scroll = window.pageXOffset || document.documentElement.scrollTop;

        if(scroll >= document.body.scrollHeight / 4){
            if(com == false){
                scrollCenter();
                com = !com;
            }
        }else if(scroll <= document.body.scrollHeight / 4){
            if(com == true){
                scrollTop();
                com = !com;
            }
        }
};


function requestFrame(cal){
    window.requestAnimationFrame(function(){
        window.requestAnimationFrame(function(){
            cal();
        });
    });
};
};