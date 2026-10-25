import Footer from './Footer/Footer.jsx'
import Navbar from './Navbar/Navbar.jsx'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
