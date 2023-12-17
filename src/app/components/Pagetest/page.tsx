'use client'
import Link from "next/link";
import React,{useState} from "react";
import { useRouter } from "next/navigation";

const Test = () =>{

  const [repetir, setRepetir] = useState(1);

  const router = useRouter();

  const fetchPosts = () => {

    const reconocimiento = new window.webkitSpeechRecognition();
    reconocimiento.lang = "es-ES";

      let mensaje = new SpeechSynthesisUtterance("pagina de Evaluacion");
      window.speechSynthesis.speak(mensaje);
      let mensaje1 = new SpeechSynthesisUtterance("Para relizar el primer test di comenzar");
      window.speechSynthesis.speak(mensaje1);
      let mensaje2 = new SpeechSynthesisUtterance("Para regresar a la pagina principal di regresar");
      window.speechSynthesis.speak(mensaje2);
      let mensaje3 = new SpeechSynthesisUtterance("para repetir este menu presiona una tecla");
      window.speechSynthesis.speak(mensaje3);


      setTimeout(() => {
        reconocimiento.onresult = function (event) {
          console.log(event.results[0][0].transcript);
          var ban = (event.results[0][0].transcript);
          console.log(ban);
          
          if(ban=="Comenzar." || ban=="comenzar"){
            router.push("/components/video");
          }
          else if(ban=="Regresar." || ban=="regresar"){
            router.push("/");
          }          
        };
        reconocimiento.start();
      }, 12000);
    

  };  

  
  if(repetir==1){
    setRepetir(2);
    fetchPosts()
  }


    return(
        <div className="row row-cols-1 row-cols-md-3 g-4 m-5" onKeyDown={fetchPosts} tabIndex={0}>
  <div className="col">
    <div className="card border-info mb-3">
      <img src="/img/Test1.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Test 1</h5>
        <p className="card-text">Take a test of how much English you know and get to 
        know yourself a little more. This test is created by OXFORD and we consider it
         to be the most realistic and correct option regarding your knowledge..</p>
      </div>
      <Link href="/components/video">More</Link>
      <button type="button" className="btn btn-outline-info btn-lg">More    </button>
    </div>
  </div>
  <div className="col">
    <div className="card border-info mb-3">
      <img src="/img/Test2.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Test 2</h5>
        <p className="card-text">TWe are sure that taking evaluations that measure your level of 
        English will motivate you more to visit this place. select the "more" button to have fun 
        for a while by completing three fun tests.</p>
      </div>
      <button type="button" className="btn btn-outline-info btn-lg"><a href="https://grupovaughan.com/test-nivel-ingles/" >  More  </a></button>
    </div>
  </div>
  <div className="col">
    <div className="card border-info mb-3">
      <img src="/img/Test3.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Test 3</h5>
        <p className="card-text">The SENA official website has very good projects to learn English, 
        stop by and encourage yourself to be part of these courses that will enhance your knowledge.</p>
        
      </div>
      <button type="button" className="btn btn-outline-info btn-lg">
      <a href="http://oferta.senasofiaplus.edu.co/sofia-oferta/buscar-oferta-educativa.html?radio=opcion199&buscador_texto=ingles&ofertaDisponible=on&ffv=-1&ciudad=Ej%3A+Cali%2C+Cartagena&campoEmpresa=&nfct=-1">  More  </a></button>
    </div>
  </div>
</div>
    );
}
export default Test;