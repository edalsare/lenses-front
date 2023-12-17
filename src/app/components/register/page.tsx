"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { handleChange, saveUser, dats } from "@/app/scripts/register";

const Register = () => {
  useEffect(() => {}, []);

  const [estado, setEstado] = useState(1);
  const [men, setMen] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [users, setUsers] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recon, setRecon] = useState("");
  const router = useRouter();
  const [repetir, setRepetir] = useState(1);
  var ban = "";

  const escuchar = () => {
    const reconocimiento = new window.webkitSpeechRecognition();
    reconocimiento.lang = "es-ES";
    reconocimiento.onresult = function (event) {
      setMen(event.results[0][0].transcript);
      setEstado(estado + 1);
    };
    reconocimiento.start();
  };

  const mensaje = () => {
    let mensaje = new SpeechSynthesisUtterance("página de registro.");
    window.speechSynthesis.speak(mensaje);
    let mensaje1 = new SpeechSynthesisUtterance(
      "para registrarte di continuar."
    );
    window.speechSynthesis.speak(mensaje1);
    let mensaje2 = new SpeechSynthesisUtterance(
      "Para regresar al menu anterior di regresar."
    );
    window.speechSynthesis.speak(mensaje2);
    let mensaje3 = new SpeechSynthesisUtterance(
      "Di inicio para volver a la página principal"
    );
    window.speechSynthesis.speak(mensaje3);
    let mensaje4 = new SpeechSynthesisUtterance(
      "despues de cada comando presiona una tecla"
    );
    window.speechSynthesis.speak(mensaje4);

    setTimeout(() => {
      escuchar();
    }, 13000);
  };

  const fetchPosts = () => {
    const reconocimiento = new window.webkitSpeechRecognition();
    reconocimiento.lang = "es-ES";

    if (estado == 1) {
      mensaje();
    }

    if (men == "Continuar." || men == "continuar") {
      if (estado == 2) {
        //se encarga de ecuchar e ingresar usuario
        setTimeout(() => {
        reconocimiento.onresult = function (event) {
          setNombre(event.results[0][0].transcript);
          setEstado(estado + 1);
        };
        reconocimiento.start();
      }, 1000);
        let mensaje = new SpeechSynthesisUtterance("Menciona tu nombre");
        window.speechSynthesis.speak(mensaje);
      } else if (estado == 3) {
        setTimeout(() => {
        reconocimiento.onresult = function (event) {
          setApellido(event.results[0][0].transcript);
          setEstado(estado + 1);
        };
        reconocimiento.start();
      }, 1000);

        let mensaje = new SpeechSynthesisUtterance("Menciona tus apellidos");
        window.speechSynthesis.speak(mensaje);
      } else if (estado == 4) {
        setTimeout(() => {
        reconocimiento.onresult = function (event) {
          setUsers(event.results[0][0].transcript);
          setEstado(estado + 1);
        };
        reconocimiento.start();
      }, 1000);

        let mensaje = new SpeechSynthesisUtterance("Menciona tu usuario");
        window.speechSynthesis.speak(mensaje);
      } else if (estado == 5) {
        setTimeout(() => {
        reconocimiento.onresult = function (event) {
          setTel(event.results[0][0].transcript);
          setEstado(estado + 1);
        };
        reconocimiento.start();
      }, 1000);

        let mensaje = new SpeechSynthesisUtterance("Menciona tu teléfono");
        window.speechSynthesis.speak(mensaje);
      } else if (estado == 6) {
        setTimeout(() => {
        reconocimiento.onresult = function (event) {
          setEmail(event.results[0][0].transcript);
          setEstado(estado + 1);
        };
        reconocimiento.start();
      }, 1000);

        let mensaje = new SpeechSynthesisUtterance("Menciona tu correo");
        window.speechSynthesis.speak(mensaje);
      } else if (estado == 7) {
        setTimeout(() => {
        reconocimiento.onresult = function (event) {
          setPassword(event.results[0][0].transcript);
          setEstado(estado + 1);
        };
        reconocimiento.start();
      }, 1000);

        let mensaje = new SpeechSynthesisUtterance("Menciona tu contraseña");
        window.speechSynthesis.speak(mensaje);
      } else if (estado == 8) {
        setTimeout(() => {
        reconocimiento.onresult = function (event) {
          setRecon(event.results[0][0].transcript);
          setEstado(estado + 1);
        };
        reconocimiento.start();
      }, 1000);

        let mensaje = new SpeechSynthesisUtterance("repite tu contraseña");
        window.speechSynthesis.speak(mensaje);
      } else if (estado == 9) {
        setTimeout(() => {
          reconocimiento.onresult = function (event) {
            var aux = event.results[0][0].transcript;
            if (aux == "Aceptar." || aux == "aceptar") {
              dats(nombre, apellido, users, tel, email, password)
              saveUser()
              setNombre("");
              setApellido("");
              setUsers("");
              setEmail("");
              setTel("");
              setPassword("");
              setRecon("");
              setEstado(1);
              setMen("");
              router.push("/components/myhome");
            } else if (aux == "Cancelar." || aux == "cancelar") {
              setNombre("");
              setApellido("");
              setUsers("");
              setEmail("");
              setTel("");
              setPassword("");
              setRecon("");
              setEstado(1);
              setMen("");
            }
          };
          reconocimiento.start();
        }, 4500);

        let mensaje = new SpeechSynthesisUtterance(
          "Di aceptar para enviar el registro, o cancelar para eliminar el registro"
        );
        window.speechSynthesis.speak(mensaje);
      }
    } //fin if continuar
    else if (men == "Regresar." || men == "regresar") {
      router.push("/components/login");
    } //fin if siguiente
    else if (men == "Inicio." || men == "inicio") {
      router.push("/");
    }
  };

  if(repetir==1){
    setRepetir(2);
    fetchPosts();
  }

  return (
    <section className="pb-0" onKeyDown={fetchPosts} tabIndex={0}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="/img/register.jpeg"
              alt="Login image"
              className="w-100 vh-100"
            />
          </div>
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"></i>
              <span className="h1 fw-bold mb-0">LENSES</span>
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form>
                <h3 className="fw-normal mb-3 pb-3">Register</h3>

                <div className="row form-outline mb-4">
                  <div className="col">
                    <input
                      type="text"
                      id="names"
                      defaultValue={nombre}
                      onChange={handleChange}
                      className="form-control form-control-lg shadow"
                    />
                    <label className="form-label" form="names">
                      Names
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="lastName"
                      defaultValue={apellido}
                      onChange={handleChange}
                      className="form-control form-control-lg shadow"
                    />
                    <label className="form-label" form="LastName">
                      Last Name
                    </label>
                  </div>
                </div>

                <div className="row form-outline mb-4">
                  <div className="col">
                    <input
                      type="text"
                      id="user"
                      defaultValue={users}
                      onChange={handleChange}
                      className="form-control form-control-lg shadow"
                    />
                    <label className="form-label" form="user">
                      Usser
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="telephone"
                      defaultValue={tel}
                      onChange={handleChange}
                      className="form-control form-control-lg shadow"
                    />
                    <label className="form-label" form="telephone">
                      Telephone
                    </label>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="email"
                    defaultValue={email}
                    onChange={handleChange}
                    className="form-control form-control-lg shadow"
                  />
                  <label className="form-label" form="email">
                    email
                  </label>
                </div>

                <div className="row form-outline mb-4">
                  <div className="col">
                    <input
                      type="password"
                      id="password"
                      defaultValue={password}
                      onChange={handleChange}
                      className="form-control form-control-lg shadow"
                    />
                    <label className="form-label" form="password">
                      password
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="password"
                      id="repeat"
                      defaultValue={recon}
                      className="form-control form-control-lg shadow"
                    />
                    <label className="form-label" form="repeat">
                      repeat Password
                    </label>
                  </div>
                </div>

                <div className="pt-1 mb-4 ">
                  <button
                  onClick={saveUser}
                    className="btn btn-outline-success btn-lg  shadow"
                    type="button"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
