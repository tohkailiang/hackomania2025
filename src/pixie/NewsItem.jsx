import { Container } from "@pixi/react";
import { RoundedRectangle } from "pixi.js";

export default function NewsItem({width, height, sprite})
{
    return(
        <Container>
            <RoundedRectangle width={width} height={height}>
                <Sprite
                    image={sprite}>

                </Sprite>
            </RoundedRectangle>
        </Container>
    )
}