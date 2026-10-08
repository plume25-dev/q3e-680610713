// ไฟล์: src/components/ItemList.tsx
import { useDataStore } from '@/store/dataStore';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

export default function ItemList() {
  const expenses = useDataStore((state) => state.expenses);
  const deleteExpense = useDataStore((state) => state.deleteExpense);

  return (
    <div className="border rounded-lg p-4 bg-white mt-8">
      <h3 className="font-semibold mb-4">Recent Expenses</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell className="text-gray-500">{expense.date}</TableCell>
              <TableCell>{expense.title}</TableCell>
              <TableCell className="text-gray-500">{expense.category}</TableCell>
              <TableCell className="font-medium">฿{expense.amount.toFixed(2)}</TableCell>
              <TableCell className="text-right">
                <Button variant="destructive" size="sm" onClick={() => deleteExpense(expense.id)}>
                  <Trash2 className="w-4 h-4 mr-1" /> Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}