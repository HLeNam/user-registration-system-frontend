import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        // Test throw error boundary
        throw new Error("Test error boundary");
    }, []);

    return <div>Home</div>;
};

export default Home;
