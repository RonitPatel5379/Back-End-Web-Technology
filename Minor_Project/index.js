import express from "express"
import routeUser from "../Minor_Project/routes/users.route.js"
import routeMovie from "./routes/movies.route.js"
import routeMovie_Rating from "./routes/movie_rating.route.js"

const app = express()

app.use(express.json())

app.use("/users",routeUser)
app.use("/movies",routeMovie)
app.use("/movie_rating",routeMovie_Rating)

app.listen(3000,()=>{
  console.log("Server running at 3000")
})