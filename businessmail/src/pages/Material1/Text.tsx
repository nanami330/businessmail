import Sidebar from "@/components/sidebar";
import StructureText from "@/components/Structure/text";

export default function Material1Text() {
  return (
    <>
       <div className="flex">
         <Sidebar />
         <main className="ml-64 flex-1">
           <StructureText />
          </main>
        </div>

    </>
  );
}