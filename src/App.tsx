import { Redirect, Route, Switch } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>

    <IonReactRouter>
        <IonRouterOutlet>

          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/tabs" render={() => <MainTabs />} />
          <Route path="/splash"  component={Splash} />
          <Redirect exact from="/" to="/splash" />
        </IonRouterOutlet>
     
    </IonReactRouter>
  </IonApp>
);

export default App;
