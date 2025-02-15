import { useState, useRef } from 'react'
import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Sprite, Container, Text } from '@pixi/react';
import { useInterval } from 'usehooks-ts';
import gsap from 'gsap';

export default function ImageRemover({X, Y, image, interactions})
{
    const [scale, setScale] = useState(1);
    const [mouseoverScale, setMouseover] = useState(1);
    const [remove, setRemove] = useState(false);
    const spriteRef = useRef(null);

    /*
    useInterval(
        () => {
          // Your custom logic here
          setScale(scale - 0.016 * 2);
        },
        // Delay in milliseconds or null to stop it
        remove ? 0.016 : null,
      )
        */

    if(scale > 0)
    {
        return(
            <Container x={0} y={0}>
                    
                <Sprite
                    image={image}
                    x={X}
                    y={Y}
                    anchor={0.5}
                    interactive={true}
                    ref={spriteRef}
                    pointerup={()=>
                    {
                        interactions.cupsPickedup++;
                        setRemove(true);
                        gsap.to(spriteRef.current, {
                            y: Y - 50,
                            alpha: 0,
                            duration: 1,
                            ease: "elastic.out(1, 0.3)"
                        });
                    }
                    }
                    onpointerenter={()=>
                    {
                        if(!remove)
                        gsap.to(spriteRef.current, {
                            y: Y - 10,
                            duration: 1,
                            ease: "elastic.out(1, 0.3)"
                        });
                    }
                    }
                    onpointerleave={()=>
                    {
                        if(!remove)
                        gsap.to(spriteRef.current, {
                            y: Y,
                            duration: 1,
                            ease: "elastic.out(1, 0.3)"
                        });
                    }
                    }
                    >
                    </Sprite>
                    
                  </Container>
        );
    }

    return;
}