import Sidebar from "@/components/sidebar";
import Structure from "@/components/structure";

export default function Material() {
  return (
    <>
       <div className="flex">
         <Sidebar />
         <main className="ml-64 flex-1">
           <Structure />
          </main>
        </div>

    </>
  );
}