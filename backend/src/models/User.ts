import { IPoint } from "./Point";

export interface IUser {
    id?: string;
    points: IPoint[];
    createdAt: Date;
    updatedAt: Date;
}