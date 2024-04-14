export default function Footer() {
    const footMenu = ['Feature', 'Integration', 'Pricing', 'FAQ'];
    const footMenu2 = ['Privacy', 'Terms and Conditions'];

    return (
        <footer className="divide-y bg-[#1a1a1ad0] px-4 text-gray-100 w-full absolute animate-fadeIn">
            <div className="container mx-auto flex flex-col justify-between space-y-8 py-10 lg:flex-row lg:space-y-0 lg:relative lg:bottom-auto lg:mb-20">
                <div className="lg:w-1/3">
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        className="flex justify-left space-x-3 lg:justify-start"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-400">
                            {/* <Logo /> */}
                        </div>
                        <span className="self-center text-2xl font-semibold text-gray-50">
                            CryptoScout
                        </span>
                    </a>
                </div>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:w-2/3 lg:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="uppercase text-[#7765F3]">Product</h3>
                        <ul className="space-y-1 text-gray-50">
                            {footMenu.map((menu, i) => (
                                <li key={i}>
                                    <a rel="noopener noreferrer" href="#" className="hover:text-white">
                                        {menu}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase text-[#7765F3]">Company</h3>
                        <ul className="space-y-1 text-gray-50">
                            {footMenu2.map((menu, i) => (
                                <li key={i}>
                                    <a rel="noopener noreferrer" href="#" className="hover:text-white">
                                        {menu}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase text-[#7765F3]">Developers</h3>
                        <ul className="space-y-1 text-gray-50">
                            {['Public API', 'Documentation', 'Guides'].map((menu, i) => (
                                <li key={i}>
                                    <a rel="noopener noreferrer" href="#" className="hover:text-white">
                                        {menu}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase text-[#7765F3]">Social Media</h3>
                        <div className="flex justify-start space-x-3 text-gray-50">
                            <a rel="noopener noreferrer" href="#" title="Facebook" className="hover:text-white">
                                {/* <Facebook /> */}
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Twitter" className="hover:text-white">
                                {/* <Twitter /> */}
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Instagram" className="hover:text-white">
                                {/* <Insta /> */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t-[3px] border-[#7765F3] py-6 text-center text-sm text-gray-400">
                © 2024 @CryptoScouts.All rights reserved.
            </div>
        </footer>
    );
}
