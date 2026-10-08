import { useState } from 'react';
import { useDataStore } from '@/store/dataStore';
import { categories } from '@/types/datatypes';
import type { ExpenseCategory } from '@/types/datatypes';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function AddItemDialog() {
  const addExpense = useDataStore((state) => state.addExpense);
  
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState<ExpenseCategory | ''>('');

  const handleSave = () => {
    if (title === '' || amount === '' || category === '') {
      alert("Please fill out this field.");
      return;
    }
    
    addExpense({ 
      title: title, 
      amount: parseFloat(amount), 
      category: category as ExpenseCategory 
    });
    
    setTitle(''); 
    setAmount(''); 
    setCategory('');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-blue-600 hover:bg-blue-700 text-white h-9 px-4 py-2">
        + Add Expense
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Expense</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label>Title</Label>
            <Input placeholder="e.g. Coffee" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          
          <div className="grid gap-2">
            <Label>Amount (฿)</Label>
            <Input type="number" placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>
          
          <div className="grid gap-2">
            <Label>Category</Label>
            <Select value={category} onValueChange={(val) => setCategory(val as ExpenseCategory)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button onClick={handleSave} className="w-full bg-blue-600 text-white">Save Expense</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}