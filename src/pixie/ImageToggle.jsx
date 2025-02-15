import {useState} from 'react';
import React, { Component } from 'react';
import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Sprite, Container, Text } from '@pixi/react';


export default function ImageToggle({X, Y, interactions})
{
    const [doorstate, opendoor] = useState(false);
    const [doorpng, changedoor] = useState("doorclose.png");
    
        return (<Container x={0} y={0}>
            
            <Sprite
            image={doorpng}
            x={X}
            y={Y}
            anchor={0.5}
            scale={1}
            interactive={true}
            pointerdown={()=>
            {
                opendoor(!doorstate);
                if(doorstate)
                {
                    changedoor("doorclose.png");
                }
                else
                {
                    changedoor("dooropen.png");
                    ++interactions.doorClicks;
                }
            }
            }
            >
            </Sprite>
          </Container>
        );
}