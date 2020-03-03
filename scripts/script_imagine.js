var play_pause = 0;
var currentSong = 0;

function play() {
	play_pause++;

	if (play_pause == 1) {
		song.play();
		play_img.src = "images/player/pause.png";

		song.addEventListener("timeupdate", function() {
		var position = song.currentTime / song.duration;
		song_bar_progress.style.width = position * 92 + "%";

		if (song.ended && currentSong < 9) {
		next();
		}
		})

		site_bar.style.animation = "faded 1.5s infinite";
		main.style.animation = "faded 1.5s infinite";
	}

	else if (play_pause > 1) {
		play_pause = 0;
		song.pause();
		play_img.src = "images/player/play.png";

		site_bar.style.animation = "paused";
		main.style.animation = "paused";
	}
}

function next() {
	if (currentSong < 9) {
		currentSong++;
		play_img.src = "images/player/pause.png";

		site_bar.style.animation = "faded 1.5s infinite";
		main.style.animation = "faded 1.5s infinite";
	
		if (currentSong == 1) {
			song_name_text.innerHTML = "Rogue - Badlands";
			bg_img.src = "images/posters/rogue_badlands.jpg";
			main_img.src = "images/posters/rogue_badlands.jpg";
			song.src = "audios/songs/rogue_badlands.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
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
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
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
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
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
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
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
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
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
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 7) {
			song_name_text.innerHTML = "Tobu & Syndec - Dusk";
			bg_img.src = "images/posters/tobu_syndec_dusk.jpg";
			main_img.src = "images/posters/tobu_syndec_dusk.jpg";
			song.src = "audios/songs/tobu_syndec_dusk.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 8) {
			song_name_text.innerHTML = "MOGUAI feat. CHEAT CODES - Hold On";
			bg_img.src = "images/posters/moguai_feat_cheat_codes_hold_on.jpg";
			main_img.src = "images/posters/moguai_feat_cheat_codes_hold_on.jpg";
			song.src = "audios/songs/moguai_feat_cheat_codes_hold_on.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 9) {
			song_name_text.innerHTML = "Galantis - Runaway (U & I)";
			bg_img.src = "images/posters/galantis_runaway_u_&_i.jpg";
			main_img.src = "images/posters/galantis_runaway_u_&_i.jpg";
			song.src = "audios/songs/galantis_runaway_u_&_i.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
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

		site_bar.style.animation = "faded 1.5s infinite";
		main.style.animation = "faded 1.5s infinite";
		
		if (currentSong == 0) {
			song_name_text.innerHTML = "Savoy - Let You Go";
			bg_img.src = "images/posters/savoy_let_you_go.jpg";
			main_img.src = "images/posters/savoy_let_you_go.jpg";
			song.src = "audios/songs/savoy_let_you_go.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
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
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
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
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
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
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
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
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
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
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
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
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 7) {
			song_name_text.innerHTML = "Tobu & Syndec - Dusk";
			bg_img.src = "images/posters/tobu_syndec_dusk.jpg";
			main_img.src = "images/posters/tobu_syndec_dusk.jpg";
			song.src = "audios/songs/tobu_syndec_dusk.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 8) {
			song_name_text.innerHTML = "MOGUAI feat. CHEAT CODES - Hold On";
			bg_img.src = "images/posters/moguai_feat_cheat_codes_hold_on.jpg";
			main_img.src = "images/posters/moguai_feat_cheat_codes_hold_on.jpg";
			song.src = "audios/songs/moguai_feat_cheat_codes_hold_on.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 9) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}
	}
}
