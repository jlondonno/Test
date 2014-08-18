// The root URL for the RESTful services
var rootURL = "https://api.themoviedb.org/3";
var keyAPI = "73d93a8edf384634a2c561159294fcf0";
var urlSearch = "/search/person?api_key="+keyAPI+"&query=";
var urlSearchByIdActor = "/person/{id}?api_key="+keyAPI;
var urlSearchMoviesActor = "/person/{id}/movie_credits?api_key="+keyAPI;


var currentActor;

$(document).ready(function() {

	// Register listeners
	$('#btnSearch').click(function() {
		search($('#searchKey').val());
		return false;
	});

});


// Register listeners
$('#btnSearch').click(function() {
	search($('#searchKey').val());
	return false;
});

// Trigger search when pressing 'Return' on search key input field
$('#searchKey').keypress(function(e){
	if(e.which == 13) {
		search($('#searchKey').val());
		e.preventDefault();
		return false;
    }
});

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


function findByName(searchKey) {
	console.log('findByName: ' + searchKey);
	$.ajax({
		type: 'GET',
		url: rootURL + urlSearch + searchKey,
		dataType: "json",
		success: renderList 
	});
}

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

function findMoviesByIdActor(id) {
	console.log('findMoviesByIdActor: ' + id);
	$.ajax({
		type: 'GET',
		url: rootURL + urlSearchMoviesActor.replace("{id}", id),
		dataType: "json",
		success: renderMoviesFromActor
	});
}

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

function clearDetails() {
	$('#name').text('');
	$('#birthday').text('');
	$('#place_of_birth').text('');
	$('#homepage').text('');
	$('#biography').text('');	
}

function renderDetails(result) {
	$('#pic').remove();
	$('#name').text(result.name);
	$('#birthday').text(result.birthday);
	$('#place_of_birth').text(result.place_of_birth);
	$('#homepage').text(result.homepage == null || result.homepage == 'null' ? '' : result.homepage);
	$('#biography').text(result.biography);	
	$('<img id="pic" src="http://image.tmdb.org/t/p/w154/' + result.profile_path+'" onerror="picError(this);">').appendTo("#profilePicture");
}

function renderMoviesFromActor(data) {
	
	var list = data == null ? [] : (data.cast instanceof Array ? data.cast : [data.cast]);
	
	$('#moviesList table').remove();
	$('#moviesList li').remove();
	
	if(list.length > 0){
		
		//Sort by release date
		list.sort(function(a, b){
    		var aDate = new Date(a.release_date);
  			var bDate = new Date(b.release_date); 
  			return aDate - bDate;
		});
		
		//$('#moviesList').append('<table class="table table-striped table-hover" border="1">');
		
		
		$.each(list, function(index, cast) {
		
		
		
		
		/*$('#moviesList').append(
				'<table class="table table-striped table-hover">' +
				'<tr>' +
					'<td rowspan=2 width="50px" align="center">' + 
						'<img src="http://image.tmdb.org/t/p/w154/'+cast.poster_path+'" height="150" onerror="imgError(this);"/>' +
					'</td>' +
					'<td class="info" width="100px">' +
						'Original Title: ' +
					'</td>' +
					'<td width="100px">' +
						cast.original_title +
					'</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="info" width="100px">' +
						'Release Date: ' +
					'</td>' +
					'<td width="100px">' +
						cast.release_date +
					'</td>' +
				'</tr>'	+
				'</table>'				
			);
			*/
		});
		
		
		//$('#moviesList').append('</table>');
	} else{
		$('#moviesList').append('<li><h3>Actor without Movies</h3></li>');
	}
	
	$('#progressBar').hide();
}

function imgError(image) {
    image.onerror = "";
    image.src = "pics/posterNotAvailable.jpg";
    return true;
}

function picError(image) {
    image.onerror = "";
    image.src = "pics/NoAvailable2.jpg";
    return true;
}






