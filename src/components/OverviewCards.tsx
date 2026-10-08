// ไฟล์: src/components/OverviewCards.tsx
import { useDataStore } from '@/store/dataStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OverviewCards() {
  const expenses = useDataStore((state) => state.expenses);


  const totalSpent = expenses.reduce((sum, item) => sum + item.amount, 0);
  const totalTransactions = expenses.length;
  const averageExpense = totalTransactions > 0 ? totalSpent / totalTransactions : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-500">Total Spent</CardTitle></CardHeader>
        <CardContent><div className="text-2xl font-bold text-red-500">฿{totalSpent.toFixed(2)}</div></CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-500">Total Transactions</CardTitle></CardHeader>
        <CardContent><div className="text-2xl font-bold text-blue-500">{totalTransactions}</div></CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-500">Average Expense</CardTitle></CardHeader>
        <CardContent><div className="text-2xl font-bold text-green-500">฿{averageExpense.toFixed(2)}</div></CardContent>
      </Card>
    </div>
  );
}