---
title: React Seulflix
author: seulhee
date: 2021-02-25
hero: ./images/react-seulflix.PNG
excerpt: React with API
---

# React Seulflix

## React with API

### nomadcoders의 api 사용

```js
getMovies = async () => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(
    // 영화 개수와 장르 선정
    "https://yts-proxy.now.sh/list_movies.json?genre=ADVENTURE&limit=18&sort_by=rating"
  );
  this.setState({ movies });
  console.log(movies);
};
```

### Render Movies

```js

render() {
    const { movies } = this.state;
    return (
          <div className="movietitle">
            <h2>Adventure</h2>
            <div className="movies">
              {movies.map((movie) => (
                <Home
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  poster={movie.medium_cover_image}
                  rating={movie.rating}
                  summary={movie.summary}
                  background_image={movie.background_image}
                />
              ))}
            </div>
          </div>
    );
```

```terminal
git add .
```
