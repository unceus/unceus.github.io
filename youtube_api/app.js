var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '390',
    width: '640',
    videoId: 'Cym4TZwTCNU',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

var onPlayerReady = function() {
  addText('Player API started.');
}

var onPlayerStateChange = function(evt) {
  var state;
  if (evt) {
    console.log(evt.data);
    console.log(evt.data == 1);
    switch (evt.data) {
      case -1:
        state = 'not started yet';
        break;
      case 5:
        state = 'ready to be played';
        break;
      case 3:
        state = 'loading';
        break;
      case 1:
        state = 'started playing';
        break;
      case 0:
        state = 'stopped';
        break;
      case 2:
        state = 'paused';
        break;
    }

    addText(`Player ${state}`);
  }
}

var addText = function(text) {
  el = document.createElement('li');
  el.innerHTML = text;
  document.getElementById('details').appendChild(el);
}
