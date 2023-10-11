import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import FilterSelect from '../components/FilterSelect';
import Icon1 from '../img/market_photo_bg.png'
import Icon2 from '../img/MintCamera_nft_bg.png'
import Icon3 from '../img/Image_pic_bg.png'
import LikedIcon from '../img/icon_like_pre.png'
import LikeIcon from '../img/icon_like.png'
import { useIonRouter } from '@ionic/react';

const filterOne = [
  { key: 'Wade Cooper', value: 'Scene' },
  { key: 'Arlene Mccoy', value: 'Animal' },
  { key: 'Devon Webb', value: 'Water' },
  { key: 'Tom Cook', value: 'Person' }
]

const filterTwo = [
  { key: 'Wade Cooper', value: 'Price' },
  { key: 'Arlene Mccoy', value: 'Hot' },
  { key: 'Devon Webb', value: 'New' },
  { key: 'Tom Cook', value: 'Latest' }
]

const MarketPage: React.FC = () => {

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

  const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle color="light">
            <div className='font-bold text-center'>Market</div>
          </IonTitle>
        </IonToolbar>
        <div className=' flex items-center w-full px-4 pb-2' style={{ background: '#12101F'}}>
          <div className='mr-4 flex-1'>
            <FilterSelect list={filterOne} />
          </div>

          <div className=' flex-1'>
            <FilterSelect list={filterTwo} />
          </div>
        </div>
      </IonHeader>
      <IonContent fullscreen>
        
        <div className="font-normal grid px-4 my-4 grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {
            list.map((item: any, index: number) => {
              return <div onClick={()=>{
                router.push('/photoBuy');
              }} key={index} className=" cursor-pointer">
                <div className='relative'>
                  <img className='relative rounded-md' src={item.url} />
                  <div className='absolute bottom-2 right-2 py-0.5 px-2 flex items-center rounded-md' style={{ background: 'rgba(0,0,0,0.5)' }}>
                      <img className='w-4 h-4 mr-1' src={item.isLike==1?LikedIcon:LikeIcon} />
                      <div className=' font-bold text-white'>{item.like}</div>
                  </div>
                </div>
                <div className='mt-2 text-sm font-bold text-white'>{item.name}{index}</div>
              </div>
            })
          }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MarketPage;
