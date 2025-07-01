import MannersText from "@/components/Manner/text";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default function Material2Text() {
  return (
    <>
    <Topbar />
         <div className="flex">
                 <Sidebar />
                 <main className="ml-64 flex-1 pt-16">
                   <MannersText />
                  </main>
                </div>
        
    </>
  );
}