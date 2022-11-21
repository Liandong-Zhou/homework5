// Add js here.

// reference: https://www.w3schools.com/tags/av_met_load.asp
const video = document.getElementById('videoplayer');
video.loop = false;
video.autoplay = false;
video.load();


// play, pause, speedup, slowdown, skip 
const playButton = document.getElementById('play');
playButton.addEventListener("click", function() {
    video.play(); 
});

const pauseButton = document.getElementById('pause');
pauseButton.addEventListener("click", function() {
    video.pause(); 
});

const slowdownButton = document.getElementById('slower');
slowdownButton.addEventListener("click", function() {
    if (video.playbackRate != 0.5) {
        video.playbackRate = video.playbackRate * 1/2 ;
    }
    else {
        alert("Video is at slowest speed!");
    }
});

const speedupButton = document.getElementById('faster');
speedupButton.addEventListener("click", function() {
    if (video.playbackRate != 2) {
        video.playbackRate = video.playbackRate * 2 ;
    }
    else {
        alert("Video is at fastest speed!");
    }
});

const skipButton = document.getElementById('skip')
skipButton.addEventListener("click", function() {
    video.currentTime += 15;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
})

//mute, volume slider
const muteButton = document.getElementById('mute');
mute.addEventListener('click', function() {
    if (video.muted == true) {
        video.muted = false;
        muteButton.textContent = 'Mute';
    } 
    else {
        video.muted = true;
        muteButton.textContent = 'Unmute';
    }
});

//reference: https://www.w3schools.com/howto/howto_js_rangeslider.asp
let volumeSlider = document.getElementById('slider');
let volumetext = document.getElementById('volume');

volumetext.innerHTML = volumeSlider.value; 

volumeSlider.oninput = function() {
    volumetext.innerHTML = this.value;
    video.volume = this.value / 100;
    if (video.volume == 0) {
        video.muted = true;
        muteButton.textContent = 'Unmute';
    } 
    else {
        video.muted = false;
        muteButton.textContent = 'Mute';
    }
    volumetext.innerHTML = video.volume * 100 + "%";
}
