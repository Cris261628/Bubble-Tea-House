import { useState } from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonMenuButton,
    IonButtons,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg
} from '@ionic/react';

export default function Promociones() {
    const [promos] = useState([
        {
            titulo: 'Promo Amigos',
            descripcion: 'Compra un booba y obten 50% de descuento en el segundo',
            imagen: '/prom1.png'
        },
        {
            titulo: 'Promo Gloton',
            descripcion: 'Compra 1, lleva 1 gratis',
            imagen: '/prom2.webp'
        },
        {
            titulo: 'Promo a Domicilio',
            descripcion: 'Envío gratis en pedidos mayores a $500',
            imagen: '/prom3.jpg'
        },
        {
            titulo: 'Promo principiante',
            descripcion: '20% de descuento para nuevos usuarios',
            imagen: '/prom4.jpg'
        },
    ]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Promociones</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '15px'
                    }}
                >
                    {promos.map((promo, i) => (
                        <IonCard
                            key={i}
                            style={{
                                borderRadius: '12px',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Texto arriba */}
                            <IonCardHeader>
                                <IonCardTitle>{promo.titulo}</IonCardTitle>
                                <IonCardContent>{promo.descripcion}</IonCardContent>
                            </IonCardHeader>

                            {/* Imagen ajustada */}
                            {promo.imagen && (
                                <IonImg
                                    src={promo.imagen}
                                    style={{
                                        width: '100%',    // ocupa todo el ancho del card
                                        height: 'auto',   // ajusta la altura según la proporción original
                                        borderRadius: '8px',
                                        marginBottom: '10px'
                                    }}
                                />
                            )}
                        </IonCard>
                    ))}
                </div>
            </IonContent>
        </IonPage>
    );
}
