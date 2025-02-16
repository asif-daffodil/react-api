import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = () => {
    const [cookies] = useCookies(["userToken"]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            if (cookies.userToken) {
                try {
                    // Make a request to validate the token
                    const response = await axios.get("http://127.0.0.1:8000/api/user", {
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${cookies.userToken}`,
                        },
                    });

                    // If successful, set the user and login status
                    setUser(response.data);
                    setIsLoggedIn(true);
                } catch (error) {
                    console.error("Authentication failed:", error);
                    setIsLoggedIn(false);
                    setUser(null);
                }
            } else {
                setIsLoggedIn(false);
                setUser(null);
            }
        };

        checkAuth();
    }, [cookies.userToken]);

    return { isLoggedIn, user };
};

export default useAuth;