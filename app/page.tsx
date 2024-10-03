'use client'
import React from 'react';
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function home() {

  const route = useRouter ()
  return (
    <div>
<h1>NAVBAR</h1>
      <Link href='/about' >go to home page</Link>
      <h1>HELLO WORLD!</h1>    
          <About/>
          <button onClick={() => route.push('/contact')}>go to contact page</button>

          
          <Card  name='Aqsa' roll={2904} day='9 to 12'/>
          <Card name='Zara' roll={3456} day = '2 to 5'/>
          <Card name='Amir' roll={29044} day='9 to 12'/>

    </div>
  )
}

import Card from './componet/card';
import Contact from "./contact/page";
import About from './about/page'




