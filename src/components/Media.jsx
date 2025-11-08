import { useSelector } from 'react-redux'
import Card from './Card'

export default props => {
    
    const { min, max } = useSelector(state => state.intervalo)
    const media = (max + min) / 2

    return (
        <Card title="Média dos Números" green >
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{media}</strong>
                </span>
            </div>
        </Card>
    )
}