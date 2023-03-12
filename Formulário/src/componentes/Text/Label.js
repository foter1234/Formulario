import './Text.css'
import { useState } from 'react'


const Text = (props) => {
    const [valeime, setValeime] = useState('')
    const digitar = (evento) => {
        setValeime(evento.target.value)
        console.log(valeime)
    }

    return(
        <div className='Text'>
            <label>
                {props.label}
            </label>
            <input value={valeime} onChange={digitar} required={props.obrigatorio}placeholder={props.placeholder}/>
        </div>
    )
}
export default Text