export const categories = [
  "Food",
  "Transport",
  "Education",
  "Utilities",
  "Entertainment",
  "Other"
] as const;

export type ExpenseCategory = typeof categories[number];

export interface Expense {
  id: string;
  date: string;
  title: string;
  amount: number;
  category: ExpenseCategory;
}