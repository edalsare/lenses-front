"use client"
import React, {useState,useLayoutEffect} from "react";
import { useRouter } from "next/navigation";
import "./Homes.css";

const Homes = () => {
const [repetir, setRepetir] = useState(1);
const [items, setItems] = useState(" ");
const router = useRouter();

  

  const navMenu = () =>{
    
      let mensaje2 = new SpeechSynthesisUtterance("Bienvenido, menciona las iguientes palabras para navegar");
      window.speechSynthesis.speak(mensaje2);
      let mensaje1 = new SpeechSynthesisUtterance("uno, menciona evaluar para probar tus conocimientos");
      window.speechSynthesis.speak(mensaje1);
      let mensaje3 = new SpeechSynthesisUtterance("dos, menciona comenzar para iniciar sesion o registrarte");
      window.speechSynthesis.speak(mensaje3);
      let mensaje4 = new SpeechSynthesisUtterance("tres, menciona mensaje para dejarnos tus inquietudes");
      window.speechSynthesis.speak(mensaje4);
      let mensaje5 = new SpeechSynthesisUtterance("para repetir este menu presiona una tecla");
      window.speechSynthesis.speak(mensaje5);


      setTimeout(() => {
        const reconocimiento = new window.webkitSpeechRecognition();
      reconocimiento.lang = "es-ES";
        reconocimiento.onresult = function (event) {
          var aux = (event.results[0][0].transcript);
          if(aux=="Repetir." || aux=="repetir"){            
            setItems(event.results[0][0].transcript);
            navMenu();
          }else if(aux=="Comenzar." || aux=="comenzar" ){
            router.push("/components/login");
          }else if(aux=="Evaluar." || aux=="evaluar" ){
            router.push("/components/Pagetest");
          }else if(aux=="Mensaje." || aux=="mensaje" ){
            router.push("/components/pqrs");
          }
        };
        reconocimiento.start();
      }, 20000);

    

    
    
      

  }
  if(repetir==1){
    setRepetir(2);
    navMenu();
  }
  return (
    <div className="container text-center" onKeyDown={navMenu} tabIndex={0}>
      <h1>Press any key</h1>
      <h1>About us</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col-10 content">
          We are a page intended for people with low vision, we want to be part
          of those who give ludic knowledge to cover more about people with this
          type of disability. We recognize that there is still not enough
          knowledge about how a topic should be explained to make it easier to
          learn, but we use the most common way, which is through auditory
          content. a great compilation of existing material on the web with good
          communication of the content..
        </div>
        <div className="col"></div>
      </div>

      <div className="row">
        <div className="col"></div>
        <div className="col-5 content">
          <div className="card" style={{ width: "100%" }}>
            <h1 className="bi bi-eye-fill icons"></h1>
            <div className="card-body">
              <h5 className="card-title">Vision</h5>
              <p className="card-text">
                We want to be a recognized and useful site for the community
                with low vision, transforming ourselves into a support for the
                development of competencies, integrating the basic means for the
                acquisition of a new language. We seek approval in various
                social networks so that many more people can meet us and join
                this community of people determined to learn. As a sole purpose,
                we only want people with visual disabilities to take us as
                support for their lives and as an easy way to learn a new
                language, quickly and efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="col-5 content">
          <div className="card" style={{ width: "100%" }}>
            <h1 className="bi bi-radar icons"></h1>
            <div className="card-body">
              <h5 className="card-title">Mission</h5>
              <p className="card-text">
                We are a page intended for people with low vision, we want to be
                part of those who give ludic knowledge to cover more about
                people with this type of disability. We recognize that there is
                still not enough knowledge about how a topic should be explained
                to make it easier to learn, but we use the most common way,
                which is through auditory content. a great compilation of
                existing material on the web with good communication of the
                content. That is why we seek to extend our content to all the
                people who feel they need it and are willing to give a new turn
                to their life.
              </p>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
export default Homes;
