import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Expense } from '../types/datatypes';

interface DataState {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, 'id' | 'date'>) => void;
  deleteExpense: (id: string) => void;
}

export const useDataStore = create<DataState>()(
  persist(
    (set) => ({
      expenses: [],
      addExpense: (expenseData) => set((state) => {
        const newExpense: Expense = {
          ...expenseData,
          id: crypto.randomUUID(), 
          date: new Date().toISOString().split('T')[0],
        };
        return { expenses: [newExpense, ...state.expenses] };
      }),
      deleteExpense: (id) => set((state) => ({
        expenses: state.expenses.filter((e) => e.id !== id)
      })),
    }),
    {
      name: 'exp-680610713',
    }
  )
);