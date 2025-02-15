
import { Stage, Sprite, Container, Text } from '@pixi/react';

export default function Darkness(interactions)
{
    return;
    if(interactions.lightsOn)
        return;

    return(
        <Stage width={1500} height={560} options={{ background: 0x000000, backgroundAlpha: 0.7, interactive: false}}>
        </Stage>
    );
}