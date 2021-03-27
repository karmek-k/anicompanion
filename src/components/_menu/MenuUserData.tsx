import {
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail
} from '@ionic/react';
import React from 'react';

interface UserData {
  avatar: { medium: string };
  name: string;
}

interface Props {
  userData: UserData;
}

const MenuUserData: React.FC<Props> = ({ userData }) => {
  return (
    <IonList>
      <IonItem>
        <IonThumbnail>
          <IonImg src={userData.avatar.medium} />
        </IonThumbnail>
        <IonLabel>{userData.name}</IonLabel>
      </IonItem>

      <IonItem>
        <IonIcon name="film-outline" />
        Anime
      </IonItem>

      <IonItem>
        <IonIcon name="book-outline" />
        Manga
      </IonItem>
    </IonList>
  );
};

export default MenuUserData;
