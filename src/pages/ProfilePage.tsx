import UserBgIcon from '../img/user_bg.png'
import DefaultUserIcon from '../img/default_user.png'
import Arrow2Icon from '../img/icon_arrow2.png'
import MeAboutIcon from '../img/Me_icon_About.png'
import MeLikedIcon from '../img/Me_icon_Liked.png'
import MePoliceIcon from '../img/Me_icon_Police.png'
import MeSettingIcon from '../img/Me_icon_Setting.png'
import MePasswordIcon from '../img/Me_icon_Password.png'
import { IonContent, IonPage } from '@ionic/react'

const ProfilePage: React.FC = () => {

    return <IonPage>
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
                    <div className="flex mt-4 items-center w-full border-2 bg-gray-900 border-gray-500 py-5 px-4 rounded-md"
                        style={{ background: '#2E2B3B', border: '2px solid rgba(255,255,255,0.2)' }}>
                        <img className="w-4 mr-4" src={MeLikedIcon} />
                        <div className='flex-1'>Liked</div>
                        <img className="w-2" src={Arrow2Icon} />

                    </div>
                    <div className="flex mt-4 items-center w-full border-2 bg-gray-900 border-gray-500 py-5 px-4 rounded-md"
                        style={{ background: '#2E2B3B', border: '2px solid rgba(255,255,255,0.2)' }}>
                        <img className="w-4 mr-4" src={MePasswordIcon} />
                        <div className='flex-1'>Update Password</div>
                        <img className="w-2" src={Arrow2Icon} />

                    </div>
                    <div className="flex mt-4 items-center w-full border-2 bg-gray-900 border-gray-500 py-5 px-4 rounded-md"
                        style={{ background: '#2E2B3B', border: '2px solid rgba(255,255,255,0.2)' }}>
                        <img className="w-4 mr-4" src={MeSettingIcon} />
                        <div className='flex-1'>Setting</div>
                        <img className="w-2" src={Arrow2Icon} />

                    </div>
                    <div className="flex mt-4 items-center w-full border-2 bg-gray-900 border-gray-500 py-5 px-4 rounded-md"
                        style={{ background: '#2E2B3B', border: '2px solid rgba(255,255,255,0.2)' }}>
                        <img className="w-4 mr-4" src={MeAboutIcon} />
                        <div className='flex-1'>About</div>
                        <img className="w-2" src={Arrow2Icon} />

                    </div>
                    <div className="flex mt-4 items-center w-full border-2 bg-gray-900 border-gray-500 py-5 px-4 rounded-md"
                        style={{ background: '#2E2B3B', border: '2px solid rgba(255,255,255,0.2)' }}>
                        <img className="w-4 mr-4" src={MePoliceIcon} />
                        <div className='flex-1'>Police</div>
                        <img className="w-2" src={Arrow2Icon} />

                    </div>
                </div>



            </div>
        </IonContent>
    </IonPage>


}

export default ProfilePage;