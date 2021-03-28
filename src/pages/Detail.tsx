import { gql, useQuery } from '@apollo/client';
import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonImg,
  IonSpinner,
  IonText
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import PageLayout from '../components/PageLayout';
import { replaceBr } from '../utils/misc';

type PagePropsType = { mediaId: string };

interface PageProps extends RouteComponentProps<PagePropsType> {}

const mediaDetailQuery = gql`
  query MediaDetail($id: Int!) {
    Media(id: $id) {
      title {
        userPreferred
      }
      description
      coverImage {
        large
      }
    }
  }
`;

const Detail: React.FC<PageProps> = ({ match }) => {
  const { data, loading, error } = useQuery(mediaDetailQuery, {
    variables: { id: Number.parseInt(match.params.mediaId) }
  });

  if (loading) {
    return (
      <PageLayout title="Loading details...">
        <IonSpinner />
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout title="Error">
        <IonText color="danger">{`Error >_< ${error.message}`}</IonText>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Detail">
      <IonCard>
        <IonImg src={data.Media.coverImage.large} alt="Cover image" />
        <IonCardTitle>{data.Media.title.userPreferred}</IonCardTitle>
        <IonCardContent style={{ whiteSpace: 'pre-line' }}>
          {replaceBr(data.Media.description, '\n')}
        </IonCardContent>
      </IonCard>
    </PageLayout>
  );
};

export default Detail;
