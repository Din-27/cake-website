import CartProvider from "../src/contexts/CartContext"
import ProductProvider from "../src/contexts/ProductContext"
import SidebarProvider from "../src/contexts/SidebarContext"
import '../src/css/global.css'

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
              {children}
            </ProductProvider>
          </CartProvider>
        </SidebarProvider>
      </body>
    </html>
  )
}
