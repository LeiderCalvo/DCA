const appendSerie = (parent) => (serie) => {
  const li = document.createElement("li");
  li.textContent = serie;
  parent.appendChild(li);
};

const appendComic = (parent) => (comic) => {
  const li = document.createElement("li");
  li.textContent = comic;
  parent.appendChild(li);
};

export const renderCharacter = ({
  name,
  thumbnail,
  description,
  comics,
  series,
}) => {
  const figure = document.createElement("figure");
  figure.classList.add("personaje-card");

  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const h3Comics = document.createElement("h3");
  const ulComics = document.createElement("ul");
  const h3Series = document.createElement("h3");
  const ulSeries = document.createElement("ul");

  img.src = thumbnail;
  h2.textContent = name;
  p.textContent = description;
  h3Comics.textContent = "Comics:";
  h3Series.textContent = "Series:";

  comics.forEach(appendComic(ulComics));
  series.forEach(appendSerie(ulSeries));

  figure.appendChild(img);
  figure.appendChild(h2);
  figure.appendChild(p);
  figure.appendChild(h3Comics);
  figure.appendChild(ulComics);
  figure.appendChild(h3Series);
  figure.appendChild(ulSeries);

  return figure;
};
