import { useLocation } from "react-router-dom"
import "./Points.css"

function Points() {
    const location = useLocation();
    const { userCode } = location.state;

    return (
        <div className="points-container">
            <div className="points-header">
                <p>Relógio de ponto</p>
                <div>
                    <p>#{userCode}</p>
                    <p>Usuário</p>
                </div>
            </div>

            <div>
                <div>
                    <p>0h 00m</p>
                    <p>Horas de hoje</p>
                </div>

                <button>Hora de entrada</button>
            </div>

            <div>
                <p>Dias anteriores</p>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Points