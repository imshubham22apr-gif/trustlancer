export interface IUser {
  userPubkey: string;
  role: "client" | "freelancer";
  skills: string[];
}

export interface IProject {
  _id: string;
  projectId: string; // On-chain ID
  clientId: string;
  title: string;
  description: string;
  budget: number;
  deadline: number; // Timestamp
  status: "pending" | "open" | "in_progress" | "completed" | "disputed";
  freelancerId?: string;
  createdAt: string;
}

export interface IReview {
  projectId: string;
  reviewer: string;
  rating: number;
  comment: string;
  createdAt: string;
}
