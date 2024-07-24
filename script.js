document.addEventListener("DOMContentLoaded", function () {
    const videoPlayer = document.getElementById('videoPlayer');
    const videos = [
        'vids/vid4.mp4',
        'vids/vid5.mp4',
        'vids/vid1.mp4',
        'vids/vid6.mp4',
        'vids/vid8.mp4',
    ];
    let currentVideoIndex = 0;
    let videoTimeout;

    videoPlayer.addEventListener('play', function() {
        clearTimeout(videoTimeout); // Clear any existing timeout to avoid overlapping
        videoTimeout = setTimeout(fadeOutVideo, 5000); // 5000 ms = 5 seconds
    });

    videoPlayer.addEventListener('ended', playNextVideo, false);

    function fadeOutVideo() {
        videoPlayer.classList.add('fade-out');
        videoPlayer.addEventListener('transitionend', playNextVideo, { once: true });
    }

    function playNextVideo() {
        currentVideoIndex++;
        if (currentVideoIndex >= videos.length) {
            currentVideoIndex = 0; // Loop back to the first video if desired
        }
        videoPlayer.src = videos[currentVideoIndex];
        videoPlayer.classList.remove('fade-out');
        videoPlayer.addEventListener('canplay', function() {
            videoPlayer.play();
        }, { once: true });
    }

    videoPlayer.src = videos[currentVideoIndex]; // Start the first video
    videoPlayer.addEventListener('canplay', function() {
        videoPlayer.play();
    }, { once: true });
});

