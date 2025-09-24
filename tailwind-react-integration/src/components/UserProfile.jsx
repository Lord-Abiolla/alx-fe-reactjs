function UserProfile() {
    return (
        <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
            <img className="rounded-full w-36 h-36 mx-auto" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgcdn.stablediffusionweb.com%2F2024%2F4%2F17%2F6d71579f-ecef-42de-b83e-c0cb8179130c.jpg&f=1&nofb=1&ipt=872992fb70073e4176b15c1ac5bac315967789598228dad12efb4182debab4b9" alt="User" />
            <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
            <p className="text-gray-600 text-base">
                Developer at Example Co. Loves to write code and explore new technologies.
            </p>
        </div>
    );
}

export default UserProfile;