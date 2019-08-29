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
        let loading;
        if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        let baseUrl = 'https://www.easy-mock.com/mock/5d5fb2ce9b58ad2249ff6c2b/mockapi';
        return new Promise((resolve, reject) => {
            // console.log('options', options);
            axios({
                baseURL: baseUrl,
                url: options.url,
                method: options.method || 'get' || 'post',
                timeout: 30000,
                params: (options.data && options.data.params) || '',
                header: {},
            }).then((response) => {
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if (response.status === 200) {
                    let res = response.data;
                    if (res.code === 0) {
                        resolve(res)
                    } else {
                        message.warning(res.msg)
                    }
                } else {
                    reject(response)
                }
            })
        })
    }
}
