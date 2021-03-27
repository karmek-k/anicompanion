import { IonText } from '@ionic/react';
import { useContext } from 'react';
import PageLayout from '../components/PageLayout';

import AniCompanionContext from '../Context';

const List: React.FC = () => {
  const { username } = useContext(AniCompanionContext);

  return (
    <PageLayout title="List">
      <IonText>Your name is {username}</IonText>
    </PageLayout>
  );
};

export default List;
