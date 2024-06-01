import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import { UserLocationProvider } from './components/hooks/useLocation';
import { Chatbox } from './components/ChatBot/base';


export const metadata = {
  title: 'Pizza Time',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      <link href="./output.css" rel="stylesheet"/>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"></link> */}

      <body>
      <UserLocationProvider>

        <Navbar />
        {children}
        <Chatbox />
        
        <Footer />
        

        </UserLocationProvider>

      </body>
    </html>
  )
}
