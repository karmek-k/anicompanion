import { useQuery, gql } from '@apollo/client';
import {
  IonContent,
  IonHeader,
  IonMenu,
  IonSpinner,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { useContext } from 'react';
import Context from '../Context';

import './Menu.css';
import MenuUserData from './_menu/MenuUserData';

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
        {loading ? <IonSpinner /> : <MenuUserData userData={data.User} />}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
