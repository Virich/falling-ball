
var score = 0,
    live = 10,
    fallDown = 0,
    bottom = 0,
    index = 1,
    timer = 6000,
    count = 1;

//delete to click element
    $('body').on('click', '.fall', function () {   
        $(this).remove();
        ++score;
        $('.win').text(score);
        return score;

    });

$(document).ready(function(){
    //create object
    var obj = {
            toDo: function(from, to) {
            return Math.round(Math.random()*(to-from)+from) 
        }
    }

    setInterval(function (){
        //create prototype
        function protoElem(){
            this.__proto__ = obj;	
            this.toLeft = obj.toDo(0, window.innerWidth);
            this.toTop = obj.toDo(0);
            
        }
//        //calculate of speed falldown
//        if(((score%10) == 0)&&(score != 0)){
//            index = index * 0.8;
//            timer = timer * 0.8;
//        };
        //create element by prototype
        var newElem = new protoElem();
        var elem = document.createElement('div');
        document.body.appendChild(elem);
        field.appendChild(elem);
        elem.className='fall';
        
        //show element on screen
        elem.style.display = 'block';
        elem.style.position = 'absolute';
        elem.style.backgroundColor = 'black';
        elem.style.top = newElem.toTop  + 'px';
        elem.style.width = 120 * index + 'px';
        elem.style.height = 120 * index + 'px';
        if (newElem.toLeft<=120) { elem.style.left = newElem.toLeft * index + 'px'; } 
        else  { elem.style.left = newElem.toLeft - 120 * index + 'px'; };
        
        fallDown =  $('.fall').offset().top;
        var bottom = $(window).height();
        $('.fall').animate({top: bottom}, timer);
        
        $('.win').text(score);
        $('.lose').text(live);
    },1000);
    
});
//function delete of element which fall down to bottom
setInterval(function del(){
    var item = $('#field').find('.fall');
    var itemFirst = item.first();
    var itemPos = itemFirst.offset().top;
    var bottom = $(window).height();
    if (itemPos >= bottom) {
        live--;
        $('.lose').text(live);
        itemFirst.remove();
        if (live == -1) {
            alert('Game over! Your result ' + score);
            live = 10;
            score = 0;
            index = 1;
            speed = 6000;
            $('.win').text(score);
            $('.lose').text(live);
            item.remove();
        }
    }
},100);
       
























