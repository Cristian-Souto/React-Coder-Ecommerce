import Navbar from "./NavBar";
import Footer from "./Footer";

export const Layout = ({children})=>{
  return(
    <main className="flex flex-col min-h-screen bg-slate-200">
      <Navbar />
      <section className="flex flex-wrap justify-center items-center min-h-screen">{children}</section>
      <Footer />
    </main>
  )
}
