import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

import { UserType, EvaluationType } from "@/types/types";

type UserStoreType = {
  users: Omit<UserType, "password">[] | null;
  employeeCount: number;
  managerCount: number;
  adminCount: number;
  employees: Omit<UserType, "password">[] | null;
  managers: Omit<UserType, "password">[] | null;
  admins: Omit<UserType, "password">[] | null;
  evaluations: EvaluationType | null;
  isLoadingUsers: boolean;
  isFetchingEvaluations: boolean;
  isEvaluating: boolean;
  isEditing: boolean;
  fetchUsers: () => Promise<void>;
  fetchEvaluationsEmployee: (id: string) => Promise<void>;
  evaluate: (credentials: {
    employee: string;
    evaluator: string;
    score: number;
    comments: string;
  }) => Promise<void>;
  editEvaluation: (credentials: {
    evaluationId: string;
    score: number;
    comments: string;
  }) => Promise<void>;
};

export const useUserStore = create<UserStoreType>((set) => ({
  users: null,
  employeeCount: 0,
  managerCount: 0,
  adminCount: 0,
  employees: null,
  managers: null,
  admins: null,
  evaluations: null,
  isLoadingUsers: false,
  isFetchingEvaluations: false,
  isEvaluating: false,
  isEditing: false,

  fetchUsers: async () => {
    set({ isLoadingUsers: true });
    try {
      const response = await axios.get("/api/users");
      const { allUsers, employees, managers, admins } = response.data.details;
      const { counts } = response.data;
      set({
        users: allUsers,
        employeeCount: counts.employees,
        managerCount: counts.managers,
        adminCount: counts.admins,
        employees,
        managers,
        admins,
        isLoadingUsers: false,
      });
    } catch (error) {
      console.log(error);
      set({ isLoadingUsers: false });
      toast.error(error.response?.data?.message || "Failed to fetch users");
    }
  },

  fetchEvaluationsEmployee: async (id) => {
    set({ isFetchingEvaluations: true });
    try {
      const response = await axios.get(`/api/evaluations/employee/${id}`);

      console.log(response.data);
      set({
        evaluations: response.data,
        isFetchingEvaluations: false,
      });
    } catch (error) {
      console.log(error);
      set({ isLoadingUsers: false });
      toast.error(error.response?.data?.message || "Failed to fetch users");
    }
  },

  evaluate: async (credentials) => {
    set({ isEvaluating: true });
    try {
      await axios.post("/api/evaluations", credentials);
      set({ isEvaluating: false });
      toast.success("Evaluated successfully");
    } catch (error) {
      set({ isEvaluating: false });
      toast.error(error.response.data.message || "Evaluation failed");
    }
  },

  editEvaluation: async (credentials) => {
    set({ isEditing: true });

    const { evaluationId, ...data } = credentials;
    try {
      await axios.put(`/api/evaluations/${evaluationId}`, data);
      set({ isEditing: false });
      toast.success("Edited successfully");
    } catch (error) {
      set({ isEditing: false });
      toast.error(error.response.data.message || "Edition failed");
    }
  },
}));
