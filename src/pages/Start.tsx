import { IonContent, IonPage } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import UsernameChecker from '../components/Start/UsernameChecker';
import UsernameInput from '../components/Start/UsernameInput';

export interface UsernameInputData {
  username: string;
}

const Start: React.FC = () => {
  const [username, setUsername] = useState<string>('');

  const inputCallback = (data: UsernameInputData) => {
    setUsername(data.username);
  };

  // reload the component when the username changes
  useEffect(() => {}, [username]);

  return (
    <IonPage>
      <IonContent>
        <UsernameInput callback={inputCallback} />
        {username && <UsernameChecker username={username} />}
      </IonContent>
    </IonPage>
  );
};

export default Start;
