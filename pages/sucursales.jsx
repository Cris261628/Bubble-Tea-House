import { useState } from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButtons,
    IonMenuButton,
    IonCardContent,
    IonImg,
    IonButton,
    IonFab,
    IonFabButton,
    IonIcon,
    IonInput,
    IonModal
} from "@ionic/react";
import { add } from "ionicons/icons";
import { Camera, CameraResultType } from "@capacitor/camera";
import "./Sucursales.css"; // CSS externo

export default function Sucursales() {
    const [sucursales, setSucursales] = useState([
        { ciudad: "Ciudad 1", calle: "Calle A", numero: "123", foto: "/site1.png" },
        { ciudad: "Ciudad 2", calle: "Calle B", numero: "456", foto: "/site2.png" }
    ]);

    const [modalOpen, setModalOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [ciudad, setCiudad] = useState("");
    const [calle, setCalle] = useState("");
    const [numero, setNumero] = useState("");
    const [foto, setFoto] = useState("");

    const abrirModalAgregar = () => {
        setCiudad(""); setCalle(""); setNumero(""); setFoto(""); setEditIndex(null); setModalOpen(true);
    };

    const abrirModalEditar = (index) => {
        const s = sucursales[index];
        setCiudad(s.ciudad); setCalle(s.calle); setNumero(s.numero); setFoto(s.foto); setEditIndex(index); setModalOpen(true);
    };

    const tomarFoto = async () => {
        try {
            const imagen = await Camera.getPhoto({
                resultType: CameraResultType.DataUrl,
                quality: 80,
                allowEditing: false
            });
            setFoto(imagen.dataUrl);
        } catch (error) {
            console.error(error); alert("No se pudo tomar la foto");
        }
    };

    const guardarSucursal = () => {
        const nuevaSucursal = { ciudad, calle, numero, foto: foto || "/placeholder.jpg" };
        if (editIndex !== null) {
            const nuevas = [...sucursales]; nuevas[editIndex] = nuevaSucursal; setSucursales(nuevas);
        } else {
            setSucursales([...sucursales, nuevaSucursal]);
        }
        setModalOpen(false);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Sucursales</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {sucursales.map((s, index) => (
                    <IonCard key={index} style={{ marginBottom: "15px" }}>
                        {/* Contenedor que ajusta la imagen */}
                        <div className="card-img-container">
                            <IonImg src={s.foto} />
                        </div>

                        <IonCardHeader>
                            <IonCardTitle style={{ marginBottom: "5px" }}>{s.ciudad}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <p style={{ marginBottom: "10px" }}>{s.calle} #{s.numero}</p>
                            <IonButton
                                expand="block"
                                onClick={() => abrirModalEditar(index)}
                                style={{ marginTop: "10px", "--background": "#CBA3E3", "--color": "black" }}
                            >
                                Editar
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                ))}

                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton onClick={abrirModalAgregar}>
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>

                <IonModal isOpen={modalOpen} onDidDismiss={() => setModalOpen(false)}>
                    <IonContent className="ion-padding">
                        <h2>{editIndex !== null ? "Editar Sucursal" : "Agregar Sucursal"}</h2>

                        <IonButton
                            expand="block"
                            style={{ "--background": "#CBA3E3", "--color": "black", marginBottom: "15px" }}
                            onClick={tomarFoto}
                        >
                            {foto ? "Cambiar Foto" : "Agregar Foto"}
                        </IonButton>

                        {foto && (
                            <div className="card-img-container" style={{ marginBottom: "15px" }}>
                                <IonImg src={foto} />
                            </div>
                        )}

                        <IonInput placeholder="Ciudad" value={ciudad} onIonChange={e => setCiudad(e.detail.value)} style={{ marginBottom: "10px" }} />
                        <IonInput placeholder="Calle" value={calle} onIonChange={e => setCalle(e.detail.value)} style={{ marginBottom: "10px" }} />
                        <IonInput placeholder="Número" value={numero} onIonChange={e => setNumero(e.detail.value)} style={{ marginBottom: "10px" }} />

                        <IonButton expand="block" onClick={guardarSucursal} style={{ marginTop: "20px", "--background": "#CBA3E3", "--color": "black" }}>
                            Guardar
                        </IonButton>
                        <IonButton expand="block" onClick={() => setModalOpen(false)} style={{ marginTop: "20px", "--background": "#CBA3E3", "--color": "black" }}>
                            Cancelar
                        </IonButton>
                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    );
}
