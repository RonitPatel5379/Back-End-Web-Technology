import movieModel from "../models/movies.model.js"
import jwt from "jsonwebtoken"

const {getAllMovies,getByMovieID,getByMovieName,insertMovies,updateMoviesById,deleteMovieById} = movieModel

async function getMovies() {
  const data = await getAllMovies()
  if(data) {
    return {
      error: false,
      data,
      message: "Movies fetched successfully",
    }
  } else {
    return {
      error: true,
      message: "Some error occured while fetching the movies",
    }
  }
}

async function getMovieByID(id) {
  const data = await getByMovieID(id)
  if(data) {
    return {
      error: false,
      data,
      message: "Movie fetched successfully",
    }
  } else {
    return {
      error: true,
      message: "Some error occured while fetching the movie",
    }
  }
}

async function insertMovie(formdata) {
  const data = await insertMovies(formdata)
  if(data) {
    return {
      error: false,
      data,
      message: "Movie inserted successfully",
    }
  } else {
    return {
      error: true,
      message: "Some error occured while inserting the movie",
    }
  }
}

async function updateMovie(id,formdata) {
  const data = await updateMoviesById(id,formdata)
  if(data) {
    return {
      error: false,
      data,
      message: "Movie updated successfully",
    }
  } else {
    return {
      error: true,
      message: "Some error occured while updating the movie",
    }
  }
}

async function delteMovie(id) {
  const data = await deleteMovieById(id)
  if(data) {
    return {
      error: false,
      data,
      message: "Movie deleted successfully",
    }
  } else {
    return {
      error: true,
      message: "Some error occured while deleting the movie",
    }
  }
}

export default {getMovies,getMovieByID,insertMovie,updateMovie,delteMovie}