import Navbar from "./navbar";
import Footer from "./footer";

interface Props {
  children: React.ReactNode
}

const Layout:React.FC<Props> = (props:Props)=>{
  return(
    <div>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout;
