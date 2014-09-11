// The root URL for the RESTful services
var rootURL = "https://api.themoviedb.org/3";
var keyAPI = "73d93a8edf384634a2c561159294fcf0";
var urlSearch = "/search/person?api_key="+keyAPI+"&query=";
var urlSearchByIdActor = "/person/{id}?api_key="+keyAPI;
var urlSearchMoviesActor = "/person/{id}/movie_credits?api_key="+keyAPI;


var currentActor;

//Fuction to search the actors by name
$(document).ready(function() {

	// Register listeners
	$('#btnSearch').click(function() {
		search($('#searchKey').val());
		return false;
	});

});


$('#btnSearch').click(function() {
	search($('#searchKey').val());
	return false;
});

//Event when press enter over the input type text
$('#searchKey').keypress(function(e){
	if(e.which == 13) {
		search($('#searchKey').val());
		e.preventDefault();
		return false;
    }
});

//Fuction to catch click event over some item from 
//the actor list
$('#actorList a').live('click', function() {
	$('#progressBar').show();
	findById($(this).data('identity'));
});

function search(searchKey) {
	$('#progressBar').show();
	if (searchKey == '' || searchKey == null){
		$('#progressBar').hide();
		alert("Please write a name to search!!");
	} else{
		findByName(searchKey);
	}
		
}

//Fuction to call the rest service to get
//the actor list by name
function findByName(searchKey) {
	console.log('findByName: ' + searchKey);
	$.ajax({
		type: 'GET',
		url: rootURL + urlSearch + searchKey,
		dataType: "json",
		success: renderList 
	});
}

//fuction to get the data's actor with his
//profile picture throught the id of actor
function findById(id) {
	console.log('findById: ' + id);
	$.ajax({
		type: 'GET',
		url: rootURL + urlSearchByIdActor.replace("{id}", id),
		dataType: "json",
		success: function(data){
			currentActor = data;
			renderDetails(currentActor);
			findMoviesByIdActor(currentActor.id);
		}
	});
}

//Fuction to get the movies´s actor through an id
function findMoviesByIdActor(id) {
	console.log('findMoviesByIdActor: ' + id);
	$.ajax({
		type: 'GET',
		url: rootURL + urlSearchMoviesActor.replace("{id}", id),
		dataType: "json",
		success: renderMoviesFromActor
	});
}

//Fuction to load the actors list that returns
//the rest service
function renderList(data) {
	
	var list = data == null ? [] : (data.results instanceof Array ? data.results : [data.results]);

	$('#actorList li').remove();
	
	if(list.length > 0){
		$.each(list, function(index, results) {
			$('#actorList').append('<li><a href="#" data-identity="' + results.id + '" class="list-group-item">'+results.name+'</a></li>');
		});
		$('#progressBar').hide();
		
	} else{
		$('#progressBar').hide();
		clearDetails();
		$('#moviesList table').remove();
		$('#moviesList li').remove();
		$('#pic').remove();
		alert("No results. Please try again!!");
	}
}

//Fuction to clear the element´s form
function clearDetails() {
	$('#name').text('');
	$('#birthday').text('');
	$('#place_of_birth').text('');
	$('#homepage').text('');
	$('#biography').text('');	
}

//Fuction to load the data´s actor in the form
function renderDetails(result) {
	$('#pic').remove();
	$('#name').text(result.name);
	$('#birthday').text(result.birthday);
	$('#place_of_birth').text(result.place_of_birth);
	$('#homepage').text(result.homepage == null || result.homepage == 'null' ? '' : result.homepage);
	$('#biography').text(result.biography);	
	$('<img id="pic" src="http://image.tmdb.org/t/p/w154/' + result.profile_path+'" onerror="picError(this);">').appendTo("#profilePicture");
}

//Function to load the movies´s actor in a table
function renderMoviesFromActor(data) {
	
	var list = data == null ? [] : (data.cast instanceof Array ? data.cast : [data.cast]);
	
	$('#tableMovies').hide();
	
	if(list.length > 0){
		
		//Sort by release date the movies
		list.sort(function(a, b){
    		var aDate = new Date(a.release_date);
  			var bDate = new Date(b.release_date); 
  			return aDate - bDate;
		});
		
		//Hide the message that indicates actor with out movies
		$('#messageMovies').hide();
		
		$('#tableMovies').show();
		
		//Remove the tr from the table
		$( "#tableMovies tr" ).each( function(){
  			this.parentNode.removeChild( this ); 
		});
		
		$.each(list, function(index, cast) {
		
			var table = $('#moviesFromActor');
			
			var releaseDate = cast.release_date == null || cast.release_date == '' ? 'No Data' : cast.release_date;
			
			//Append cells to table for each movie				
			table.append('<tr>' +
							'<td>' + 
								'<img src="http://image.tmdb.org/t/p/w154/'+cast.poster_path+'" onerror="imgError(this);"/>' +
							'</td>' +
							'<td>' +
								'<div class="list-group">' +
									'<h6>Original Title:</h6>' +
									'<h7 class="text-primary">'+ cast.original_title +'</h7>' +
									'<h6>Release Date: </h6>' +
									'<h7 class="text-primary">'+ releaseDate +'</h7>' +
								'</div>' +
							'</td>' +						
						'</tr>');		
		
		});
		
	} else{
		$('#messageMovies').text('');
		$('#messageMovies').show();
		$('#messageMovies').append('<p class="text-danger">Actor without Movies</p>');
	}
	
	$('#progressBar').hide();
}

//Fuction to manage the error when a movies doesn´t have
//a poster
function imgError(image) {
    image.onerror = "";
    image.src = "pics/posterNotAvailable.jpg";
    return true;
}

//Fuction to manage the error when a actor doesn´t have
//a profile picture
function picError(image) {
    image.onerror = "";
    image.src = "pics/NoAvailable2.jpg";
    return true;
}






