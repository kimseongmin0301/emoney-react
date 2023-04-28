import { PersonProps } from "./Person.types"

export const Person = (props: PersonProps) => {
    return (
        <div>
            {props.name.last} {props.name.first}
        </div>
    )
}