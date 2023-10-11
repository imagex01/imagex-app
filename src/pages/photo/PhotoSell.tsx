
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons,IonBackButton } from '@ionic/react';
import NFTDetail from '../../img/nft_pic_bg.png'
import DefaultUserIcon from '../../img/default_user.png'
import LikedIcon from '../../img/icon_like_pre.png'
import CoinIcon from '../../img/icon_coin_big.png'
import { Share } from '@capacitor/share';
import { useIonRouter } from '@ionic/react';

export default function PhotoSell() {

    const router = useIonRouter();


    return <IonPage>
        <IonHeader className="ion-no-border">
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton style={{color:'#fff'}}  />
                </IonButtons>
                <IonTitle color="light">
                    <div className='font-bold text-center'>Photo Detail</div>
                </IonTitle>
                
            </IonToolbar>

        </IonHeader>
        <IonContent fullscreen>
            <div className='px-4 flex flex-col items-center justify-center max-w-xl mx-auto'>
                <div className="flex flex-col flex-1 mt-4 items-center w-full border-2 bg-gray-900 border-gray-500 py-3 px-3 rounded-md"
                    style={{ background: '#2E2B3B', border: '2px solid rgba(255,255,255,0.2)' }}>

                    <img className='h-96 rounded-md w-full object-cover' style={{ height: '65vh' }} src={NFTDetail} />
                    <div className='flex text-white w-full mt-4'>
                        <img onClick={()=>{
                            router.push('/userPage');
                        }}  className='w-12 h-12 rounded-full' src={DefaultUserIcon} />
                        <div className='ml-4 flex-1'>
                            <div className='flex items-center'>
                                <div className='flex-1 font-bold'>Water</div>
                                <img className='w-4 h-4 mr-1' src={LikedIcon} />
                                <div className=' font-bold text-white'>1.5k</div>
                            </div>
                            <div className=' text-gray-500'>Tom</div>
                        </div>

                    </div>

                </div>
                <div className='w-full flex mt-6'>
                    <div className='flex-1'></div>
                    <div className=' flex items-center'>
                        <img className='w-4 h-4 mr-2' src={CoinIcon} />
                        <div className=' font-bold text-amber-500' style={{ color: '#FFC600' }}>90 XIM</div>
                    </div>
                </div>
                <div className='w-full flex mt-6'>
                    <div className="h-16 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
                        <div onClick={async () => {
                            await Share.share({
                                title: 'See cool stuff',
                                text: 'Really awesome thing you need to see right meow',
                                url: 'http://google.com/',
                                dialogTitle: 'Share with photoes',
                            });
                        }} className="cursor-pointer flex text-white font-semibold text-center rounded-full h-full w-full items-center justify-center bg-gray-800 back opacity-90" style={{ background: 'rgba(0,0,0,0.8)' }}>
                            Share
                        </div>
                    </div>
                    <div className="h-16 ml-6 w-full rounded-full bg-gradient-to-r from-pink-600 to-purple-500 p-0.5">
                        <div className="cursor-pointer flex text-white font-semibold text-center rounded-full h-full w-full items-center justify-center" >
                            Sell
                        </div>
                    </div>
                </div>
            </div>


        </IonContent>

    </IonPage>


}