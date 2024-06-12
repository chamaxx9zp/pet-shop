"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Testomonials from '@/app/homepage/Testomonials/Testomonials'
import Shop from '@/app/homepage/Shop/Shop'
import Gallery from '@/app/homepage/Gallery/Gallery'
// import Shop from '@/app/homepage/Shop'
export default function Home() {
  return (
    <>
     <Testomonials />
     <Shop />
     <Gallery />
    </>
  );
}


