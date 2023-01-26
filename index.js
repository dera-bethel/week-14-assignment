let setup = document.getElementById("setup");
let punchlinebtn = document.getElementById("punchlinebtn");
let punchline = document.getElementsByClassName("punchline")[0];
let reset = document.getElementById("reset");
let jokeimg = document.getElementById("joke-img")
let joke = {};

const tellAJoke = () => {
 fetch("https://official-joke-api.appspot.com/random_joke")
 .then(res => res.json())
 .then(
    data => (
     (setup.innerHTML = data.setup), (punchlinebtn.style.display = "block"),
     (joke = data)
   )
 )
  .catch(err => console.log(err));
};

const tellpunchline = () => {
  punchline.innerHTML = joke.punchline;
  jokeimg.src = 
     "https://i.pinimg.com/564x/f0/05/39/f00539302feb966bfbf8530377d22bdb.jpg";
};
const resetpage = () =>{
   punchlinebtn.style.display = "none";
   setup.innerHTML = data.setup;
   joke = {};
   reset.style.display = "none";
}