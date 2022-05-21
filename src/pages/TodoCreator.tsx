import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { TodoForm } from '../components/Todo/Form';

const TodoCreator: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo Creator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <TodoForm />
      </IonContent>
    </IonPage>
  );
};

export default TodoCreator;
