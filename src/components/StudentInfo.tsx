import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Badge } from '@/components/ui/badge';
import profileImg from './myimg/IMG_8163.JPG';

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
            
            <div className="mt-4 flex justify-center">
              <img 
                src={profileImg}
                alt="Warat Wongwichit" 
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-200 shadow-sm"
              />
            </div>
          </DrawerHeader>

          <div className="flex flex-col space-y-4 py-4">
            <div>
              <h3 className="font-bold text-lg text-center sm:text-left">Warat Wongwichit</h3>
              <p className="text-sm text-gray-500 text-center sm:text-left">นักศึกษาคณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่</p>
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
