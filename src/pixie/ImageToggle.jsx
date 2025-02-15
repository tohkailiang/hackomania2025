import React, { Component } from 'react';
import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Sprite, Container, Text } from '@pixi/react';


export default class ImageToggle extends React.Component
{
    
    render()
    {
        return (<Container x={0} y={0}>
            
            <Sprite
            image={this.props.image}
            x={this.props.X}
            y={this.props.Y}
            anchor={0.5}
            scale={1}
            interactive={true}
            pointerdown={()=>
            {
              this.props.toggleImage();
            }
            }
            >
            </Sprite>
          </Container>
        );
    }
}