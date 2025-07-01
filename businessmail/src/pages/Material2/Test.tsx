import MannersTest from "@/components/Manner/test";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default function Material2Test() {
  return (
    <>
    <Topbar />
         <div className="flex">
                 <Sidebar />
                 <main className="ml-64 flex-1 pt-16">
                   <MannersTest />
                  </main>
                </div>
        
    </>
  );
}