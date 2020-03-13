/*$(document).ready(function() {
    let scroll_link = $('.scroll');

    scroll_link.click(function(e){
        e.preventDefault();
        let url = $('body').find($(this).attr('href')).offset.top;

        $('html, body').animate({
            scrollTop : url
        }, 900);

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        return false;	
    })
})*/

/*$(document).ready(function(){
    function smoothScroll(target, duration){
        var target = document.querySelector(target);
        let targetPosition = target.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime){
            if(startTime === null){
                startTime = currentTime;
            }
            let timeElapsed = currentTime - startTime;
            let run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);

            if(timeElapsed < duration){
                requestAnimationFrame(animation);
            }
        }

        function ease(t, b, c, d){
            t /= d / 2;
            if(t < 1){
                return c / 2 * t * t * b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }
        }

        requestAnimationFrame(animation);
    }

    var section1 = document.querySelector('.about');
    var section2 = document.querySelector('.work');

        section1.addEventListener('click', function() {
            smoothScroll('.work', 3000)
        })
  


        section2.addEventListener('click', function() {
            smoothScroll('.work', 3000)
        }) 
    
})*/


const scroll = new SmoothScroll('.navbar a[href*="#"]', {
 	speed: 1500
 });

 /*$(document).ready(function() {
    $('.progress-bar').waypoints(function() {
    $('.progress-bar').css({
    animation: "animate-positive 2s",
    opacity: "1"
    });
    }, { offset: '75%' });
});*/

/*$(document).ready(function(){
    function progress(percent, $element) {
        var progressBarWidth = percent * $element.width() / 100;
        $element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "% ");
    }

    progress(70, $('#progressBar'));
})*/

var bar = $('span');
var p = $('p');

var width = bar.attr('style');
width = width.replace("width:", "");
width = width.substr(0, width.length-1);


var interval;
var start = 0; 
var end = parseInt(width);
var current = start;

var countUp = function() {
  current++;
  p.html(current + "%");
  
  if (current === end) {
    clearInterval(interval);
  }
};

interval = setInterval(countUp, (1000 / (end + 1)));