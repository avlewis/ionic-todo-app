import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { TodoForm } from '../components/Todo/Form';

const TodoManager: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo Manager</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <TodoForm />
      </IonContent>
    </IonPage>
  );
};

export default TodoManager;
