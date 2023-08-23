import { APP_NAME, APP_DESCRIPTION } from "@/config/definitions"

// Next
import Head from "next/head"

// Styles
import "@/styles/style.scss"

// Header
import Header from "@/temps/header"

// Header
import Footer from "@/temps/footer"

export const metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,  
  },
  // Bootstrap cdn
  bootstrap: {
    js: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
    jquery: 'https://code.jquery.com/jquery-3.7.0.min.js',
  },
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <div className="header-wrapper">
          <Header />
        </div>

        <div className="main-wrapper">
          {children}
        </div>

        <div className="footer-wrapper">
          <Footer />
        </div>

        {/* Bootstrap cdn */}
        <script src={metadata.bootstrap.jquery}></script>
        <script src={metadata.bootstrap.js}></script>
      </body>
    </html>
  )
}
