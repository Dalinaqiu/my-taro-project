import { useState } from 'react';
import { Image } from '@tarojs/components'
import { AtButton } from 'taro-ui';
import Arrow from '../index/static/images/arrow.png'
import Account from '../index/static/images/account.png'
import Vector from '../index/static/images/Vector.png'
import {imagesArr} from '../index'
import './index.less'

const tags = [
    '#Romantic',
    '#Fiction',
    '#Love Story',
    '#Fiction'
];

export default () => {
    const [current, setCurrent] = useState(0);

    const imageClick = () => {
        if (current <3) {
            setCurrent(current + 1)
        }
        else {
            setCurrent(0)
        }
    }
    return (
        <div className='dream-ai-detail'>
            {imagesArr.map((item, index) => {
                if (index === current) {
                    return (
                        <>
                        <Image src={item.image} />
                        <div className='detail-image-title'>
                            <span>{item.title}</span>
                            <Image className='images-box-flex-account' src={Account}></Image>
                            <p>Fanning</p>
                        </div>
                        <Image
                          className='detail-image-arrow'
                          src={Arrow}
                          onClick={imageClick}
                        />
                    </>)
                }
                return <></>;
            })}
            <p className='detail-content'>You find yourself in a vast celestial landscape,with the radiant figure of Goddess Maria shining brightly beyond the sun. Her golden aura illuminates the surroundings casting a warm light on the ethereal clouds that float in the sky. </p>
            {
                [...tags, ...tags].map(t => <span className='detail-tag' key={t}>{t}</span>)
            }
            {['Time travel', 'PRG', 'Science Fiction', 'Fantasy'].map(c => (
                <span key={c} className='detail-label'>{c}</span>
            ))}
            {/* <div className='detail-footer'>
                <div className='detail-images'></div>
                <span>+28 contributors</span>
                <Image src={Vector} />
                <span>2490</span>
            </div> */}
            <AtButton type='primary' size='normal'> Enter Dream </AtButton>
        </div>
    )
};