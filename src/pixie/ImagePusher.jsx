import { useState, useRef } from 'react'
import { Stage, Sprite, Container, Text } from '@pixi/react';
import gsap from 'gsap';


export default function ImagePusher({X, Y, image, interactions, direction})
{
    const [pushed, setPush] = useState(false);
    const spriteRef = useRef(null);

    return(
        <Container x={0} y={0}>
        <Sprite
        image={image}
        x={pushed?X + 50 * direction:X}
        y={Y}
        anchor={0.5}
        scale={{x:direction,y:1}}
        interactive={true}
        ref={spriteRef}
        pointerup={()=>
        {
            if(!pushed)
            {
                /*
                gsap.fromTo(spriteRef.current, {x:X}, {
                    x: X + 50 * direction,
                    duration: 1,
                    ease: "elastic.out(1, 1)"
                });
                */
                setPush(true);
                interactions.chairsPushed++;
                gsap.to(spriteRef.current, {
                    y: Y,
                    duration: 1,
                    ease: "elastic.out(1, 0.3)"
                });
            }
            else
            {
                /*
                gsap.fromTo(spriteRef.current, {x:X}, {
                    x: X + 50 * direction,
                    duration: 1,
                    ease: "elastic.out(1, 1)"
                });
                */
            }
        }
        }
        onpointerenter={()=>
        {
            if(!pushed)
            gsap.to(spriteRef.current, {
                y: Y - 2,
                duration: 1,
                ease: "elastic.out(1, 0.3)"
            });
        }
        }
        onpointerleave={()=>
        {
            if(!pushed)
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