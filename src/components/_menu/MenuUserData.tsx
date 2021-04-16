import {
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonText,
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
        <IonThumbnail slot="start">
          <IonImg src={userData.avatar.medium} />
        </IonThumbnail>
        <IonLabel>{userData.name}</IonLabel>
      </IonItem>

      {/* for some reason icons seem to not show up */}
      <IonItem routerLink="/list/anime/current">
        {/* <IonIcon name="film-outline" /> */}
        Anime
      </IonItem>

      <IonItem routerLink="/list/manga/current">
        {/* <IonIcon name="book-outline" /> */}
        Manga
      </IonItem>

      <IonItem routerLink="/logout">
        <IonText color="danger">Log out</IonText>
      </IonItem>
    </IonList>
  );
};

export default MenuUserData;
