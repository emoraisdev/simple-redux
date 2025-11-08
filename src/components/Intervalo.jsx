import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import './Intervalo.css'
import { setMax, setMin } from './intervaloSlice'

export default props => {

    const dispatch = useDispatch()
    const { min, max } = useSelector(state => state.intervalo)

    const handleMinChange = (e) => {
        dispatch(setMin(Number(e.target.value)))
    }

    const handleMaxChange = (e) => {
        dispatch(setMax(Number(e.target.value)))
    }

    return (
        <Card title="Intervalo de Números" red >
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number"
                        value={min}
                        onChange={handleMinChange} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number"
                        value={max}
                        onChange={handleMaxChange} />
                </span>
            </div>
        </Card>
    )
}