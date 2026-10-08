// ไฟล์: src/components/CategoryCards.tsx
import { useDataStore } from '@/store/dataStore';
import { categories } from '@/types/datatypes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CategoryCards() {
  const expenses = useDataStore((state) => state.expenses);
  const categoryTotals = categories.map(cat => ({
    name: cat,
    total: expenses.filter(e => e.category === cat).reduce((sum, e) => sum + e.amount, 0)
  }));

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-2">
      {categoryTotals.map(cat => (
        <Card key={cat.name}>
          <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-500">{cat.name}</CardTitle></CardHeader>
          <CardContent><div className="text-lg font-bold">฿{cat.total.toFixed(2)}</div></CardContent>
        </Card>
      ))}
    </div>
  );
}