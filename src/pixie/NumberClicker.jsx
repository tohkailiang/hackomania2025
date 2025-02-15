
import React, { Component } from 'react';
import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Sprite, Container, Text } from '@pixi/react';

export default class NumberCLicker extends React.Component
{
    
    render()
    {
        const url = "/nikkidp.png";
        return (<Container x={this.props.X} y={this.props.Y}>
            
            <Sprite
            image={url}
            x={this.props.X}
            y={this.props.Y}
            anchor={0.5}
            scale={0.25}
            interactive={true}
            pointerdown={()=>
            {
              console.log("hello");
              this.props.setCount0();
            }
            }
            >
                
            </Sprite>
            <Text
              text={this.props.count0}
              anchor={0.5}
              x={this.props.X}
              y={this.props.Y}
              style={
                new TextStyle({
                  align: 'center',
                  fill: '0xffffff',
                  fontSize: 50,
                  letterSpacing: 10,
                  dropShadow: true,
                  dropShadowColor: '#E72264',
                  dropShadowDistance: 6,
                })
              }
            />
          </Container>
        );
    }
}