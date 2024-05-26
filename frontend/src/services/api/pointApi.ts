import axios from "axios";
import { IPoint } from "../../@types/Point";

const apiUrl = process.env.REACT_APP_API_URL;

export const startShift = async (userId: string): Promise<IPoint> => {
  try {
    const response = await axios.post<IPoint>(`${apiUrl}/point`, { userId });
    return response.data;
  } catch (error) {
    throw new Error(`Error starting shift: ${error}`);
  }
};

export const endShift = async (userId: string): Promise<IPoint> => {
  try {
    const response = await axios.patch<IPoint>(`${apiUrl}/point`, { userId });
    return response.data;
  } catch (error) {
    throw new Error(`Error ending shift: ${error}`);
  }
};

export const getPreviousPoints = async (userId: string): Promise<IPoint[]> => {
  try {
    const response = await axios.get<IPoint[]>(`${apiUrl}/point/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error getting previous points: ${error}`);
  }
};

export const getTodayPoints = async (userId: string): Promise<IPoint[]> => {
  try {
    const response = await axios.get<IPoint[]>(`${apiUrl}/point/today/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error getting today points: ${error}`);
  }
};

export const getTodayHours = async (userId: string): Promise<number> => {
  try {
    const response = await axios.get<{ todayHours: number }>(`${apiUrl}/hours/today/${userId}`);
    return response.data.todayHours;
  } catch (error) {
    throw new Error(`Error getting today hours: ${error}`);
  }
};

