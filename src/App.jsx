import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className='App'>
      <h4>Exercício React-Redux</h4>
      <div className='linha'>
        <Card title="Card 1" red>
          Teste 123
        </Card>
        
      </div>
      <div className='linha'>
        <Card title="Card 2" green>
          Teste 123
        </Card>
        <Card title="Card 2" blue>
          Teste 123
        </Card>
        <Card title="Card 2" purple>
          Teste 123
        </Card>
      </div>
    </div>
  )
}

export default App
