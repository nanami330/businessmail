import Sidebar from "@/components/sidebar";
import Structure from "@/components/Structure/test";
import Topbar from "@/components/topbar";

export default function Material1Test() {
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <main className="ml-64 flex-1 pt-16">
          <Structure/>
        </main>
      </div>
    </>
  );
}
