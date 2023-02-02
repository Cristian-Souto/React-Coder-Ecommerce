import Navbar from "./NavBar";

export const Layout = ({children})=>{
  return(
    <main className="flex flex-col h-screen bg-slate-200">
      <Navbar />
      <section className="pt-10 flex justify-center">{children}</section>
    </main>
  )
}
