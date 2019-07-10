import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'
export default class TimeUntil extends Component {
    render() {


        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event starts in
                </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                23
                        </div>
                            <div className="countdown_tag">
                                days
                        </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                23
                        </div>
                            <div className="countdown_tag">
                                hr
                        </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                23
                        </div>
                            <div className="countdown_tag">
                                min
                        </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                23
                        </div>
                            <div className="countdown_tag">
                                sec
                        </div>
                        </div>
                    </div>
                </div>
            </Slide>
        )
    }
}