interface FooterLink {
    title: string;
    path: string;
}

interface FooterProps {
    companyName: string;
}

const Footer = ({ companyName }: FooterProps) => {
    const footerLinks = {
        about: [
            { title: "About Us", path: '/story' },
            { title: 'FAQ', path: '/faq' },
        ],
        legal: [
            { title: 'Privacy Policy', path: '/privacy' },
            { title: 'Terms of Service', path: '/terms' },
            { title: 'Cookie Policy', path: '/cookie-monster' },
        ],
    };

return (
    <footer className="bg-black text-white py-12 mt-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
            {footerLinks.about.map((link) => (
                <li key={link.title}>
                <a
                    href={link.path}
                    className="hover:text-pink-400 transition-colors duration-300"
                >
                    {link.title}
                </a>
                </li>
            ))}
            </ul>
        </div>

        <div>
            <h3 className="text-xl font-bold mb-4">{'legal'}</h3>
            <ul className="space-y-2">
            {footerLinks.legal.map((link) => (
                <li key={link.title}>
                <a
                    href={link.path}
                    className="hover:text-pink-400 transition-colors duration-300"
                >
                    {link.title}
                </a>
                </li>
            ))}
            </ul>
        </div>

        <div>
            <h3 className="text-3xl font-bold mb-4">{companyName}</h3>
            <p className="opacity-75">
                {('Building innovative solutions.')}
            </p>
        </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
        <p className="text-sm opacity-75">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
        </div>
    </div>
    </footer>
);
};

export default Footer;