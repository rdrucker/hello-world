import React, { Component } from 'react';
import _ from 'lodash';

class Renata extends Component {
    constructor(props) {
        super(props);
    }
    render() {
       // var myReps = _.repeat("It's me! {this.props.repeat} ", this.props.repeat);
        var myArray = _.range(this.props.repeat);
        var greet = this.props.thegreeting;
        var newRs = _.map(myArray, (n) => {
            return (
                <div> {greet} {n}
                </div>
            );
        }
        );
        return (
            <div>
                {newRs};
        </div>
        );
    }

}

export default Renata;