import { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonAlert
} from '@ionic/react';


export default function Contacto({ isboobasContact }) {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState(isboobasContact ? 'Me gustaría recibir información sobre los nuevos boobas.' : '');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleEnviar = () => {
    if (nombre.trim() === '' || mensaje.trim() === '') {
      setAlertMessage('Por favor, completa todos los campos.');
      setShowAlert(true);
      return;
    }

    console.log('Nombre:', nombre);
    console.log('Mensaje:', mensaje);

    setAlertMessage(`¡Gracias ${nombre}! Tu mensaje ha sido enviado.`);
    setShowAlert(true);

    // Limpiar el formulario
    setNombre('');
    if (!isboobasContact) {
      setMensaje('');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{isboobasContact ? 'Contacto de Tours' : 'Envía tu pregunta o sugerencia'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>
          {isboobasContact
            ? 'Envíanos tus datos para recibir más información sobre nuestras promos.'
            : '¡Comparte tus ideas o preguntas sobre los Boobas!'
          }
        </p>
        <IonItem>
          <IonLabel position="floating">Tu Nombre</IonLabel>
          <IonInput
            value={nombre}
            onIonChange={e => setNombre(e.detail.value || '')}
            placeholder="Escribe tu nombre"
          />
        </IonItem>
        <IonItem className="ion-margin-top">
          <IonLabel position="floating">Tu Mensaje</IonLabel>
          <IonTextarea
            value={mensaje}
            onIonChange={e => setMensaje(e.detail.value || '')}
            rows={isboobasContact ? 3 : 5}
            placeholder={isboobasContact ? 'Deja tus preguntas adicionales aquí...' : 'Comparte tu receta o haz una pregunta...'}
          />
        </IonItem>
        <IonButton expand="block" onClick={handleEnviar} className="ion-margin-top">
          Enviar
        </IonButton>


        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Mensaje'}
          message={alertMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
}
