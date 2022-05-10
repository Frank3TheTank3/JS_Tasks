
/**************************/
/***Objects As Arguments***/
/**************************/


//The Movie Database

/*
It's like IMDB, but much much smaller!

    Create an object to store the following information about your favorite movie: title (a string), 
    duration (a number), and stars (an array of strings).
    Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. 
    Stars: Puff, Jackie, Living Sneezes." 

    */

    let favMovies = {

        title: '',
        duration: 180,
        stars: ['Leonardo Di Caprio', 'Johnny Depp', 'Meghan Fox', 'Chuck Norris']
    }
    
    function printMovieInfo() {
    
        console.log(favMovies.title + " lasts for " + favMovies.duration + "minutes. Stars:"
            + favMovies.stars);
    
    }
    
    
    
    
    
    
    
    
    
    