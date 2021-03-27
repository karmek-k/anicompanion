import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { IonSpinner, IonText } from '@ionic/react';

interface Props {
  username: string;
}

const userIdQuery = gql`
  query User($username: String!) {
    User(name: $username) {
      id
    }
  }
`;

const UsernameChecker: React.FC<Props> = ({ username }) => {
  const { data, loading, error } = useQuery(userIdQuery, {
    variables: { username }
  });

  if (!username) {
    return null;
  }

  if (loading) {
    return <IonSpinner />;
  }

  if (error) {
    return <IonText color="danger">Error: {error.message}</IonText>;
  }

  return (
    <IonText>
      Hello {username}! Your ID is {data.User.id}
    </IonText>
  );
};

export default UsernameChecker;
