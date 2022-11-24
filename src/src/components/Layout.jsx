import Navbar from "./NavBar";

export const Layout = ({children})=>{
  return(
    <div>
      <Navbar />
      {children}
    </div>
  )
}
