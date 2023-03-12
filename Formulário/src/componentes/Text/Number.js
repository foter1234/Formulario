import './Text.css'
import './Text.js'
const Number = (props) => {
   
    const digitar = (evento) => {
        props.alterar(evento.target.value)
    }

    return(
        <div className='Text'>
            <label>
                {props.label}
            </label>
            <input type="number" value={props.valeime} onChange={digitar} required={props.obrigatorio}placeholder={props.placeholder}/>
        </div>
    )
}
export default Number