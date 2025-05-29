import Question from "@/components/question";
import Sidebar from "@/components/sidebar";

export default function Quize() {
    return (
      <>
           <div className="flex">
                   <Sidebar />
                   <main className="ml-64 flex-1">
                     <Question />
                    </main>
                  </div>
          
      </>
    )
}
