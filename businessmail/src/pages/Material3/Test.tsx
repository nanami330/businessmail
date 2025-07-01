import CorrectTest from "@/components/Correct/test";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default function MaterialTest() {
  return (
    <>
    <Topbar />
         <div className="flex">
                 <Sidebar />
                 <main className="ml-64 flex-1 pt-16">
                   <CorrectTest />
                  </main>
                </div>
        
    </>
  );
}