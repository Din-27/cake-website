import Header from "../src/components/Header"
import Sidebar from "../src/components/Sidebar"
import CartProvider from "../src/contexts/CartContext"
import ProductProvider from "../src/contexts/ProductContext"
import SidebarProvider from "../src/contexts/SidebarContext"

import '../src/css/global.css'
import 'keen-slider/keen-slider.min.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <CartProvider>
            <ProductProvider>
              <Header />
              {children}
              <Sidebar />
            </ProductProvider>
          </CartProvider>
        </SidebarProvider>
      </body>
    </html>
  )
}
