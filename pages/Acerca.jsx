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
  IonCardContent
} from '@ionic/react';

export default function Acerca() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton /> {/* Abre el Side Menu */}
          </IonButtons>
          <IonTitle>Acerca de Nosotros</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Bienvenido a Bubble Tea House</h2>
        <p>
          En Bubble Tea House nos apasiona crear experiencias únicas a través de nuestras bebidas. Cada Booba está cuidadosamente preparado con ingredientes frescos y sabores irresistibles.
        </p>

        <IonCard className="ion-margin-top">
          <IonCardHeader>
            <IonCardTitle>Nuestra Misión</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Queremos llevar la magia de los Bubble Teas a todos, combinando sabores, colores y texturas para que cada sorbo sea una sonrisa.
          </IonCardContent>
        </IonCard>

        <IonCard className="ion-margin-top">
          <IonCardHeader>
            <IonCardTitle>Visión</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Ser reconocidos por ofrecer la mejor experiencia de Bubble Tea, fomentando la diversión, creatividad y comunidad alrededor de nuestras bebidas.
          </IonCardContent>
        </IonCard>

        <IonCard className="ion-margin-top">
          <IonCardHeader>
            <IonCardTitle>Valores</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Calidad, frescura, innovación y alegría. Cada Booba refleja nuestra dedicación y pasión por lo que hacemos.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
