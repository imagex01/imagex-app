import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import NFTDetail from '../../img/nft_pic_bg.png'
import SubPreIcon from '../../img/btn_subtract.png'
import SubDisabledIcon from '../../img/btn_subtract_disabled.png'
import AddPreIcon from '../../img/btn_add.png'
import AddDisabledIcon from '../../img/btn_subtract_disabled.png'
import React, { useState } from 'react';
import IconCamera1 from '../../img/camera1.jpeg'
import IconCamera2 from '../../img/camera2.jpeg'
import IconCamera3 from '../../img/camera3.jpeg'
import IconCamera4 from '../../img/camera4.jpeg'
import IconCamera5 from '../../img/camera5.jpeg'
import MyBalancePreIcon from '../../img/Assest_icon_Balance_pre.png'
import CoinIcon from '../../img/icon_coin_big.png'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export default function MintCamera() {

    const [amount, setAmount] = useState<number>(1);
    const [nfts, setNfts] = useState<any>([
        {
            url: IconCamera1,
            name: ""
        },
        {
            url: IconCamera2,
            name: ""
        },
        {
            url: IconCamera3,
            name: ""
        },
        {
            url: IconCamera4,
            name: ""
        },
        {
            url: IconCamera5,
            name: ""
        },
    ])


    return <IonPage>
        <IonHeader className="ion-no-border">
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton style={{ color: '#fff' }} />
                </IonButtons>
                <IonTitle color="light">
                    <div className='font-bold text-center'>Mint Camera</div>
                </IonTitle>
            </IonToolbar>

        </IonHeader>
        <IonContent fullscreen>
            <div className='px-4 flex flex-col items-center justify-center max-w-xl mx-auto'>
                <div className="flex text-white mx-10  flex-col flex-1 mt-4 w-full border-2 bg-gray-900 border-gray-500 py-3 px-3 rounded-md"
                    style={{ background: '#2E2B3B', border: '2px solid rgba(255,255,255,0.2)' }}>

                    {/* <div className=' relative h-0 w-full' style={{ paddingBottom: '100%' }}>
                        <img className='h-full w-full rounded-md absolute object-cover' src={IconCamera1} />
                    </div> */}
                    <div className='w-full'>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={0}
                            loop
                            className="object-cover"
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper: any) => console.log(swiper)}
                        >
                            {
                                nfts.map((item: any, index: number) => {

                                    return <SwiperSlide key={index}>
                                        <div className=' cursor-pointer relative h-0 w-full' style={{ paddingBottom: '100%' }}>
                                            <img className='h-full w-full rounded-md absolute object-cover' src={item.url} />
                                        </div>
                                    </SwiperSlide>
                                })
                            }

                        </Swiper>
                    </div>

                    <div className='mt-3'>Lucky Camera</div>
                    <div className='mt-2 flex items-center'>
                        <img className='w-4 mr-2' src={MyBalancePreIcon} />
                        <div className='font-bold text-white'>0.01 ETH <span className=' font-normal text-gray-400'>/ Per Camera</span></div>
                    </div>
                    <div className='mt-6 flex items-center'>
                        <img onClick={() => {
                            if (amount <= 1) {
                                return
                            }
                            setAmount(amount - 1)
                        }} className='h-10 cursor-pointer' src={amount <= 1 ? SubDisabledIcon : SubPreIcon} />
                        <div className='text-center text-2xl font-semibold flex-1'>{amount}</div>
                        <img onClick={() => {
                            setAmount(amount + 1)
                        }} className='h-10 cursor-pointer' src={AddPreIcon} />
                    </div>

                </div>
                <div className='w-full flex-col items-center justify-center mt-6'>

                    <div className='mb-4 flex items-center justify-center'>
                        <img className='w-4 mr-2' src={CoinIcon} />
                        <div className=' font-bold text-amber-500' style={{ color: '#FFC600' }}>{0.01 * amount} ETH</div>
                    </div>
                    <div className="h-14 w-full mb-4 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-600 p-0.5">
                        <div onClick={() => {

                        }} className="cursor-pointer flex text-white font-semibold text-center rounded-full h-full w-full items-center justify-center bg-gray-800 back opacity-90" style={{ background: 'rgba(0,0,0,0.8)' }}>
                            Buy Camera
                        </div>
                    </div>

                </div>
            </div>


        </IonContent>

    </IonPage>


}