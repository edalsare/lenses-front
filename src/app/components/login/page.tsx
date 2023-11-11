"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const App = () => {
  
  useEffect(() => {
    
  }, []);


  const [ban, setBan] = useState(1);
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");
  const router = useRouter();

  const fetchPosts = () => {

    const reconocimiento = new window.webkitSpeechRecognition();
    reconocimiento.lang = "es-ES";

    if(ban==1){
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
          
          if(ban=="Continuar."){
            //se encarga de ecuchar e ingresar usuario
            let mensaje = new SpeechSynthesisUtterance("Menciona usario");
            window.speechSynthesis.speak(mensaje);
            setTimeout(() => {
              reconocimiento.onresult = function (event) {
                setNombre(event.results[0][0].transcript);
              };
              reconocimiento.start();
            }, 1200);
            //se encarga de ecuchar e ingresar contraseña
          setTimeout(() => {
            setBan(2);
            let mensaje1 = new SpeechSynthesisUtterance("Menciona Contraseña");
            window.speechSynthesis.speak(mensaje1);
              setTimeout(() => {
              reconocimiento.onresult = function (event) {
                setContrasena(event.results[0][0].transcript);
              };
              reconocimiento.start();
            }, 1500);
          }, 4800);
          }//fin if continuar
          else if(ban=="Siguiente."){
            router.push("/components/register");
          }//fin if siguiente
          else if(ban=="Regresar."){
            router.push("/");
          }          
        };
        reconocimiento.start();
      }, 10000);
    }else if(ban==2){
      let mensaje1 = new SpeechSynthesisUtterance("Di aceptar para ingresar, o di cancelar para declinar");
            window.speechSynthesis.speak(mensaje1);
            reconocimiento.onresult = function (event) {
              var men=(event.results[0][0].transcript);
              if(men=="Aceptar."){
                setBan(1);
                setNombre("");
                setContrasena("");
              }else if(men=="Cancelar."){
                setBan(1);
                setNombre("");
                setContrasena("");
              }
            };
            reconocimiento.start();
    } 

  };  

  return (
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
                    Usser
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
                  <a href="/components/register" className="link-info">
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
