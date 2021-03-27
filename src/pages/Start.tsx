import { IonContent, IonPage } from '@ionic/react';
import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import UsernameChecker from '../components/Start/UsernameChecker';
import UsernameInput from '../components/Start/UsernameInput';
import Context from '../Context';
import { saveToStorage } from '../utils/storage';

export interface UsernameInputData {
  username: string;
}

const Start: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [usernameLoaded, setUsernameLoaded] = useState<boolean>(false);

  const ctxData = useContext(Context);

  //
  // username - text in the input field
  // ctxData.username - text in context's username key
  //

  // when the submit button is clicked
  const inputCallback = (data: UsernameInputData) => {
    setUsername(data.username);
  };

  // when UsernameChecker verifies the username
  // and it is correct
  const correctUsernameCallback = (username: string) => {
    ctxData.setUsername(username);
  };

  // reload the component when the username changes
  useEffect(() => {
    async function saveUsername(username: string) {
      await saveToStorage('username', username);
      setUsernameLoaded(true);
    }

    if (ctxData.username) {
      saveUsername(ctxData.username);
    }
  }, [ctxData.username]);

  // only redirect when the user has specified an existing username
  // OR when a username exists in app context
  if (usernameLoaded) {
    return <Redirect to="/list" />;
  }

  return (
    <IonPage>
      <IonContent>
        <UsernameInput callback={inputCallback} />
        {username && (
          <UsernameChecker
            username={username}
            onCorrect={correctUsernameCallback}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Start;
