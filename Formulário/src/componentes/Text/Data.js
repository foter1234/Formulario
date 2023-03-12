import './Text.css'
import './Text.js'
const Data = (props) => {
   
    const digitar = (evento) => {
        props.alterar(evento.target.value)
    }

    return(
        <div className='Text'>
            <label>
                {props.label}
            </label>
            <input type="date" value={props.valeime} onChange={digitar} required={props.obrigatorio}/>
        </div>
    )
}
export default Data