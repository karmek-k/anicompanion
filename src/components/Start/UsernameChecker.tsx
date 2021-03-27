import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { IonSpinner, IonText } from '@ionic/react';

interface Props {
  username: string;
  onCorrect: (userId: number) => void;
}

const userIdQuery = gql`
  query User($username: String!) {
    User(name: $username) {
      id
    }
  }
`;

const UsernameChecker: React.FC<Props> = ({ username, onCorrect }) => {
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

  onCorrect(data.User.id);
  return null;
};

export default UsernameChecker;
