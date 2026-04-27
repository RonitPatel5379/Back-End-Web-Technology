import userModel from "../models/users.model.js";
import jwt from "jsonwebtoken";

const { getAll, getByID, insert, update, deleteById, getByUserName } =userModel;

async function getAllUsers() {
  const data = await getAll();
  if (data) {
    return {
      error: false,
      data,
      message: "Users fetched successfully",
    };
  } else {
    return {
      error: true,
      message: "Some error occured while fetching the users",
    };
  }
}

async function getUserByID(id) {
  const data = await getByID(id);
  if (data) {
    return {
      error: false,
      data,
      message: "User fetched successfully",
    };
  } else {
    return {
      error: true,
      message: "Some error occured while fetching the user",
    };
  }
}

async function checkLogin(formdata) {
  const data = await getByUserName(formdata.UserName);
  if (data) {
    if (data.Password === formdata.Password) {
      const token = jwt.sign(data, "write");
      return {
        error: false,
        data: token,
        message: "User fetched successfully",
      };
    }
    return {
      error: true,
      message: "Username/password does not match",
    };
  } else {
    return {
      error: true,
      message: "Username/password does not match",
    };
  }
}

async function insertUser(formdata) {
  const data = await insert(formdata);
  if (data) {
    return {
      error: false,
      data,
      message: "User inserted successfully",
    };
  } else {
    return {
      error: true,
      message: "Some error occured while inserting the user",
    };
  }
}

async function updateUser(id, formdata) {
  const data = await update(id, formdata);
  if (data) {
    return {
      error: false,
      data,
      message: "User updated successfully",
    };
  } else {
    return {
      error: true,
      message: "Some error occured while updating the user",
    };
  }
}

async function deleteUser(id) {
  const data = await deleteById(id);
  if (data) {
    return {
      error: false,
      data,
      message: "User deleted successfully",
    };
  } else {
    return {
      error: true,
      message: "Some error occured while deleting the user",
    };
  }
}

export default {
  getAllUsers,
  getUserByID,
  insertUser,
  updateUser,
  deleteUser,
  checkLogin,
}; 
