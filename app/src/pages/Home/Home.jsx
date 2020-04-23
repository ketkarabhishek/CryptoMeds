import React, { useState } from 'react'

import ElevatedAppBAr from './ElevatedAppBar';

import Hero from 'components/Hero';


export default function Home() {

    return (
        <div style={{height: '100%'}}>
            <ElevatedAppBAr></ElevatedAppBAr>
            <Hero></Hero>
           
        </div>
    )
}
