import './App.css'
import Card from './components/Card'
import Intervalo from './components/Intervalo'
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'

function App() {

  return (
    <div className='App'>
      <h4>Exercício React-Redux</h4>
      <div className='linha'>
        <Intervalo />
      </div>
      <div className='linha'>
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  )
}

export default App
