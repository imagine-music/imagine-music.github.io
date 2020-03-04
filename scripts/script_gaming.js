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

		if (song.ended && currentSong < 7) {
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
	if (currentSong < 7) {
		currentSong++;
		play_img.src = "images/player/pause.png";

		site_bar.style.animation = "faded 1.5s infinite";
		main.style.animation = "faded 1.5s infinite";
	    
	    if (currentSong == 0) {
			song_name_text.innerHTML = "Max Brhon - Illusion";
			bg_img.src = "images/posters/max_brhon_illusion.jpg";
			main_img.src = "images/posters/max_brhon_illusion.jpg";
			song.src = "audios/gaming/max_brhon_illusion.mp3";
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
			song_name_text.innerHTML = "Spektrem - Shine";
			bg_img.src = "images/posters/spektrem_shine.jpg";
			main_img.src = "images/posters/spektrem_shine.jpg";
			song.src = "audios/gaming/spektrem_shine.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 7) {
			next();
			}
			})

			play_pause++;
			song.play();
		}

		else if (currentSong == 2) {
			song_name_text.innerHTML = "DNMO, Sub Urban - Sick Of You";
			bg_img.src = "images/posters/dnmo_sub_urban_sick_of_you.jpg";
			main_img.src = "images/posters/dnmo_sub_urban_sick_of_you.jpg";
			song.src = "audios/gaming/dnmo_sub_urban_sick_of_you.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 7) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 3) {
			song_name_text.innerHTML = "Gunnar Olsen - First To Last";
			bg_img.src = "images/posters/gunnar_olsen_first_to_last.jpg";
			main_img.src = "images/posters/gunnar_olsen_first_to_last.jpg";
			song.src = "audios/gaming/gunnar_olsen_first_to_last.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 7) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 4) {
			song_name_text.innerHTML = "THYKIER - THE LIMIT";
			bg_img.src = "images/posters/thykier_the_limit.jpg";
			main_img.src = "images/posters/thykier_the_limit.jpg";
			song.src = "audios/gaming/thykier_the_limit.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 7) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 5) {
			song_name_text.innerHTML = "Jauz & Ephwurd - Rock The Party";
			bg_img.src = "images/posters/jauz_ephwurd_rock_the_party.jpg";
			main_img.src = "images/posters/jauz_ephwurd_rock_the_party.jpg";
			song.src = "audios/gaming/jauz_ephwurd_rock_the_party.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 7) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 6) {
			song_name_text.innerHTML = "More Plastic - Champion";
			bg_img.src = "images/posters/more_plastic_champion.jpg";
			main_img.src = "images/posters/more_plastic_champion.jpg";
			song.src = "audios/gaming/more_plastic_champion.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 7) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 7) {
			song_name_text.innerHTML = "K-391 - Sky";
			bg_img.src = "images/posters/k_391_sky.jpg";
			main_img.src = "images/posters/k_391_sky.jpg";
			song.src = "audios/gaming/k_391_sky.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong == 7) {
			currentSong = -1;
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
			song_name_text.innerHTML = "Max Brhon - Illusion";
			bg_img.src = "images/posters/max_brhon_illusion.jpg";
			main_img.src = "images/posters/max_brhon_illusion.jpg";
			song.src = "audios/gaming/max_brhon_illusion.mp3";
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
			song_name_text.innerHTML = "Spektrem - Shine";
			bg_img.src = "images/posters/spektrem_shine.jpg";
			main_img.src = "images/posters/spektrem_shine.jpg";
			song.src = "audios/gaming/spektrem_shine.mp3";
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
			song_name_text.innerHTML = "DNMO, Sub Urban - Sick Of You";
			bg_img.src = "images/posters/dnmo_sub_urban_sick_of_you.jpg";
			main_img.src = "images/posters/dnmo_sub_urban_sick_of_you.jpg";
			song.src = "audios/gaming/dnmo_sub_urban_sick_of_you.mp3";
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
			song_name_text.innerHTML = "Gunnar Olsen - First To Last";
			bg_img.src = "images/posters/gunnar_olsen_first_to_last.jpg";
			main_img.src = "images/posters/gunnar_olsen_first_to_last.jpg";
			song.src = "audios/gaming/gunnar_olsen_first_to_last.mp3";
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
			song_name_text.innerHTML = "THYKIER - THE LIMIT";
			bg_img.src = "images/posters/thykier_the_limit.jpg";
			main_img.src = "images/posters/thykier_the_limit.jpg";
			song.src = "audios/gaming/thykier_the_limit.mp3";
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
			song_name_text.innerHTML = "Jauz & Ephwurd - Rock The Party";
			bg_img.src = "images/posters/jauz_ephwurd_rock_the_party.jpg";
			main_img.src = "images/posters/jauz_ephwurd_rock_the_party.jpg";
			song.src = "audios/gaming/jauz_ephwurd_rock_the_party.mp3";
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
			song_name_text.innerHTML = "More Plastic - Champion";
			bg_img.src = "images/posters/more_plastic_champion.jpg";
			main_img.src = "images/posters/more_plastic_champion.jpg";
			song.src = "audios/gaming/more_plastic_champion.mp3";
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
