export const formatHours = (totalHours: number) => {
    const hours = Math.floor(totalHours);
    const decimalMinutes = (totalHours - hours) * 60;
    const minutes = Math.round(decimalMinutes);

    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${hours}h ${formattedMinutes}m`;
}


