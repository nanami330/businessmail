import CorrectTest from "@/components/Correct/test";
import Sidebar from "@/components/sidebar";

export default function MaterialTest() {
  return (
    <>
         <div className="flex">
                 <Sidebar />
                 <main className="ml-64 flex-1">
                   <CorrectTest />
                  </main>
                </div>
        
    </>
  );
}