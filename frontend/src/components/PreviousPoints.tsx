import { useEffect, useState } from "react";
import { getPreviousPoints } from "../services/api/pointApi";
import { formatHours } from "../services/FormatHours";
import { calculateTotalHours } from "../services/CalculateTotalHours";
import { getFormattedDateKey, formatDate } from "../services/FormatDate";
import "./PreviousPoints.css"

function PreviousPoints({ userId }: { userId: string }) {
  const [previousDays, setPreviousDays] = useState<{ date: string; totalHours: number }[]>([]);

  useEffect(() => {
    async function fetchPreviousPoints() {
      try {
        const points = await getPreviousPoints(userId);
        const daysMap = new Map<string, number>();

        points.forEach(point => {
          const startTime = new Date(point.startTime);
          const endTime = point.endTime ? new Date(point.endTime) : new Date();

          const dateKey = getFormattedDateKey(startTime);

          const totalHours = calculateTotalHours(startTime, endTime);

          if (daysMap.has(dateKey)) {
            daysMap.set(dateKey, daysMap.get(dateKey)! + totalHours);
          } else {
            daysMap.set(dateKey, totalHours);
          }
        })
        
        const formattedDays = Array.from(daysMap).map(([date, totalHours]) => ({
          date: formatDate(new Date(date)),
          totalHours,
        }));

        setPreviousDays(formattedDays);
      } catch (error) {
        console.error("Error fetching previous points:", error);
      }
    }

    fetchPreviousPoints();
  }, [userId]);

  

  return (
    <div className="previous-points">
      <p>Dias anteriores</p>
      <ul>
        {previousDays.map((entry, index) => (
          <li key={index}>
            <span className="list-date">{entry.date}</span>
            <span>{formatHours(entry.totalHours)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PreviousPoints;
