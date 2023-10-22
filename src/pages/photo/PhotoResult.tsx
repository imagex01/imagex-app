
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import NFTDetail from '../../img/nft_pic_bg.png'
import DefaultUserIcon from '../../img/default_user.png'
import LikedIcon from '../../img/icon_like_pre.png'
import CoinIcon from '../../img/icon_coin_big.png'
import { Share } from '@capacitor/share';
import { useIonRouter, useIonViewDidEnter } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CommonDialog from '../../components/CommonDialog';

export default function PhotoResult() {

    const [points, setPoints] = useState<string>("")
    const [aiData, setAiData] = useState<any>()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const router = useIonRouter();
    const paramsString = router.routeInfo.search.substring(1)
    const searchParams = new URLSearchParams(paramsString)
    const webPath = searchParams.get('webPath');
    console.log("webPath=", webPath);
    

    useEffect(()=>{
        if(webPath){
            getPhoto()
        }
    },[webPath])

    const getPhoto = async () => {
        const file = await fetch(webPath?webPath:"").then(r => r.blob()).then(blobFile => new File([blobFile], 'file', { type: blobFile.type }));
        console.log("file=", file);
        const formData = new FormData();
        formData.append('file', file);
        
        axios.post('https://api.gate.ai/api/v1/image/iqa', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(function (response: any) {
            console.info(response);
            if(response.data && response.data.code == 1){
                setAiData(response.data.data)
                setIsOpen(true);
                setPoints(Number(response.data.data.Avg).toFixed(2))
            }
        }).catch(function (error: any) {
            console.info(error);
            // let point = 60.094495948549
            // setPoints(point.toFixed(2))
           
        })
    }


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
        <CommonDialog isOpen={isOpen} setIsOpen={setIsOpen} data={aiData} />
        <IonContent fullscreen>
            <div className='px-4 flex flex-col items-center justify-center max-w-lg mx-auto'>
                <div className="flex flex-col flex-1 mt-4 items-center w-full border-2 bg-gray-900 border-gray-500 py-3 px-3 rounded-md"
                    style={{ background: '#2E2B3B', border: '2px solid rgba(255,255,255,0.2)' }}>

                    <img className='h-96 rounded-md w-full object-cover' style={{ height: '65vh' }} src={webPath?webPath:NFTDetail} />

                </div>

                <input placeholder='Image Title' style={{ background: '#2E2B3B', border: '2px solid rgba(255,255,255,0.2)' }} className='h-12 mt-4 px-3 py-1 text-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded-md bg-gray-800 w-full' />

                <div className='w-full flex flex-col items-center font-semibold text-white justify-center mt-6'>
                    {points && <div onClick={()=>{
                        setIsOpen(true)
                    }} className='mb-2 flex cursor-pointer items-center' style={{ color: '#FFC600' }}>AI scoring: {points}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>
</div>}
                    You can mint 1NFT today
                </div>
                <div className='w-full flex mt-6 mb-8'>
                    <div className="h-16 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
                        <div onClick={() => {
                            router.goBack()
                        }} className="cursor-pointer flex text-white font-semibold text-center rounded-full h-full w-full items-center justify-center bg-gray-800 back opacity-90" style={{ background: 'rgba(0,0,0,0.8)' }}>
                            Discard
                        </div>
                    </div>
                    <div onClick={() => {
                        router.push("/photoReward?webPath=" + webPath);
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