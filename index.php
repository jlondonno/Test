<!DOCTYPE HTML>
<html>
<head>
<title>.:: The Movies Store ::.</title>
	<link rel="stylesheet" href="css/styles.css" />
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<script src="js/jquery-1.7.1.min.js"></script>
	<script src="js/main.js"></script>
	<script src="js/bootstrap.min.js"></script>	
</head>

<body>
	
  		<div class="jumbotron">
  			<h3>..:: The Movies Store ::..</h3>
  			
  			<div class="navbar navbar-default" id="header">
			  <div class="navbar-collapse collapse navbar-responsive-collapse">
				<form class="navbar-form navbar-left">
				  <input type="text" id="searchKey" class="form-control col-lg-8" placeholder="Search">
				  <a href="#" style="position: absolute; left:230px;" class="btn btn-primary" id="btnSearch">Search</a>
				  <h4 style="margin-left:300px;">Please write a name of actor to search</h4>
				  <progress id="progressBar" value="80" max="100" style="display: none; left:680px; margin-top: 1px; width: 1000px; heigth: 50px"></progress>  
				</form>
			  </div>
			</div>
  			
  			<table class="table table-striped table-hover">
  				<tr class="active">
  					<td width="200px">
  						
						<div class="panel panel-primary scrollablePanel">
						  <div class="panel-heading">
							<h3 class="panel-title">Actor List</h3>
						  </div>
						  <div class="panel-body ">
						  	
						   	<div class="list-group">
						   		<ul id="actorList"></ul>						   		
							</div>
						  								
						  </div>
						</div>
  					</td>
  					<td>
  					
  						<div class="panel panel-primary">
						  <div class="panel-heading">
							<h3 class="panel-title">Actor Information</h3>
						  </div>
						  <div class="panel-body">
						  	
						   	<div class="list-group">
						   	
						   		<div id="profilePicture">
						  			<img id="pic"/>
						  		</div>						  		
						  		
								<div>
									<label>Name:</label>
									<p class="text-primary" id="name" name="name"></p>
								</div>
								<div>
									<label>Birthday:</label>
									<p class="text-primary" id="birthday" name="birthday"></p>
								</div>
								<div>
									<label>Place of Birth:</label>
									<p class="text-primary" id="place_of_birth" name="place_of_birth"></p>
								</div>
								<div>
									<label>Death day:</label>
									<p class="text-primary" id="deathday" name="deathday"></p>
								</div>
								<div>
									<label>Homepage:</label>
									<p class="text-primary" id="homepage" name="homepage"></p>
								</div>
								<div>
									<label>Biography:</label>
									<p class="text-primary" id="biography" name="biography"></p>
								</div>
							</div>
						  								
						  </div>
						</div>
						  						
  					</td>
  					<td width="400px">
  						 						
  						<div class="panel panel-primary  scrollablePanel">
						  <div class="panel-heading">
							<h3 class="panel-title">Actor Movies</h3>
						  </div>
						  <div class="panel-body">
						  
						  	<div id="tableMovies">						  
									<table id="moviesFromActor">
									</table>
						  	</div>
						  	
						  	<p id="messageMovies" style="display: none"></p>
						  		
						   </div>
						</div>  						
  						
  					</td>  				
  				</tr>
  			</table>  			
		</div>  	
</body>
</html>