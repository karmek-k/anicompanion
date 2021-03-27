import { useQuery } from '@apollo/client';
import {
  IonContent,
  IonHeader,
  IonImg,
  IonMenu,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import gql from 'graphql-tag';
import { useContext } from 'react';
import Context from '../Context';

import './Menu.css';

interface Props {
  title: string;
}

const userDataQuery = gql`
  query UserData($id: Int!) {
    User(id: $id) {
      avatar {
        medium
      }
      name
      unreadNotificationCount
    }
  }
`;

const Menu: React.FC<Props> = props => {
  const { userId } = useContext(Context);

  const { data, loading } = useQuery(userDataQuery, {
    variables: { id: userId }
  });

  return (
    <IonMenu contentId="main" type="overlay">
      <IonHeader>
        <IonToolbar>
          <IonTitle>{props.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {!loading && <IonImg src={data.User.avatar.medium} />}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
