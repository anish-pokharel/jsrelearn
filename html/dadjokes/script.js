// promises

// 2cond => sucss , fail

// fetch(`https://restcountries.com/v3.1/name/nepal`);
// fullfilled;
// reject;

// fetch("https://restcountries.com/v3.1/name/nepal");
// GET https://icanhazdadjoke.com/
// async;

const jokes = document.querySelector("joke");
const jokeBtn = document.querySelector(`#jokeBtn`);

// const generateJokes = () => {
//   const setHeader = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch(`https://icanhazdadjoke.com`, setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//       joke.innerHTML = data.joke;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// jokeBtn.addEventListener("click", generateJokes);
// generateJokes();

// async function generateJokes(){}

const generateJokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch(`https://icanhazdadjoke.com`, setHeader);
    const data = await res.json();
    joke.innerHTML = data.joke;
  } catch (err) {
    console.log(`the error is ${err}`);
  }
};
// .then((res) => res.json())
// .then((data) => {
//   joke.innerHTML = data.joke;
// })
// .catch((error) => {
//   console.log(error);
// });

jokeBtn.addEventListener("click", generateJokes);
generateJokes();
