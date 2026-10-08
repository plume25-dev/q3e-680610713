// ไฟล์: src/App.tsx
import DashboardTabs from '@/components/DashboardTabs';
import ItemList from '@/components/ItemList';
import AddItemDialog from '@/components/AddItemDialog';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans flex justify-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow-sm border">
        
      
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold">Expenditure Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">Track your everyday expenses and budget easily.</p>
          </div>
          <AddItemDialog />
        </div>

        
        <DashboardTabs />

       
        <ItemList />

        
        <Footer />
        
      </div>
    </div>
  );
}

export default App;