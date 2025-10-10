import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
        throw new Error("Failed to fetch posts from server");
    }

    return res.json();
};

export default function PostsComponent() {
    const queryClient = useQueryClient();

    const {
        data,
        error,
        isError,
        isLoading,
        refetch,
        isFetching,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 10000,
        gcTime: 60000,
        retry: 2,
        refetchOnWindowFocus: true,
        refetchInterval: false,
        placeholderData: keepPreviousData => keepPreviousData,
    });

    const handleRefetch = () => refetch();

    const clearCache = () => {
        queryClient.removeQueries({ queryKey: ["posts"] });
    };

    if (isLoading) return <div>Loading posts...</div>;

    if (isError)
        return (
            <div className="text-red-600">
                Error: {error.message}
                <br />
                <button
                    onClick={handleRefetch}
                    className="bg-blue-600 text-white p-2 mt-2 rounded"
                >
                    Try Again
                </button>
            </div>
        );

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-3">Posts</h1>

            <div className="flex gap-2 mb-4">
                <button
                    onClick={handleRefetch}
                    className="bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                    Refetch Posts
                </button>

                <button
                    onClick={clearCache}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg"
                >
                    Clear Cache
                </button>
            </div>

            {isFetching && <p className="text-sm text-gray-500">Updating...</p>}

            {data?.map((post) => (
                <div
                    key={post.id}
                    className="border-b border-gray-300 py-2 hover:bg-gray-100"
                >
                    <h3 className="font-semibold">{post.title}</h3>
                </div>
            ))}
        </div>
    );
}
