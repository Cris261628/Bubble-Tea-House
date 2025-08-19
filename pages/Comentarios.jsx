import { useState, useEffect } from 'react';
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
  IonTextarea,
  IonButton,
  IonAlert,
  IonList,
  IonCard,
  IonCardContent
} from '@ionic/react';

export default function Comentarios() {
  const [nuevoComentario, setNuevoComentario] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [comentarios, setComentarios] = useState([]);

  // Cargar comentarios del localStorage al iniciar
  useEffect(() => {
    const savedComentarios = JSON.parse(localStorage.getItem('comentariosBooba') || '[]');
    setComentarios(savedComentarios);
  }, []);

  // Guardar comentario en localStorage
  const handleEnviarComentario = () => {
    if (nuevoComentario.trim() === '') {
      setAlertMessage('Por favor, escribe tu comentario antes de enviarlo.');
      setShowAlert(true);
      return;
    }

    const nuevo = {
      texto: nuevoComentario,
      fecha: new Date().toLocaleString()
    };

    const updatedComentarios = [nuevo, ...comentarios];
    setComentarios(updatedComentarios);
    localStorage.setItem('comentariosBooba', JSON.stringify(updatedComentarios));

    setAlertMessage('¡Gracias! Tu comentario ha sido enviado.');
    setShowAlert(true);
    setNuevoComentario('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Comentarios</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Deja tu Opinión sobre los Boobas</h2>
        <p>Cuéntanos qué te pareció tu bebida favorita y qué sabores te gustaría probar.</p>

        <IonItem className="ion-margin-top">
          <IonLabel position="floating">Tu Comentario</IonLabel>
          <IonTextarea
            value={nuevoComentario}
            onIonChange={e => setNuevoComentario(e.detail.value || '')}
            rows={6}
            placeholder="Escribe aquí tu comentario..."
          />
        </IonItem>

        <IonButton expand="block" onClick={handleEnviarComentario} className="ion-margin-top">
          Enviar Comentario
        </IonButton>

        {/* Alerta de confirmación o error */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Comentario'}
          message={alertMessage}
          buttons={['OK']}
        />

        {/* Lista de comentarios */}
        <h3 className="ion-margin-top">Comentarios de Otros Usuarios</h3>
        <IonList>
          {comentarios.map((com, index) => (
            <IonCard key={index} className="ion-margin-top">
              <IonCardContent>
                <strong>{com.fecha}</strong>
                <p>{com.texto}</p>
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
