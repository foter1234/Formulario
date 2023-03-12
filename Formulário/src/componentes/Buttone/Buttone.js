import './Buttone.css'

const Buttone = (props) => {

    return(
        <button className='Bottone'>
            {props.children}
        </button>
    )

}

export default Buttone