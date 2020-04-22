import React, { Component } from 'react';
import './styles/DrumPad.css';


const activeStyle = {
  backgroundColor: "var(--color-md-steel-blue)",
  boxShadow: "0 3px var(--color-md-steel-blue)",
  height: 77,
  marginTop: 13
}

const inactiveStyle = {
  backgroundColor: 'var(--color-dk-cyan)',
  marginTop: 10,
  boxShadow: "3px 3px 5px black"
}

export default class DrumPad extends Component {
    constructor(props) {
        super(props); 
        this.state = {
          padStyle: inactiveStyle
        }  
        this.playSound =  this.playSound.bind(this); 
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.activatePad = this.activatePad.bind(this);
    }
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
    handleKeyPress(e) {
      if (e.keyCode === this.props.keyCode) {
        this.playSound();
      }
    }
    activatePad() {
      if (this.props.power) {
        this.state.padStyle.backgroundColor === 'var(--color-md-steel-blue)' ? this.setState({
          padStyle: inactiveStyle
        }) : this.setState({
          padStyle: activeStyle
        });
      } else {
        this.state.padStyle.marginTop === 13
          ? this.setState({
              padStyle: inactiveStyle,
            })
          : this.setState({
              padStyle: {
                height: 77,
                marginTop: 13,
                backgroundColor: "var(--color-deep-navy-blue)",
                boxShadow: "0 3px var(--color-deep-navy-blue)"
              }
            });
      }
    }
    playSound(e) {
      const sound = document.getElementById(this.props.keyTrigger);
      sound.currentTime = 0;
      sound.play();
      setTimeout(() => this.activatePad(), 100);
      this.props.updateDisplay(this.props.clipId.replace(/-/g,' '));
    }
    render () {
      return (
        <div id={this.props.clipId} onClick={this.playSound} className="drum-pad" style={this.state.padStyle}>
          <audio className='clip' id={this.props.keyTrigger} src={this.props.clip}></audio>
          {this.props.keyTrigger}
        </div>
      )
    }
}



