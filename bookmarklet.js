var link = document.createElement('link');
link.setAttribute('rel', 'import');
link.setAttribute('href', 'https://cdn.rawgit.com/franzwilding/cast-video-player/master/cast-control.html');
document.body.appendChild(link);
window.chromeCastAlreadyLoaded = true;
e = document.createElement('script'); e.src = 'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.22/webcomponents-lite.min.js'; document.body.appendChild(e);
e = document.createElement('cast-control'); document.body.appendChild(e);
e.createVideoPlayButtons();
