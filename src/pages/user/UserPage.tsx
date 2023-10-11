import UserBgIcon from '../../img/user_bg.png'
import DefaultUserIcon from '../../img/default_user.png'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons,IonBackButton } from '@ionic/react';
import Icon1 from '../../img/market_photo_bg.png'
import Icon2 from '../../img/MintCamera_nft_bg.png'
import Icon3 from '../../img/Image_pic_bg.png'
import LikedIcon from '../../img/icon_like_pre.png'
import LikeIcon from '../../img/icon_like.png'
import { useState } from 'react';
import { useIonRouter } from '@ionic/react';

const UserPage: React.FC = () => {

    const router = useIonRouter();

    const [list, setList] = useState<any>([
        {
            name: 'Water',
            url: Icon1,
            like: '36',
            isLike: 0
        },
        {
            name: 'Beauty',
            url: Icon2,
            like: '1.5k',
            isLike: 1
        },
        {
            name: 'Water',
            url: Icon3,
            like: '87',
            isLike: 1
        },
        {
            name: 'Beauty',
            url: Icon1,
            like: '3.5k',
            isLike: 1
        },
        {
            name: 'Water',
            url: Icon2,
            like: '219',
            isLike: 1
        },
        {
            name: 'Beauty',
            url: Icon3,
            like: '1.5k',
            isLike: 0
        },
        {
            name: 'Water',
            url: Icon1,
            like: '219',
            isLike: 1
        },
        {
            name: 'Beauty',
            url: Icon2,
            like: '1.5k',
            isLike: 0
        },
        {
            name: 'Water',
            url: Icon1,
            like: '219',
            isLike: 1
        },
        {
            name: 'Beauty',
            url: Icon2,
            like: '1.5k',
            isLike: 0
        },
        {
            name: 'Water',
            url: Icon3,
            like: '219',
            isLike: 1
        },
        {
            name: 'Beauty',
            url: Icon1,
            like: '1.5k',
            isLike: 0
        },
        {
            name: 'Water',
            url: Icon2,
            like: '219',
            isLike: 1
        },
        {
            name: 'Beauty',
            url: Icon3,
            like: '1.5k',
            isLike: 0
        },
        {
            name: 'Water',
            url: Icon1,
            like: '219',
            isLike: 1
        },
        {
            name: 'Beauty',
            url: Icon2,
            like: '1.5k',
            isLike: 0
        },
    ]);

    return <IonPage>
         <IonHeader className="ion-no-border">
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton style={{color:'#fff'}}  />
                </IonButtons>
                <IonTitle color="light">
                    <div className='font-bold text-center'>Atlos</div>
                </IonTitle>
                
            </IonToolbar>

        </IonHeader>
        <IonContent fullscreen>
            <div className=' mb-6  text-white'>

                <div className='flex flex-col items-center justify-center'>
                    <img className='w-full object-cover h-60' src={UserBgIcon} />

                    <div className='rounded-full bg-black p-1 -mt-10'>
                        <img src={DefaultUserIcon} />
                    </div>
                    <div className='mt-2 font-bold text-lg'>Atlos</div>
                </div>

                <div className='mx-4'>
                    <div className='title-border mt-6'>
                        <div className='px-4' style={{ color: '#666' }}> Owned NFTs</div>
                    </div>
                </div>



            </div>
            <div className="font-normal grid px-4 my-4 grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {
                    list.map((item: any, index: number) => {
                        return <div onClick={() => {
                            router.push('/photoBuy');
                        }} key={index} className=" cursor-pointer">
                            <div className='relative'>
                                <img className='relative rounded-md' src={item.url} />
                                <div className='absolute bottom-2 right-2 py-0.5 px-2 flex items-center rounded-md' style={{ background: 'rgba(0,0,0,0.5)' }}>
                                    <img className='w-4 h-4 mr-1' src={item.isLike == 1 ? LikedIcon : LikeIcon} />
                                    <div className=' font-bold text-white'>{item.like}</div>
                                </div>
                            </div>
                            <div className='mt-2 font-bold text-white'>{item.name}{index}</div>
                        </div>
                    })
                }
            </div>
        </IonContent>
    </IonPage>


}

export default UserPage;