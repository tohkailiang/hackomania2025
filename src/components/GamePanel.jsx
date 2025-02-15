import { useState } from 'react'
import React, { Component } from 'react';
import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Sprite, Container, Text } from '@pixi/react';
import NumberClicker from '../pixie/NumberClicker.jsx';
import ImageToggle from '../pixie/ImageToggle.jsx';
import ImageRemover from '../pixie/ImageRemover.jsx';
import Darkness from '../pixie/Darkness.jsx';


export default function GamePanel({interactions})
{
    const [count0, setCount0] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    //office scene
    const [doorstate, opendoor] = useState(false);
    const [doorpng, changedoor] = useState("doorclose.png");

    const background = "gamebackground.png";

    return (
        <Stage width={1500} height={560} options={{ background: 0xffffff }}>

          <ImageToggle X={750} Y={280} image={doorpng} 
          toggleImage={()=>
            {
                opendoor(!doorstate);
                if(doorstate)
                {
                    changedoor("doorclose.png");
                }
                else
                {
                    changedoor("dooropen.png");
                }
                ++interactions.doorClicks;
            }}
          ></ImageToggle>
          
          
        <Container x={0} y={0}>
            <Sprite
                image={background}
                x={750}
                y={280}
                anchor={0.5}
                >
            </Sprite>
        </Container>


        <ImageRemover X={250} Y={335} image="cup.png" interactions={interactions}></ImageRemover>
        <ImageRemover X={380} Y={335} image="cup.png" interactions={interactions}></ImageRemover>
        <ImageRemover X={700} Y={335} image="cup.png" interactions={interactions}></ImageRemover>
        <ImageRemover X={1120} Y={335} image="cup.png" interactions={interactions}></ImageRemover>
        <ImageRemover X={1180} Y={335} image="cup.png" interactions={interactions}></ImageRemover>
        <Darkness lightsOn={false}></Darkness>
        </Stage>
      );
}