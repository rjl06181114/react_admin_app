import ajax from './ajax';
import jsonp from 'jsonp';
import { message } from 'antd'
export const reqlogin = (value) => ajax('/login', value, 'POST');
export const reqWeather = (city) => {
      return new Promise((resolve, reject) => {
            let url = `https://restapi.amap.com/v3/weather/weatherInfo?city=${city}&key=ac47577d15743c6a872fd6e11c7f39e8`
            jsonp(url, {}, (err, data) => {
                  if (!err && data.lives) {
                        let { weather } = data.lives[0];
                        resolve(weather);
                  } else {
                        message.error('天气获取失败');
                  }
            })
      })
}
export const reqCategorys = (parentId) => ajax('/manage/category/list', { parentId },'GET');
export const reqAddCategory = (categoryname, parentId) => ajax('/manage/category/add', { categoryname, parentId }, 'POST');
export const reqUpdateCategory = (categoryname, parentId) => ajax('/manage/category/update', { categoryname, parentId }, 'POST');
