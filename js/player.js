// Масив треків
const tracks = [
    { name: "Pop", src: "assets/audio/track1.mp3" },
    { name: "Classical music", src: "assets/audio/track2.mp3" }
   

];

let currentIndex = 0;
let isPlaying = false;

const audio = document.getElementById("audio");
const trackName = document.getElementById("trackName");

// Завантаження треку
function loadTrack() {
    audio.src = tracks[currentIndex].src;
    trackName.textContent = tracks[currentIndex].name;
}

// Play / Pause
function playPause() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
}

// Наступний трек
function nextTrack() {
    currentIndex = (currentIndex + 1) % tracks.length;
    loadTrack();
    audio.play();
    isPlaying = true;
}

// Попередній трек
function prevTrack() {
    currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    loadTrack();
    audio.play();
    isPlaying = true;
}

// Автоматичне завантаження першого треку
loadTrack();
