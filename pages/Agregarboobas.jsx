import { useState } from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonInput,
    IonButtons,
    IonMenuButton,
    IonTextarea,
    IonImg,
    IonAlert,
    IonCard,
    IonCardContent
} from "@ionic/react";
import { Camera, CameraResultType } from "@capacitor/camera";
import { useNavigate } from "react-router-dom";

export default function Agregarboobas({ onAdd }) {
    const navigate = useNavigate();
    const [foto, setFoto] = useState(null);
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const tomarFoto = async () => {
        try {
            const imagen = await Camera.getPhoto({
                resultType: CameraResultType.DataUrl,
                quality: 90,
                allowEditing: false
            });
            setFoto(imagen.dataUrl);
        } catch (error) {
            console.error("Error al tomar la foto:", error);
            setShowAlert(true);
        }
    };

    const guardar = () => {
        if (!foto || !nombre || !descripcion) {
            setShowAlert(true);
            return;
        }

        onAdd({
            nombre,
            descripcion,
            foto: foto.startsWith("data:image") ? foto : `data:image/jpeg;base64,${foto}`
        });

        setFoto(null);
        setNombre("");
        setDescripcion("");
        navigate("/lista");
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Sugerir Booba</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton
                    expand="block"
                    onClick={tomarFoto}
                    style={{
                        "--background": "#CBA3E3",
                        "--color": "black"
                    }}
                >
                    Tomar foto
                </IonButton>

                {foto && (
                    <IonCard style={{ maxWidth: "300px", margin: "10px auto" }}>
                        <IonImg
                            src={foto}
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                                borderRadius: "8px"
                            }}
                        />
                    </IonCard>
                )}

                <IonCardContent>
                    <IonInput
                        placeholder="Nombre de la Booba"
                        value={nombre}
                        onIonChange={(e) => setNombre(e.detail.value)}
                        style={{ marginBottom: "10px" }}
                    />
                    <IonTextarea
                        placeholder="Descripción"
                        value={descripcion}
                        onIonChange={(e) => setDescripcion(e.detail.value)}
                    />
                </IonCardContent>

                <IonButton
                    expand="block"
                    onClick={guardar}
                    style={{
                        marginTop: "20px",
                        "--background": "#CBA3E3",
                        "--color": "black"
                    }}
                >
                    Guardar
                </IonButton>

                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    header="Error"
                    message={!foto ? "Debes tomar una foto" : "Completa todos los campos"}
                    buttons={["OK"]}
                />
            </IonContent>
        </IonPage>
    );
}
