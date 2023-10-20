import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter,IonReactHashRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';

import Splash from './pages/Splash';
import MainTabs from './pages/MainTabs';
import Login from './pages/Login';
import Register from './pages/Register';
import PhotoSell from './pages/photo/PhotoSell';
import PhotoBuy from './pages/photo/PhotoBuy';
import PhotoReport from './pages/photo/PhotoReport';
import UserPage from './pages/user/UserPage';
import MintCamera from './pages/photo/MintCamera';
import PhotoResult from './pages/photo/PhotoResult';
import PhotoReward from './pages/photo/PhotoReward';
import RegisterVerify from './pages/RegisterVerify';

setupIonicReact({mode: "ios"});

const App: React.FC = () => (
  <IonApp>

    <IonReactHashRouter>
        <IonRouterOutlet id="main">

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/registerVerify" component={RegisterVerify} />
          <Route path="/splash"  component={Splash} />
          <Route path="/photoSell"  component={PhotoSell} />
          <Route path="/photoBuy"  component={PhotoBuy} />
          <Route path="/photoReport"  component={PhotoReport} />
          <Route path="/userPage"  component={UserPage} />
          <Route path="/mintCamera"  component={MintCamera} />
          <Route path="/photoResult"  component={PhotoResult} />
          <Route path="/photoReward"  component={PhotoReward} />
          <Redirect exact from="/" to="/splash" />
          <Route path="/tabs" render={() => <MainTabs />} />
        </IonRouterOutlet>
     
    </IonReactHashRouter>
  </IonApp>
);

export default App;
