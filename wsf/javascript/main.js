window.onload = function(){


$('#animate_block').animate({width : '82%'},1000,animate_block_one);

//add the first text to #animate_block
function animate_block_one(){
    $('#animate_block_one').animate({opacity : '1', left : '0px'},400,animate_block_two);
    // $('#animate_block_one').css('text-align', 'center');
}
function animate_block_two(){
    $('#animate_block_two').animate({opacity : '1', left : '0px'},400,animate_block_three);
}
function animate_block_three(){
    $('#animate_block_three').animate({opacity : '1', left : '0px'},400, animate_block_four);
}
function animate_block_four(){
    $('#animate_block_four').animate({opacity : '1', left : '0px'},400);
}

// window scroll down
let window_count = false;
$(window).scroll(function() {
    if($(this).scrollTop() == $(document).height() - $(window).height()){
        if(window_count == false) {
            window_count = !window_count;
            twoStep();
        }
    }
})

$('#animate_block').click(function(){
    if(window_count == false) {
        window_count = !window_count;
        twoStep();
    }
})

 function twoStep() {
    animate_block_one()
    function animate_block_one(){
        $('#animate_block_four').animate({left : '30px', opacity : '0'},100,animate_block_two);
        // $('#animate_block_four').hide();
    }
    function animate_block_two(){
        $('#animate_block_three').animate({left : '30px', opacity : '0'},100,animate_block_three);
        // $('#animate_block_two').hide();
    }
    function animate_block_three(){
        $('#animate_block_two').animate({left : '30px', opacity : '0'},100, animate_block_four);
        // $('#animate_block_three').hide();
    }
    function animate_block_four(){
        $('#animate_block_one').animate({left : '30px', opacity : '0'},100);
        // $('#animate_block_one').hide();
    }
    $('#animate_block').animate({width : "100%"},1000);
    $('#animate_block').animate({height : "100%"},1000, addHeader);
    setTimeout(function() {
        $('.animate_block_row').hide();
    },1000);
};



function addHeader() {
    var header_text = `<div class="container" id="animate_header">
    <div class="logo">
        
        <svg 
 xmlns="http://www.w3.org/2000/svg"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 width="117px" height="40px">
<image  x="0px" y="0px" width="117px" height="40px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAAoCAQAAABqHX0eAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiChkXACWilHEvAAADmUlEQVRo3u1aXUgUURT+RhTyh8FMTV2M0DWyjNwR1Exy1TJBEBRCpYVdethWa9WsNkvQCPKlffA9wYjI6EEJQgQfekuCciGEUJcWkwpLWy3RZHWmh2l1/2ZnZr37A+s3Dzvcuefnu+ecO+cOS4EDWVCE9RFDTLgd2KcaBMT+/yWRdqRLgTCiKKpRRDVW0ixnau4tzXcTnBIYd38mVhCUiLzHMylR5XwJEoM/R6VBWMZNtxhVzsMVjjDdvRP1r9FFd4xfIU7WODm35ML3EnloF6bKuaniL/JOijssH758o4S2JaG0ojzqltQ2JU5UzBLlRdCLsC+q7vH0NulKN3Cy5KtUmCYFeCcw55eo92igdUu+ACixJ+5RFaLp+V4lF1sxN4WWJgCLvrcloS2IE5wjD8FJXpEcDPd7lWyV+tXlnyonYzRQBPc85EJeWg/su9uMRFDCPkqhSklRtAeHpGxrgaW5m1S4DnH+zjZBQqScV0NANnxUQ/5lUUoPHKwVl1OxAi28HIQ3gUNaseGu1RCSdU9gz5TgfI4GE3vvpwUR7qiGcCGldUvBJSV3PDArERDVkEFKVCO/85WEKIpqCKky9qJfF2duaAGgZZyxM/Z6C3BlsGES6EspXjZVA2WLjJ2x682A3twy7pTUPlOtlC0a252SxUuaEQConK+3AO1Gxt7VBOjNjJ2xly3ytq7dAWpnuprAn7E5cP6pUhIvSZhKPnc948Pjoe4iYFl5ZE5tOH4LSHk1VtqT/a33Z1L8G2A6rXRAbTg0CKznLit5uauPJprLe/NHhwackiUPRhpuVwCzWWOFd0ss96aSHZnAem78ptpwppW39aK/W2XLdmS6esAR+7IgpokDgFN/9GagxprMKhy1nwDg9G/d07IfLa8BgGYzthQOvRnQjNZYebG6jw2TAHByrbUfqLEWrKkXUtiebEDhKF6qmU3dztk0dgKa0URO4Shc5W2d/8ys5G0YO3c8C3WtdjXZEpPeAUDthE5ZUgEARS/fXrKkHTXxMy4365SZ911lDlqtBX2ppsovCQnvAUDxNf+JofDhAgCohibyzlritvmZJfM6Zd0J/r64/m/c3AF5sZAOEU00S7M5m9rnAFA3TbM0y9dVX/rhrSobPyfLQbM0qx0GtMM0S7ONk0AfXWVL5JJZzSgvqR12ajy2cbOx/Lvpgmq1o80pkeXgbfVkm6rTtzvadjwj9l1hF/t/+wg/oojqP2P8ItTIH/tSAAAAAElFTkSuQmCC" />
</svg>
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
<svg 
 xmlns="http://www.w3.org/2000/svg"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 width="174px" height="43px">
<image  x="0px" y="0px" width="174px" height="43px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAArCAAAAADEGuxZAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiChoJLzo5jWUjAAADkElEQVRYw+2Yb2wTdRjHP9fr2m2w0awytnmDhjXLnAkh/BljQKIGMzVgQLJIjJKlm8sWMiGGGKMvfGFIJDFChhlOjdqoiZJQ/rqEheAawhSZyyZsEuJYXNhgEGyxRVnh+vjiutK5sVRSwiT3fXP3/H73PPe553nufnenCP8nWR40gIk7fWTimrgmrolr4k5fXP1Bw4I1Yb+9WwUgKk8/DoM+VP2RivnG3N+f+ztvlS7b+BgAJ0+rgO5aB219SvUs8AYCr7jb+tTYhVWURb++lvsSAMN7KatIFa/cUVV88AMR2Q9A2toREZGeYmNC3SUiIrWG5RaR1XBOZDdoI/JEPMBmiWQwywh7FGolRUpshjzsgEVRcQAzwWLj1uE1Ovy24jwz12+ah771M4A52FCgEHgU1Yq/Ee1MLnmAza4CTpQi3EbYTMhNVXLH927ky66O7reNHhXw9LYu4LQf6sI8edbn7WuEzcOAEPn0l84fPjQqP5cqbCcc8I6/s80eKf/pVHsNMr7RUqTxIWV1HvTHzYVu92A9HU/1fo/7mAUym4Z8Nw82APD87LGjssVzlX0uoKQEVMlfGrva3+ui7nrHfcTlSh4E49ZwOPgtLOAk1BhleM3HqQYAtbrwRnS7CyC7zmvfuSbmEhRujrlf/gT27F90l+8VvSmUVPpvL332rrgJUmB3y2iYokp6YJ4xmA+9gEJaK9DgArjqJd0z0V3ImBEaHfR02yePH3k9yYyWJ4UrEAJKD9lxwI3YOaAAEKJO6209C4Dc5XuvV7ZPcFco7rj4XH9P0Dl5fNvOcHLZXZJgTOmxZPnowletsAwOGM8uPywyuH0rlNh9GvrC8o3/zfcmAcosrmymX5s8uLo1yewmaspVbWNTS4MVWGnnuxaAS9shVhpNtVgQgGC6dwY7Wv/lqwDQBcWhe8C6J9y/Ytuct6C+9nhXc/klqsqM3NS8vGHtNgFQL9i+gheHxvsKDGwq/5FVWddSiJu4qlXDzyKyB5pF5Ahsi0+9MHb4yrCIyBbDcIjIejgvUgcFARGRP2CViIiM5htF+FWOwZZUrWqJvVuokQE4NZxAtkZ+fGrf+80DwBzPuypAgZamQGQx4NLUdPjowrnAx28AltI/i4xmKFVt+txn6nPI1ihIVXKVZP/i6F3dkZKyrCnKFMiZMKSkrAn+K+700EP8ej4NZOKauCauiWvimrgmron7EOL+A/7b0YtzNNqrAAAAAElFTkSuQmCC" />
</svg>
</div>`;
let project_question_mark = `<div class="project_question_mark">
<svg 
 xmlns="http://www.w3.org/2000/svg"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 width="25px" height="14px">
<image  x="0px" y="0px" width="25px" height="14px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAAAAAD/UeicAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiChoJMDga2QqRAAAAoElEQVQY02P8z4ADMMFZ/3HIvH7DyMDwm4GB4f0zVJkfa78yPO5fPu0Bw59N71BkjonIM3yT8vzLxCCqcBxF5pkaA4Na+DdBOQYGtQ8oMuwCDAyMDFdEGBgY+Jl+Isv8/sXAwMDwRpmBgeE3AzOyDOszBgaGW+8UGRgYnjOyIMuYXP7MwMDlzsLA8OusJsyDELD3DpTxfAeUwUhE6BAvAwAVzT7C5bDt2AAAAABJRU5ErkJggg==" />
</svg>
</div>`;
let project_text = `<div class="project_text">
<svg 
 xmlns="http://www.w3.org/2000/svg"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 width="169px" height="37px">
<image  x="0px" y="0px" width="169px" height="37px"  xlink:href="data:img/png;base64,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" />
</svg>
</div>`;
let project_first_two_block = `<img src="images/animate/7_1.png" class="project_first_two_block">`;
let zero = `<svg 
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
width="55px" height="50px" class="zero">
<image  x="0px" y="0px" width="55px" height="50px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAyCAAAAADdfRwpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiChoKAjdlUP0oAAABbElEQVRIx+2WUXOiQBCEu2cXkajJ//+bp1GQnel70CMohLJSeUiunKeF5tve3ZkBKHwp7GvYf8/lu2t3CWaJ9w9KoGyeU9t7AACtWqcb7NQB0C7PceVQSEIgvHRNM1LeexKImPPr/yCFzIgIJB3QDMs4KQkEOcPpHcnzuiKh0nWWj7m6KIc2w5t0mj/Ptpiv3mojwGr7EsDxOmGY225T3VTk4KfOlHfD/cbbVPoKAKhoNkRg1q84VY+ExqRymTG9bidpGfwcYDUSUnL6ZbjDNAY/QXZTPEnXpRHL3CS40Juf1yexFL+lj57ck/vJXP5UkZZacPAjqJv+jsXGtdFAPrYLIj3AJSrOI6E49QiXs6wbGR4Bqx7gUIva9/82ty8p6gW/j/Osu3PyfZ0T4eXs5tbgEQ7bfW9sQQCiuW2XcjvS7LWBX3OmWL3d7U4RoTk/cLPuSggy5mp178AV48Nl8i6PyYdiNvj8P/tW7i/mcpTAZAm1egAAAABJRU5ErkJggg==" />
</svg>`;

function addProject_first_row() {
    first();
    function first(){
        $('.project_first_row').append(project_title);
        $('.project_title').animate({left : '0px', opacity: '1'},400,two);
    }

    function two(){
        setTimeout(function(){
            $('.project_first_row').append(project_question_mark);
            $('.project_question_mark').animate({left : '0px', opacity: '1'},400,three);
        },400); 
    }

    function three(){
        setTimeout(function(){
            $('.project_first_row').append(project_text);;
            $('.project_text').animate({left : '0px', opacity: '1'},400,four);
        },400);
    }
    

    function four(){
        setTimeout(function(){
            $('.project_first_two').append(project_first_two_block);;
            $('.project_first_two_block').animate({bottom : '0px', opacity: '1'},400,five);
        },400);
    } 

    function five(){
        setTimeout(function(){
            $('.project_first_two').append(zero);;
            $('.zero').animate({bottom : '50px', opacity: '1'},400);
        },400);
    }

}

// window.onresize = function() {
//     console.log(1);
// }
console.log(document.documentElement.scrollHeight);

// $(window).scroll(function() {
//     if($(this).scrollTop() == $(document).height() - $(window).height()){
//         if(window_count == false) {
//             window_count = !window_count;
//             twoStep();
//         }
//     }
// })

};

