// aside menu buton
let aside_btn = document.querySelectorAll('.aside_btn');
let aside_btn_arr = Array.from(aside_btn);
// menu outnut display block
let aside_page = document.querySelectorAll('.aside_page');
let aside_page_arr = Array.from(aside_page);

for(var i = 0; i < aside_btn.length; i++){
    aside_btn[i].onclick = function(){
        for(var i = 0; i < aside_btn.length; i++){
        aside_btn[i].style.borderLeft = '4px solid #01134E';
        aside_btn[i].childNodes[1].style.fill = '#8089A6';
        }
        this.style.borderLeft = '4px solid #0AD69C';
        this.childNodes[1].style.fill = '#fff';
        var dima = this; 
        var numberClick;
        aside_btn_arr.forEach(function(el){
            if(el == dima){
                numberClick = aside_btn_arr.indexOf(dima);
            }
        });
        for(var i = 0; i < aside_page_arr.length; i++){
            aside_page_arr[i].style.display = 'none';
        }
        aside_page_arr[numberClick].style.display = 'block';
    }
}

// menu chat messages
let profile = document.querySelectorAll('.profile');
let profile_arr = Array.from(profile);
// open messages

let user_message_page = document.querySelectorAll('.user_message_page');
let user_message_page_arr = Array.from(user_message_page);


localStorage
for(let i = 0; i < profile_arr.length; i++) {
    profile_arr[i].onclick = function() {
        for(let i = 0; i < profile_arr.length; i++) {
            profile[i].classList.remove('profile_active');
        }
        this.classList.add('profile_active');

        let profileClick = this;
        let numberClick;

        profile_arr.forEach(function(el){
            if(profileClick == el){
                numberClick = profile_arr.indexOf(el);
            }
        });

        for(let i = 0; i < profile_arr.length; i++) {
            user_message_page[i].classList.remove('user_message_page_active');
            user_message_page[numberClick].classList.add('user_message_page')
        }

        user_message_page[numberClick].classList.add('user_message_page_active');
    }  
}

// open user Sarah menu

let user_name_btn = document.querySelectorAll('.user_name_btn');
let open_block = document.querySelector('#open_block');
let open_block_count = false;

for(let i = 0; i < user_name_btn.length; i++){
    user_name_btn[i].onclick = function() {
        if(open_block_count == false){
            open_block.style.display = 'block';
            open_block_count = !open_block_count;
        }else {
            open_block.style.display = 'none';
            open_block_count = !open_block_count;
        }
    }
}

console.log(user_name_btn);
