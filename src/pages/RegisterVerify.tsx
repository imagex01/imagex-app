


import { useEffect, useRef } from "react";
import Bg0 from '../img/bg_0.png'
import Icon0 from '../img/icon_0.png'
import { IonContent, IonPage } from '@ionic/react'
import { useIonRouter } from '@ionic/react';

export default function RegisterVerify() {

    const router = useIonRouter();


    return <IonPage>
        <IonContent fullscreen>
            <div className="relative w-screen h-screen" >
                <img src={Bg0} className=" absolute object-cover w-screen h-screen" />
                <div className=" absolute z-40 bg-opacity-40 bg-black w-screen h-screen" />
                <div className='p-6 z-50 absolute bottom-0  top-0 left-0 right-0 flex flex-col items-center justify-center'>
                    <img src={Icon0} className=" w-20 h-20" />
                    <div className='mt-4 text-white text-lg font-bold'>
                        Life is share
                    </div>

                    <div className="mt-14 mb-4 font-semibold text-center text-white">
                        Please input your verification code
                    </div>

                    <label className="relative block w-full mt-4 mx-auto max-w-xl" >
                        <span className="sr-only">Search</span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-6">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-700">
                                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                            </svg>


                        </span>
                        <input style={{ background: 'rgba(0,0,0,0.8)', border: '2px solid rgba(255,255,255,0.3)' }} className=" max-w-3xl  placeholder:text-slate-400 text-white block text-lg  w-full border rounded-full h-16 pl-14 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Verification Code" />
                    </label>

                    <div onClick={() => {
                        router.push('/login')
                    }} className=" cursor-pointer mx-auto mt-6 flex w-full rounded-full  max-w-xl h-14 items-center justify-center">
                        <div className="h-14 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
                            <div className="flex text-white font-semibold text-center rounded-full h-full w-full items-center justify-center bg-gray-800 back opacity-90" style={{ background: 'rgba(0,0,0,0.8)' }}>
                                Confirm
                            </div>
                        </div>
                    </div>


                </div>

                <div className="z-50 absolute bottom-16 w-full">
                    <div className="text-white text-center flex items-center justify-center">
                        <span className="mr-2">Already have account? </span>
                        <span onClick={() => {
                            router.push('/login')
                        }} className="cursor-pointer text-fuchsia-700 underline">Login</span>
                    </div>
                </div>


            </div>

        </IonContent>
    </IonPage >

}
