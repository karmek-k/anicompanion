import {
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import './Menu.css';

interface Props {
  title: string;
}

const Menu: React.FC<Props> = props => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonHeader>
        <IonToolbar>
          <IonTitle>{props.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonMenu>
  );
};

export default Menu;
