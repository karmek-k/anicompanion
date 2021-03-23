import React, { useEffect, useState } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { Storage } from '@ionic/storage';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import List from './pages/List';
import AniCompanionContext from './Context';

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
// import './theme/variables.css';

const App: React.FC = () => {
  const [store, setStore] = useState<Storage>(new Storage());

  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    async function load() {
      const loadedStore = await store.create();
      setStore(loadedStore);

      setLoaded(true);
    }

    load();
  }, [store]);

  if (!loaded) {
    return <></>;
  }

  return (
    <AniCompanionContext.Provider value={{ store }}>
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu title="AniCompanion" />
            <IonRouterOutlet id="main">
              {/* <Route path="/" exact component={Start} /> */}
              <Route path="/list" component={List} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </AniCompanionContext.Provider>
  );
};

export default App;
