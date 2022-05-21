import { IonButton, IonGrid, IonInput, IonItem, IonLabel, IonList } from "@ionic/react"
import { useState } from "react"
import { useTodos } from "./context"



export const TodoForm: React.FC = () => {
    
    const [todoName, setTodoName] = useState<string>("")

    const {addTodo} = useTodos();

    const handleTodoSubmit = () => {
        addTodo(todoName);
        alert("Added!")
        setTodoName("")
    }

    return(
        <IonGrid>

        <IonList>
        <IonItem>
            <IonInput value={todoName} onIonChange={e => setTodoName(e.detail.value!)} placeholder="Add Todo" />

        </IonItem>
        </IonList>

            <IonButton disabled={!todoName} onClick={() => handleTodoSubmit()}>Create</IonButton>

        </IonGrid>
        
    )
}