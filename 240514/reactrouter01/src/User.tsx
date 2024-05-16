import React from "react";
import { useParams, Outlet } from "react-router-dom";
import {users} form "./db"

const User = () => {
  const { userId } = userParams();
  return (<h1>User with {userId} is name : {users[Number(userId) -1].name}</h1>)
};


export default User;
