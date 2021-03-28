import { IonCard, IonImg, IonCardTitle, IonCardContent } from '@ionic/react';
import React from 'react';
import { replaceBr } from '../../utils/misc';

interface Props {
  media: {
    coverImage: { large: string };
    title: { userPreferred: string };
    description: string;
  };
}

const MediaCard: React.FC<Props> = ({ media }) => {
  const { coverImage, title, description } = media;
  return (
    <IonCard>
      <IonImg src={coverImage.large} alt="Cover image" />
      <IonCardTitle>{title.userPreferred}</IonCardTitle>
      <IonCardContent style={{ whiteSpace: 'pre-line' }}>
        {replaceBr(description, '\n')}
      </IonCardContent>
    </IonCard>
  );
};

export default MediaCard;
