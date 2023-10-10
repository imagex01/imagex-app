import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>

    <IonReactRouter>
        <IonRouterOutlet>

          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/tabs" render={() => <MainTabs />} />
          <Route path="/splash"  component={Splash} />
          <Route path="/photoSell"  component={PhotoSell} />
          <Redirect exact from="/" to="/splash" />
        </IonRouterOutlet>
     
    </IonReactRouter>
  </IonApp>
);

export default App;
