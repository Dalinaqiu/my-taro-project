import { useState } from 'react'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { AtTabs, AtTabsPane, AtSearchBar, AtButton } from 'taro-ui'
import Harry from './static/images/harry.png'
import Woman1 from './static/images/woman1.png'
import Woman2 from './static/images/woman2.png'
import Woman3 from './static/images/woman3.png'
import Account from './static/images/account.png'
import './index.less'

export const imagesArr = [
  {image: Harry, title: 'Spider Potter', content: 'Love, celebration, and a promise of forever.'},
  {image: Woman1, title: 'Goddess Maria', content: 'The rise and fall of an ancient empire.'},
  {image: Woman2, title: 'Moonlight', content: 'Love, celebration, and a promise of forever.'},
  {image: Woman3, title: 'Jungle Hunter', content: 'Love, celebration, and a promise of forever.'},
];

export default function Index() {
  const [current, setCurrent] = useState(1);
  const [value, setValue] = useState('');
  const tabList = [
    { title: 'Default' },
    { title: 'Revent' },
    { title: 'Hot' },
    { title: 'Nodes' }
  ]

  useLoad(() => {
    console.log('Page loaded.')
  })

  const goToDetail = () => {
    Taro.navigateTo({
      url: '/pages/detail/index',
    })
  }

  return (
    <div className='dream-ai'>
      <AtSearchBar
        value={value}
        onChange={e => setValue(e)}
      />
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay
      >
        {[0, 1, 2, 3, 4, 5, 6].map(item => (
          <SwiperItem key={item}>
            <View className='demo-text-1'>
              <Image src={Harry} />
            </View>
          </SwiperItem>
        ))}
      </Swiper>
      {/* <View className='inner-block'>
        <AtButton
          full={false}
          size='small'
        >
          Get started
        </AtButton>
      </View> */}
      <AtTabs current={current} tabList={tabList} onClick={(e)=>{setCurrent(e)}}>
        <AtTabsPane current={current} index={0} >
          <View className='index'>
            <Text></Text>
          </View>
        </AtTabsPane>
      </AtTabs>
      <View className='images-box'>
        {imagesArr.map(item => (
          <div key={item.title} className='images-box-item' onClick={goToDetail}>
            <Image className='' src={item.image} />
            <p>{item.title}</p>
            <div className='images-box-flex'>
              <span>{item.content}</span>
              <Image className='images-box-flex-account' src={Account}></Image>
            </div>
            
            
          </div>
        ))}
      </View>
    </div>
  )
}
