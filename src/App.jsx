import { PDFViewer } from "@react-pdf/renderer"
import CV from "./components/CV"

function App() {
  return (
    <main className=" text-white w-full">
      <section className="flex flex-col justify-center items-center bg-slate-600 h-screen ">
        <div className="w-full">
          <PDFViewer className="w-full h-screen">
            <CV />
          </PDFViewer>
        </div>
      </section>
    </main>
  )
}

export default App
