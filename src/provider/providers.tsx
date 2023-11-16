'use client'

import CartProvider from "../contexts/CartContext"
import ProductProvider from "../contexts/ProductContext"
import SidebarProvider from "../contexts/SidebarContext"

export function Providers({ children }) {
    return (
        <SidebarProvider>
            <CartProvider>
                <ProductProvider>
                    {children}
                </ProductProvider>
            </CartProvider>
        </SidebarProvider>
    );
}