// ไฟล์: src/components/Footer.tsx
import StudentInfo from './StudentInfo';

export default function Footer() {
  return (
    <div className="mt-8 pt-4 border-t flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        <StudentInfo />
        <span className="text-gray-400">© 2026 CPE207 Corp. All rights reserved.</span>
      </div>
    </div>
  );
}