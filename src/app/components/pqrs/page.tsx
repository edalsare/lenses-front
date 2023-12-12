"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { handleChange, handleEmail, speak } from "../../scripts/send";
const Pqrs = () => {
  const [men, setMen] = useState("");
  const [estado, setEstado] = useState(1);
  const [nombres, setNombres] = useState("");
  const [correo, setCorreo] = useState("");
  const [des, setDes] = useState("");
  const router = useRouter();

  const escuchar = () => {
    const reconocimiento = new window.webkitSpeechRecognition();
    reconocimiento.lang = "es-ES";
    reconocimiento.onresult = function (event) {
       setMen(event.results[0][0].transcript);
      setEstado(estado + 1);
      console.log(men);
    };
    reconocimiento.start();
  };

  const mensaje = () => {
    let mensaje = new SpeechSynthesisUtterance("página de sugerencias");
    window.speechSynthesis.speak(mensaje);
    let mensaje1 = new SpeechSynthesisUtterance(
      "para dejar tu  peticion di continuar"
    );
    window.speechSynthesis.speak(mensaje1);
    let mensaje3 = new SpeechSynthesisUtterance(
      "Di inicio para volver a la página principal"
    );

    window.speechSynthesis.speak(mensaje3);

    setTimeout(() => {
      escuchar();
    }, 8000);
  };

  const fetchPosts = () => {
    const reconocimiento = new window.webkitSpeechRecognition();
    reconocimiento.lang = "es-ES";

    if (estado == 1) {
      mensaje();
    }
    if (men == "Continuar." || men == "continuar") {
      if (estado == 2) {
        setTimeout(() => {
        reconocimiento.onresult = function (event) {
          setNombres(event.results[0][0].transcript);
          setEstado(estado + 1);
        };
        reconocimiento.start();
      }, 2000);
        let mensaje = new SpeechSynthesisUtterance(
          "Menciona tu nombre completo"
        );
        window.speechSynthesis.speak(mensaje);
      } else if (estado == 3) {
        setTimeout(() => {
        reconocimiento.onresult = function (event) {
          setCorreo(event.results[0][0].transcript);
          setEstado(estado + 1);
        };
        reconocimiento.start();
      }, 2000);
        let mensaje = new SpeechSynthesisUtterance("Menciona tu correo");
        window.speechSynthesis.speak(mensaje);
      } else if (estado == 4) {
        setTimeout(() => {
        reconocimiento.onresult = function (event) {
          setDes(event.results[0][0].transcript);
          setEstado(estado + 1);
        };
        reconocimiento.start();
      }, 2000);
        let mensaje = new SpeechSynthesisUtterance("Dejanos tu mensaje");
        window.speechSynthesis.speak(mensaje);
      } else if (estado == 5) {
        setTimeout(() => {
          reconocimiento.onresult = function (event) {
            var aux = event.results[0][0].transcript;
            if (aux == "Enviar." || aux == "enviar") {
              const namess = document.getElementById("FullName")?.ariaValueText;
              console.log(namess)
              speak(nombres, correo, des)
              handleEmail();
              router.push("/");
            } else if (aux == "Cancelar." || aux == "cancelar") {
              setNombres("");
              setCorreo("");
              setDes("");
              router.push("/");
            }
          };

          reconocimiento.start();
        }, 3000);
        let mensaje = new SpeechSynthesisUtterance(
          "Di enviar para aceptar el mensaje o cancelar para anular el envio"
        );
        window.speechSynthesis.speak(mensaje);
      }
    } else if (men == "Inicio." || men == "inicio") {
      router.push("/");
    }
  };

  return (
    <section className="vh-100" onKeyDown={fetchPosts} tabIndex={0}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-5 px-5 d-none d-sm-block">
            <img
              src="/img/pqrs.jpeg"
              alt="Login image"
              className="w-100 vh-100"
            />
          </div>
          <div className="col-sm-7 text-black">
            <div className="px-5  ms-xl-4">
              <span className="h1 fw-bold mb-0">LENSES</span>
            </div>
            <form className="px-5 ms-xl-4">
              <h3 className="fw-normal mb-3 pb-3"></h3>
              <div className="mb-3">
                <label form="FullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="Text"
                  onChange={handleChange}
                  className="form-control"
                  id="FullName"
                  defaultValue={nombres}
                  placeholder="Names"
                />
              </div>
              <div className="mb-3">
                <label form="EmailAdress" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  className="form-control"
                  id="EmailAdress"
                  defaultValue={correo}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label form="coment" className="form-label">
                  Coment
                </label>
                <input
                  onChange={handleChange}
                  className="form-control"
                  id="coment"
                  defaultValue={des}
                ></input>
              </div>
              <div className="float-end bottom-0 mt-5">
                <button
                  type="button"
                  className="btn btn-outline-success btn-lg"
                  onClick={handleEmail}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pqrs;
