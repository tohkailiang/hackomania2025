import { useState } from 'react'
import React, { Component } from 'react';
import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Sprite, Container, Text } from '@pixi/react';
import NumberClicker from '../pixie/NumberClicker.jsx';
import ImageToggle from '../pixie/ImageToggle.jsx';
import ImageRemover from '../pixie/ImageRemover.jsx';


export default function GamePanel()
{
    const [count0, setCount0] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    //office scene
    const [doorstate, opendoor] = useState(false);
    const [doorpng, changedoor] = useState("doorclose.png");

    return (
        <Stage width={800} height={400} options={{ background: 0x1099bb }}>

          <ImageToggle X={400} Y={200} image={doorpng} 
          toggleImage={()=>
            {
                opendoor(!doorstate);
                if(doorstate)
                {
                    changedoor("dooropen.png");
                }
                else
                {
                    changedoor("doorclose.png");
                }
            }}
          ></ImageToggle>

          <ImageRemover X={100} Y={100} image="doorclose.png"></ImageRemover>
        </Stage>
      );
}