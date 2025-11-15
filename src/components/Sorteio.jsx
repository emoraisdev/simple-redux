import { useSelector } from 'react-redux'
import Card from './Card'

export default props => {

    const { min, max } = useSelector(state => state.intervalo)
    const randomNumber = parseInt(Math.random() * (max - min)) + min

    return (
        <Card title="Sorteio de um Número" purple >
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{randomNumber}</strong>
                </span>
            </div>
        </Card>
    )
}