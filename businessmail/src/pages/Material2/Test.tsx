import MannersTest from "@/components/Manner/test";
import Sidebar from "@/components/sidebar";

export default function Material2Test() {
  return (
    <>
         <div className="flex">
                 <Sidebar />
                 <main className="ml-64 flex-1">
                   <MannersTest />
                  </main>
                </div>
        
    </>
  );
}