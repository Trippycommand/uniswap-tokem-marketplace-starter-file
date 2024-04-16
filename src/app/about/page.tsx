import Head from 'next/head';

export default function AboutPage() {
    return (
        <div>
            <Head>
                <title>About CryptoScout</title>
                <meta name="description" content="Learn more about CryptoScout - your trusted platform for swapping and sending money to friends securely and easily." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-gray-950 text-white min-h-screen flex justify-center items-center">
                <div className="max-w-4xl p-8 bg-indigo-800 shadow-lg rounded-lg">
                    <h1 className="text-4xl font-bold mb-6">About CryptoScout</h1>
                    <p className="text-lg text-gray-300 mb-8">
                        At CryptoScout, we believe in making financial transactions simpler, safer, and more accessible. Our platform enables you to swap and send money to friends with ease, all while prioritizing security and user experience.
                    </p>
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                        <p className="text-lg text-gray-300">
                            Our mission is to revolutionize the way people transfer money by providing a secure and user-friendly platform for swapping and sending funds globally. We strive to empower individuals to manage their finances efficiently and securely.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-3">Why Choose CryptoScout?</h2>
                        <ul className="list-disc list-inside text-lg text-gray-300">
                            <li className="mb-2">Secure and encrypted transactions to safeguard your funds</li>
                            <li className="mb-2">Effortless swapping of various currencies at competitive rates</li>
                            <li className="mb-2">Instant money transfers to friends worldwide</li>
                            <li className="mb-2">User-friendly interface designed for seamless navigation</li>
                            <li>Dedicated customer support available 24/7</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-3">Join Us Today</h2>
                        <p className="text-lg text-gray-300">
                            Experience the future of financial transactions with CryptoScout. Join our community today and discover a simpler, safer, and more efficient way to swap and send money to your friends.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
