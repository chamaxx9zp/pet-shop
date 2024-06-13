import React from 'react'
 import Image from "next/image";
import styles from "./page.module.scss";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Privacyhero from '@/app/components/privacyhero/privacyhero';
import Privacytext from '../components/privacytext/privacytext';
function page() {
  return (
    <>
      <h1>Privacy Policy Page</h1>
      <Privacyhero />
      <Privacytext />
    </>
  )
}

export default page

// "use client";
// import Image from "next/image";
// import styles from "./page.module.scss";
// import Accordion from 'react-bootstrap/Accordion';
// import Button from 'react-bootstrap/Button';
// import Testomonials from '@/app/homepage/Testomonials/Testomonials';
// import Shop from '@/app/homepage/Shop/Shop';
// import Gallery from '@/app/homepage/Gallery/Gallery';
// import AboutUs from '@/app/homepage/Aboutus/Aboutus';
// import ModalsComponent from "@/app/homepage/popup/popup";
// import Foods from "@/app/homepage/Foods/foods"
// export default function Home() {
//   return (
//     <>
     
//       <AboutUs />
//       <Foods />
//       <Testomonials />
//       <Shop />
//       <Gallery />
//       <ModalsComponent /> 
//     </>
//   );
// }