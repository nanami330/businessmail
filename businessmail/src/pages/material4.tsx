import Sidebar from "@/components/sidebar";
import Template from "@/components/template";

export default function Material1() {
  return (
    <>
         <div className="flex">
                 <Sidebar />
                 <main className="ml-64 flex-1">
                   <Template />
                  </main>
                </div>
        
    </>
  );
}