import { useQuery } from '@apollo/client';
import {
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSpinner,
  IonText,
  IonThumbnail
} from '@ionic/react';
import gql from 'graphql-tag';
import React, { useContext } from 'react';
import Context from '../../Context';
import { MediaType, MediaListStatus } from '../../utils/enums';

interface Props {
  type: MediaType;
  status: MediaListStatus;
}

interface Media {
  title: { userPreferred: string };
  coverImage: { medium: string };
}

interface MediaListEntry {
  media: Media;
}

const mediaListQuery = gql`
  query MediaList($userId: Int!, $type: MediaType!, $status: MediaListStatus) {
    MediaListCollection(userId: $userId, type: $type, status: $status) {
      lists {
        entries {
          media {
            title {
              userPreferred
            }
            coverImage {
              medium
            }
          }
        }
      }
    }
  }
`;

const MediaList: React.FC<Props> = ({ type, status }) => {
  const { userId } = useContext(Context);

  const { data, loading, error } = useQuery(mediaListQuery, {
    variables: {
      userId,
      type: type,
      status: status
    }
  });

  if (loading) {
    return <IonSpinner />;
  }

  if (error) {
    return <IonText>{`Error >_< ${error.message}`}</IonText>;
  }

  return (
    <IonList>
      <IonListHeader>
        {status} {type}:
      </IonListHeader>
      {data.MediaListCollection.lists[0]?.entries.map(
        (entry: MediaListEntry, i: number) => {
          return (
            <IonItem key={i}>
              <IonThumbnail>
                <IonImg src={entry.media.coverImage.medium} />
              </IonThumbnail>
              <IonLabel>{entry.media.title.userPreferred}</IonLabel>
            </IonItem>
          );
        }
      )}
    </IonList>
  );
};

export default MediaList;
