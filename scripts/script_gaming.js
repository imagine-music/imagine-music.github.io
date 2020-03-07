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

		if (song.ended && currentSong < 13) {
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
	if (currentSong <= 13) {
		currentSong++;
		play_img.src = "images/player/pause.png";

		site_bar.style.animation = "faded 1.5s infinite";
		main.style.animation = "faded 1.5s infinite";

		if (currentSong > 13) {
			currentSong = 0;
		}
	    
	    if (currentSong == 0) {
			song_name_text.innerHTML = "Max Brhon - Illusion";
			bg_img.src = "images/posters/max_brhon_illusion.jpg";
			main_img.src = "images/posters/max_brhon_illusion.jpg";
			song.src = "audios/gaming/max_brhon_illusion.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 13) {
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

			if (song.ended && currentSong < 13) {
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

			if (song.ended && currentSong < 13) {
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

			if (song.ended && currentSong < 13) {
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

			if (song.ended && currentSong < 13) {
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

			if (song.ended && currentSong < 13) {
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

			if (song.ended && currentSong < 13) {
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

			if (song.ended && currentSong < 13) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 8) {
			song_name_text.innerHTML = "Half an Orange, Ephixa - Time Travel Kool Aid";
			bg_img.src = "images/posters/half_an_orange_ephixa_time_travel_kool_aid.jpg";
			main_img.src = "images/posters/half_an_orange_ephixa_time_travel_kool_aid.jpg";
			song.src = "audios/gaming/half_an_orange_ephixa_time_travel_kool_aid.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 13) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 9) {
			song_name_text.innerHTML = "Ship Wrek & Zookeepers - Ark";
			bg_img.src = "images/posters/ship_wrek_zookeepers_ark.jpg";
			main_img.src = "images/posters/ship_wrek_zookeepers_ark.jpg";
			song.src = "audios/gaming/ship_wrek_zookeepers_ark.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 13) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 10) {
			song_name_text.innerHTML = "BURNS - When I'm Around U";
			bg_img.src = "images/posters/burns_when_im_around_u.jpg";
			main_img.src = "images/posters/burns_when_im_around_u.jpg";
			song.src = "audios/gaming/burns_when_im_around_u.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 13) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 11) {
			song_name_text.innerHTML = "INZO - Overthinker";
			bg_img.src = "images/posters/inzo_overthinker.jpg";
			main_img.src = "images/posters/inzo_overthinker.jpg";
			song.src = "audios/gaming/inzo_overthinker.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 13) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 12) {
			song_name_text.innerHTML = "Max Brhon - Cyberpunk";
			bg_img.src = "images/posters/max_brhon_cyberpunk.jpg";
			main_img.src = "images/posters/max_brhon_cyberpunk.jpg";
			song.src = "audios/gaming/max_brhon_cyberpunk.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 13) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 13) {
			song_name_text.innerHTML = "THYKIER - 51";
			bg_img.src = "images/posters/thykier_51.jpg";
			main_img.src = "images/posters/thykier_51.jpg";
			song.src = "audios/gaming/thykier_51.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong == 13) {
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
	if (currentSong >= 0) {
		currentSong--;
		play_img.src = "images/player/pause.png";

		site_bar.style.animation = "faded 1.5s infinite";
		main.style.animation = "faded 1.5s infinite";

		if (currentSong < 0) {
			currentSong = 12;
			next();
		}
		
		if (currentSong == 0) {
			song_name_text.innerHTML = "Max Brhon - Illusion";
			bg_img.src = "images/posters/max_brhon_illusion.jpg";
			main_img.src = "images/posters/max_brhon_illusion.jpg";
			song.src = "audios/gaming/max_brhon_illusion.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 13) {
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

			if (song.ended && currentSong < 13) {
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

			if (song.ended && currentSong < 13) {
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

			if (song.ended && currentSong < 13) {
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

			if (song.ended && currentSong < 13) {
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

			if (song.ended && currentSong < 13) {
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

			if (song.ended && currentSong < 13) {
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

			if (song.ended && currentSong < 13) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 8) {
			song_name_text.innerHTML = "Half an Orange, Ephixa - Time Travel Kool Aid";
			bg_img.src = "images/posters/half_an_orange_ephixa_time_travel_kool_aid.jpg";
			main_img.src = "images/posters/half_an_orange_ephixa_time_travel_kool_aid.jpg";
			song.src = "audios/gaming/half_an_orange_ephixa_time_travel_kool_aid.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 13) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 9) {
			song_name_text.innerHTML = "Ship Wrek & Zookeepers - Ark";
			bg_img.src = "images/posters/ship_wrek_zookeepers_ark.jpg";
			main_img.src = "images/posters/ship_wrek_zookeepers_ark.jpg";
			song.src = "audios/gaming/ship_wrek_zookeepers_ark.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 13) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 10) {
			song_name_text.innerHTML = "BURNS - When I'm Around U";
			bg_img.src = "images/posters/burns_when_im_around_u.jpg";
			main_img.src = "images/posters/burns_when_im_around_u.jpg";
			song.src = "audios/gaming/burns_when_im_around_u.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 13) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 11) {
			song_name_text.innerHTML = "INZO - Overthinker";
			bg_img.src = "images/posters/inzo_overthinker.jpg";
			main_img.src = "images/posters/inzo_overthinker.jpg";
			song.src = "audios/gaming/inzo_overthinker.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 13) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 12) {
			song_name_text.innerHTML = "Max Brhon - Cyberpunk";
			bg_img.src = "images/posters/max_brhon_cyberpunk.jpg";
			main_img.src = "images/posters/max_brhon_cyberpunk.jpg";
			song.src = "audios/gaming/max_brhon_cyberpunk.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";

			if (song.ended && currentSong < 13) {
			next();
			}
			})
			
			play_pause++;
			song.play();
		}
	}
}
