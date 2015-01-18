        var movies = ["Pulp Fiction", "Amélie", "Fight Club", "Forrest Gump", "Goodfellas",
        "Anchorman: The Legend of Ron Burgundy", "Snatch.", "Some Like it Hot",
        "Inglorious Bastards", "Indiana Jones and the Last Crusade", "Lock, Stock and Two Smoking Barrels",
        "Jurassic Park", "Fargo", "Trainspotting", "Toy Story", "Y Tu Mamá También"]
        

        var button = document.querySelector('button');
        var i = 0;

        //for on load, must declare img outside of click
        var counter = 0
        var img = document.createElement('img');

        button.addEventListener('click', function(){
            var input_box = document.querySelector('input');
            var movie = movies[i];
            //i resets to 0 when it gets to the end of the array of movies
            if(i < movies.length-1){
                i++;
            }
            else{
                i = 0
            }

            //encodeURI sets it up with % etc to format it for searching
            var encoded = encodeURI(movie);
            console.log(encoded)

        var url = "http://omdbapi.com/?t=" + encoded;
        var xhr = new XMLHttpRequest();



        xhr.addEventListener('load', function(e) {
      
        // xhr.responseText - this is what get's the shit
        var d = xhr.responseText;
        var parsed = JSON.parse(d);

        //this grabs the img tag from the html file then sets
        //the src to the parsed JSON to the key value Poster   
        var poster = document.getElementById('poster');        
        counter++;

            if(counter == 1){
            poster.appendChild(img);
            }

        img.src = parsed.Poster;

        var title = document.getElementById('title');
        title.innerText = parsed.Title;
        var year = document.getElementById('year');
        year.innerText = parsed.Year;
        var rated = document.getElementById('rated');
        rated.innerText = parsed.Rated;
        var released = document.getElementById('released');
        released.innerText = parsed.Released;
        var runtime = document.getElementById('runtime');
        runtime.innerText = parsed.Runtime;
    })
        // this just tells you where to go get the data. 
        xhr.open("GET", url);
        xhr.send();

    })