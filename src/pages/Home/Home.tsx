import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Welcome to User Registration System
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            A simple and secure platform to manage your user accounts. Get started
                            by creating an account or logging in to access your dashboard.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/register">
                                <Button size="lg" className="w-full sm:w-auto px-8">
                                    Get Started
                                </Button>
                            </Link>
                            <Link to="/login">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto px-8"
                                >
                                    Sign In
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Key Features
                        </h2>
                        <p className="text-lg text-gray-600">
                            Everything you need to manage user accounts efficiently
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-gray-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Secure Authentication
                            </h3>
                            <p className="text-gray-600">
                                Industry-standard security measures to protect your account and data
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-gray-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Fast & Reliable
                            </h3>
                            <p className="text-gray-600">
                                Quick registration process with instant access to your account
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-gray-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Easy Management
                            </h3>
                            <p className="text-gray-600">
                                Simple and intuitive interface for managing your profile
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white border-y border-gray-200 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-gray-900 mb-2">10k+</div>
                            <div className="text-gray-600">Active Users</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
                            <div className="text-gray-600">Uptime</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                            <div className="text-gray-600">Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-900 rounded-2xl p-8 sm:p-12 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join thousands of users who trust our platform for their account
                            management needs
                        </p>
                        <Link to="/register">
                            <Button size="lg" variant="secondary" className="px-8">
                                Create Your Account
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
