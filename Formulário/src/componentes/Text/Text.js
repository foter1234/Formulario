import './Text.css'

const Text = (props) => {
   
    const digitar = (evento) => {
        props.alterar(evento.target.value)
    }

    return(
        <div className='Text'>
            <label>
                {props.label}
            </label>
            <input type="text" value={props.valeime} onChange={digitar} required={props.obrigatorio}placeholder={props.placeholder}/>
        </div>
    )
}
export default Text
