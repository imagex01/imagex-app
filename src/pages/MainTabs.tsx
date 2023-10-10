import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { calendar, location, informationCircle, people, peopleCircle, person, search, home } from 'ionicons/icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import { ellipse, square, triangle } from 'ionicons/icons';

interface MainTabsProps { }

const MainTabs: React.FC<MainTabsProps> = () => {

    return (
        <IonTabs>
            <IonRouterOutlet>
                <Redirect path="/tabs" to="/tabs/home" />
                <Route exact path="/tabs/home"  component={Tab1} />
                <Route path="/tabs/wallet" component={Tab2} />
                <Route path="/tabs/profile" component={Tab3} />

            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/tabs/home">
                    <IonIcon aria-hidden="true" icon={triangle} />
                    <IonLabel>Tab 1</IonLabel>
                </IonTabButton>
                <IonTabButton tab="wallet" href="/tabs/wallet">
                    <IonIcon aria-hidden="true" icon={ellipse} />
                    <IonLabel>Tab 2</IonLabel>
                </IonTabButton>
                <IonTabButton tab="profile" href="/tabs/profile">
                    <IonIcon aria-hidden="true" icon={square} />
                    <IonLabel>Tab 3</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default MainTabs;