import  Usuario from '../Usuario/usuario'
import './Serie.css'

const Serie = (props) => {
    return (
        <section className='serie' style={{ backgroundColor: props.corDeFundo} }>
            <h3 style={{ borderColor: props.corDeBorda}} >{props.nome}</h3>
            <div className='Usuario'>
            {props.aluno.map(alunos =><Usuario nome={alunos.nome} professor={alunos.professor} datanascimento={alunos.datanascimento} nota={alunos.nota}/>)}
            </div>
        </section>
    )
} 

export default Serie;

