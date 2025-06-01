import MannersText from "@/components/Manner/text";
import Sidebar from "@/components/sidebar";

export default function Material2Text() {
  return (
    <>
         <div className="flex">
                 <Sidebar />
                 <main className="ml-64 flex-1">
                   <MannersText />
                  </main>
                </div>
        
    </>
  );
}