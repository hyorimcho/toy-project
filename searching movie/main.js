// fetch("https://omdbapi.com/?apikey=7035c60c&s=frozen")
//   .then((res) => res.json())
//   .then((res) => console.log(res));

(async () => {
  //초기화 코드
  const moviesEl = document.querySelector(".movies");
  const moreBtnEl = document.querySelector(".btn");
  let page = 1;

  //최초 호출
  let movies = await getMovies();
  page += 1;
  renderMovies(movies);

  moreBtnEl.addEventListener("click", async () => {
    const movies = await getMovies(page);
    page += 1;
    renderMoviees(movies);
  });

  async function getMovies(page = 1) {
    const res = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&s=frozen&page=${page}`
    );
    const { Search: movies } = await res.json();
    return movies;
  }

  function renderMovies(movies) {
    for (const movie of movies) {
      const el = document.createElement("div");
      el.classList.add("movie");

      const h1El = document.createElement("h1");
      h1El.textContent = movie.Title;
      h1El.addEventListener("click", () => {
        console.log(moive.Title);
      });

      const imgEl = document.createElement("img");
      imgEl.src = movie.Poster;
      el.append(h1El, imgEl);
      moviesEl.append(el);
    }
  }
})();

//<div class="movie"></div>;
// const titleEl = document.createElement("h1");
// titleEl.textContent = movie.titleEl;
// const imgEl = document.createElement("img");
// imgEl.src = movie.Poster;
// // el.append(titleEl, imgEl);

//type1
// el.innerHTML = /*html*/ `
// <h1>${movie.Title}</h1>
// <img src="${movie.Poster}" />
// `;
// const h1El = el.querySelector("h1");
// h1El.addEventListener("click", () => {
//   console.log(movie.Title);
// });
