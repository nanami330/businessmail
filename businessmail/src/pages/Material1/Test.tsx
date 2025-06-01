import Sidebar from "@/components/sidebar";
import StructureTest from "@/components/Structure/test";

export default function Material1Test() {
  return (
    <>
       <div className="flex">
         <Sidebar />
         <main className="ml-64 flex-1">
           <StructureTest />
          </main>
        </div>

    </>
  );
}