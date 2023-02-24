import Navbar from "./NavBar";
import Footer from "./Footer";

export const Layout = ({children})=>{
  return(
    <div className="flex flex-col min-h-screen bg-slate-200" >
      <Navbar />
      <section className="pt-10 flex justify-center item-center">{children}</section>
      <Footer />
    </div>
  )
}
