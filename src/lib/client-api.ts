import axios from "axios";
import type { GitHubStatsResponse } from "@/types/github";
import { ApiResponse } from "@/types";

const api = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
});

export const githubApi = {
  getStats: async () => {
    const res = await api.get<ApiResponse<GitHubStatsResponse>>("/github");
    return res.data;
  },
};

export const clientApi = {
  github: githubApi,
};
