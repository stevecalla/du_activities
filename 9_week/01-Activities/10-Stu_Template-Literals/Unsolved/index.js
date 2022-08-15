// music should be an object with title, artist, and album properties
const music = {
  title: 'whatever',
  artist: 'whomever',
  songs: ['a', 'b', 'c', 'd']
};

// Write code between the backticks tags to output the data from the music object above.
const songSnippet = `The artist ${music.artist} made an album titled ${music.title} with several songs including ${music.songs[0]}, ${music.songs[1]}, ${music.songs[2]}, ${music.songs[3]}`;

console.log(songSnippet)

