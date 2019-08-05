import React, {PureComponent} from 'react';
import {Card, Row, Col, Modal} from 'antd';

const {Meta} = Card;

class Gallery extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            galleryVisible: false,
            imgUrl: ''
        }
    }

    openGallery = (value) => {
        this.setState({
            galleryVisible: true,
            imgUrl: value
        })
    };

    handleCancel = () => {
        this.setState({
            galleryVisible: false
        })
    };

    render() {
        const {galleryVisible, imgUrl} = this.state;
        const imgArr = [
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['6.png', '7.png', '8.png', '9.png', '10.png'],
            ['11.png', '12.png', '13.png', '14.png', '15.png'],
            ['16.png', '17.png', '18.png', '19.png', '20.png'],
            ['21.png', '22.png', '23.png', '24.png', '25.png']
        ];

        const list = imgArr.map(list => list.map((item, index) => (
            <Card
                hoverable
                key={index}
                style={{marginBottom: 10}}
                cover={<img alt={`${item}`} src={`gallery/${item}`} onClick={() => this.openGallery(item)}/>}
            >
                <Meta title="React image gallery" description="this is a images gallery"/>
            </Card>
        )));
        return (
            <div className="card-wrap">
                <Row gutter={8}>
                    {list && list.map((item, index) => (
                        <Col md={index === 4 ? 4 : 5} key={index}>
                            {item}
                        </Col>
                    ))}
                </Row>
                <Modal
                    width={300}
                    height={500}
                    title={`图片画廊${imgUrl}`}
                    visible={galleryVisible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <img src={`/gallery/${imgUrl}`} alt="" style={{width: '100%'}}/>
                </Modal>
            </div>
        );
    }
}

export default Gallery;
