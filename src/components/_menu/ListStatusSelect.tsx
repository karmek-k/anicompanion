import { IonSelect, IonSelectOption } from '@ionic/react';
import React from 'react';
import { MediaListStatus } from '../../utils/enums';
import { capitalizeString } from '../../utils/misc';

interface Props {
  status: MediaListStatus;
  setStatus: React.Dispatch<React.SetStateAction<MediaListStatus>>;
}

const ListStatusSelect: React.FC<Props> = ({ status, setStatus }) => {
  const statuses = Object.keys(MediaListStatus);

  return (
    <IonSelect
      value={status}
      placeholder="Status"
      onIonChange={e => setStatus(e.detail.value)}
    >
      {statuses.map((statusStr: string, i: number) => (
        <IonSelectOption key={i} value={statusStr as MediaListStatus}>
          {capitalizeString(statusStr)}
        </IonSelectOption>
      ))}
    </IonSelect>
  );
};

export default ListStatusSelect;
