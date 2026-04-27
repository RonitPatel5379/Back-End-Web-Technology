import db from "../db/mysql.js";

async function getAllMovie_Rating() {
  try {
    const [data,fields] = await db.query("SELECT * FROM movie_rating")
    return data
  } catch (err) {
    return false
  }
}

async function getByMovie_RatingID(id) {
  try {
    const [data,fields] = await db.query("SELECT * FROM movie_rating where RatingID="+id)
    return data[0]
  } catch(err) { 
    return false
  }
}

async function getByRatingComment(cm) {
  try {
    const [data,fields] = await db.query(`SELECT * FROM movie_rating where RatingComment='${cm}'`)
    return data[0]
  } catch(err) {
    return false
  }
}

async function insertMovie_Rating(formdata) {
  try {
    const [data,fields] = await db.query(`INSERT INTO movie_rating(RatingID,MovieID,UserID,RatingStar,RatingComment) VALUES ('${formdata.RatingID}', '${formdata.MovieID}', '${formdata.UserID}','${formdata.RatingStar}', '${formdata.RatingComment}')`)
    return data
  } catch(err) {
    return false
  }
}

async function updateMovie_RatingByID(id,formdata) {
  try {
    const [data,fields] = await db.query(`UPDATE movie_rating SET RatingStar='${formdata.RatingStar}',RatingComment='${formdata.RatingComment}' where movie_rating.RatingID=${id}`)
    return data
  } catch(err) {
    return false
  }
}

async function deleteMovie_RatingByID(id) {
  try {
    const [data,fields] = await db.query(`DELETE FROM movie_rating where RatingID=${id}`)
    return data
    return data
  } catch(err) {
    return false
  }
}

export default {getAllMovie_Rating,getByMovie_RatingID,getByRatingComment,insertMovie_Rating,updateMovie_RatingByID,deleteMovie_RatingByID}