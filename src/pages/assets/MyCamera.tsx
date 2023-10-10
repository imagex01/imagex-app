import IconCamera1 from '../../img/camera1.jpeg'
import IconCamera2 from '../../img/camera2.jpeg'
import IconCamera3 from '../../img/camera3.jpeg'
import IconCamera4 from '../../img/camera4.jpeg'
import IconCamera5 from '../../img/camera5.jpeg'
import { useState } from 'react';

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

    return <div className="font-normal grid px-4 my-4 grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {
            list.map((item: any, index: number) => {
                return <div key={index}>

                    <img className='relative rounded-md' src={item.url} />
                    <div className='mt-2 text-white'>{item.name}{index}</div>
                </div>
            })
        }
    </div>


}