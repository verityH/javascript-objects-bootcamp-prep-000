var playlist = { Avantasia: "The Glory of Rome"};

function updatePlaylist(playlist, artistName, songTitle) {
<<<<<<< HEAD
  Object.assign(playlist, {[artistName]: songTitle});
  return playlist;
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
=======
  return playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
>>>>>>> 719366828d7141a9174a2d5da4450149833292e3
  return playlist;
}