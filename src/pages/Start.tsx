import { IonContent, IonPage } from '@ionic/react';
import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import UsernameChecker from '../components/Start/UsernameChecker';
import UsernameInput from '../components/Start/UsernameInput';
import Context from '../Context';
import storage from '../utils/storage';

export interface UsernameInputData {
  username: string;
}

const Start: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [userIdLoaded, setUserIdLoaded] = useState<boolean>(false);

  const ctxData = useContext(Context);

  //
  // username - text in the input field
  // ctxData.userId - number in context's userId key
  //

  // when the submit button is clicked
  const inputCallback = (data: UsernameInputData) => {
    setUsername(data.username);
  };

  // when UsernameChecker verifies the username
  // and it is correct, the user ID is passed
  const correctUsernameCallback = (userId: number) => {
    ctxData.setUserId(userId);
  };

  // reload the component when the userId changes
  useEffect(() => {
    async function saveUserId(userId: number) {
      await storage.save('user_id', userId);
      setUserIdLoaded(true);
    }

    if (ctxData.userId) {
      saveUserId(ctxData.userId);
    }
  }, [ctxData.userId]);

  // only redirect when the user has specified an existing userId
  // OR when a userId exists in app context
  if (userIdLoaded) {
    return <Redirect to="/list/anime/current" />;
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
