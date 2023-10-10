import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import FilterSelect from '../components/FilterSelect';

import MyNftIcon from '../img/Assest_icon_NFTs.png'
import MyNftPreIcon from '../img/Assest_icon_NFTs_pre.png'
import MyCameraPreIcon from '../img/Assest_icon_Camera_pre.png'
import MyCameraIcon from '../img/Assest_icon_Camera.png'
import MyBalanceIcon from '../img/Assest_icon_Balance.png'
import MyBalancePreIcon from '../img/Assest_icon_Balance_pre.png'

import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import MarketPage from './MarketPage';
import { ellipse, square, triangle } from 'ionicons/icons';
import MyNFTs from './assets/MyNFTs';
import MyCamera from './assets/MyCamera';
import MyBalance from './assets/MyBalance';

const filterOne = [
  { key: 'Wade Cooper', value: 'Scene' },
  { key: 'Arlene Mccoy', value: 'Animal' },
  { key: 'Devon Webb', value: 'Water' },
  { key: 'Tom Cook', value: 'Person' }
]

const AssetPage: React.FC = () => {

  const [tabPos, setTabPos] = useState<number>(0)

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle color="light">
            <div className='font-bold text-center'>Assets</div>
          </IonTitle>
        </IonToolbar>
        <div className='text-sm flex border-b border-gray-600 border-solid items-center w-full px-4 pt-2' style={{ background: '#12101F' }}>
          <div onClick={() => {
            setTabPos(0)
          }} className={`${tabPos==0?"border-indigo-600":"border-none"}  mr-4 cursor-pointer border-b-2  pb-2 flex-1 flex items-center justify-center text-white`}>
            <img className='w-4 mr-2' src={tabPos == 0 ? MyNftPreIcon : MyNftIcon} />
            <div className={tabPos == 0 ? "text-white" : "text-gray-4400"}>My NFTs</div>
          </div>

          <div onClick={() => {
            setTabPos(1)
          }} className={`${tabPos==1?"border-indigo-600":"border-none"} mr-4 cursor-pointer border-b-2  pb-2 flex-1 flex items-center justify-center text-white`}>
            <img className='w-4 h-4 mr-2' src={tabPos == 1 ? MyCameraPreIcon : MyCameraIcon} />
            <div className={tabPos == 1 ? "text-white" : "text-gray-400"}>My Camera</div>
          </div>
          <div onClick={() => {
            setTabPos(2)
          }} className={`${tabPos==2?"border-indigo-600":"border-none"} flex-1 cursor-pointer border-b-2  pb-2  flex items-center justify-center text-white`}>
            <img className='w-4 mr-2' src={tabPos == 2 ? MyBalancePreIcon : MyBalanceIcon} />
            <div className={tabPos == 2 ? "text-white" : "text-gray-400"}>My Balance</div>
          </div>
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <div className='mt-2 text-white'>

          {tabPos == 0? <MyNFTs />: tabPos == 1?<MyCamera /> : tabPos == 2? <MyBalance/> : <></>}
        
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AssetPage;
