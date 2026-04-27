import movie_ratingmodel from "../models/movie_rating.model.js";
import jwt from "jsonwebtoken";

const {
  getAllMovie_Rating,
  getByMovie_RatingID,
  getByRatingComment,
  insertMovie_Rating,
  updateMovie_RatingByID,
  deleteMovie_RatingByID,
} = movie_ratingmodel;

async function getAllMovieRating() {
  const data = await getAllMovie_Rating();
  if (data) {
    return {
      error: false,
      data,
      message: "Movie_Ratings fetched successfully",
    }; 
  } else {
    return {
      error: true,
      message: "Some error occured while fetching the movie_ratings",
    };
  }
}

async function getMovieRatingByID(id) {
  const data = await getByMovie_RatingID(id);
  if (data) {
    return {
      error: false,
      data,
      message: "Movie_Rating fetched successfully",
    };
  } else {
    return {
      error: true,
      message: "Some error occured while fetching the movie_rating",
    };
  }
}

async function insertMovieRating(formdata) {
  const data = await insertMovie_Rating(formdata);
  if (data) {
    return {
      error: false,
      data,
      message: "Movie_Rating inserted successfully",
    };
  } else {
    return {
      error: true,
      message: "Some error occured while inserting the movie_rating",
    };
  }
}

async function updateMovieRatingByID(id, formdata) {
  const data = await updateMovie_RatingByID(id, formdata);
  if (data) {
    return {
      error: false,
      data,
      message: "Movie_Rating updated successfully",
    };
  } else {
    return {
      error: true,
      message: "Some error occured while updating the movie_rating",
    };
  }
}

async function deleteMovieRatingByID(id) {
  const data = await deleteMovie_RatingByID(id);
  if (data) {
    return {
      error: false,
      data,
      message: "Movie_Rating deleted successfully",
    };
  } else {
    return {
      error: true,
      message: "Some error occured while deleting the movie_rating",
    };
  }
}

export default {
  getAllMovieRating,
  getMovieRatingByID,
  insertMovieRating,
  updateMovieRatingByID,
  deleteMovieRatingByID,
};