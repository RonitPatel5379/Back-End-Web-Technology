import express from "express"
import movieService from "../services/movies.service.js"
import auth from "../middlewares/auth.middleware.js"

const {getMovies,getMovieByID,insertMovie,updateMovie,delteMovie} = movieService
const {authMiddleware} = auth
const routeMovie = express.Router()

routeMovie.use(authMiddleware)

routeMovie.get("/",async (req,res)=>{
  const data = await getMovies()
  res.send(data)
})

routeMovie.get("/:id",async (req,res)=>{
  const data = await getMovieByID(req.params.id)
  res.send(data)
})

routeMovie.post("/",async (req,res)=>{
  const data = await insertMovie(req.body)
  res.send(data)
})

routeMovie.patch("/:id",async (req,res)=>{
  const data = await updateMovie(req.params.id,req.body)
  res.send(data)
})

routeMovie.delete("/:id",async (req,res)=>{
  const data = await delteMovie(req.params.id)
  res.send(data)
})

export default routeMovie