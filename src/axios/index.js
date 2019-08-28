import JsonP from 'jsonp';
import axios from 'axios';
import {message} from 'antd';

export default class Axios {
    static jsonp(option) {
        return new Promise((resolve, reject) => {
            JsonP(option.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status === 'success') {
                    resolve(response);
                } else {
                    reject(response.message);
                }
            })
        })
    }

    static ajax(options) {
        return new Promise((resolve, reject) => {
            let baseUrl = 'https://www.easy-mock.com/mock/5d5fb2ce9b58ad2249ff6c2b/mockapi';
            axios({
                baseURL: baseUrl,
                url: options.url,
                method: options.method || 'get' || 'post',
                timeout: 5000,
                param: (options.data && options.data.params) || '',
                header: {},
            }).then((response) => {
                if (response.status === 200) {
                    let res = response.data;
                    if (res.code === 0) {
                        resolve(res)
                    } else {
                        message.warning(res.data.msg)
                    }
                } else {
                    reject(response.data)
                }
            })
        })
    }
}
