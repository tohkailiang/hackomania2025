import { useState, useRef } from 'react'
import { Stage, Sprite, Container, Text } from '@pixi/react';
import gsap from 'gsap';

export default function ImagePoker({image}) {
    const [isHovered, setIsHovered] = useState(false);
    const spriteRef = useRef(null);

    return(
        <Stage width={300} height={350} options={{ background: 0xffffff, backgroundAlpha: 0}}>
            <Sprite
        image={image}
        x={150}
        y={175}
        anchor={(0.5, 0.5)}
        scale={0.5}
        interactive={true}
                ref={spriteRef}
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