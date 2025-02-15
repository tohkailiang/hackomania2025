import { useState } from 'react'
import { Stage, Sprite, Container, Text } from '@pixi/react';
import { useInterval } from 'usehooks-ts';

export default function ImagePoker({image})
{
    return(
        <Stage width={300} height={350} options={{ background: 0xffffff, backgroundAlpha: 0}}>
        <Sprite
        image={image}
        x={150}
        y={175}
        anchor={(0.5, 0.5)}
        scale={0.5}
        interactive={true}
        >

        </Sprite>
        </Stage>
    )
}