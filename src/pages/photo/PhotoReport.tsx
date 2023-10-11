import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import NFTDetail from '../../img/nft_pic_bg.png'
import RadioPreIcon from '../../img/radio_pre.png'
import RadioIcon from '../../img/radio.png'
import React, { useState } from 'react';

export default function PhotoReport() {

    const [pos, setPos] = useState<number>(0);

    return <IonPage>
        <IonHeader className="ion-no-border">
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton style={{ color: '#fff' }} />
                </IonButtons>
                <IonTitle color="light">
                    <div className='font-bold text-center'>Report This Image</div>
                </IonTitle>
            </IonToolbar>

        </IonHeader>
        <IonContent fullscreen>
            <div className='px-4 flex flex-col items-center justify-center max-w-xl mx-auto'>
                <div className="flex  flex-col flex-1 mt-4 items-center w-full border-2 bg-gray-900 border-gray-500 py-3 px-3 rounded-md"
                    style={{ background: '#2E2B3B', border: '2px solid rgba(255,255,255,0.2)' }}>

                    <div className=' relative h-0 w-full' style={{ paddingBottom: '100%' }}>
                        <img className='h-full w-full rounded-md absolute object-cover' src={NFTDetail} />
                    </div>



                </div>
                <div className='w-full mt-4 text-white font-bold'>
                    <div>Pick up a reason:</div>
                    <div onClick={()=>{
                        setPos(0)
                    }} className="flex cursor-pointer flex-1 mt-4 items-center w-full border-2 bg-gray-900 border-gray-500 py-3 px-3 rounded-md"
                        style={{ background: '#2E2B3B', border: '2px solid rgba(255,255,255,0.2)' }}>
                        <img className='w-6' src={pos==0?RadioPreIcon:RadioIcon} />
                        <div className='flex-1' />
                        <div>Porn</div>
                    </div>
                    <div onClick={()=>{
                        setPos(1)
                    }} className="flex cursor-pointer flex-1 mt-4 items-center w-full border-2 bg-gray-900 border-gray-500 py-3 px-3 rounded-md"
                        style={{ background: '#2E2B3B', border: '2px solid rgba(255,255,255,0.2)' }}>
                        <img className='w-6' src={pos==1?RadioPreIcon:RadioIcon} />
                        <div className='flex-1' />
                        <div>Politic</div>
                    </div>
                    <div onClick={()=>{
                        setPos(2)
                    }} className="flex cursor-pointer flex-col flex-1 mt-4 items-center w-full border-2 bg-gray-900 border-gray-500 py-3 px-3 rounded-md"
                        style={{ background: '#2E2B3B', border: '2px solid rgba(255,255,255,0.2)' }}>
                        <div className='flex w-full'>
                            <img className='w-6' src={pos==2?RadioPreIcon:RadioIcon} />
                            <div className='flex-1' />
                            <div>Etc</div>
                        </div>
                        <textarea disabled={pos!=2} style={{background:'rgba(0,0,0,0.2)'}} className='h-14 px-3 py-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded-md mt-2 bg-gray-800 w-full' />

                    </div>
                </div>
                <div className='w-full flex mt-6'>
                    <div className="h-14 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-700 p-0.5">
                        <div onClick={() => {

                        }} className="cursor-pointer flex text-white font-semibold text-center rounded-full h-full w-full items-center justify-center bg-gray-800 back opacity-90" style={{ background: 'rgba(0,0,0,0.8)' }}>
                            Submit
                        </div>
                    </div>

                </div>
            </div>


        </IonContent>

    </IonPage>

}

