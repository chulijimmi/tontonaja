# tontonaja

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project can access on uri (https://catnuxer.github.io/tontonaja/).

## Table of Contents

- [Run](#run)

- [Thirdparty](#thirdparty)

- [Api](#api)

- [Test](#test)

- [Deployment](#deployment)

### Run

Before you try run this project, make sure u done with

```bash

$ npm install

```

Runs the app in the development mode. You can use:

```bash

$ npm run start

```

<br  />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br  />

You will also see any lint errors in the console.

### Thirdparty

Thirdparty are not limited to component, state management, side effects, test unit, etc.

#### Component

Some of Component adabtable from material-ui https://material-ui.com/

#### State Management

This project use state management redux https://redux.js.org/

#### Side Effects

This project use side effects with redux-saga https://redux-saga.js.org/

#### Test Unit

This project use test unit library from jest https://jestjs.io/ and enzyme https://enzymejs.github.io/enzyme/

### Api

The Api of this project are following the documentations from https://developers.themoviedb.org/3/getting-started/introduction

#### Home

Browse trending and popular movies, and search all movies by title.

Search:

- Api Search -> Movie -> query={title} uri encode

Banner:

- max 6 movie
- Api Discover -> Movie Discover -> Query -> page=1&sort_by=popularity.desc&release_date.gte=2020-03-26&year=2020

Suggestion:

- max 20 movie
- Api Discover -> Movie Discover -> Query -> page=1&sort_by=vote_average.desc&release_date.gte=2020-03-26&year=2020

Latest Movie:

- max 20 movie
- Api Discover -> Movie Discover -> Query -> page=1&sort_by=primary_release_date.desc&primary_release_date.lte=2020-03-26

Latest TV Series:

- max 20 movie
- Api Discover -> TV Discover -> Query -> page=1&sort_by=popularity.desc&first_air_date.gte=2020-03-26

#### Detail Movie

View relevant details of a particular movie including but not limited to title, overview, release year, runtime and cast members.

Layout:

- Api Movie -> Detail -> {movieId} -> Query -> append_to_response=video,images,credits,jobs

#### Actor Detail

View details of specific actor or actress including but not limited to name, bio, birth date and list of movies in which have worked

Layout:

- Api People -> Detail -> {peopleId}

#### Configuration

This api is using for config relate on images size, countries

- Api Configuration -> Countries
- Api Configuration -> Api Configuration

#### Genres

This api is using for config relate on genre movie list and tv list

- Api Genres -> Movie List
- Api Genres -> TV List

### Test

To run test unit scenario

```bash
$ npm run test
```

### Deployment Process

This project deploy on github. And you can use command

```bash
$ npm run deploy
```
