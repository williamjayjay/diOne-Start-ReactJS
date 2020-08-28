import React from 'react'
import mock from '../mock'
import ButtonInteract from '../components/Button'

const App = () => {

    const handleClick = (e, id) => {
        // console.log(e, '\n Deletar Cliente')
        alert(`ID do cliente: ${id}`)
    }

    const renderCostumers = (customer, index) => {
        return (
            <div style={{paddingBottom:15}} key={customer.id} >
                <li key={customer.id} > {`ID:${customer.id}\n   -NOME: ${customer.name} `} <ButtonInteract onClick={ (e) => handleClick(e, customer.id) } >Deletar Cliente X </ButtonInteract>  </li> 
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{paddingLeft:30}} key={index} >
                <li> {skill} </li>
            </div>
        )
    }
    
    const name = 'Digital Inovation One'
    
    const showEvent = (e) => {
        console.log('Evento Clicado!!!')
        console.log(e)
        alert(name)
    }

    
    const handleChange = (e) => {
        const {value} = e.target
        console.log(value)
    }

    const Button = <button onClick={showEvent} >Mostrar Evento</button>
    
    return (
        <div> 
            <p>Digital Inovation One</p>
            <p>Bem vindo a nossa aula.</p>
            <input onChange={handleChange} />
            {Button}
            <hr/>
        <div>
            <ul>
            {mock.map(renderCostumers)}

            </ul>
        </div>


        </div>
    )
}
export default App