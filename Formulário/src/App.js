import { useState } from 'react';
import Formizim from "./componentes/Formizim/Formizim";
import Serie from "./componentes/Serie/Serie";
import "./App.css";

function App() {

  const series = [
    {
      nome: '8 Ano',
      corPrimaria: '#0bd629',
      corSecundaria: ' #17b62e',
  },
  {
      nome: '9 Ano',
      corPrimaria: '#0ccf29',
      corSecundaria: '#19bb32',
  },
  {
      nome: '1 Ano',
      corPrimaria: '#0bd629',
      corSecundaria: '#0cc728',
  },
  {
      nome: '2 Ano',
      corPrimaria: '#19bb32',
      corSecundaria: '#0ccf29',
  },
  {
      nome: '3 Ano',
      corPrimaria: '#17b62e',
      corSecundaria: '#0bd629',
  },
  ]

  const [aluno, setAluno] = useState([])

const aoAlunosAdicionado = (alunos) =>{ 
console.log(alunos)
setAluno([...aluno, alunos ])
}
  return (
    <div className="App">
      <Formizim series={series.map(serie => serie.nome)} aoAlunosCadastrado={alunos => aoAlunosAdicionado(alunos) }/>
      {series.map(serie =><Serie
       key={serie.nome} 
       nome={serie.nome} 
       corDeBorda={serie.corPrimaria} 
       corDeFundo={serie.corSecundaria}
      aluno={aluno.filter(alunos => alunos.serie === serie.nome)}
       />)}
    
    </div>
  );
}

export default App;
