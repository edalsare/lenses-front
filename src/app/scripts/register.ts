import axios from "axios";

var names:string;
var lastname:string, users:string, telephone:string, email:string, password:string;

export const handleEmail = async () => {
  
  let register = {
    names,
    lastname,
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

export function speak(namesr:string, lastnamer:string, usersr:string, telephoner:string, emailr:string, passwordr:string){
    names = namesr;
    lastname = lastnamer;
    users = usersr;
    telephone = telephoner;
    email = emailr;
    password = passwordr;

}

export const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  if (e.target.id === "names") {
    names = e.target.value;
  } else if (e.target.id === "lastName") {
    lastname = e.target.value;
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