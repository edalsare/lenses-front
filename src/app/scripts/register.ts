'use client'
import React, {useContext} from "react";
import axios from "axios";

var names:string;
var last_names:string, users:string, telephone:string, email:string, password:string;

export const saveUser = async () => {

  
  let register = {
    names,
    last_names,
    telephone,
    email,
    password,    
    users
  };
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };
  let res = await axios.post("http://localhost:8000/register/save", register);
  let user = await res.data;
 
};

export function dats(namesr:string, lastnamer:string, usersr:string, telephoner:string, emailr:string, passwordr:string){
    names = namesr;
    last_names = lastnamer;
    users = usersr;
    telephone = telephoner;
    email = emailr;
    password = passwordr;

}

export const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  if (e.target.id === "names") {
    names = e.target.value;
  } else if (e.target.id === "lastName") {
    last_names = e.target.value;
  } else if (e.target.id === "user") {
    users = e.target.value;
  }else if (e.target.id === "telephone") {
    telephone = e.target.value;
  }else if (e.target.id === "email") {
    email = e.target.value;
  }else if (e.target.id === "password") {
    password = e.target.value;
  }
};