import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                color: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize + "pt",
                backgroundColor: this.props.logo.backgroundColor,
                borderColor: this.props.logo.borderColor,
                borderRadius: this.props.logo.borderRadius + "px",
                borderWidth: this.props.logo.borderThickness + "px",
                borderStyle: "solid",
                padding: this.props.logo.padding + "px",
                /**
                WITH CURRENT STRUCTURE OF UI -> ANY 
                ADDITIONAL HORIZONTAL MARGIN VALUE ABOVE 0
                CAUSES LOGO TO OVERFLOW AND SHIFT BELOW
                WORKSPACE (UNINTENDED). THEREFORE I AM 
                LIMITING ANY MARGIN SHIFTS TO VERTICAL 
                DIMENSION ONLY
                */
                margin: `${this.props.logo.margin}px 0px`
            }
        }
        return (
            <div className="col s8"
                style={ styles.container }>
                {this.props.logo.text}
            </div>
        )
    }
}

export default TextEditWorkspace