/*
AUTHOR(S): Justin Moua

=====
Notes
=====

=========
Resources
=========
  - Placeholder Text
*/
'use client';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";


export default function Faq() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex items-center justify-center text-5xl text-black py-9">
        FAQ
      </div>
      <main className="flex flex-col text-black justify-center flex-1 p-8">
      <details name="tech-specs">

        {/* Accordion below is from https://developer.mozilla.org/en-US/blog/html-details-exclusive-accordions/ */}
  <summary>System configuration</summary>
  <ul>
    <li>200GB RAM</li>
    <li>4PB storage</li>
  </ul>
</details>

<details name="tech-specs">
  <summary>Recommended settings</summary>
  <ul>
    <li>Extreme mode: on</li>
    <li>Raytracing: enabled</li>
  </ul>
</details>

<details name="tech-specs">
  <summary>Other details</summary>
  <ul>
    <li>Material: Faux Leather, Metal</li>
    <li>Item Weight: 10.2Kg</li>
  </ul>
</details>

      </main>
      <Footer />
    </div>
  );
}