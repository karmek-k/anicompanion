import { IonItem, IonThumbnail, IonImg, IonLabel } from '@ionic/react';
import React from 'react';

export interface Media {
  id: number;
  title: { userPreferred: string };
  coverImage: { medium: string };
}

export interface MediaListEntry {
  media: Media;
}

interface Props {
  entry: MediaListEntry;
}

const MediaListItem: React.FC<Props> = ({ entry }) => {
  return (
    <IonItem routerLink={`/detail/${entry.media.id}`}>
      <IonThumbnail>
        <IonImg src={entry.media.coverImage.medium} />
      </IonThumbnail>
      <IonLabel>{entry.media.title.userPreferred}</IonLabel>
    </IonItem>
  );
};

export default MediaListItem;
