import Manners from "@/components/manners";
import Sidebar from "@/components/sidebar";

export default function Material1() {
  return (
    <>
         <div className="flex">
                 <Sidebar />
                 <main className="ml-64 flex-1">
                   <Manners />
                  </main>
                </div>
        
    </>
  );
}