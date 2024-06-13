


import Image from "next/image";
import styles from "./page.module.scss";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Herosection from '@/app/components/Herosection/Herosection';
import Mission from '@/app/components/mission/mission';
import Ourpetshop from '@/app/components/ourpetshop/ourpetshop';

export default function Home() {
  return (
    <>
      <Herosection />
      <Mission />
      <Ourpetshop /> 
    </>
  );
}

