import {
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import './Menu.css';

const Menu: React.FC = () => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonMenu>
  );
};

export default Menu;
