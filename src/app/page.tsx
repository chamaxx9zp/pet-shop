
"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Testomonials from '@/app/components/Testomonials/Testomonials';
import Shop from '@/app/components/Shop/Shop';
import Gallery from '@/app/components/Gallery/Gallery';
import AboutUs from '@/app/components/Aboutus/Aboutus';
import ModalsComponent from "@/app/components/popup/popup";
import Foods from "@/app/components/Foods/foods"
export default function Home() {
  return (
    <>
     
      <AboutUs />
      <Foods />
      <Testomonials />
      <Shop />
      <Gallery />
      <ModalsComponent /> 
    </>
  );
}