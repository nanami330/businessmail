import Sidebar from "@/components/sidebar";
import TemplateTest from "@/components/Template/test";
import Topbar from "@/components/topbar";

export default function Material4Test() {
  return (
    <>
    <Topbar />
         <div className="flex">
                 <Sidebar />
                 <main className="ml-64 flex-1 pt-16">
                   <TemplateTest />
                  </main>
                </div>
        
    </>
  );
}