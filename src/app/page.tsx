"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import HeroSlider from "./components/homepage/hero-slider/HeroSlider";
import FeaturedProducts from "./components/homepage/featured-products/FeaturedProducts";
import PromotionBanner from "./components/homepage/promotion-banner/PromotionBanner";
import Blog from "./components/homepage/blogs/Blog";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <FeaturedProducts />
      <PromotionBanner />
      <Blog />
    </>
  );
}
