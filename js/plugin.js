/*global $,alert ,console, jquery */

$(document).ready(function () {
    
    'use strict';
    
    //Active Navbar
    
    $('.navbar ul li').click(function () {
        
        $(this).addClass('active').siblings().removeClass('active');
        
    });
    
    //Nice Scroll
    
    $('.menu').niceScroll({
        
        cursorcolor: '#b4b7b6',
        cursorwidth: '5px',
        cursorborder: '1px solid #b4b7b6'
        
    });
    
    $('html').niceScroll({
        
        cursorcolor: '#b4b7b6',
        cursorwidth: '5px',
        cursorborder: '1px solid #b4b7b6'
        
    });
    
    
    //Resize menu
    
    $('.menu').height($(window).resize());
    
    $(window).resize(function (){
        
        $('.menu').height($(window).resize());
        
    });
    
});