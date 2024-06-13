'use client'


import React from 'react';
import Posthero from '@/app/components/posthero/posthero'; // Ensure this is the correct path
import Posts from '@/app/components/posthero/posthero'; // Ensure this is the correct path

function Home() {
  return (
    <>
      <h1>Blog Page</h1>
      <Posthero />
      <Posts />
    </>
  );
}

export default Home;

