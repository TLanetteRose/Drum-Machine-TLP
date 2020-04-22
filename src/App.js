import React, {Component} from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';

import {Header} from '../src/components/Header';
import {Footer} from '../src/components/Footer';
import DrumPad from '../src/components/DrumPad';




const bankOne = [{
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const bankTwo = [{
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: String.fromCharCode(160),
      currentPadBank: bankOne,
      currentPadBankId: 'Heater Kit',
      sliderVal: 0.3
    }
    this.displayClipName = this.displayClipName.bind(this);
    this.selectBank = this.selectBank.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
    this.powerControl = this.powerControl.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }
  powerControl() {
    this.setState({
      power: !this.state.power,
      display: String.fromCharCode(160)
    });
  }
  selectBank() {
    if (this.state.power) {
      this.state.currentPadBankId === 'Heater Kit' ? this.setState({
        currentPadBank: bankTwo,
        display: 'Smooth Piano Kit', 
        currentPadBankId: 'Smooth Piano Kit', 
      }) : this.setState({
        currentPadBank: bankOne,
        display: 'Heater Kit',
        currentPadBankId: 'Heater Kit',
      });
    }
  }
  displayClipName(name) {
    if (this.state.power) {
      this.setState({
        display: name
      });
    }
  }
  adjustVolume(e){
    if (this.state.power) {
      this.setState({
        sliderVal: e.target.value,
        display: "Volume: " + Math.round(e.target.value * 100)
      });
      setTimeout(() => this.clearDisplay(),100);
    }
  }
  clearDisplay() {
    this.setState({
      display: String.fromCharCode(160)
    });
  }

  render() {
    const powerSlider = this.state.power ? {
      float: 'right'
    } : {
      float: 'left'
    };
    const bankSlider = this.state.currentPadBank === bankOne ? {
      float: 'left'
    }: {
      float: 'right'
    }; {
      const clips = [].slice.call(document.getElementsByClassName('clip'));
      clips.forEach(sound => {
        sound.volume = this.state.sliderVal
      });
    }


    return (
      <Container className="container">
        <Header />
        <div id="drum-machine" className="drum">
          <PadBank power={this.state.power}
            updateDisplay={this.displayClipName} clipVolume={this.state.sliderVal} currentPadBank={this.state.currentPadBank} />
          <div className="control-container">
            <div className="control">
              <p>Power</p>
              <div onClick={this.powerControl} className="select">
                <div style={powerSlider} className="inner" />
              </div>
            </div>
            <p id="display" class="drum-display">
              {this.state.display}
            </p>
            <div className="volume-slider">
              <input type="range" min="0" max="1" step="0.01" value= {this.state.sliderVal} onChange={this.adjustVolume} />
            </div>
            <div className="control">
              <p>Bank</p>
              <div onClick={this.selectBank} className="select">
                <div style={bankSlider} className="inner" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Container>
    )
  }
}

class PadBank extends Component {
  // eslint-disable-next-line 
  constructor(props) {
    super(props);
  }
  render() {
    let padBank; 
    this.props.power ? padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
      return (
        <DrumPad clipId={padBankArr[i].id} clip={padBankArr[i].url} keyTrigger={padBankArr[i].keyTrigger} keyCode={padBankArr[i].keyCode} updateDisplay={this.props.updateDisplay} power={this.props.power} />
      )
    }) : padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
      return (
        <DrumPad clipId={padBankArr[i].id} clip="#" keyTrigger={padBankArr[i].keyTrigger} keyCode={padBankArr[i].keyCode} updateDisplay={this.props.updateDisplay} power={this.props.power} />
      )
    });
    return (
      <div className="pad-bank">
        {padBank}
      </div>
    )
  }
}


