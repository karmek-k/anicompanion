import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonPage
} from '@ionic/react';
import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';

import AniCompanionContext from '../Context';

const Start: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [usernamePresent, setUsernamePresent] = useState<boolean>(false);

  const { store } = useContext(AniCompanionContext);

  function handleButtonClick() {
    async function save() {
      await store.set('username', inputValue);

      // sanity check
      if (await store.get('username')) {
        setUsernamePresent(true);
      }
    }

    save();
  }

  useEffect(() => {
    async function load() {
      if (await store.get('username')) {
        setUsernamePresent(true);
      }
    }

    load();
  });

  if (usernamePresent) {
    return <Redirect to="/list" />;
  }

  return (
    <IonPage>
      <IonContent>
        <IonItem>
          <IonInput
            value={inputValue}
            placeholder="Your AniList username"
            onIonChange={e => setInputValue(e.detail.value!)}
          />
          <IonButton onClick={handleButtonClick}>Submit</IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Start;
