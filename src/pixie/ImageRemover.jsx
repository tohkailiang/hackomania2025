import { useState } from 'react'
import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Sprite, Container, Text } from '@pixi/react';
import { useInterval } from 'usehooks-ts';

export default function ImageRemover({X, Y, image})
{
    const [scale, setScale] = useState(1);
    const [remove, setRemove] = useState(false);

    useInterval(
        () => {
          // Your custom logic here
          setScale(scale - 0.016 * 2);
        },
        // Delay in milliseconds or null to stop it
        remove ? 0.016 : null,
      )

    if(scale > 0)
    {
        return(
            <Container x={0} y={0}>
                    
                <Sprite
                    image={image}
                    x={X}
                    y={Y - (1 - scale) * 100}
                    anchor={0.5}
                    scale={1}
                    alpha={scale}
                    interactive={true}
                    pointerdown={()=>
                    {
                        setRemove(true);
                    }
                    }
                    >
                    </Sprite>
                    
                  </Container>
        );
    }

    return;
}