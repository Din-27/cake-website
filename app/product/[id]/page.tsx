'use client'
import ProductDetails from '../../../src/pages/ProductDetails';

export default function page({ params }: { params: { id: string } }) {

    return <ProductDetails params={params} />
}
