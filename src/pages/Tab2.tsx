import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonPage, IonRippleEffect, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { addOutline, cloudCircleOutline, cloudOutline } from 'ionicons/icons';
import { relative } from 'path';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Weather</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Weather</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Town</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonIcon icon={cloudOutline} size='large' />
                </IonCardContent>
              
              </IonCard>
            </IonCol>
            <IonCol>

            </IonCol>
          </IonRow>
        </IonGrid>

        <IonFab slot="fixed" vertical="bottom" horizontal='end'>
          <IonFabButton><IonIcon icon={addOutline} /></IonFabButton>
        </IonFab>


      </IonContent>
    </IonPage>
  );
};

export default Tab2;
