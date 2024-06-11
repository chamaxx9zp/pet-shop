"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import HeroSlider from "./components/hero-slider/HeroSlider";
import FeaturedProducts from "./components/featured-products/FeaturedProducts";
import PromotionBanner from "./components/promotion-banner/PromotionBanner";
import Blog from "./components/blogs/Blog";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <FeaturedProducts/>
      <PromotionBanner/>
      <Blog/>
    </>
  );
}
