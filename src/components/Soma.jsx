import { useSelector } from 'react-redux'
import Card from './Card'

export default props => {
    
    const { min, max } = useSelector(state => state.intervalo)
    const soma = max + min

    return (
        <Card title="Soma dos Números" blue >
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{soma}</strong>
                </span>
            </div>
        </Card>
    )
}