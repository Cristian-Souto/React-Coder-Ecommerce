import Navbar from "./NavBar";
import Footer from "./Footer";

export const Layout = ({children})=>{
  return(
    <div className="flex flex-col min-h-screen bg-slate-300" >
      <Navbar />
      <section className="pt-6 pb-6 flex justify-center">{children}</section>
      <Footer />
    </div>
  )
}
