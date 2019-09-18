var duration = 200;
var switchDur = duration*.8; 


function vertAlign () {
    
    var FPbanner = $("FPbanner");
    var FPbannerText = $('FPbannerText');
    
    var bannerHeight = FPbanner.offsetHeight;
    var textHeight = FPbannerText.offsetHeight;
    var topMarg = (bannerHeight - textHeight) / 1.8;

    FPbannerText.style.top = topMarg+'px';
}  

function logoMargin() {
    var w = $(window).innerWidth;
    var logo = $('phone-logo');
    if (w > 490) {
        logo.style.marginBottom = '-40px';
    } else {
        logo.style.marginBottom = '0px';
    }
}


if (window.addEventListener) // W3C standard
{
  window.addEventListener('load', vertAlign, false); // NB **not** 'onload'
  window.addEventListener('load', logoMargin, false); // NB **not** 'onload'
  window.addEventListener('resize', vertAlign, false); // NB **not** 'onload'
  window.addEventListener('resize', logoMargin, false); // NB **not** 'onload'
  
} 
else if (window.attachEvent) // Microsoft
{
    window.attachEvent('onload', vertAlign);
    window.attachEvent('onload', logoMargin);
    window.attachEvent('resize', vertAlign);
    window.attachEvent('resize', logoMargin);
  
}



//
//
////var SCswitcher = setInterval(function(){ goToNextSlide(); }, 7000);  
////
//function toggleOpacity(activeSlide,nextSlide) {  
//    fadeOut(activeSlide, duration);
//    setTimeout( function(){fadeIn(nextSlide, duration)}, switchDur ); 
//}
//
//
//
//
//
//
////function playSwitcher() {  
////    SCswitcher = setInterval(function(){ goToNextSlide(); }, 7000);
////    alert('play');
////    return false;
////}
////
////function pauseSwitcher() {  
////    clearInterval(SCswitcher);
////    alert('paused');
////    return false;
////}
//
//
//function goToNextSlide () {
//    
//    var LPSlides = $$('div[class=LP-top-banner]'); 
//    //var LPSlides = LPSlidesCont.getElementsByTagName('div');
//     
//    var LPNavCont = document.getElementById('LPNavigation');
//    
//    var LPNavIcons = LPNavCont.getElementsByTagName('a');
//    
//    
//    var activeSlide = '';
//    
//    for(i=0;i<LPSlides.length;i++){
//        
//        if (LPSlides[i].style.opacity == 1) {
//            activeSlide = LPSlides[i];
//        } 
//        if (LPNavIcons[i].className == 'active') {
//            var activeNav = LPNavIcons[i];
//        }
//    }
//        
//    nextSlideNum = parseInt(activeSlide.id.replace("LPSlide",""))+1;
//    if (nextSlideNum <= LPSlides.length) {
//        nextSlideId = "LPSlide"+nextSlideNum; 
//        nextNavId = "LPNav"+nextSlideNum;
//    } else { 
//        nextSlideId = "LPSlide1";
//        nextNavId = "LPNav1";
//    }
//    var nextSlide = document.getElementById(nextSlideId);
//    var nextNav = document.getElementById(nextNavId);
//    toggleOpacity(activeSlide, nextSlide);
//    toggleNav(activeNav, nextNav);
//}
//
//function toggleNav(activeNav,nextNav) {  
//    
//    $(activeNav).morph({paddingTop: 0, backgroundColor: "#9f2d20"});
//    $(nextNav).morph({paddingTop: 3, backgroundColor: "#ffffff"});
//      
//    activeNav.className = "";
//    nextNav.className = "active"; 
//    
//}
//
//function goToASlide (aSlide) {
//    
//    var LPSlides = $$('div[class=LP-top-banner]'); 
//    
//    var LPNavIcons = document.getElementById('LPNavigation').getElementsByTagName('a');
//    
//    for(i=0;i<LPSlides.length;i++){
//        if (LPSlides[i].style.opacity == 1) {
//            var activeSlide = LPSlides[i];
//        } 
//        if (LPNavIcons[i].className == 'active') {
//            var activeNav = LPNavIcons[i];
//        }   
//    }
//    
//    
//    var nextSlideId = aSlide;
//    if (activeSlide) {
//        if (activeSlide.id != nextSlideId) {
//    
//            var nextSlide = document.getElementById(nextSlideId); 
//            nextSlideNum = parseInt(nextSlideId.replace("LPSlide",""));
//            nextNavId = "LPNav"+nextSlideNum;
//            var nextNav = document.getElementById(nextNavId);
//            toggleOpacity(activeSlide, nextSlide);
//            toggleNav(activeNav, nextNav);
//            clearInterval(SCswitcher);
//            SCswitcher = setInterval(function(){ goToNextSlide(); }, 7000);
//        }
//    }
//    
//}
//
//
//function fadeIn(el, duration) { 
//    el.style.display = 'block';
//    fadeObject(el, 0, 1, duration);
//    
//}
// 
//function fadeOut(el, duration) {
//    fadeObject(el, 1, 0, duration);
//    setTimeout( function(){el.style.display = 'none';}, duration );
//    
//}
// 
//function fadeObject(el, start, end, duration) { 
//    
//    var range = end - start;
//    var goingUp = end > start;
//    var steps = duration / 20;   // arbitrarily picked 20ms for each step 
//    var increment = range / steps;
//    var current = start;
//    var more = true;
//    function next() {
//        current = current + increment;
//        if (goingUp) {
//            if (current >= end) {
//                current = end;
//                more = false;
//            }
//        } else {
//            if (current <= end) {
//                current = end;
//                more = false;
//            }
//        }
//        el.style.opacity = current;
//        el.style.filter = 'alpha(opacity = '+ current*100 + ')';
//        
//        
//        if (more) {
//            setTimeout(next, 20); 
//        }
//    }
//    next();
//}
//
//
