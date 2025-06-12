import Sidebar from "@/components/sidebar";
import TestHistory from "@/components/TestHistory";

export default function Material4Test() {
  return (
    <>
         <div className="flex">
                 <Sidebar />
                 <main className="ml-64 flex-1">
                   <TestHistory />
                  </main>
                </div>
        
    </>
  );
}