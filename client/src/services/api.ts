import axios from "axios";
import { IProject, IUser } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProjects = async (): Promise<IProject[]> => {
  const response = await api.get("/projects");
  return response.data;
};

export const createProject = async (projectData: any) => {
  const response = await api.post("/projects", projectData);
  return response.data;
};

export const getUserProfile = async (pubkey: string): Promise<IUser> => {
  const response = await api.get(`/users/${pubkey}`);
  return response.data;
};

export const getMyProjects = async (pubkey: string): Promise<IProject[]> => {
  // In a real app, backend filters by clientId or freelancerId
  // For now, fetching all and filtering client-side or assume endpoint supports query
  const response = await api.get("/projects");
  return response.data.filter(
    (p: IProject) => p.clientId === pubkey || p.freelancerId === pubkey,
  );
};

export interface IReputationStats {
  totalReviews: number;
  averageRating: number;
}

export const getReputationStats = async (
  pubkey: string,
): Promise<IReputationStats> => {
  const response = await api.get(`/reputation/${pubkey}/stats`);
  return response.data;
};

export default api;
