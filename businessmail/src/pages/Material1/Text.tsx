import Sidebar from "@/components/sidebar";
import StructureText from "@/components/Structure/text";
import Topbar from "@/components/topbar";

export default function Material1Text() {
  return (
    <>
    <Topbar />
       <div className="flex">
         <Sidebar />
         <main className="ml-64 flex-1 pt-16">
           <StructureText />
          </main>
        </div>

    </>
  );
}