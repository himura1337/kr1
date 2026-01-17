const tracks = [
    { name: "Electronic Beat", src: "assets/audio/track1.mp3" },
    { name: "Chill Jazz", src: "assets/audio/track2.mp3" }
];

let index = 0;
let playing = false;

const audio = document.getElementById("audio");
const trackName = document.getElementById("trackName");

function loadTrack() {
    audio.src = tracks[index].src;
    trackName.textContent = tracks[index].name;
}

function playPause() {
    if (playing) {
        audio.pause();
    } else {
        audio.play();
    }
    playing = !playing;
}

function nextTrack() {
    index = (index + 1) % tracks.length;
    loadTrack();
    audio.play();
    playing = true;
}

function prevTrack() {
    index = (index - 1 + tracks.length) % tracks.length;
    loadTrack();
    audio.play();
    playing = true;
}

loadTrack();