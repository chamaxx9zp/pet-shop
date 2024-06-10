"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import HeroSlider from "./components/hero-slider/HeroSlider";
import FeaturedProducts from "./components/featured-products/FeaturedProducts";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <FeaturedProducts/>
    </>
  );
}
