  
var title=[];
var url=[];
var platform=[];
var score=[];
var genre=[];
var editors_choice=[];
var release_year=[];


try{

const app = document.getElementById('root');
const container = document.createElement('div');

container.setAttribute('class', 'container');


    var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://starlord.hackerearth.com/gamesext', true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
data.forEach(game => {

const card = document.createElement('div');
card.setAttribute('class', 'card');
const link=document.createElement('a');

const h1 = document.createElement('h3');
h1.textContent = game.title;
title.push(game.title);
url.push(game.url);
platform.push(game.platform);
score.push(game.score);
genre.push(game.genre);
editors_choice.push(game.editors_choice);
release_year.push(game.release_year);
link.href=game.url;
const h3 =  document.createElement('p');
h3.textContent = game.platform;
const hr =  document.createElement('hr');


const h5 =  document.createElement('h5');
h5.textContent ="Genre : " +game.genre;
const h6 =  document.createElement('h6');
h6.textContent =game.score;

const h7 = document.createElement('p');
h7.textContent = game.release_year;

 // Each card will contain an h1 and a p
card.appendChild(h1);
card.appendChild(link);
card.appendChild(h3);
if(game.editors_choice=="Y"){
	const img=document.createElement('img');
	img.setAttribute('class','edit');
	img.src='images/heart.png';
	card.appendChild(img);
}
card.appendChild(h7);
card.appendChild(hr);
card.appendChild(h5);
card.appendChild(h6);

container.appendChild(card); 
});
  }


// Send request
request.send();
app.appendChild(container);
  
}
  catch(error){
    console.log(error);
  }





  


function sort(){
var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < score.length; i += 1) {
      if (score[i - 1] < score[i]) {
        done = false;
        var tmp = score[i - 1];
        score[i - 1] = score[i];
        score[i] = tmp;
        tmp = title[i - 1];
        title[i - 1] = title[i];
        title[i] = tmp;
        tmp = url[i - 1];
        url[i - 1] = url[i];
        url[i] = tmp;
        tmp = platform[i - 1];
        platform[i - 1] = platform[i];
        platform[i] = tmp;
        tmp = editors_choice[i - 1];
        editors_choice[i - 1] = editors_choice[i];
        editors_choice[i] = tmp;
        tmp = release_year[i - 1];
        release_year[i - 1] = release_year[i];
        release_year[i] = tmp;
        tmp = genre[i - 1];
        genre[i - 1] = genre[i];
        genre[i] = tmp;
      }
    }
  }
  $( ".container" ).remove();
  const app = document.getElementById('root');
const container = document.createElement('div');

container.setAttribute('class', 'container');

  for(var i=0;i<score.length;i+=1){

    const card = document.createElement('div');
card.setAttribute('class', 'card');
const link=document.createElement('a');
const h1 = document.createElement('h3');
h1.textContent = title[i];
link.href=url[i];

const h3 =  document.createElement('p');
h3.textContent = platform[i];
const hr =  document.createElement('hr');


const h5 =  document.createElement('h5');
h5.textContent ="Genre : " +genre[i];
const h6 =  document.createElement('h6');
h6.textContent =score[i];

const h7 = document.createElement('p');
h7.textContent = release_year[i];


 // Each card will contain an h1 and a p
card.appendChild(h1);
card.appendChild(link);

card.appendChild(h3);
if(editors_choice[i]=="Y"){
  const img=document.createElement('img');
  img.setAttribute('class','edit');
  img.src='images/heart.png';
  card.appendChild(img);
}
card.appendChild(h7);
card.appendChild(hr);
card.appendChild(h5);
card.appendChild(h6);
container.appendChild(card); 
  }
  app.appendChild(container);
}

function search(){
  var text = document.getElementById('textsearch');
    $( ".container" ).remove();
  const app = document.getElementById('root');
const container = document.createElement('div');

container.setAttribute('class', 'container');

  for(var i=0;i<score.length;i+=1){
    var  str=title[i];
if(String(str).toLowerCase().search(text.value.toLowerCase())>=0){
    const card = document.createElement('div');
card.setAttribute('class', 'card');
const link=document.createElement('a');
const h1 = document.createElement('h3');
h1.textContent = title[i];
link.href=url[i];

const h3 =  document.createElement('p');
h3.textContent = platform[i];
const hr =  document.createElement('hr');


const h5 =  document.createElement('h5');
h5.textContent ="Genre : " +genre[i];
const h6 =  document.createElement('h6');
h6.textContent =score[i];

const h7 = document.createElement('p');
h7.textContent = release_year[i];


 // Each card will contain an h1 and a p
card.appendChild(h1);
card.appendChild(link);

card.appendChild(h3);
if(editors_choice[i]=="Y"){
  const img=document.createElement('img');
  img.setAttribute('class','edit');
  img.src='images/heart.png';
  card.appendChild(img);
}
card.appendChild(h7);
card.appendChild(hr);
card.appendChild(h5);
card.appendChild(h6);
container.appendChild(card); 
  }
  app.appendChild(container);
}
}