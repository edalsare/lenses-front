'use client'
import Link from "next/link";
import React, {useContext, useState} from "react";
import { useRouter } from "next/navigation";


const MyHome = () =>{
  const [repetir, setRepetir] = useState(1);

  const router = useRouter();

  const fetchPosts = () => {

    const reconocimiento = new window.webkitSpeechRecognition();
    reconocimiento.lang = "es-ES";

      let mensaje = new SpeechSynthesisUtterance("pagina principal de usuario");
      window.speechSynthesis.speak(mensaje);
      let mensaje2 = new SpeechSynthesisUtterance("Para regresar a la pagina principal di regresar");
      window.speechSynthesis.speak(mensaje2);
      let mensaje3 = new SpeechSynthesisUtterance("para repetir este menu presiona una tecla");
      window.speechSynthesis.speak(mensaje3);


      setTimeout(() => {
        reconocimiento.onresult = function (event) {
          console.log(event.results[0][0].transcript);
          var ban = (event.results[0][0].transcript);
          console.log(ban);
          
          if(ban=="Regresar." || ban=="regresar"){
            router.push("/");
          }          
        };
        reconocimiento.start();
      }, 10000);
    

  };  

  
  if(repetir==1){
    setRepetir(2);
    fetchPosts()
  }
    return(
        <div onKeyDown={fetchPosts} tabIndex={0}>
        <div className="row justify-content-end ">
    <div className="col-4 text-end me-5"><h1><i className="bi bi-person-badge-fill"></i></h1>
        <input defaultValue={"Edison Salazar"}/>
    </div>
    </div>
<div className="row row-cols-1 row-cols-md-3 g-4 m-5">

  <div className="col">
    <div className="card border-info mb-3">
      <img src="/img/modulo1.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Module 1</h5>
        <p className="card-text">Start...</p> 
      </div>
      <Link href={"/components/video"} data-bs-toggle="modal" data-bs-target="#staticBackdrop">video</Link>
      <button type="button" className="btn btn-outline-info btn-lg"><a href=" ">More</a>    </button>
    </div>
  </div>
  <div className="col">
    <div className="card border-info mb-3">
      <img src="/img/modulo2.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Module 2</h5>
        <p className="card-text">Start...</p>
      </div>
      <button type="button" className="btn btn-outline-info btn-lg"><a href=" " >  More  </a></button>
    </div>
  </div>
  <div className="col">
    <div className="card border-info mb-3">
      <img src="/img/modulo3.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Module 3</h5>
        <p className="card-text">Start...</p>
        
      </div>
      <button type="button" className="btn btn-outline-info btn-lg">
      <a href=" ">  More  </a></button>
    </div>
  </div>
  <div className="col">
    <div className="card border-info mb-3">
      <img src="/img/modulo4.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Module 4</h5>
        <p className="card-text">Start...</p>
        
      </div>
      <button type="button" className="btn btn-outline-info btn-lg">
      <a href=" ">  More  </a></button>
    </div>
  </div>
  <div className="col">
    <div className="card border-info mb-3">
      <img src="/img/modulo 5.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Module 5</h5>
        <p className="card-text">Start.</p>
        
      </div>
      <button type="button" className="btn btn-outline-info btn-lg">
      <a href="">  More  </a></button>
    </div>
  </div>
  <div className="col">
    <div className="card border-info mb-3">
      <img src="/img/modulo6.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Module 6 3</h5>
        <p className="card-text">Start...</p>
        
      </div>
      <button type="button" className="btn btn-outline-info btn-lg">
      <a href="">  More  </a></button>
    </div>
  </div>
</div>


</div>
    );
}
export default MyHome;