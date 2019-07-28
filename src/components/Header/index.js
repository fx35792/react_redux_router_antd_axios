import React, {PureComponent} from 'react';
import {Row, Col, Button} from 'antd';
import axios from 'src/axios'
import Util from 'src/utils/time'
import './index.scss'

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'sunnyFan',
            sysTime: '',
            dayPictureUrl: '',
            weather: '',
        };
    }

    componentDidMount() {
        this.getCurrentDate();
        this.getCityWeather()
    }

    getCityWeather = () => {
        let city = '北京';
        axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res) => {
            if (res.status === 'success') {
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather
                })
            }
        })
    };

    getCurrentDate = () => {
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)
    };


    handleLogout = () => {
        console.log(111);
    };

    render() {
        const {userName, sysTime, dayPictureUrl, weather} = this.state;
        return (
            <div className="header">
                <div className="header-top">
                    <span>{userName}</span>
                    <Button type="primary" onClick={this.handleLogout}>退出</Button>
                </div>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">首页</Col>
                    <Col span={20} className="weather">
                        <span className="date">{sysTime}</span>
                        <span className="weather-img"><img src={dayPictureUrl} alt=""/></span>
                        <span className="weather-detail">{weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header;
