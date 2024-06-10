"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import HeroSlider from "./components/hero-slider/HeroSlider";

export default function Home() {
  return (
    <>
      <HeroSlider />
    </>
  );
}
