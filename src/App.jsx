import ligada from './img/ligada.png'
import desligada from './img/desligada.png'
import quebrada from './img/quebrada.png'
import './App.css'
import { useState } from 'react'

function App() {

  const [imagem, setImagem] = useState(desligada)

  function lampOn(){
    setImagem(ligada)
  }

  function lampOff(){
    setImagem(desligada)
  }

  function lampBroken(){
    setImagem(quebrada)
  }
  return (
    <div className='container'>
      <h1>Lâmpada</h1>
      <img src={imagem} onDoubleClick={lampBroken} ></img>
      <p>Selecione o que deseja fazer com a lampada</p>
      <div className='btn'>
        <button onClick={lampOn}>
          Ligar
        </button>

        <button onClick={lampOff}>
          Desligar
        </button>
      </div>
    </div>
  )
}

export default App
