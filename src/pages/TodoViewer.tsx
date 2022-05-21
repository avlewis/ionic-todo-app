import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { useTodos } from "../components/Todo/context"
import { TodoList } from "../components/Todo/List"

const TodoViewer: React.FC = () => {

    const {todos} = useTodos()

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>View Todos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <TodoList todos={todos} />
            </IonContent>
        </IonPage>
    )
}

export default TodoViewer