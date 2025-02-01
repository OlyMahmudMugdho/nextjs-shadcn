"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ApiCall() {
    const { toast } = useToast();
    const [, setCompleted] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((res) => res.json())
            .then((data) => {
                setCompleted(data.completed);
                if (!data.completed) {
                    toast({
                        variant: "destructive",
                        title: "Task Not Completed",
                        description: "The API call indicates that the task is not completed.",
                    });
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <h1>Automatically shows the toast after api call</h1>
    );
}
