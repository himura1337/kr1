const tracks = [
    { name: "Electronic Mood", src: "assets/audio/track1.mp3" },
    { name: "Jazz Night", src: "assets/audio/track2.mp3" }
];

let index = 0;
let isPlaying = false;

const audio = document.getElementById("audio");
const trackName = document.getElementById("track-name");

function loadTrack(i) {
    audio.src = tracks[i].src;
    trackName.textContent = tracks[i].name;
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
}

function nextTrack() {
    index = (index + 1) % tracks.length;
    loadTrack(index);
    audio.play();
    isPlaying = true;
}

function prevTrack() {
    index = (index - 1 + tracks.length) % tracks.length;
    loadTrack(index);
    audio.play();
    isPlaying = true;
}

loadTrack(index);
