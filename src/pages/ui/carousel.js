import React, {PureComponent} from 'react';
import {Card, Carousel} from 'antd';
import './index.scss'

class CarouselDemo extends PureComponent {
    handleChange = () => {

    };

    render() {
        const carouseList = ['carousel-1.jpg', 'carousel-2.jpg', 'carousel-3.jpg'];
        return (
            <div>
                <Card title="文字背景轮播" className="card-wrap carouse-text">
                    <Carousel afterChange={this.handleChange} autoplay={true}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </Card>
                <Card title="图片轮播" className="card-wrap carouse-img">
                    <Carousel autoplay effect="fade">
                        {carouseList && carouseList.map((item, index) => (
                            <div key={index}>
                                <img src={`/carousel-img/${item}`} alt={item}/>
                            </div>
                        ))}
                    </Carousel>
                </Card>
            </div>
        );
    }
}

export default CarouselDemo;
