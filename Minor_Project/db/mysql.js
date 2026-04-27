import {createPool} from "mysql2/promise"

const db = createPool({
  host:"localhost",
  user:"root",
  password:"",
  database:"movie",
  connectionLimit:10
})

export default db