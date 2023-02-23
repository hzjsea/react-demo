import { useId } from "react";

export default function UserID(){
    let id = useId()

    return (
        <div>
            <span id={id}>1111111111</span>
        </div>
    )
}