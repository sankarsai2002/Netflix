
let api = "http://www.omdbapi.com/?apikey=61e576a4&t=";


function addInfo(movieData){
        // Populate the HTML with movie data

    document.getElementById('title').textContent = movieData.Title;
    document.getElementById('desc').textContent = movieData.Plot;
    document.getElementById('year').textContent = movieData.Year;
    document.getElementById('genre').textContent = movieData.Genre;
    document.getElementById('actors').textContent = movieData.Actors;
    document.getElementById('director').textContent = movieData.Director;
    document.getElementById('earnings').textContent = movieData.BoxOffice;
    document.getElementById('ratings').textContent = movieData.imdbRating + "/10";
    document.getElementById('awards').textContent = movieData.Awards;
    document.getElementById('img').src = movieData.Poster;

    let loading = document.getElementById('loading');
    let moviedetails = document.getElementById('movie-details');
    let moviebackground = document.getElementById("movie-background");

    loading.classList.add("removeTemperary");

}

function search(){
    let inputText = document.getElementById("inputText");

    let loading = document.getElementById('loading');
    let moviedetails = document.getElementById('movie-details');
    let moviebackground = document.getElementById("movie-background");

    loading.classList.remove("removeTemperary");

    let pro = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            moviedetails.classList.remove("removeTemperary");
            moviebackground.classList.remove("removeTemperary");
            resolve();
        },3000);
    })
    .then(()=>{
        console.log(api+inputText.value);
        
        fetch(api+inputText.value)
        .then((resolve)=>{
            return resolve.json();
        })
        .then((data)=>{
            addInfo(data);
        });
    });
}

