import { useEffect, useState } from "react";
import { AppContext, INITIAL_APP_STATE } from "@/contexts/app/app.context";
import { LocalStorageEventTarget } from "@/utils/auth";
import { useGetUserProfile } from "@/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(INITIAL_APP_STATE.isAuthenticated);
    const queryClient = useQueryClient();

    const isInAuthenticatedRoute =
        window.location.pathname.includes("/login") ||
        window.location.pathname.includes("/register");

    const { data, isLoading, error } = useGetUserProfile(isInAuthenticatedRoute ? false : true);
    console.log("🚀 ~ AppProvider ~ error:", error);

    useEffect(() => {
        if (isLoading) return;
        if (data) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [data, isLoading]);

    useEffect(() => {
        LocalStorageEventTarget.addEventListener("userInfoCleared", resetAppState);

        return () => {
            LocalStorageEventTarget.removeEventListener("userInfoCleared", resetAppState);
        };
    }, []);

    const resetAppState = () => {
        setIsAuthenticated(false);
        queryClient.removeQueries({ queryKey: ["userProfile"] });
    };

    return (
        <AppContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                profile: data || null,
                isLoading,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
