var link = document.createElement('link');
link.setAttribute('rel', 'import');
link.setAttribute('href', 'https://rawgit.com/franzwilding/cast-video-player/master/cast-control.html');
document.body.appendChild(link);
window.chromeCastAlreadyLoaded = true;
e = document.createElement('script'); e.src = 'https://cdn.rawgit.com/webcomponents/webcomponentsjs/master/webcomponents-lite.js'; document.body.appendChild(e);
e = document.createElement('cast-control');
e.addEventListener("load", function(event) { e.createVideoPlayButtons(); });
document.body.appendChild(e);
