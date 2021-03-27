import { IonButton, IonInput, IonItem } from '@ionic/react';
import React, { useState } from 'react';
import { NameInputData } from '../../pages/Start';

interface Props {
  callback: (data: NameInputData) => void;
}

const NameInput: React.FC<Props> = props => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <IonItem>
      <IonInput
        value={inputValue}
        placeholder="Your AniList username"
        onIonChange={e => setInputValue(e.detail.value!)}
      />
      <IonButton onClick={() => props.callback({ username: inputValue })}>
        Submit
      </IonButton>
    </IonItem>
  );
};

export default NameInput;
