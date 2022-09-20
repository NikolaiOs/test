import { useParams } from "react-router-dom";

export const User = () => {
    const { userId } = useParams();
    console.log("userId: ", userId);

    return (
        <div className=" no-gradient">
            <div className="container">
                <h1>User Page</h1>
            </div>
        </div>
    )
}