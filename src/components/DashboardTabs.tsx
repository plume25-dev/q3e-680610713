// ไฟล์: src/components/DashboardTabs.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OverviewCards from './OverviewCards';
import CategoryCards from './CategoryCards';

export default function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="mb-4 bg-gray-100">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="category">By Category</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <OverviewCards />
      </TabsContent>
      <TabsContent value="category">
        <CategoryCards />
      </TabsContent>
    </Tabs>
  );
}