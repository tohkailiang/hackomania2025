import { useState } from 'react'
import React, { Component } from 'react';
import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Sprite, Container, Text } from '@pixi/react';
import NumberClicker from '../pixie/NumberClicker.jsx';
import ImageToggle from '../pixie/ImageToggle.jsx';
import ImageRemover from '../pixie/ImageRemover.jsx';
import ImagePusher from '../pixie/ImagePusher.jsx';


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
        <Stage width={1500} height={560} options={{ background: 0xffffff, backgroundAlpha:0}}>

          <ImageToggle X={750} Y={280} image={doorpng} 
          interactions={interactions}
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


        <ImageRemover X={280} Y={335} image="cup.png" interactions={interactions}></ImageRemover>
        <ImageRemover X={350} Y={335} image="cup.png" interactions={interactions}></ImageRemover>
        <ImageRemover X={700} Y={335} image="cup.png" interactions={interactions}></ImageRemover>
        <ImageRemover X={1120} Y={335} image="cup.png" interactions={interactions}></ImageRemover>
        <ImageRemover X={1180} Y={335} image="cup.png" interactions={interactions}></ImageRemover>

        <ImagePusher X={180} Y={420} image="sprites/chair.png" interactions={interactions} direction={1}></ImagePusher>
        <Sprite x={315} y={440} image="sprites/table.png" anchor={0.5}></Sprite>
        <ImagePusher X={450} Y={420} image="sprites/chair.png" interactions={interactions} direction={-1}></ImagePusher>
        
        <ImagePusher X={580} Y={420} image="sprites/chair.png" interactions={interactions} direction={1}></ImagePusher>
        <Sprite x={715} y={440} image="sprites/table.png" anchor={0.5}></Sprite>
        <ImagePusher X={850} Y={420} image="sprites/chair.png" interactions={interactions} direction={-1}></ImagePusher>
        
        <ImagePusher X={1010} Y={420} image="sprites/chair.png" interactions={interactions} direction={1}></ImagePusher>
        <Sprite x={1145} y={440} image="sprites/table.png" anchor={0.5}></Sprite>
        <ImagePusher X={1280} Y={420} image="sprites/chair.png" interactions={interactions} direction={-1}></ImagePusher>
        </Stage>
      );
}