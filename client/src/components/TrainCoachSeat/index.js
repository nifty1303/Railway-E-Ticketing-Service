import Axios from 'axios';
import React, { Component } from 'react'
import { SeatButton } from '../SeatButton';

export class TrainCoachSeat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            style: {
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: "0px 4% 0px 0px",
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%"
            },
            
        }

        // alert(this.props.selectedTrainID)
        // alert(this.props.selectedCoachID)
        // alert(this.props.fromStationPosition)
        // alert(this.props.toStationPosition)
        // alert(this.props.journeyDate)

    }
    
    render() {
        return (
            <div style={this.state.style}>
                {this.props.seatList.map((seat, index) => {
                        return <SeatButton key={index} seat={seat} seatStatus={this.props.seatStatusList[index]}/>
                })}
            </div>
        )
    }
}

export default TrainCoachSeat
