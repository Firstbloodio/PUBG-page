var $ = require('jquery');
require('../../tooltipster');

var teams = require('../data/teams.json');
var res = require('../data/ladder.json');

var componentCreator = require('./components');
var ladderData = require('./ladder');

$(document).ready(function () {

    var $window = $(window);

    var onMobile;
    var onTablet;

    function checkWidth() {
        var windowsize = screen.width;
        if (windowsize <= 767) {
            onMobile = true;
            onTablet = false;
        } else if (windowsize <= 1024) {
            onMobile = false;
            onTablet = true;
        } else {
            onTablet = false;
            onMobile = false;
        }
    }

    ladderData.getData(6565);
    window.setInterval(function(){
        ladderData.getData(6565);
    }, 12000);
    

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

    if (onMobile) {

        $('.site-link-mobile').removeClass('hidden');
        $('.footer-info').removeClass('fix-position');
    }

    if (onTablet) {
        console.log('ontablet');
        $('.footer-info').addClass('hidden');
        $('.footer-info-tablet-layout').removeClass('hidden');
        $('.footer-info').removeClass('fix-position');
    }

    var mobileMenuOpen = false;

    /* setting state for mobile menu */

    if (mobileMenuOpen) {
        $(".mobile-menu").removeClass('hidden');
    } else {
        $(".mobile-menu").addClass('hidden');
    }

    $(".menu-lines").click(function () {
        if (!mobileMenuOpen) {
            $(".mobile-menu").removeClass('hidden');
            mobileMenuOpen = true;
        } else {
            $(".mobile-menu").addClass('hidden');
            mobileMenuOpen = false;
        }
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 25) {
            $(".banner").addClass("dark");
        } else {
            $(".banner").removeClass("dark");
        }
    });

    var url = window.location.pathname;
    var loc = window.location.hash;

    if (url === "/index.html" || loc === "") {

        if (teams.length > 0) {
            $('.no-team').addClass('hidden');


            if (onMobile) {
                $('.title').removeClass('hidden');
            }

            componentCreator.processTeams(teams, false, teams.length);
        }
    }

    if (url === "/rules.html") {
    }
});


