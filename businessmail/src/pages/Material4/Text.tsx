import Sidebar from "@/components/sidebar";
import TemplateText from "@/components/Template/text";

export default function Material4Text() {
  return (
    <>
         <div className="flex">
                 <Sidebar />
                 <main className="ml-64 flex-1">
                   <TemplateText />
                  </main>
                </div>
        
    </>
  );
}