window.onload = function(){


$('#animate_block').animate({width : '82%'},400,animate_block_one);

//add the first text to #animate_block
function animate_block_one(){
    $('#animate_block_one').animate({width : '100%'},400,animate_block_two);
    $('#animate_block_one').css('text-align', 'center');
}
function animate_block_two(){
    $('#animate_block_two').animate({width : '100%'},400,animate_block_three);
}
function animate_block_three(){
    $('#animate_block_three').animate({width : '100%'},400, animate_block_four);
}
function animate_block_four(){
    $('#animate_block_four').animate({width : '100%'},400, twoStep);
}


 function twoStep() {
    animate_block_one()
    function animate_block_one(){
        $('#animate_block_one').animate({width : '0px'},400,animate_block_two);
        $('#animate_block_one').hide();
    }
    function animate_block_two(){
        $('#animate_block_two').animate({width : '0px'},400,animate_block_three);
        $('#animate_block_two').hide();
    }
    function animate_block_three(){
        $('#animate_block_three').animate({width : '0px'},400, animate_block_four);
        $('#animate_block_three').hide();
    }
    function animate_block_four(){
        $('#animate_block_four').animate({width : '0px'},400);
        $('#animate_block_four').hide();
    }
    $('#animate_block').animate({width : "100%"},400);
    $('#animate_block').animate({height : "100%"},400, addHeader);
    $('.animate_block_row').hide();
};



function addHeader() {
    var header_text = `<div class="container" id="animate_header">
    <div class="logo">
        <img src="./images/header/2-layers_black.png" alt="logo">
    </div>
    <ul class="header_menu">
        <li>О компании</li>
        <li>Контакты</li>
    </ul>
    <nav id="mein_menu">
            <svg xmlns="http://www.w3.org/2000/svg" style="fill:#000;" xmlns:xlink="http://www.w3.org/1999/xlink" width="29" height="10" viewBox="0 0 29 10"><defs><path id="6o9ma" d="M1587 55v-2h29v2z"/><path id="6o9mb" d="M1587 63v-2h29v2z"/></defs><g><g transform="translate(-1587 -53)"><use  xlink:href="#6o9ma"/></g><g transform="translate(-1587 -53)"><use  xlink:href="#6o9mb"/></g></g></svg>
            МЕНЮ
    </nav>
    <div class="block_languages">
    <select class="languages" style="color:#000" id="languages">
        <option value="ru">RU</option>
        <option value="ru">ENG</option>
    </select>
    <label for="languages" id="languages_arrow">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9" height="5" viewBox="0 0 9 5"><defs><path id="8bsba" d="M1839 56l-4.5 5-4.5-5z"/></defs><g><g transform="translate(-1830 -56)"><use fill="#000" xlink:href="#8bsba"/></g></g></svg>
    </label>
    </div>
</div>`
$('.animate_block_header').append(header_text);
$('.animate_block_header').animate({color : 'black'},400,addProject_first_row);
};

let project_title = `<div class="project_title">
<img src="./images/animate/_____4_1.png" alt="project">
</div>`;
let project_question_mark = `<div class="project_question_mark">
<img src="./images/animate/_____5_1.png" alt="question">
</div>`;
let project_text = `<div class="project_text">
<img src="./images/animate/_____6_1.png" alt="text">
</div>`;
let project_first_two_block = `<img src="./images/animate/_____7_1.png" alt="block" class="project_first_two_block">`;
let zero = `<img src="./images/animate/_____8.png" alt="zero" class="zero">`;

function addProject_first_row() {
    first();
    function first(){
        $('.project_first_row').append(project_title);
        $('.project_title').animate({marginLeft : '0px', opacity: '1'},400,two);
    }

    function two(){
        setTimeout(function(){
            $('.project_first_row').append(project_question_mark);
            $('.project_question_mark').animate({marginLeft : '0px', opacity: '1'},400,three);
        },400); 
    }

    function three(){
        setTimeout(function(){
            $('.project_first_row').append(project_text);;
            $('.project_text').animate({marginLeft : '0px', opacity: '1'},400,four);
        },400);
    }
    

    function four(){
        setTimeout(function(){
            $('.project_first_two').append(project_first_two_block);;
            $('.project_first_two_block').animate({bottom : '0px'},400,five);
        },400);
    } 

    function five(){
        setTimeout(function(){
            $('.project_first_two').append(zero);;
            $('.zero').animate({bottom : '50px'},400);
        },400);
    }

}



};

