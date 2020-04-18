import React from 'react';
import './styles/DrumPad.css';


export default class DrumPad extends React.Component {
    constructor(){
        super()
        this.handleKeyPress=this.handleKeyPress.bind(this);
        this.playSound=this.playSound.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
    }
    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyPress)
    }

    handleKeyPress(e){
        if(e===this.props.keyCode){
            this.playSound()
        }
    }
    playSound(){
        const sound = document.getElementById(this.props.keyTrigger)
        sound.currentTime=0
        sound.play()
        this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
    }

    render(){
        return(
            <div id={this.props.clipId} onClick={this.playSound} className="drum-pad">
                {this.props.keyTrigger}
                <audio id={this.props.keyTrigger} src={this.props.clip}></audio>
            </div>
        )
    }
}