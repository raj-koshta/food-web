import React from 'react'
import AppLayout from "../../components/layout/AppLayout"
import Section1 from './Section1'
import "../../styles/HomeStyle.css";
import Section2 from './Section2';
import Section6 from './Section6';
import Section7 from './Section7';
import Section5 from './Section5';
import Section4 from './Section4';
import Section3 from './Section3';

function Home() {
  return (
    <>
      {/* Home Section Hero Banner */}
      <Section1 />

      {/* Home Section About */}
      <Section2 />

      {/* Home Section Menu */}
      <Section3 />

      {/* Home Section Promotion */}
      <Section4 />

      {/* Home Section Shop */}
      <Section5 />

      {/* Home Section Blog */}
      <Section6 />

      {/* Home Section Contact */}
      <Section7 />
    </>
  )
}

export default Home