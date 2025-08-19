import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonImg,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonAlert
} from '@ionic/react';
import { useState } from 'react';
import { add, cafe, call, alertCircle } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';

export default function Bienvenida() {
  const [segmentValue, setSegmentValue] = useState('menu');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const navigateToExplora = () => navigate('/tabs/explora');
  const navigateToContacto = () => navigate('/tabs/contacto-tours');
  const showAlertMessage = () => setShowAlert(true);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Bubble Tea House</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">

        {/* Imagen responsiva */}
        <IonImg
          src="/booba.jpg"
          alt="Bienvenida a Bubble Tea House"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "500px",
            height: "auto",
            maxHeight: "40vh",
            objectFit: "cover",
            borderRadius: "12px",
            margin: "0 auto"
          }}
        />

        {/* Texto de bienvenida debajo de la imagen */}
        <div
          style={{
            background: 'rgba(0,0,0,0.5)',
            color: '#fff',
            padding: '1rem',
            borderRadius: '12px',
            marginTop: '1rem',
            textAlign: 'center'
          }}
        >
          <h1>¡Bienvenido a Bubble Tea House!</h1>
          <p>Las bebidas más deliciosas con perlas de tapioca y leche fresca.</p>
        </div>

        {/* Segmento Menú / Sobre Nosotros */}
        <IonSegment value={segmentValue} onIonChange={e => setSegmentValue(e.detail.value || 'menu')} style={{ background: '#f5e0c8', borderRadius: '12px', padding: '0.3rem' }}>
          <IonSegmentButton
            value="menu"
            style={{ '--color': 'black', '--color-checked': 'black' }}
          >
            <IonLabel>Menú</IonLabel>
          </IonSegmentButton>

          <IonSegmentButton
            value="about"
            style={{ '--color': 'black', '--color-checked': 'black' }}
          >
            <IonLabel>Sobre Nosotros</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/* Sección Menú */}
        {segmentValue === 'menu' && (
          <div
            style={{
              background: 'rgba(241, 159, 6, 0.6)',
              color: '#fff',
              padding: '1rem',
              borderRadius: '12px',
              marginTop: '1rem'
            }}
          >
            <h3>Nuestras Bebidas Estrella:</h3>
            <ul>
              <li>Clásico Milk Tea con tapioca 🧋</li>
              <li>Taro Latte morado con leche 🥛</li>
              <li>Matcha con perlas doradas 🍵</li>
              <li>Fresa con crema y boba 🍓</li>
              <li>Mango tropical con jelly 🥭</li>
            </ul>
            <p>¡Explora más en nuestra sección de “Explora” para conocer sabores especiales de temporada!</p>
          </div>
        )}

        {/* Sección Sobre Nosotros */}
        {segmentValue === 'about' && (
          <div
            style={{
              background: 'rgba(250, 162, 0, 0.6)',
              color: '#fff',
              padding: '1rem',
              borderRadius: '12px',
              marginTop: '1rem'
            }}
          >
            <h3>¿Quiénes somos?</h3>
            <p>
              En <b>Bubble Tea House</b> nos apasiona llevar la magia de las bebidas orientales a tu día a día.
              Creamos experiencias únicas combinando sabores, colores y texturas.
            </p>
            <p>
              Cada vaso está preparado con amor, ingredientes frescos y un toque creativo.
              ¡Queremos que cada sorbo sea una sonrisa!
            </p>
            <p>
              Visítanos o contáctanos para personalizar tu bebida favorita.
            </p>
          </div>
        )}

        {/* Botón flotante */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton onClick={navigateToExplora}>
              <IonIcon icon={cafe} />
              <IonLabel>Explora</IonLabel>
            </IonFabButton>
            <IonFabButton onClick={navigateToContacto}>
              <IonIcon icon={call} />
              <IonLabel>Contacto</IonLabel>
            </IonFabButton>
            <IonFabButton onClick={showAlertMessage}>
              <IonIcon icon={alertCircle} />
              <IonLabel>Mensaje</IonLabel>
            </IonFabButton>
          </IonFabList>
        </IonFab>

        {/* Alerta */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'¡Mensaje!'}
          message={'Gracias por visitar Bubble Tea House 🍹'}
          buttons={['OK']}
        />

      </IonContent>
    </IonPage>
  );
}
