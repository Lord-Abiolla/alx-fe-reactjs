function UserProfile() {
    return (
        <div className="bg-gray-100 p-8 mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:p-8 max-w-xs md:max-w-sm hover:shadow-xl">
            <img className="rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgcdn.stablediffusionweb.com%2F2024%2F4%2F17%2F6d71579f-ecef-42de-b83e-c0cb8179130c.jpg&f=1&nofb=1&ipt=872992fb70073e4176b15c1ac5bac315967789598228dad12efb4182debab4b9" alt="User" />
            <h1 className="text-xl text-blue-800 my-4 sm:text-lg md:text-xl hover:text-blue-500">John Doe</h1>
            <p className="text-gray-600 text-base sm:text-sm md:text-base">
                Developer at Example Co. Loves to write code and explore new technologies.
            </p>
        </div>
    );
}

export default UserProfile;