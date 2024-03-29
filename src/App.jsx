import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer"
import CV from "./components/CV"

function App() {
  return (
    <main className=" text-white w-full">
      <section className="flex flex-col justify-center items-cente h-screen ">
        <div className="hidden dosh:block">
          <div className="flex flex-col justify-center items-center">
            <PDFDownloadLink document={<CV />} fileName="CV.pdf">
              {({ loading }) =>
                loading ? "Loading PDF..." :
                  (
                    <button className="bg-blue-500 px-4 py-2 rounded-md">
                      Download CV
                    </button>
                  )}
            </PDFDownloadLink>
          </div>
        </div>
        <div className="w-full dosh:hidden">
          <PDFViewer className="w-full h-screen">
            <CV />
          </PDFViewer>
        </div>
      </section>
    </main>
  )
}

export default App
