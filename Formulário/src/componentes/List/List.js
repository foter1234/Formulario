import './List.css'

const List = (props) => {

    return (
        <div className='lista'>
            <label>
                {props.label}
            </label>
                <select onChange={evento => props.alterar(evento.target.value)} value={props.value}>
                    {props.itens.map(item =>{return <option key={item}>{item}</option>})}
                </select>
        </div>
    )

}

export default List



