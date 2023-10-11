import Icon1 from '../../img/market_photo_bg.png'
import Icon2 from '../../img/MintCamera_nft_bg.png'
import Icon3 from '../../img/Image_pic_bg.png'
import { useState } from 'react';
import LikedIcon from '../../img/icon_like_pre.png'
import LikeIcon from '../../img/icon_like.png'
import CameraIcon from '../../img/icon_camera.png'
import { useIonRouter } from '@ionic/react';

export default function MyNFTs() {

  const router = useIonRouter();

  const [list, setList] = useState<any>([
    {
      name: 'Water',
      url: Icon1,
      like: '36',
      isLike: 0
    },
    {
      name: 'Beauty',
      url: Icon2,
      like: '1.5k',
      isLike: 1
    },
    {
      name: 'Water',
      url: Icon3,
      like: '87',
      isLike: 1
    },
    {
      name: 'Beauty',
      url: Icon1,
      like: '3.5k',
      isLike: 1
    },
    {
      name: 'Water',
      url: Icon2,
      like: '219',
      isLike: 1
    },
    {
      name: 'Beauty',
      url: Icon3,
      like: '1.5k',
      isLike: 0
    },
    {
      name: 'Water',
      url: Icon1,
      like: '219',
      isLike: 1
    },
    {
      name: 'Beauty',
      url: Icon2,
      like: '1.5k',
      isLike: 0
    },
    {
      name: 'Water',
      url: Icon1,
      like: '219',
      isLike: 1
    },
    {
      name: 'Beauty',
      url: Icon2,
      like: '1.5k',
      isLike: 0
    },
    {
      name: 'Water',
      url: Icon3,
      like: '219',
      isLike: 1
    },
    {
      name: 'Beauty',
      url: Icon1,
      like: '1.5k',
      isLike: 0
    },
    {
      name: 'Water',
      url: Icon2,
      like: '219',
      isLike: 1
    },
    {
      name: 'Beauty',
      url: Icon3,
      like: '1.5k',
      isLike: 0
    },
    {
      name: 'Water',
      url: Icon1,
      like: '219',
      isLike: 1
    },
    {
      name: 'Beauty',
      url: Icon2,
      like: '1.5k',
      isLike: 0
    },
  ]);

  return <div className='relative'>
    <div className="font-normal grid px-4 my-4 grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {
        list.map((item: any, index: number) => {
          return <div key={index} className="cursor-pointer" onClick={() => {
            router.push('/photoSell');
          }}>
            <div className='relative'>
              <img className='relative rounded-md' src={item.url} />
              <div className='absolute bottom-2 right-2 py-0.5 px-2 flex items-center rounded-md' style={{ background: 'rgba(0,0,0,0.5)' }}>
                <img className='w-4 h-4 mr-1' src={item.isLike == 1 ? LikedIcon : LikeIcon} />
                <div className=' font-bold text-white'>{item.like}</div>
              </div>
            </div>
            <div className='mt-2  text-sm text-white font-semibold'>{item.name}{index}</div>
          </div>
        })
      }
    </div>
    <div className=' fixed bottom-16 left-4'>
            
            <img className=' cursor-pointer w-20 h-20' onClick={() => {
                    router.push('/photoResult');
                }} src={CameraIcon}  />

        </div>
  </div>


}