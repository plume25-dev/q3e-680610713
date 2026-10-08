import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Badge } from '@/components/ui/badge';

export default function StudentInfo() {
  return (
    <Drawer>
      <DrawerTrigger className="text-blue-600 font-semibold p-0 hover:underline bg-transparent border-none cursor-pointer">
        Warat Wongwichit
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm p-4">
          <DrawerHeader className="text-left px-0">
            <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
            <p className="text-sm text-gray-500">Student information</p>
          </DrawerHeader>
          
          <div className="flex flex-col space-y-4 py-4">
            <div>
              <h3 className="font-bold text-lg">Warat Wongwichit</h3>
              <p className="text-sm text-gray-500">นักศึกษาคณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่</p>
            </div>
            
            <div className="flex flex-col gap-3 text-sm">
              <div><Badge variant="secondary" className="mr-2">Hobbies</Badge> เขียนโค้ด, เล่นเกม</div>
              <div><Badge variant="secondary" className="mr-2">Email</Badge> warat_w@cmu.ac.th</div>
              <div><Badge variant="secondary" className="mr-2">Social</Badge> github.com/plume25-dev</div>
            </div>
            
            <p className="text-sm mt-4 pt-4 border-t">รหัสนักศึกษา: 680610713</p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}