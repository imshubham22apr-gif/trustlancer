import React from "react";
import { IProject } from "../types";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:border-blue-500 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <span className={`px-2 py-1 text-xs rounded-full ${
            project.status === "open" ? "bg-green-600 text-green-100" :
            project.status === "in_progress" ? "bg-blue-600 text-blue-100" :
            "bg-gray-600 text-gray-200"
          }`}>
            {project.status.replace("_", " ").toUpperCase()}
          </span>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-400">${project.budget}</p>
          <p className="text-xs text-gray-400">Budget</p>
        </div>
      </div>
      
      <p className="text-gray-300 mb-6 line-clamp-3">{project.description}</p>
      
      <div className="flex justify-between items-center text-sm text-gray-400">
        <span>Posted: {new Date(project.createdAt).toLocaleDateString()}</span>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};
