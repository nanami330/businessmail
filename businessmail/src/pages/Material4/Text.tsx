import Sidebar from "@/components/sidebar";
import TemplateText from "@/components/Template/text";
import Topbar from "@/components/topbar";

export default function Material4Text() {
  return (
    <>
    <Topbar />
         <div className="flex">
                 <Sidebar />
                 <main className="ml-64 flex-1 pt-16">
                   <TemplateText />
                  </main>
                </div>
        
    </>
  );
}