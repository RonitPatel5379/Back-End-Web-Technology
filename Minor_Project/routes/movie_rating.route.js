import express from "express"
import movie_ratingService from "../services/movie_rating.service.js"
import auth from "../middlewares/auth.middleware.js"

const {getAllMovieRating,getMovieRatingByID,insertMovieRating,updateMovieRatingByID,deleteMovieRatingByID} = movie_ratingService

const {authMiddleware} = auth
const routeMovie_Rating = express.Router()

routeMovie_Rating.use(authMiddleware)

routeMovie_Rating.get("/", async(req,res)=>{
  const data = await getAllMovieRating()
  res.send(data)
})

routeMovie_Rating.get("/:id", async(req,res)=>{
  const data = await getMovieRatingByID(req.params.id)
  res.send(data)
})

routeMovie_Rating.post("/", async(req,res)=>{
  const data = await insertMovieRating(req.body)
  res.send(data)
})

routeMovie_Rating.patch("/:id", async(req,res)=>{
  const data = await updateMovieRatingByID(req.params.id,req.body)
  res.send(data)
})

routeMovie_Rating.delete("/:id", async(req,res)=>{
  const data = await deleteMovieRatingByID(req.params.id)
  res.send(data)
})

export default routeMovie_Rating