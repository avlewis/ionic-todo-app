import { IonBadge } from "@ionic/react";
import { useTodos } from "./context";

export default function TodoListCountBadge(){

    const {todos} = useTodos();

    return(
        <IonBadge color="danger">{todos.length}</IonBadge>
    )
}