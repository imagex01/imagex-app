
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import NFTDetail from '../../img/nft_pic_bg.png'
import DefaultUserIcon from '../../img/default_user.png'
import LikedIcon from '../../img/icon_like_pre.png'
import CoinIcon from '../../img/icon_coin_big.png'
import { Share } from '@capacitor/share';
import { useIonRouter } from '@ionic/react';

export default function PhotoResult() {

    const router = useIonRouter();


    return <IonPage>
        <IonHeader className="ion-no-border">
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton style={{ color: '#fff' }} />
                </IonButtons>
                <IonTitle color="light">
                    <div className='flex mr-6 items-center justify-center font-bold text-center' style={{ color: '#FFC600' }}>
                        Rate:
                        <img className='w-4 h-4 mx-2' src={CoinIcon} />
                        90 XIM
                    </div>
                </IonTitle>

            </IonToolbar>

        </IonHeader>
        <IonContent fullscreen>
            <div className='px-4 flex flex-col items-center justify-center max-w-xl mx-auto'>
                <div className="flex flex-col flex-1 mt-4 items-center w-full border-2 bg-gray-900 border-gray-500 py-3 px-3 rounded-md"
                    style={{ background: '#2E2B3B', border: '2px solid rgba(255,255,255,0.2)' }}>

                    <img className='h-96 rounded-md w-full object-cover' style={{ height: '65vh' }} src={NFTDetail} />

                </div>

                <input placeholder='Image Title' style={{ background: '#2E2B3B', border: '2px solid rgba(255,255,255,0.2)' }} className='h-12 mt-4 px-3 py-1 text-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded-md bg-gray-800 w-full' />

                <div className='w-full flex font-semibold text-white justify-center mt-6'>
                    You can mint 1NFT today
                </div>
                <div className='w-full flex mt-6 mb-8'>
                    <div className="h-16 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
                        <div onClick={ () => {
                            router.goBack()
                        }} className="cursor-pointer flex text-white font-semibold text-center rounded-full h-full w-full items-center justify-center bg-gray-800 back opacity-90" style={{ background: 'rgba(0,0,0,0.8)' }}>
                            Discard
                        </div>
                    </div>
                    <div onClick={()=>{
                        router.push("/photoReward")
                    }} className="h-16 ml-6 w-full rounded-full bg-gradient-to-r from-pink-600 to-purple-500 p-0.5">
                        <div className="cursor-pointer flex text-white font-semibold text-center rounded-full h-full w-full items-center justify-center" >
                            Mint
                        </div>
                    </div>
                </div>
            </div>


        </IonContent>

    </IonPage>


}