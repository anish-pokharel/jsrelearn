// promises

// 2cond => sucss , fail

// fetch(`https://restcountries.com/v3.1/name/nepal`);
// fullfilled;
// reject;

// fetch("https://restcountries.com/v3.1/name/nepal");
// GET https://icanhazdadjoke.com/
// async;

const jokes = document.querySelector(`jokes`);
const jokeBtn = document.querySelector(`#jokeBtn`);

const generateJokes = () => {
  fetch(`https://icanhazdadjoke.com`)
    .then((res) => {
      console.log(res.json());
    })
    .catch((error) => {
      console.log(error);
    });
};

jokeBtn.addEventListener("click", generateJokes);
generateJokes();
