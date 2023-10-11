import IconCamera1 from '../../img/camera1.jpeg'
import IconCamera2 from '../../img/camera2.jpeg'
import IconCamera3 from '../../img/camera3.jpeg'
import IconCamera4 from '../../img/camera4.jpeg'
import IconCamera5 from '../../img/camera5.jpeg'
import { useState } from 'react';
import { useIonRouter } from '@ionic/react';

export default function MyCamera() {

    const [list, setList] = useState<any>([
        {
            name: 'Camera NFT #',
            url: IconCamera1
        },
        {
            name: 'Camera NFT #',
            url: IconCamera2,
        },
        {
            name: 'Camera NFT #',
            url: IconCamera3,
        },
        {
            name: 'Camera NFT #',
            url: IconCamera4,
        },
        {
            name: 'Camera NFT #',
            url: IconCamera5,
        }
    ]);

    const router = useIonRouter();

    return <div className='relative'>
        <div className="font-normal grid mb-20 px-4 my-4 grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {
                list.map((item: any, index: number) => {
                    return <div key={index}>

                        <img className='relative rounded-md' src={item.url} />
                        <div className='mt-2 text-sm text-white font-semibold'>{item.name}{index}</div>
                    </div>
                })
            }
        </div>
        <div className='flex justify-center mt-6 w-full text-center fixed bottom-4'>
            <div className="h-14 w-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
                <div onClick={() => {
                    router.push('/mintCamera');
                }} className="cursor-pointer flex text-white font-semibold text-center rounded-full h-full w-full items-center justify-center bg-gray-800 back opacity-90" style={{ background: 'rgba(0,0,0,0.8)' }}>
                    Buy Camera
                </div>
            </div>

        </div>
    </div>



}