
function getDetails(id){
  detailURL = 'http://www.omdbapi.com/?apikey=f234863b&i=' + id;
  fetch(detailURL)
  .then(result => {
    result.json()
    .then(json => {
      console.log(json);
    });
  });
}

function doSearch(){
  var searchTerm = document.getElementById('searchterm').value;
  baseUrl = 'http://www.omdbapi.com/?apikey=f234863b&s=' + searchTerm;
  
  fetch(baseUrl)
  .then (result => {
      result.json()
      .then(json => {
        console.log(json);
        ulElement = document.getElementById('ulResults');
        json.Search.forEach(element => {
          let title = `<li>${element.Title}<button onclick="getDetails('${element.imdbID}')">Details</button></li>`;
          ulElement.innerHTML += title;
        });
      });
  });
}

