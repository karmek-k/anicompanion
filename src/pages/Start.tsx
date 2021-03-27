import { IonContent, IonPage } from '@ionic/react';
import React, { useState } from 'react';
import UsernameChecker from '../components/Start/UsernameChecker';
import UsernameInput from '../components/Start/UsernameInput';

export interface UsernameInputData {
  username: string;
}

const Start: React.FC = () => {
  const [checking, setChecking] = useState<boolean>(false);

  const inputCallback = (data: UsernameInputData) => {
    setChecking(true);
  };

  return (
    <IonPage>
      <IonContent>
        <UsernameInput callback={inputCallback} />
        {checking && <UsernameChecker />}
      </IonContent>
    </IonPage>
  );
};

export default Start;
