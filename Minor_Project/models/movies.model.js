import db from "../db/mysql.js"

async function getAllMovies() {
  try {
    const [data,fields] = await db.query("SELECT * FROM movies")
    return data
  } catch(err) {
    return false
  }
}

async function getByMovieID(id) {
  try {
    const [data,fields] = await db.query("SELECT * FROM movies where MovieID="+id)
    return data[0]
  } catch(err) {
    return false
  }
}

async function getByMovieName(un) {
  try {
    const [data,fields] = await db.query(`SELECT * FROM movies where MovieName='${un}'`)
    return data[0]
  } catch(err) {
    return false
  }
}

async function insertMovies(formdata) {
  try {
    const [data,fields] = await db.query(`INSERT INTO movies (MovieID, MovieName,MovieImage) VALUES ('${formdata.MovieID}', '${formdata.MovieName}', '${formdata.MovieImage}')`)
    return data
  } catch(err) {
    return false
  }
}

async function updateMoviesById(id,formdata) {
  try {
    const [data,fields] = await db.query(`UPDATE movies SET MovieName = '${formdata.MovieName}', MovieImage = '${formdata.MovieImage}' WHERE movies.MovieID = ${id}`)
    return data
  } catch(err) {
    return false
  }
}

async function deleteMovieById(id) {
  try {
    const [data,fields] = await db.query(`DELETE FROM movies WHERE MovieID = ${id}`)
    return data
  } catch(err) {
    return false
  }
}

export default {getAllMovies,getByMovieID,insertMovies,updateMoviesById,deleteMovieById,getByMovieName}