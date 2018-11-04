window.onload = function() {
var leapYear = new Date().getFullYear();
var c =[];
var count_work = 3;
// check localStorege

if(localStorage.getItem('work_days') != null){
    var work = localStorage.getItem('work_days');
    if(Number(work) === 1) {
        count_work = 4;
        let one = document.getElementsByClassName('day_item');
        console.log(one);

        one[1].setAttribute('selected','');
    }else if(Number(work) === 0) {
        count_work = 3; 
        let two =  document.getElementsByClassName('day_item');
        console.log(two);

        two[0].setAttribute('selected','');
    }
}


//add mont select
let month_ghange = document.querySelector('#month_ghange');
let yearNow = new Date();
for(let i = 2000; i < 2100; i++){
    let option = document.createElement('option');
    option.innerHTML = i;
    if( i ==  yearNow.getFullYear()){
        option.setAttribute('selected','');
    }
    month_ghange.appendChild(option);
}
// changeSelect

month_ghange.addEventListener('change', function() {
    let calendar_block = document.querySelector('#calendar_block');
    var start = calendar;
    leapYear = this.value;
    calendar_block.innerHTML = '';
    start();
});

// add class now date
var yeaR = new Date().getFullYear();
var montH = 1;
var datE = 0;

var currenT = new Date ().getTime ();

var birtH = new Date (yeaR, montH - 1, datE).getTime ();

var agE = currenT - birtH;

var rezulT = Math.floor (agE / 8.64e7);




// 

// calendar();
function calendar() {
    


// get day in year
function getLastDayOfMonth(year, month) {
    var date = new Date(leapYear, month + 1, 0);
    return date.getDate();
}
for(var i = 0; i < 12; i++){
    c[i] = getLastDayOfMonth(2012, i);
}
if(leapYear1 == false){
    c[1] = 28;
}
// get date month

let calendar_block = document.querySelector('#calendar_block');
let contn_month = 0;
var count_week = 0;


var month_name = ['Січень','Лютий','Березень','Квітень', 'Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];

for(var i = 0; i < c.length;i++) {
    
    let month_block = document.createElement('div');
    month_block.className = 'month_block';
    month_block.textContent = month_name[i];
    calendar_block.appendChild(month_block);

    for(var y = 1; y <= c[i]; y++){
        let month_block = document.getElementsByClassName('month_block');
        let row = document.createElement('div');
        row.className = 'row';
        
        
        if(count_week % 7 === 0){
            month_block[contn_month].appendChild(row);
        }
        console.log(count_week);
        count_week++;

        }

        contn_month++;
    }
   
var date_count = 0;
//check for leap-year
Date.prototype.isLeapYear = function() {
    if (0 == this.getFullYear() % 400) return true;
    if (0 == this.getFullYear() % 100) return false;
    return (0 == this.getFullYear() % 4) ? true :  false;
  }
  var dtTest = new Date(leapYear,8,9);

  var leapYear1 = dtTest.isLeapYear();


let arrDays = [];
let row_block = document.getElementsByClassName('row');
let count_days = 0;
function setDate(){
    for(var i = 0; i  < c.length ;i++){
        if(date_count == rezulT){
            calendarItem.className = 'calendar_item toDay';
        };

        for(var y = 1; y <= c[i]; y++ ){
            arrDays.push(y);
        }
    }

    // start year
    var year_start = (new Date(`${leapYear} January 01`)).getDay();
    if(year_start == 0){
        year_start = 7;
    }


    var count_Item = 0;
    for(var i = 0; i < row_block.length; i++){
        count_days++;
        for(var y = 0; y < 7; y++){
            if(i === 0 && (year_start - 1) > 0){
                var empty_block = document.createElement('div');
                    empty_block.className = 'calendar_item';
                    row_block[0].appendChild(empty_block);
                    year_start--;
            }else {
                let calendarItem = document.createElement('div');
                calendarItem.className = 'calendar_item';
                calendarItem.textContent = arrDays[count_Item];
                if(y > 4){
                    calendarItem.className = 'calendar_item weekDay';     
                }
                if(count_Item == rezulT -1){
                    calendarItem.className = 'calendar_item toDay';
                    calendarItem.setAttribute('id', 'naw');
                }
                row_block[i].appendChild(calendarItem);
                count_Item++;
            }   
        }
    }
    
}
setDate();
var calendar_item = [...document.querySelectorAll('.calendar_item')];
for(var i = 0;i < calendar_item.length; i++){
    
    calendar_item[i].onclick = function() {
        
        var click = this;
        var number;
        calendar_item.forEach(function(el){
            
            if(click == el){
                number = calendar_item.indexOf(el);
            }

        });
        for(var x = 0; x < calendar_item.length; x++){
            calendar_item[x].classList.remove('bg_green');
        };
        for(var y = number; y < calendar_item.length;y += count_work){
                calendar_item[y].classList.add('bg_green');            
        };
        console.log(number);
        localStorage.setItem('start_days_filter', number);

    };
    
};



// 
};
calendar();


var work_days = document.getElementById('work_days');
work_days.addEventListener('change', function() {
localStorage.setItem('work_days',this.value);
    var value = this.value;
    
    if(value == 1) {
        count_work = 4; 
    }else if(value == 0) {
        count_work = 3; 
    }

});
var calendar_item = [...document.querySelectorAll('.calendar_item')];
console.log(localStorage.getItem('start_days_filter'));
if(localStorage.getItem('start_days_filter') != null){
    for(var y = Number(localStorage.getItem('start_days_filter')); y < calendar_item.length;y += count_work){
        calendar_item[y].classList.add('bg_green');            
};
};
};


