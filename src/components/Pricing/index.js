import React, { Component } from 'react'
import MyButton from './../utils/MyButton'
import Zoom from 'react-reveal/Zoom'


export default class Pricing extends Component {
    state = {
        prices: [100, 150, 250],
        position: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur officia, quasi, expedita omnis incidunt provident libero hic nihil at maiores laboriosam harum in sapiente minima repellendus, facere dolorum ratione vel?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, possimus distinctio consequuntur voluptates autem quo explicabo expedita beatae similique nemo voluptatum voluptatem nihil placeat suscipit sit, doloremque vero deleniti dolore.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, at nesciunt ducimus reiciendis magnam sed eos labore ad vel. Dolorem nostrum reiciendis dicta neque fugit architecto at illo facere quo.'
        ],
        linkto: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
        delay:[500,0,500]
    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom key={i} delay={this.state.delay[i]}>
                 <div  className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.position[i]}</span>
                    </div>
                    <div className="pricing_description">
                        <span>{this.state.desc[i]}</span>
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            text="Purchase"
                            bck="#ffa800"
                            color="#ffffff"
                            link={this.state.linkto[i]}


                        />
                    </div>
                </div>
            </div>
            </Zoom>
        )
        )
    )



    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>
                        Pricing
                    </h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        )
    }
}
