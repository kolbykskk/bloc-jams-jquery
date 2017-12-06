class Helper {
  playPauseAndUpdate (song) {
    player.playPause(song);
    if(song === undefined) {
      var totalTime = player.getDuration();
    } else {
      var totalTime = song.duration;
    }
    var totalTimeInSeconds = player.prettyTime(totalTime);
    $('#time-control .total-time').text(totalTimeInSeconds);
  }
}

const helper = new Helper();
