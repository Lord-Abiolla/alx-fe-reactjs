import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
};

function PostsComponent() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchData
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};

export default PostsComponent;