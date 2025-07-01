import Question from "@/components/question";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default function Quize() {
    return (
      <>
      <Topbar  />
           <div className="flex">
                   <Sidebar />
                   <main className="ml-64 flex-1 pt-16">
                     <Question />
                    </main>
                  </div>
          
      </>
    )
}
