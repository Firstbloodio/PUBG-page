var $ = require('jquery');
require('../../tooltipster');

var teams = require('../data/teams.json');

var componentCreator = require('./components');


$(document).ready(function(){

    var mobileMenuOpen = false;

    /* setting state for mobile menu */

    if (mobileMenuOpen) {
        $(".mobile-menu").removeClass('hidden');
    } else {
        $(".mobile-menu").addClass('hidden');
    }

    $(".menu-lines").click(function() {
        if(!mobileMenuOpen) {
            $(".mobile-menu").removeClass('hidden');
            mobileMenuOpen = true;
        } else {
            $(".mobile-menu").addClass('hidden');
            mobileMenuOpen = false;
        }
    });

    $(window).scroll(function() {
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

            componentCreator.processTeams(teams);


            if (teams.length > 5) {
                var additional = teams.length - 5;
                $('.show-all').removeClass('hidden')
                    .text("Show all teams (+" + additional + ")")
                    .click(function() {
                        $('.close-show-all').removeClass('hidden');
                        $('.show-all').addClass('hidden');
                        componentCreator.processTeams(teams, true);
                        $('.participants').addClass('opened');
                    });

                $('.close-show-all').click(function() {
                    $('.show-all').removeClass('hidden');
                    $('.close-show-all').addClass('hidden');
                    componentCreator.processTeams(teams);
                    $('.participants').removeClass('opened');
                });
            }
        }
    }

    if (url === "/rules.html") {
    }
});


