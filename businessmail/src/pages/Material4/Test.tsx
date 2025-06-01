import Sidebar from "@/components/sidebar";
import TemplateTest from "@/components/Template/test";

export default function Material4Test() {
  return (
    <>
         <div className="flex">
                 <Sidebar />
                 <main className="ml-64 flex-1">
                   <TemplateTest />
                  </main>
                </div>
        
    </>
  );
}