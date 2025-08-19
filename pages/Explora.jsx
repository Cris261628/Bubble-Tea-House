import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonButton,
  IonAlert
} from '@ionic/react';
import { useState } from 'react';

export default function Explora() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertHeader, setAlertHeader] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  // Función para mostrar el "gustó este Booba" (sin TypeScript)
  const handleBoobaFeedback = (boobaName) => {
    setAlertHeader(`¿Te gustó el ${boobaName}?`);
    setAlertMessage('Elige una opción:');
    setShowAlert(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Explora</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Explora nuestros Boobas</h2>

        <IonCard>
          <IonImg src="/booba1.jpg" alt="Taro Milk Tea" />
          <IonCardHeader>
            <IonCardTitle>Taro Milk Tea</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Bebida cremosa con un toque dulce y un color morado distintivo.
            <IonButton expand="block" onClick={() => handleBoobaFeedback('Taro Milk Tea')} className="ion-margin-top">
              ¡Me gustó este Booba!
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonImg src="/booba2.webp" alt="Matcha Milk Tea" />
          <IonCardHeader>
            <IonCardTitle>Matcha Milk Tea</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Té verde japonés matcha con un sabor terroso y ligeramente amargo.
            <IonButton expand="block" onClick={() => handleBoobaFeedback('Matcha Milk Tea')} className="ion-margin-top">
              ¡Me gustó este Booba!
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonImg src="/booba3.webp" alt="Mango Milk Tea" />
          <IonCardHeader>
            <IonCardTitle>Mango Milk Tea</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Dulce y tropical, combina mango con la suavidad de la leche.
            <IonButton expand="block" onClick={() => handleBoobaFeedback('Mango Milk Tea')} className="ion-margin-top">
              ¡Me gustó este Booba!
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonImg src="/booba4.jpg" alt="Strawberry Milk Tea" />
          <IonCardHeader>
            <IonCardTitle>Strawberry Milk Tea</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Mezcla dulce y afrutada de fresas con leche.
            <IonButton expand="block" onClick={() => handleBoobaFeedback('Strawberry Milk Tea')} className="ion-margin-top">
              ¡Me gustó este Booba!
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonImg src="/booba5.avif" alt="Honeydew Milk Tea" />
          <IonCardHeader>
            <IonCardTitle>Honeydew Milk Tea</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Sabor suave y refrescante del melón dulce con leche.
            <IonButton expand="block" onClick={() => handleBoobaFeedback('Honeydew Milk Tea')} className="ion-margin-top">
              ¡Me gustó este Booba!
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonImg src="/booba6.jpg" alt="Brown Sugar Milk Tea" />
          <IonCardHeader>
            <IonCardTitle>Brown Sugar Milk Tea</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Leche combinada con jarabe de azúcar moreno, dulce y caramelizado.
            <IonButton expand="block" onClick={() => handleBoobaFeedback('Brown Sugar Milk Tea')} className="ion-margin-top">
              ¡Me gustó este Booba!
            </IonButton>
          </IonCardContent>
        </IonCard>

        {/* Alerta para el feedback */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={alertHeader}
          message={alertMessage}
          buttons={[
            { text: 'Mucho', handler: () => console.log('Le gustó mucho') },
            { text: 'Poco', handler: () => console.log('Le gustó poco') },
            { text: 'Nada', handler: () => console.log('No le gustó') },
            { text: 'Cerrar', role: 'cancel', handler: () => console.log('Feedback cerrado') }
          ]}
        />
      </IonContent>
    </IonPage>
  );
}
