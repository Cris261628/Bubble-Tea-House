import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';

import { Routes, Route, Navigate } from 'react-router-dom';
import Agregarboobas from './pages/Agregarboobas';
import Listaboobas from './pages/Listaboobas';
import Tabs from './pages/Tabs';
import Contacto from './pages/Contacto';
import Promociones from './pages/promociones';
import Sucursales from './pages/sucursales';

import { useEffect, useState } from 'react';

/* CSS de Ionic */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';

setupIonicReact();

export default function App() {
  const [boobas, setBoobas] = useState([]);

  // Cargar datos al iniciar
  useEffect(() => {
    const boobasGuardadas = localStorage.getItem('boobas');
    if (boobasGuardadas) setBoobas(JSON.parse(boobasGuardadas));
  }, []);

  // Guardar datos cuando cambian
  useEffect(() => {
    localStorage.setItem('boobas', JSON.stringify(boobas));
  }, [boobas]);

  // Funciones para manejar boobas
  const agregarBooba = (nuevaBooba) => {
    if (nuevaBooba && nuevaBooba.nombre) setBoobas([...boobas, nuevaBooba]);
  };

  const eliminarBooba = (index) => {
    setBoobas(boobas.filter((_, i) => i !== index));
  };

  return (
    <IonApp>
      <IonSplitPane contentId="main-content">
        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem routerLink="/tabs/bienvenida">Inicio</IonItem>
              <IonItem routerLink="/contacto">Contacto</IonItem>
              <IonItem routerLink="/agregar">Sugerir Booba</IonItem>
              <IonItem routerLink="/lista">Lista de Boobas sugeridos</IonItem>
              <IonItem routerLink="/promociones">Promociones</IonItem>
              <IonItem routerLink="/sucursales">Sucursales</IonItem>
            </IonList>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/tabs/bienvenida" />} />
            <Route path="/tabs/*" element={<Tabs />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/agregar" element={<Agregarboobas onAdd={agregarBooba} />} />
            <Route path="/lista" element={<Listaboobas boobas={boobas} onDelete={eliminarBooba} />} />
            <Route path="/promociones" element={<Promociones />} />
            <Route path="/sucursales" element={<Sucursales />} />
            <Route path="*" element={<Navigate to="/tabs/bienvenida" />} />
          </Routes>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonApp>
  );
}
