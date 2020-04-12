import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.displayCity} className={this.props.classBtn}>
                <span className={this.props.classSpan}/>
                <span><strong>{this.props.text}</strong></span>
            </button>
        );
    }

}

export default Button;