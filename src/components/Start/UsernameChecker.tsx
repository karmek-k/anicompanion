import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { IonSpinner, IonText } from '@ionic/react';

interface Props {
  username: string;
  onCorrect: (username: string) => void;
}

const userIdQuery = gql`
  query User($username: String!) {
    User(name: $username) {
      name
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

  onCorrect(data.User.name);
  return null;
};

export default UsernameChecker;
