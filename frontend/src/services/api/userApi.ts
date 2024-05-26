import axios from "axios";
import { IUser } from "../../@types/User";

const apiUrl = process.env.REACT_APP_API_URL;

export const createUser = async (userCode: string): Promise<IUser> => {
  try {
    const response = await axios.post<IUser>(`${apiUrl}/user`, { id: userCode });
    return response.data;
  } catch (error) {
    throw new Error(`Error creating user: ${error}`);
  }
};

export const findUserById = async (userId: string): Promise<IUser> => {
  try {
    const response = await axios.get<IUser>(`${apiUrl}/user/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error finding user by ID: ${error}`);
  }
};

export const getAllUsers = async (): Promise<IUser[]> => {
  try {
    const response = await axios.get<IUser[]>(`${apiUrl}/users`);
    return response.data;
  } catch (error) {
    throw new Error(`Error getting all users: ${error}`);
  }
};
