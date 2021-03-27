import { IonText } from '@ionic/react';
import { useContext } from 'react';
import PageLayout from '../components/PageLayout';

import AniCompanionContext from '../Context';

const List: React.FC = () => {
  const { userId } = useContext(AniCompanionContext);

  return (
    <PageLayout title="List">
      <IonText>Your ID is {userId}</IonText>
    </PageLayout>
  );
};

export default List;
