import { useState } from "react";
import "./App.css";
import ShowUserName from "./Componentes/ShowUserName";
import Time from "./Componentes/Time";
import JorgeMateus_e_luciano from "./Componentes/JorgeMateus_e_luciano";
const App = () => {
  const nj = 10;
  const titulo = true;

  const nome = "Cris";
  const [name] = useState("Ney");
  const [cantores] = useState([
    { id: 1, name: "Michael Jackson", estiloMusica: "POP", premio: true },
    { id: 2, name: "Pipokinha", estiloMusica: "Funk", premio: false },
    { id: 3, name: "Racionais", estiloMusica: "Rap", premio: true },
  ]);
  return (
    <>
      {/* //Renderinzação de cmponente com props  */}
      {/* <ShowUserName name={nome} />; */}
      {/* --------//------------//-----------//---------*/}
      {/* Props dom desestruturação */}
      {/* <Time nome = "Flamengo" estado = "RJ"  posicao= {1} campeao = {true}/>
    <hr />
    <Time nome = "Real Madri" estado = "MD"  posicao= {2} campeao = {true}/>
    <hr />
    <Time nome = "Vasco da Gama" estado = "RJ"  posicao= {100} campeao = {false}/>
    <hr /> */}
      {/* <JorgeMateus_e_luciano id = {0} nome = "Racionais" estiloMusica = "Rap" premio = {true}/>
    <JorgeMateus_e_luciano id = {1} nome = "Jorge e Mateus" estiloMusica = "Sertanejo" premio = {false}/>
    <JorgeMateus_e_luciano id = {2} nome = "MC pipokinha"
    estiloMusica = "Funk" premio = {false}/> */}

      {/*Reenderização da lista passagem de grupos para componentes  */}
      {/* {
      cantores.map((cantor) => (
        <JorgeMateus_e_luciano key={cantor.id} nome={cantor.name} estiloMusica={cantor.estiloMusica} premio={cantor.premio}/>
      ))
    } */}

  {/*Da para utilizar caso qm esteja acesando seja um adm, funcionario , etc..  */}
      <h2
        style={
          nj > 5
            ? { color: "green", backgroundColor: "yellow", fontSize: "30xp" }
            : { color: "red", backgroundColor: "blue", fontSize: "30xp" }
        }
      >
        Este CSS é dinamico
      </h2>
      <h2 style={
          nj < 5
            ? { color: "green", backgroundColor: "yellow", fontSize: "30xp" }
            : { color: "red", backgroundColor: "blue", fontSize: "30xp" }
        }>Este CSS tbm é dinamico</h2>

        <h1
        className={
          titulo ? "titulo-incrivel" : "texto-paia"
        }
        >Titulo Incivel para teste</h1>
    </>
  );
};

export default App;
