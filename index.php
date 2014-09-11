<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta name="generator"
              content="HTML Tidy for Linux/x86 (vers 25 March 2009), see www.w3.org" />
        <title>
            .:: The Movies Store ::.
        </title>
        <link href="css/styles.css"
              rel="stylesheet"
              type="text/css" />
        <link href="css/bootstrap.min.css"
              rel="stylesheet"
              type="text/css" />
        <script src="js/jquery-1.7.1.min.js"
              type="text/javascript">
</script>
        <script src="js/main.js"
              type="text/javascript">
</script>
        <script src="js/bootstrap.min.js"
              type="text/javascript">
</script>
    </head>
    <body>
        <div class="jumbotron">
            <h3>
                ..:: The Movies Store ::..
            </h3>
            <div class="navbar navbar-default"
                 id="header">
                <div class="navbar-collapse collapse navbar-responsive-collapse">
                    <form class="navbar-form navbar-left">
                        <input type="text"
                              id="searchKey"
                              class="form-control col-lg-8"
                              placeholder="Search" /> <a href="#"
                              style="position: absolute; left:230px;"
                              class="btn btn-primary"
                              id="btnSearch">Search</a>
                        <h4 style="margin-left:300px;">
                            Please write a name of actor to search
                        </h4>
                    </form>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <tr class="active">
                    <td width="200px">
                        <div class="panel panel-primary scrollablePanel">
                            <div class="panel-heading">
                                <h3 class="panel-title">
                                    Actor List
                                </h3>
                            </div>
                            <div class="panel-body">
                                <div class="list-group">
                                    <ul id="actorList"></ul>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title">
                                    Actor Information
                                </h3>
                            </div>
                            <div class="panel-body">
                                <div class="list-group">
                                    <div id="profilePicture">
                                        <img id="pic" />
                                    </div>
                                    <div>
                                        <label>Name:</label>
                                        <p class="text-primary"
                                           id="name"
                                           name="name"></p>
                                    </div>
                                    <div>
                                        <label>Birthday:</label>
                                        <p class="text-primary"
                                           id="birthday"
                                           name="birthday"></p>
                                    </div>
                                    <div>
                                        <label>Place of Birth:</label>
                                        <p class="text-primary"
                                           id="place_of_birth"
                                           name="place_of_birth"></p>
                                    </div>
                                    <div>
                                        <label>Death day:</label>
                                        <p class="text-primary"
                                           id="deathday"
                                           name="deathday"></p>
                                    </div>
                                    <div>
                                        <label>Homepage:</label>
                                        <p class="text-primary"
                                           id="homepage"
                                           name="homepage"></p>
                                    </div>
                                    <div>
                                        <label>Biography:</label>
                                        <p class="text-primary"
                                           id="biography"
                                           name="biography"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td width="400px">
                        <div class="panel panel-primary scrollablePanel">
                            <div class="panel-heading">
                                <h3 class="panel-title">
                                    Actor Movies
                                </h3>
                            </div>
                            <div class="panel-body">
                                <div id="tableMovies">
                                    <table id="moviesFromActor"></table>
                                </div>
                                <p id="messageMovies"
                                   style="display: none"></p>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </body>
</html>
