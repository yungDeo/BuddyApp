import React, { Component } from 'react'
import {  View,Image } from 'react-native'

export  class FullWidthImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            height: 0
        };
    }

    _onLayout(event) {
        const containerWidth = event.nativeEvent.layout.width;

        if (this.props.ratio) {
            this.setState({
                width: containerWidth,
                height: containerWidth * this.props.ratio
            });
        } else {
            Image.getSize(this.props.source, (width, height) => {
                this.setState({
                    width: containerWidth,
                    height: containerWidth * height / width
                });
            });
        }
    }

    render() {
        return (
            <View onLayout={this._onLayout.bind(this)}>
                <Image
                    source={this.props.source}
                    style={{
                        width: this.state.width,
                        height: this.state.height, 
                        resizeMode: 'contain',
                        position: 'relative',
                        top: 61, 
                        left: 0,
                        
                    }} />
            </View>
        );
    }
}