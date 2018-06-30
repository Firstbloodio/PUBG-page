var $ = require('jquery');

module.exports = ladderData = {
  getData: function (id) {
    const headers = new Headers({
      'Access-Control-Allow-Origin':'*',
      'Authorization': 'Bearer eh4Ffs-TzraPRkIoNocoqKUFIpCV4GLjOuBfrMA5'
    });
    
    fetch('https://api.mainline.gg/v1/events/scores-by-event?id='+ id,
      { 
        mode: 'cors',
        headers: headers
      })
      .then(
        function(res) {
          if (res.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              res.status);
            return;
          }
          res.json().then(function(data) {
            ladderData.render(data);
            ladderData.addEvents();            
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  },

  render: function(teams) {
    $('.ladder__body').empty();

    teams.forEach(function (team, index) {
      $('.ladder__body').append(
        `<div id=${'ladder__' + (index + 1)} class="ladder__item">
        <div class="ladder__row">
          <div><span class="ladder__index">${index + 1}</span></div>
          <div class="ladder__team">
            <img class="ladder__image" src=${team.image_url} alt="" />
            <span>${team.name}</span>
          </div>
          <span>${team.kills}</span>
          <span>${team.score}</span>
          <span>
            <a href="#" id=${index + 1} class="ladder__trigger">
              <i class="arrow"></i>
            </a>
          </span>          
        </div>
        <div class="ladder__players">
          ${team.teamPlayers.map((player, index) => {
            return `<div class="ladder__player">
                <span></span>
                <div class="ladder__team">
                  <img class="ladder__image" src=${player.avatar_url} alt="" />
                  <span>${player.username}</span>
                </div>
                <span>${player.kills}</span>
                <span></span>
                <span></span>
              </div>`
            }
            ).join('')}
          </div>
        </div>`
      )

    })
  },

  addEvents: function () {
   $('.ladder__trigger').on('click', function(event) {
      event.preventDefault();
      if ( $('#ladder__'+ (this.id)).hasClass('active') ) {
        $('.ladder__item').removeClass('active');            
      } else {
        $('.ladder__item').removeClass('active');            
        $('#ladder__'+ (this.id)).addClass('active');
      }        
    });
  }
}
