import { IonButton, IonGrid, IonItem, IonList, IonText } from "@ionic/react"
import { useTodos } from "./context"
import { Todo } from "./todo.types"

export const TodoList: React.FC<{todos: Todo[] | []}> = ({todos}) => {

    const {deleteTodo} = useTodos();

    return(
        <IonGrid>
            {todos.length > 0
            ? 
                    <IonList>
                    {todos.map((t) => 
                        <IonItem key={t.id}>
                            <IonButton onClick={() => deleteTodo(t.id)}>Delete</IonButton>
                            <IonText>{t.name}</IonText>
                            
                        </IonItem>
                    )}
                </IonList>
            : 
            <IonText>No Todo Items Created!</IonText>
            }

        </IonGrid>

    )
}