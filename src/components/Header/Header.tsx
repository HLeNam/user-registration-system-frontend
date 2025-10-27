import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppContext } from "@/contexts";
import { useLogoutUser } from "@/hooks/useAuth";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { Link } from "react-router";

const UserDropdownMenu = ({ children }: { children: React.ReactNode }) => {
    const logoutUserMutation = useLogoutUser();
    const { handleError } = useErrorHandler({});

    const handleLogout = async () => {
        try {
            await logoutUserMutation.mutateAsync();
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

const Header = () => {
    const { profile: userProfile, isLoading: isLoadingUserProfile } = useAppContext();

    return (
        <header className="bg-[#1E1E1E] px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link to="/" className="lg:mb-0 flex items-center w-full max-w-lg">
                <div className="flex items-center gap-3">
                    <div className="w-16 h-8 bg-white rounded flex items-center justify-center">
                        <span className="text-black font-bold text-xl">URS</span>
                    </div>
                    <span className="text-lg sm:text-xl font-semibold text-white hidden md:inline">
                        User Registration System
                    </span>
                </div>
            </Link>
            <nav className="flex items-center">
                {isLoadingUserProfile ? (
                    <></>
                ) : userProfile ? (
                    <>
                        <UserDropdownMenu>
                            <div className="cursor-pointer flex flex-col items-end">
                                <span className="text-white font-semibold">
                                    <span className="hidden md:inline">Hello, </span>
                                    {userProfile.email}
                                </span>
                                <span className="text-gray-400 text-sm block text-nowrap">
                                    Joined At:{" "}
                                    {new Date(userProfile.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                        </UserDropdownMenu>
                    </>
                ) : (
                    <>
                        <Link to="/register" className="text-white">
                            <Button variant="link" className="text-white">
                                Register
                            </Button>
                        </Link>
                        <Link to="/login" className="text-white">
                            <Button variant="secondary" className="mr-4">
                                Login
                            </Button>
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
