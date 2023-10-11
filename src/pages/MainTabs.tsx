import React, { useEffect, useState } from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import MarketPage from './MarketPage';
import AssetPage from './AssetPage';
import MarketPreIcon from '../img/icon_market_pre.png'
import MarketIcon from '../img/icon_market.png'
import MeIcon from '../img/icon_me.png'
import MePreIcon from '../img/icon_me_pre.png'
import AssetPreIcon from '../img/icon_assest_pre.png'
import AssetIcon from '../img/icon_assest.png'
import ProfilePage from './ProfilePage';
import { useGlobal,useUpdateGlobal } from '../contexts/GlobalProvider';

interface MainTabsProps { }

const MainTabs: React.FC<MainTabsProps> = () => {

    const { showTabs } = useGlobal();
    const updateGlobal = useUpdateGlobal();
    const [tab, setTab] = useState<string>("home");
    let tabStyle = showTabs ? undefined : { display: "none" };

    useEffect(()=>{
        updateGlobal({ showTabs: true });
    },[])

    return (
        <IonTabs>
            <IonRouterOutlet>
               
                <Redirect exact  path="/tabs" to="/tabs/home" />
                <Route exact path="/tabs/home" component={MarketPage} />
                <Route exact  path="/tabs/wallet"  component={AssetPage} />
                <Route path="/tabs/profile" component={ProfilePage} />
                <Route exact path="/tabs">
                    <Redirect to="/tabs/home" />
                </Route>
                
                
            </IonRouterOutlet>
            <IonTabBar style={{background:'#2A2F47', border: '1px solid rgba(255,255,255,0.3)'}}   onIonTabsDidChange={(e)=>{
                console.log("e==",e)
                setTab(e.detail.tab)
            }} slot="bottom" className='mb-4 mx-4 rounded-full' >
              
                    <IonTabButton tab="home" href="/tabs/home" className=' bg-transparent'>
                        <img src={tab=="home"? MarketPreIcon:MarketIcon} className=" w-6 h-6"  />
                    </IonTabButton>
                    <IonTabButton tab="wallet" href="/tabs/wallet"  className=' bg-transparent'>
                        <img src={tab=="wallet"? AssetPreIcon:AssetIcon} className=" w-6 h-6"  />
                    </IonTabButton>
                    <IonTabButton tab="profile" href="/tabs/profile" className=' bg-transparent'>
                        <img src={tab=="profile"? MePreIcon:MeIcon} className=" w-6 h-6"  />
                    </IonTabButton>
               
            </IonTabBar>
        </IonTabs>
    );
};

export default MainTabs;