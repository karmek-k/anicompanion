import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import NameInput from '../components/Start/NameInput';

export interface NameInputData {
  username: string;
}

const Start: React.FC = () => {
  const inputCallback = (data: NameInputData) => {};

  return (
    <IonPage>
      <IonContent>
        <NameInput callback={inputCallback} />
      </IonContent>
    </IonPage>
  );
};

export default Start;
