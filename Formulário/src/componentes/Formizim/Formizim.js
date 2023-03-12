import "./Formizim.css";
import Text from "../Text/Text"
import Buttone from "../Buttone/Buttone";
import List from "../List/List";
import Data from "../Text/Data"
import Number from "../Text/Number"
import { useState } from "react";

const Formizim = (props) => {

  const [nome, setNome] = useState("");
  const [professor, setProfessor] = useState("");
  const [datanascimento, setDatanascimento] = useState("");
  const [nota, setNota] = useState("");
  const [serie, setSerie] = useState("");

  const Salveme = (evento) => {
    evento.preventDefault()
    props.aoAlunosCadastrado({
      nome, professor, datanascimento, nota, serie  
    });
};

  return (
    <section className="Forme">
      <form onSubmit={Salveme}>
        <h1>CADASTRE AS SEGUINTES INFORMAÇÕES</h1>
        <div className="imgs">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Instituto_Federal_Marca_2015.svg/640px-Instituto_Federal_Marca_2015.svg.png" alt="aluno"/>
        </div>

<Text
    obrigatorio={true}
    label="Nome"
    placeholder="Nome do aluno"
    valeime={nome}
    alterar={valeime => setNome(valeime)} />
<Text
    obrigatorio={true}
    label="Professor"
    placeholder="Nome do professor"
    valeime={professor}
    alterar={valeime => setProfessor(valeime)} />
<Data
    label="Data"
    valeime={datanascimento}
    alterar={valeime => setDatanascimento(valeime)}/>
<Number
    label="Nota"
    placeholder="Nota do anuno"
    valor={nota}
    alterar={valeime => setNota(valeime)}/>
<List
    label="Series"
    itens={props.series}
    valeime={serie}
    alterar={(valeime) => setSerie(valeime)}/>
       
        <Buttone><span>Salvar</span></Buttone>
      </form>
    </section>
  );
};

export default Formizim
