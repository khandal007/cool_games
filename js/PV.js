function PV(){
    try{
      $( ".container" ).remove();
const app = document.getElementById('root');
      
const container = document.createElement('div');
const link=document.createElement('a');
container.setAttribute('class', 'container');
app.appendChild(container);

    var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://starlord.hackerearth.com/gamesext', true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
data.forEach(game => {

const card = document.createElement('div');
card.setAttribute('class', 'card');
const h1 = document.createElement('h3');
h1.textContent = game.title;
  

const h3 =  document.createElement('p');
h3.textContent = game.platform;
const hr =  document.createElement('hr');


const h5 =  document.createElement('h5');
h5.textContent ="Genre : " +game.genre;
const h6 =  document.createElement('h6');
h6.textContent =game.score;

const h7 = document.createElement('p');
h7.textContent = game.release_year;
link.href=game.url;
if(game.platform=="PlayStation Vita"){
container.appendChild(card);  // Each card will contain an h1 and a p
card.appendChild(h1);
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
container.appendChild(link);
}
});
  }


// Send request
request.send();

  
}
  catch(error){
    console.log(error);
}

  }

function iPad(){
    try{
       $( ".container" ).remove();
const app = document.getElementById('root');
      
const container = document.createElement('div');
const link=document.createElement('a');
container.setAttribute('class', 'container');
app.appendChild(container);

    var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://starlord.hackerearth.com/gamesext', true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
data.forEach(game => {

const card = document.createElement('div');
card.setAttribute('class', 'card');
const h1 = document.createElement('h3');
h1.textContent = game.title;
  

const h3 =  document.createElement('p');
h3.textContent = game.platform;
const hr =  document.createElement('hr');


const h5 =  document.createElement('h5');
h5.textContent ="Genre : " +game.genre;
const h6 =  document.createElement('h6');
h6.textContent =game.score;

const h7 = document.createElement('p');
h7.textContent = game.release_year;
link.href=game.url;
if(game.platform=="iPad"){
container.appendChild(card);  // Each card will contain an h1 and a p
card.appendChild(h1);
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
container.appendChild(link);
}
});
  }


// Send request
request.send();

  
}
  catch(error){
    console.log(error);
}

  }

function Xbox(){
    try{
       $( ".container" ).remove();
const app = document.getElementById('root');
      
const container = document.createElement('div');
const link=document.createElement('a');
container.setAttribute('class', 'container');
app.appendChild(container);

    var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://starlord.hackerearth.com/gamesext', true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
data.forEach(game => {

const card = document.createElement('div');
card.setAttribute('class', 'card');
const h1 = document.createElement('h3');
h1.textContent = game.title;
  

const h3 =  document.createElement('p');
h3.textContent = game.platform;
const hr =  document.createElement('hr');


const h5 =  document.createElement('h5');
h5.textContent ="Genre : " +game.genre;
const h6 =  document.createElement('h6');
h6.textContent =game.score;

const h7 = document.createElement('p');
h7.textContent = game.release_year;
link.href=game.url;
if(game.platform=="Xbox 360"){
container.appendChild(card);  // Each card will contain an h1 and a p
card.appendChild(h1);
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
container.appendChild(link);
}
});
  }


// Send request
request.send();

  
}
  catch(error){
    console.log(error);
}

  }
  function P3(){
    try{
       $( ".container" ).remove();
const app = document.getElementById('root');
      
const container = document.createElement('div');
const link=document.createElement('a');
container.setAttribute('class', 'container');
app.appendChild(container);

    var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://starlord.hackerearth.com/gamesext', true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
data.forEach(game => {

const card = document.createElement('div');
card.setAttribute('class', 'card');
const h1 = document.createElement('h3');
h1.textContent = game.title;
  

const h3 =  document.createElement('p');
h3.textContent = game.platform;
const hr =  document.createElement('hr');


const h5 =  document.createElement('h5');
h5.textContent ="Genre : " +game.genre;
const h6 =  document.createElement('h6');
h6.textContent =game.score;

const h7 = document.createElement('p');
h7.textContent = game.release_year;
link.href=game.url;
if(game.platform=="PlayStation 3"){
container.appendChild(card);  // Each card will contain an h1 and a p
card.appendChild(h1);
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
container.appendChild(link);
}
});
  }


// Send request
request.send();

  
}
  catch(error){
    console.log(error);
}

  }
  function PC(){
    try{
       $( ".container" ).remove();
const app = document.getElementById('root');
      
const container = document.createElement('div');
const link=document.createElement('a');
container.setAttribute('class', 'container');
app.appendChild(container);

    var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://starlord.hackerearth.com/gamesext', true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
data.forEach(game => {

const card = document.createElement('div');
card.setAttribute('class', 'card');
const h1 = document.createElement('h3');
h1.textContent = game.title;
  

const h3 =  document.createElement('p');
h3.textContent = game.platform;
const hr =  document.createElement('hr');


const h5 =  document.createElement('h5');
h5.textContent ="Genre : " +game.genre;
const h6 =  document.createElement('h6');
h6.textContent =game.score;

const h7 = document.createElement('p');
h7.textContent = game.release_year;
link.href=game.url;
if(game.platform=="PC"){
container.appendChild(card);  // Each card will contain an h1 and a p
card.appendChild(h1);
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
container.appendChild(link);
}
});
  }


// Send request
request.send();

  
}
  catch(error){
    console.log(error);
}

  }
  function Macintosh(){
    try{
       $( ".container" ).remove();
const app = document.getElementById('root');
      
const container = document.createElement('div');
const link=document.createElement('a');
container.setAttribute('class', 'container');
app.appendChild(container);

    var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://starlord.hackerearth.com/gamesext', true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
data.forEach(game => {

const card = document.createElement('div');
card.setAttribute('class', 'card');
const h1 = document.createElement('h3');
h1.textContent = game.title;
  

const h3 =  document.createElement('p');
h3.textContent = game.platform;
const hr =  document.createElement('hr');


const h5 =  document.createElement('h5');
h5.textContent ="Genre : " +game.genre;
const h6 =  document.createElement('h6');
h6.textContent =game.score;

const h7 = document.createElement('p');
h7.textContent = game.release_year;
link.href=game.url;
if(game.platform=="Macintosh"){
container.appendChild(card);  // Each card will contain an h1 and a p
card.appendChild(h1);
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
container.appendChild(link);
}
});
  }


// Send request
request.send();

  
}
  catch(error){
    console.log(error);
}

  }
function iPhone(){
    try{
       $( ".container" ).remove();
const app = document.getElementById('root');
      
const container = document.createElement('div');
const link=document.createElement('a');
container.setAttribute('class', 'container');
app.appendChild(container);

    var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://starlord.hackerearth.com/gamesext', true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
data.forEach(game => {

const card = document.createElement('div');
card.setAttribute('class', 'card');
const h1 = document.createElement('h3');
h1.textContent = game.title;
  

const h3 =  document.createElement('p');
h3.textContent = game.platform;
const hr =  document.createElement('hr');


const h5 =  document.createElement('h5');
h5.textContent ="Genre : " +game.genre;
const h6 =  document.createElement('h6');
h6.textContent =game.score;

const h7 = document.createElement('p');
h7.textContent = game.release_year;
link.href=game.url;
if(game.platform=="iPhone"){
container.appendChild(card);  // Each card will contain an h1 and a p
card.appendChild(h1);
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
container.appendChild(link);
}
});
  }


// Send request
request.send();

  
}
  catch(error){
    console.log(error);
}

  }


  





