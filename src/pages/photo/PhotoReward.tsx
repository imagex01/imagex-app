
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import NFTDetail from '../../img/nft_pic_bg.png'
import DefaultUserIcon from '../../img/default_user.png'
import LikedIcon from '../../img/icon_like_pre.png'
import CongratsBgIcon from '../../img/congrats_bg.png'
import CoinIcon from '../../img/icon_coin_big.png'
import { Share } from '@capacitor/share';
import { useIonRouter } from '@ionic/react';

export default function PhotoReward() {

    const router = useIonRouter();
    const paramsString = router.routeInfo.search.substring(1)
    const searchParams = new URLSearchParams(paramsString)
    const webPath = searchParams.get('webPath');


    return <IonPage >

        <IonHeader className="ion-no-border">
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton style={{ color: '#fff' }} />
                </IonButtons>
                <IonTitle color="light">
                    <div className='font-bold text-center'>Congrats</div>
                </IonTitle>

            </IonToolbar>

        </IonHeader>
        <IonContent fullscreen>
            <div className='px-4 flex flex-col items-center justify-center  max-w-lg mx-auto'>
                <div className='w-full relative'>
                    <div className="flex text-white font-semibold flex-col flex-1 mt-4  w-full border-2 bg-gray-900 border-gray-500 py-3 px-3 rounded-md"
                        style={{ background: '#2E2B3B', border: '2px solid rgba(255,255,255,0.2)' }}>

                        <img className='h-96 rounded-md w-full object-cover' style={{ height: '65vh' }} src={webPath?webPath:NFTDetail} />
                        <div className='mt-2'>The name of photo</div>
                        <div className='flex items-center' style={{ color: '#FFC600' }}>
                            <img className='w-4 h-4 mr-1' src={CoinIcon} />
                            90 XIM
                        </div>
                    </div>

                    <img className='z-10 absolute top-0 bottom-48' style={{ height: '75vh' }} src={CongratsBgIcon} />
                </div>

                <div className='w-full flex font-semibold text-white justify-center mt-6'>
                    You've got 90 XIMs!
                </div>
                <div className='w-full flex mt-6'>
                    <div className="h-16 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
                        <div onClick={async () => {
                            router.push("/tabs/wallet")
                        }} className="cursor-pointer flex text-white font-semibold text-center rounded-full h-full w-full items-center justify-center bg-gray-800 back opacity-90" style={{ background: 'rgba(0,0,0,0.8)' }}>
                            Check More
                        </div>
                    </div>
                    <div className="h-16 ml-6 w-full rounded-full bg-gradient-to-r from-pink-600 to-purple-500 p-0.5">
                        <div className="cursor-pointer flex text-white font-semibold text-center rounded-full h-full w-full items-center justify-center" >
                            Share
                        </div>
                    </div>
                </div>
            </div>


        </IonContent>

    </IonPage>


}