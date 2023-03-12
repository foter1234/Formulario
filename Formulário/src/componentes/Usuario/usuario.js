import './usuario.css'

const Usuario = (props) => {
    return(

    <div className='usuario'>
        
        <div className='cabecalho'>
            
            <img src="https://i0.wp.com/gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2021/02/nyan-cat-1.gif?fit=706%2C610&ssl=1" alt={props.professor}/>
            
        </div>
        <div className='rodape'>    
            <h4 id={props.nome}>Nome: {props.nome}</h4>
             <h5>Professor: {props.professor}</h5> 
             <h4>Data: {props.datanascimento}</h4>
             <h4>Nota: {props.nota}</h4>

        </div>
    </div>
    
        )
}

export default Usuario