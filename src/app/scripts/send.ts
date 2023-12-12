import axios from "axios";

var names = "";
var email = "";
var message = "";
const mail ="";

export const handleEmail = async () => {
  
  let login = {
    names,
    email,
    message,
  };
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };
  let res = await axios.post("http://localhost:8000/email/send", login);
  let user = await res.data;
};

export function speak(name, mail, msj){
    names = name;
    email = mail;
    message = msj;

}

export const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  if (e.target.id === "FullName") {
    names = e.target.value;
  } else if (e.target.id === "EmailAdress") {
    email = e.target.value;
  } else if (e.target.id === "coment") {
    message = e.target.value;
  }
};
