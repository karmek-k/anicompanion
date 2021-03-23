import { IonText } from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';

import AniCompanionContext from '../Context';

const List: React.FC = () => {
  const [username, setUsername] = useState<string>('');

  const { store } = useContext(AniCompanionContext);

  useEffect(() => {
    async function load() {
      setUsername(await store.get('username'));
    }

    load();
  });

  return (
    <PageLayout title="List">
      <IonText>Your name is {username}</IonText>
    </PageLayout>
  );
};

export default List;
