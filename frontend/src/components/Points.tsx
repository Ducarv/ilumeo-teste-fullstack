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
                    <span>Usuário</span>
                </div>
            </div>

            <div className="points-today">
                <div>
                    <p>0h 00m</p>
                    <span>Horas de hoje</span>
                </div>

                <button>Hora de entrada</button>
            </div>

            <div className="points-previous">
                <p>Dias anteriores</p>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Points