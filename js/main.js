//////////////////////////////////////////////////////////////////////////
// CUSTOM SHIT HERE FOLKS //
/////////////////////////////////////////////////////////////////////////
$(window).load(function(){

	// remove unused stuff from DOM
	$('.sc-info, .sc-scrubber, .sc-artwork-list, .sc-info-toggle').remove();
	
	// add text to the beginning of each song
	$('.sc-trackslist li a').prepend('The VIA House Band - ');
	
	//drop in a div to house the current song title
	$('.sc-player').append('<div class = "current_song_title"></div>');
	
	//add number before each track instead of using an OL
	$( $('.sc-trackslist li a').get() ).each(function(i){
		if ( (i+1) <= 9 ) {
			$(this).prepend('<span class = "number">' + '0' + (i + 1) + '</span>');
		}else{
			$(this).prepend('<span class = "number">' + (i + 1) + '</span>');
		}
	});
	
	// capture the number of list items in the trackslist
	// capture the active song on load
	var tracklistLength = $('.sc-trackslist li').length,
		currentSong = $('.sc-trackslist li.active a').html();
		
	//set the current song title to the song that is active
	$('.current_song_title').html(currentSong);
	
	//set all list elements as not playing
	$('.sc-trackslist li').addClass('now_stopped');	
	
	
	// stuff that happens when you click on a song title
	$('.sc-trackslist li').click(function(){
		
		// capture the number of the song that is clicked
		// capture the current song title and the classes of the link we click on
		var songNumber = $(this).find('.number').html(),
			currentSong = $(this).find('a').html();
							
		//drop song title into the current song title div		
		$('.current_song_title').html(currentSong);
		
		//depending on the class that the link has either show the play or pause button
		if ( $(this).hasClass('now_stopped') ) {
			$('.sc-trackslist li').removeClass('now_playing').addClass('now_stopped');
			$(this).removeClass('now_stopped').addClass('now_playing');
			console.log('clicked now_stopped')
		}
		
		else if ( $(this).hasClass('now_playing') ) {
			$(this).removeClass('now_playing').addClass('now_stopped');
			console.log('clicked now_playing')
		}
		
		// deactivate the next and preious buttons when on the first and last song	
		if ( songNumber == tracklistLength) {
			$('.sc-next').addClass('disabled');
			$('.sc-previous').removeClass('disabled');
		} else if (songNumber == 1) {
			$('.sc-previous').addClass('disabled')
			$('.sc-next').removeClass('disabled');
		} else {
			$('.sc-next').removeClass('disabled');
			$('.sc-previous').removeClass('disabled');
		}
				
	});			
	
	
	// Activate the next and previous buttons
	$('.sc-next').click(function(){
		$('.active').next().click();
	});
	
	$('.sc-previous').click(function(){
		$('.active').prev().click();
	});
	
});
