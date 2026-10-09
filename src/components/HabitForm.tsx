import { Button } from "./Button";
import { useState } from "react";

type HabitFormProps = {
    addHabit: (name: string) => void
}

export function HabitForm({addHabit}: HabitFormProps) {
    const [name, setName] = useState("")

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault()

        if (name.trim() === "") return // if empty does nothing
        console.log(name);
        setName("") // on submit after habit created reset
        addHabit(name)
    }

    return (
        <div>
            <form className="flex gap-2" onSubmit={handleSubmit}>
                <input 
                value={name}
                onChange={e => setName(e.target.value)}
                className="flex-1 rounded-lg bg-zinc-800
                px-4 py-2 outline-none focus-visible:ring-2
                focus-visible:ring-violet-500" 
                placeholder="New habit..."/>
                <Button 
                    disabled={name.trim() === ""}
                    className="rounded-lg px-4 py-2 font-medium">Add Habit</Button>
            </form>
        </div>
    )
}