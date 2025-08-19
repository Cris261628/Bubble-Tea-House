import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonButtons,
    IonMenuButton,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg,
    IonButton,
    IonGrid
} from "@ionic/react";

export default function Listaboobas({ boobas, onDelete }) {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Boobas Sugeridos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {boobas.length === 0 ? (
                    <p style={{ textAlign: "center" }}>No hay boobas sugeridos aún.</p>
                ) : (
                    <IonGrid>
                        {boobas.map((b, index) => (
                            <IonCard key={index} style={{ margin: "10px 0" }}>
                                <div
                                    style={{
                                        width: "100%",
                                        height: "150px",
                                        overflow: "hidden",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "#f5f5f5",
                                        borderRadius: "8px"
                                    }}
                                >
                                    <IonImg
                                        src={b.foto}
                                        alt={b.nombre}
                                        style={{
                                            width: "auto",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>
                                <IonCardHeader style={{ display: "flex", justifyContent: "center" }}>
                                    <IonCardTitle style={{ textAlign: "center" }}>{b.nombre}</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <p style={{ marginBottom: "15px", textAlign: "center" }}>{b.descripcion}</p>
                                    <IonButton
                                        color="danger"
                                        size="small"
                                        onClick={() => onDelete(index)}
                                        style={{ width: "50%", marginBottom: "10px" }}
                                    >
                                        Eliminar
                                    </IonButton>
                                </IonCardContent>
                            </IonCard>
                        ))}
                    </IonGrid>
                )}
            </IonContent>
        </IonPage>
    );
}
