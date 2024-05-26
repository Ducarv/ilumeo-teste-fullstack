import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { startShift, endShift, getTodayHours } from "../services/api/pointApi";
import { formatHours } from "../services/FormatHours";
import PreviousPoints from "./PreviousPoints";
import "./Points.css";

function Points() {
  const location = useLocation();
  const { userCode } = location.state;

  const [clockStatus, setClockStatus] = useState("entry");
  const [totalHoursWorked, setTotalHoursWorked] = useState(0);

  useEffect(() => {
    async function fetchTodayHours() {
      try {
        const hours = await getTodayHours(userCode);
        if (hours !== totalHoursWorked) {
          setTotalHoursWorked(hours);
        }
      } catch (error) {
        console.error("Error fetching today's hours:", error);
      }
    }

    fetchTodayHours();

    const intervalId = setInterval(fetchTodayHours, 5000);

    return () => clearInterval(intervalId);
  }, [userCode, totalHoursWorked]);

  const handleClockOperation = async () => {
    try {
      if (clockStatus === "entry") {
        await startShift(userCode);
        setClockStatus("exit");
      } else {
        await endShift(userCode);
        setClockStatus("entry");
      }
    } catch (error) {
      console.error("Error handling clock operation:", error);
    }
  };

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
          <p>
            {totalHoursWorked !== null
              ? formatHours(totalHoursWorked)
              : "Carregando..."}
          </p>
          <span>Horas de hoje</span>
        </div>

        <button onClick={handleClockOperation}>
          {clockStatus === "entry" ? "Hora de entrada" : "Hora de saída"}
        </button>
      </div>

      <div className="points-previous">
        <PreviousPoints userId={userCode} /> 
      </div>
    </div>
  );
}

export default Points;
