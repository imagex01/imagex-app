
import {useEffect, useRef, useState} from "react";
import Bg0 from '../img/bg_0.png'
import Icon0 from '../img/icon_0.png'
import { useIonRouter } from '@ionic/react';
import { IonContent, IonPage } from '@ionic/react'
import {AccountCreateModal} from "../components/Account/modal";

export default function Login() {

    const router = useIonRouter();

    const [showAccountCreate, setShowAccountCreate] = useState(false);

    return <IonPage>
        <IonContent fullscreen>
            <div className="relative w-screen  h-screen" >
                <img src={Bg0} className=" absolute object-cover w-screen h-screen" />
                <div className=" absolute z-40 bg-opacity-40 bg-black w-screen h-screen" />
                <div className='p-6 z-50 absolute bottom-0  top-0 -mt-20 left-0 right-0 flex flex-col items-center justify-center'>
                    <img src={Icon0} className=" w-20 h-20" />
                    <div className='mt-4 text-white text-lg font-bold'>
                        Life is share
                    </div>
                    <label className="relative block w-full mt-10 mx-auto max-w-xl" >
                        <span className="sr-only">Search</span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-6">
                            {/* <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-700">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>

                        </span>
                        <input style={{ background: 'rgba(0,0,0,0.8)', border: '2px solid rgba(255,255,255,0.3)' }} className="   placeholder:text-slate-400 text-white block text-lg  w-full border rounded-full h-16 pl-14 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Email" />
                    </label>

                    <label className="relative block w-full mt-4 mx-auto max-w-xl" >
                        <span className="sr-only">Search</span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-700">
                                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                            </svg>


                        </span>
                        <input style={{ background: 'rgba(0,0,0,0.8)', border: '2px solid rgba(255,255,255,0.3)' }} className=" max-w-3xl  placeholder:text-slate-400 text-white block text-lg  w-full border rounded-full h-16 pl-14 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Password" />
                    </label>

                    <div onClick={() => {
                        router.push("/tabs")
                    }} className=" cursor-pointer mx-auto mt-6 flex w-full rounded-full  max-w-xl h-14 items-center justify-center">
                        <div className="h-14 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
                            <div className="flex text-white font-semibold text-center rounded-full h-full w-full items-center justify-center bg-gray-800 back opacity-90" style={{ background: 'rgba(0,0,0,0.8)' }}>
                                Login
                            </div>
                        </div>
                    </div>


                    <div className="text-white mt-10">
                        <span className="mr-2">Web3.0 Identity?</span>
                        <span className="cursor-pointer text-fuchsia-700 underline" onClick={()=>setShowAccountCreate(true)}>Click here.</span>
                    </div>


                </div>

                <div className="z-50 absolute bottom-16 w-full">
                    <div className="text-white text-center flex items-center justify-center">
                        <span className="mr-2">No account? </span>
                        <span onClick={() => {
                            router.push('/register')
                        }} className="cursor-pointer text-fuchsia-700 underline">Register</span>
                    </div>
                </div>


            </div>

            <AccountCreateModal isOpen={showAccountCreate} onOk={()=>{
                setShowAccountCreate(false)
                router.push("/tabs")
            }} onClose={()=>{
                setShowAccountCreate(false)
            }}/>
        </IonContent>
    </IonPage>

}
