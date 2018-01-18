var $ = require('jquery');
var teams = require('../data/teams.json');


module.exports = componentsCreator = {

    processTeams: function (teams, max) {

        $('.participants').empty();

        var end = 5;

        if (max) {
            end = teams.length;
        }

        teams.forEach(function (team, index) {
            if (index < end) {
                $('.participants')
                    .append(' <div class="team">\n' +
                        '                    <div class="team-logo"></div>\n' +
                        '                    <div class="team-name">' + team.name + '</div>\n' +
                        '                </div>')
            }
        });


    }
};



