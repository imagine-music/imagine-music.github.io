var play_pause = 0;
var currentSong = 0;

function play() {
	play_pause++;

	if (play_pause == 1) {
		song.play();
		play_img.src = "images/player/pause.png";

		song.addEventListener("timeupdate", function() {
		var position = song.currentTime / song.duration;
		song_bar_progress.style.width = position * 100 + "%";
		})
	}

	else if (play_pause > 1) {
		play_pause = 0;
		song.pause();
		play_img.src = "images/player/play.png";
	}
}

function next() {
	if (currentSong < 6) {
		currentSong++;
		play_img.src = "images/player/pause.png";
	
		if (currentSong == 1) {
			song_name_text.innerHTML = "Rogue - Badlands";
			bg_img.src = "images/posters/rogue_badlands.jpg";
			main_img.src = "images/posters/rogue_badlands.jpg";
			song.src = "audios/songs/rogue_badlands.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 100 + "%";
			})

			play_pause++;
			song.play();
		}

		else if (currentSong == 2) {
			song_name_text.innerHTML = "Alan Walker - Faded";
			bg_img.src = "images/posters/alan_walker_faded.jpg";
			main_img.src = "images/posters/alan_walker_faded.jpg";
			song.src = "audios/songs/alan_walker_faded.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 100 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 3) {
			song_name_text.innerHTML = "Coopex - Over The Sun";
			bg_img.src = "images/posters/coopex_over_the_sun.jpg";
			main_img.src = "images/posters/coopex_over_the_sun.jpg";
			song.src = "audios/songs/coopex_over_the_sun.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 100 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 4) {
			song_name_text.innerHTML = "Marshmello - Imagine";
			bg_img.src = "images/posters/marshmello_imagine.jpg";
			main_img.src = "images/posters/marshmello_imagine.jpg";
			song.src = "audios/songs/marshmello_imagine.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 100 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 5) {
			song_name_text.innerHTML = "Elektronomia - Summersong 2018";
			bg_img.src = "images/posters/elektronomia_summersong_2018.jpg";
			main_img.src = "images/posters/elektronomia_summersong_2018.jpg";
			song.src = "audios/songs/elektronomia_summersong_2018.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 100 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 6) {
			song_name_text.innerHTML = "Glude - Breathe";
			bg_img.src = "images/posters/glude_breathe.jpg";
			main_img.src = "images/posters/glude_breathe.jpg";
			song.src = "audios/songs/glude_breathe.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 100 + "%";
			})
			
			play_pause++;
			song.play();
		}
	}
}

function prev() {
	if (currentSong >= 1) {
		currentSong--;
		play_img.src = "images/player/pause.png";
		
		if (currentSong == 0) {
			song_name_text.innerHTML = "Savoy - Let You Go";
			bg_img.src = "images/posters/savoy_let_you_go.jpg";
			main_img.src = "images/posters/savoy_let_you_go.jpg";
			song.src = "audios/songs/savoy_let_you_go.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 100 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 1) {
			song_name_text.innerHTML = "Rogue - Badlands";
			bg_img.src = "images/posters/rogue_badlands.jpg";
			main_img.src = "images/posters/rogue_badlands.jpg";
			song.src = "audios/songs/rogue_badlands.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 100 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 2) {
			song_name_text.innerHTML = "Alan Walker - Faded";
			bg_img.src = "images/posters/alan_walker_faded.jpg";
			main_img.src = "images/posters/alan_walker_faded.jpg";
			song.src = "audios/songs/alan_walker_faded.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 100 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 3) {
			song_name_text.innerHTML = "Coopex - Over The Sun";
			bg_img.src = "images/posters/coopex_over_the_sun.jpg";
			main_img.src = "images/posters/coopex_over_the_sun.jpg";
			song.src = "audios/songs/coopex_over_the_sun.mp3";
			play_img.src = "images/player/pause.png";
			
			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 100 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 4) {
			song_name_text.innerHTML = "Marshmello - Imagine";
			bg_img.src = "images/posters/marshmello_imagine.jpg";
			main_img.src = "images/posters/marshmello_imagine.jpg";
			song.src = "audios/songs/marshmello_imagine.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 100 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 5) {
			song_name_text.innerHTML = "Elektronomia - Summersong 2018";
			bg_img.src = "images/posters/elektronomia_summersong_2018.jpg";
			main_img.src = "images/posters/elektronomia_summersong_2018.jpg";
			song.src = "audios/songs/elektronomia_summersong_2018.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 100 + "%";
			})
			
			play_pause++;
			song.play();
		}
	}
}