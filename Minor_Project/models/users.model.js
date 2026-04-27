import db from "../db/mysql.js"

async function getAll() {
  try {
    const [data,fields] = await db.query("SELECT * FROM users")
    return data
  } catch(err) {
    return false
  }
}

async function getByID(id) {
  try {
    const [data,fields] = await db.query("SELECT * FROM users where UserID="+id)
    return data[0]
  } catch(err) {
    return false
  }
}

async function getByUserName(un) {
  try {
    const [data,fields] = await db.query(`SELECT * FROM users where UserName='${un}'`)
    return data[0]
  } catch(err) {
    return false
  }
}

async function insert(formdata) {
  try {
    const [data,fields] = await db.query(`INSERT INTO users (UserID, UserName,Password) VALUES ('${formdata.UserID}', '${formdata.UserName}', '${formdata.Password}')`)
    return data
  } catch(err) {
    return false
  }
}

async function update(id,formdata) {
  try {
    const [data,fields] = await db.query(`UPDATE users SET UserName = '${formdata.UserName}', Password = '${formdata.Password}' WHERE users.UserID = ${id}`)
    return data
  } catch(err) {
    return false
  }
}

async function deleteById(id) {
  try {
    const [data,fields] = await db.query(`DELETE FROM users WHERE UserID = ${id}`)
    return data
  } catch(err) {
    return false
  }
}

export default {getAll,getByID,insert,update,deleteById,getByUserName}