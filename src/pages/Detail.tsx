import { gql, useQuery } from '@apollo/client';
import { IonSpinner, IonText } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import PageLayout from '../components/PageLayout';

type PagePropsType = { mediaId: string };

interface PageProps extends RouteComponentProps<PagePropsType> {}

const mediaDetailQuery = gql`
  query MediaDetail($id: Int!) {
    Media(id: $id) {
      title {
        userPreferred
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
    <PageLayout title="Detail">{data.Media.title.userPreferred}</PageLayout>
  );
};

export default Detail;
