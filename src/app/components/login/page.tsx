"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Register from "../regiter/register";
import Link from "next/link";

const App = () => {
  
  useEffect(() => {
    
  }, []);



  const [estado, setEstado] = useState("");
  const [ban, setBan] = useState(1);
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");
  const router = useRouter();

  const fetchPosts = () => {

    const reconocimiento = new window.webkitSpeechRecognition();
    reconocimiento.lang = "es-ES";

    let mensaje = new SpeechSynthesisUtterance("pagina de inicio de sesión");
      window.speechSynthesis.speak(mensaje);
      let mensaje1 = new SpeechSynthesisUtterance("Si te encuentras registrado di continuar");
      window.speechSynthesis.speak(mensaje1);
      let mensaje2 = new SpeechSynthesisUtterance("Para registrarte di siguiente");
      window.speechSynthesis.speak(mensaje2);
      let mensaje3 = new SpeechSynthesisUtterance("Para regresar al menu anterior di regresar");
      window.speechSynthesis.speak(mensaje3);


      setTimeout(() => {
        reconocimiento.onresult = function (event) {
          console.log(event.results[0][0].transcript);
          var ban = (event.results[0][0].transcript);
          
            let mensaje = new SpeechSynthesisUtterance("Menciona usario");
            window.speechSynthesis.speak(mensaje);
            setTimeout(() => {
              reconocimiento.onresult = function (event) {
                console.log(event.results[0][0].transcript);
                setNombre(event.results[0][0].transcript);
              };
              reconocimiento.start();
              setBan(2);
            }, 1200);
          setTimeout(() => {
            let mensaje1 = new SpeechSynthesisUtterance("Menciona Contraseña");
            window.speechSynthesis.speak(mensaje1);
            setTimeout(() => {
              reconocimiento.onresult = function (event) {
                console.log(event.results[0][0].transcript);
                setContrasena(event.results[0][0].transcript);
              };
              reconocimiento.start();
              setBan(2);
            }, 1500);
          }, 4800);
            
          
        };
        reconocimiento.start();
      }, 10000);
      

    
  };

  const prueba = () => {
    router.push("/prueba");
  };

  return (
    /*<div className="App" onKeyDown={fetchPosts} tabIndex={0}>
      <div >prueba</div>
      <button onClick={prueba}>aqui</button> 
      {estado === "Hola." ||estado === "Hola" ? <Register></Register> : <h1>no habla</h1>}
    </div>*/
    
    <section className="vh-100" onKeyDown={fetchPosts} tabIndex={0}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"></i>
              <span className="h1 fw-bold mb-0">LENSES</span>
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form>
                <h3 className="fw-normal mb-3 pb-3">Log in</h3>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form2Example18"
                    value={nombre}
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" form="form2Example18">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example28"
                    value={contrasena}
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" form="form2Example28">
                    Password
                  </label>
                </div>

                <div className="pt-1 mb-4">
                  <button
                    className="btn btn-info btn-lg btn-block"
                    type="button"
                  >
                    Login
                  </button>
                </div>

                <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </p>
                <p>
                  Don't have an account?{" "}
                  <a href="#!" className="link-info">
                    Register here
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="/img/login.jpeg"
              alt="Login image"
              className="w-100 vh-100"
            />
          </div>
        </div>
      </div>
    </section>
    
  );
};
export default App;
