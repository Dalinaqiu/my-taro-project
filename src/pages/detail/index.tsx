import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import {imagesArr} from '../index'
import './index.less'

const tags = [
    '#Romantic',
    '#Fiction',
    '#Love Story',
    '#Fiction'
];

export default () => {
    return (
        <div className='dream-ai-detail'>
            <Swiper
              className='test-h'
              indicatorColor='#999'
              indicatorActiveColor='#333'
              circular
              indicatorDots
              autoplay
            >
                {imagesArr.map(item => (
                    <SwiperItem key={item.title}>
                        <View className='demo-text-1'>
                            <Image src={item.image} />
                        </View>
                    </SwiperItem>
                ))}
            </Swiper>
            {/* {imagesArr.map(item => (
                <>
                    <Image src={item.image} />
                    <span>{item.title}</span>
                </>
            ))} */}
            <p className='detail-content'>You find yourself in a vast celestial landscape,with the radiant figure of Goddess Maria shining brightly beyond the sun. Her golden aura illuminates the surroundings casting a warm light on the ethereal clouds that float in the sky. </p>
            {
                [...tags, ...tags].map(t => <span className='detail-tag' key={t}>{t}</span>)
            }
            {['Time travel', 'PRG', 'Science Fiction', 'Fantasy'].map(c => (
                <span key={c} className='detail-label'>{c}</span>
            ))}
        </div>
    )
};