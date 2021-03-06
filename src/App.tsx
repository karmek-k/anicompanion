import React, { useEffect, useState } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Menu from './components/Menu';
import List from './pages/List';
import Start from './pages/Start';
import LogOut from './pages/LogOut';
import AniCompanionContext from './Context';
import storage from './utils/storage';

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
import Detail from './pages/Detail';

/* Theme variables */
// import './theme/variables.css';

const apolloClient = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
});

const App: React.FC = () => {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    async function loadUserId() {
      setUserId((await storage.get('user_id')) ?? 0);
    }

    loadUserId();
  }, []);

  return (
    <AniCompanionContext.Provider value={{ userId, setUserId }}>
      <ApolloProvider client={apolloClient}>
        <IonApp>
          <IonReactRouter>
            <IonSplitPane contentId="main">
              {userId > 0 && <Menu title="AniCompanion" />}
              <IonRouterOutlet id="main">
                <Route path="/" exact component={Start} />
                <Route path="/list/:type/:status" component={List} />
                <Route path="/detail/:mediaId" component={Detail} />
                <Route path="/logout" component={LogOut} />
              </IonRouterOutlet>
            </IonSplitPane>
          </IonReactRouter>
        </IonApp>
      </ApolloProvider>
    </AniCompanionContext.Provider>
  );
};

export default App;
