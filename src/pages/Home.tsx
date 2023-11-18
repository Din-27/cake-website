import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { SidebarContext } from "../contexts/SidebarContext";
import Hero from "../components/Hero";
import { KeenSlider } from "../helpers/KeenSlider";
import Card from "../components/Card";

const Home = () => {
  // get products from product context
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    setUpdate(1);
  }, [])

  const ref = KeenSlider(update)
  const [tooltips, setTooltips] = useState(false)
  const { isOpen, handleClose }: any = useContext(SidebarContext);
  const { products }: any = useContext(ProductContext);

  console.log(products);

  // get only men's and women's clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing" || item.category === "jewelery"
    );
  });
  console.log(tooltips);



  return (
    <div onClick={handleClose} style={isOpen ? { 'overflow': 'hidden' } : {}}>
      <Hero />
      <section className="py-20">
        <div className="container mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-semibold mb-2 text-center">Referensi Kue</h1>
            <div className="tex-sm capitalize text-gray-500">Berikut Referensi untuk kamu yg sedang nyari seni dalam kue. Jika Sudah dapat,Jangan Lupa Hubungi kami. Kami Akan Buatkan kue dengan seni untuk Anda</div>
          </div>
          {products &&
            <div ref={ref} className="lg:hidden keen-slider">
              {filteredProducts.map((product, index) => {
                return (
                  <div onMouseEnter={() => setTooltips(true)} onMouseLeave={() => setTooltips(false)} className={`keen-slider__slide number-slide${index}`}>
                    <Card product={product} key={product.id} />
                  </div>
                );
              })}
            </div>
          }
        </div>
      </section >
    </div >
  );
};

export default Home;
