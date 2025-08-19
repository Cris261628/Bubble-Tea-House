import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonRouterOutlet
} from '@ionic/react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Bienvenida from './Bienvenida';
import Explora from './Explora';
import Acerca from './Acerca';
import Comentarios from './Comentarios';

import { cafe, iceCream, chatbubbles, pricetag } from "ionicons/icons";

export default function Tabs() {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Routes>
          <Route path="bienvenida" element={<Bienvenida />} />
          <Route path="explora" element={<Explora />} />
          <Route path="acerca" element={<Acerca />} />
          <Route path="comentarios" element={<Comentarios />} />
          <Route path="*" element={<Navigate to="bienvenida" />} />
        </Routes>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="bienvenida" href="/tabs/bienvenida">
          <IonIcon icon={cafe} />   {/* vaso de bebida */}
          <IonLabel>Inicio</IonLabel>
        </IonTabButton>

        <IonTabButton tab="explora" href="/tabs/explora">
          <IonIcon icon={iceCream} />   {/* sabores de booba */}
          <IonLabel>Explora</IonLabel>
        </IonTabButton>

        <IonTabButton tab="comentarios" href="/tabs/comentarios">
          <IonIcon icon={chatbubbles} />   {/* comentarios */}
          <IonLabel>Comentar</IonLabel>
        </IonTabButton>

        <IonTabButton tab="acerca" href="/tabs/acerca">
          <IonIcon icon={pricetag} />   {/* promos o info */}
          <IonLabel>Acerca</IonLabel>
        </IonTabButton>
      </IonTabBar>

    </IonTabs>
  );
}
