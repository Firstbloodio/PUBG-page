var $ = require('jquery');
var teams = require('../data/teams.json');


module.exports = componentsCreator = {

    processTeams: function (teams, max, showedTeams) {

        $('.participants').empty();

        var end = showedTeams;

        if (max) {
            end = teams.length;
        }

        teams.forEach(function (team, index) {
            if (index < end) {
                $('.participants')
                    .append(' <div class="team">\n' +
                        '                    <img src="'+team.link+'" class="team-logo">\n' +
                        '                    <div class="team-name">' + team.name + '</div>\n' +
                        '                </div>')
            }
        });


    }
};



