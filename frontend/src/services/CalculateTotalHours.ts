export const calculateTotalHours = (startTime: Date, endTime: Date): number => {
    const totalMilliseconds = endTime.getTime() - startTime.getTime();
    return totalMilliseconds / (1000 * 60 * 60);
};