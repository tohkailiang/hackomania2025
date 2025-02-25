import { useState, useRef } from 'react'
import { Stage, Sprite, Container, Text } from '@pixi/react';
import gsap from 'gsap';

export default function ImagePoker({image, interactions, isWhiteChick}) {
    const [isHovered, setIsHovered] = useState(false);
    const spriteRef = useRef(null);

    return(
        <Stage width={300} height={500} options={{ background: 0xffffff, backgroundAlpha: 0}}>
            <Sprite
        image={image}
        x={150}
        y={300}
        anchor={(0.5, 0.5)}
        scale={{x:isWhiteChick?-0.5:0.5, y:0.5}}
        interactive={true}
                ref={spriteRef}
                onpointerup={()=>
                {
                    if(spriteRef.current.y >= 300)
                    {
                        if(isWhiteChick)
                        {
                            interactions.whiteChickenClicks++;
                        }
                        else
                        {
                            interactions.brownChickenClicks++;
                        }
                        gsap.to(spriteRef.current, {
                            y: 250,
                            duration: 0.1,
                            yoyo: true,
                            repeat:1,
                        });
                    }
                }
                }
                onpointerenter={() => {
                    gsap.to(spriteRef.current, {
                        angle: 10,
                        duration: 1,
                        ease: "elastic.out(3, 0.3)"
                    });
                }}
                onpointerleave={() => 
                    {
                        gsap.to(spriteRef.current, {
                            angle: 0,
                            duration: 1,
                            ease: "elastic.out(3, 0.3)"
                        });
                    }}
            />
        </Stage>
    )
}