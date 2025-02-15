import { useState } from 'react'
import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Sprite, Container, Text } from '@pixi/react';

export default function ImageRemover({X, Y, image})
{
    const [scale, setScale] = useState(1);
    const [remove, setRemove] = useState(false);

    return(
        <Container x={0} y={0}>
                
            <Sprite
                image={image}
                x={X}
                y={Y}
                anchor={0.5}
                scale={1}
                interactive={true}
                pointerdown={()=>
                {
                    console.log("hello");
                    setRemove(true);
                }
                }
                >
                </Sprite>
                
              </Container>
    );
}