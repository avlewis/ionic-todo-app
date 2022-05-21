import { Redirect, Route } from 'react-router-dom';
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
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import TodoManager from './pages/TodoManager';
import TodoViewer from './pages/TodoViewer'
import { TodoProvider } from './components/Todo/context';

setupIonicReact();

const App: React.FC = () => (
  <TodoProvider>

  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/todo/manager">
            <TodoManager />
          </Route>
          <Route exact path="/todo/list">
            <TodoViewer />
          </Route>

          <Route exact path="/">
            <Redirect to="/todo/manager" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="manager" href="/todo/manager">
            <IonIcon icon={triangle} />
            <IonLabel>Manager</IonLabel>
          </IonTabButton>
          <IonTabButton tab="list" href="/todo/list">
            <IonIcon icon={square} />
            <IonLabel>List</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
      
  </TodoProvider>
);

export default App;
