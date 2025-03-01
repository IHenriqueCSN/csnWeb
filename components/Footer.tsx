import { HiOutlineMail } from 'react-icons/hi';
import { RiWhatsappLine } from 'react-icons/ri';
import { FiLinkedin } from 'react-icons/fi';

interface FooterTranslations {
    about_us: string;
    privacy: string;
    terms: string;
    contact: string;
    motto: string;
    rights: string;
}

interface FooterProps {
    companyName: string;
    t: FooterTranslations;
}

const Footer = ({ companyName, t }: FooterProps) => {
    const footerLinks = {
        about: [
            { title: t.about_us, path: '/about-us' },
            { title: t.privacy, path: '/privacy' },
            { title: t.terms, path: '/terms' }
        ],

        contacts: [
            { 
                title: "Email", 
                value: "contato@csntech.com",
                path: 'mailto:contato@empresa.com',
                icon: <HiOutlineMail className="w-5 h-5" />
            },
            { 
                title: "WhatsApp", 
                value: "+55 (11) 00000-0000",
                path: 'https://wa.me/5511000000000',
                icon: <RiWhatsappLine className="w-5 h-5" />
            },
            { 
                title: "LinkedIn", 
                path: 'https://linkedin.com/company/empresa',
                icon: <FiLinkedin className="w-5 h-5" />
            }
        ]
    };

return (
    <footer className="bg-black text-white py-12 mt-0">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
            <h3 className="text-xl font-bold mb-4">{t.about_us}</h3>
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
            <h3 className="text-xl font-bold mb-4">{t.contact}</h3>
            <ul className="space-y-4">
                {footerLinks.contacts.map((contact) => (
                    <li key={contact.title} className="flex items-center space-x-3">
                        <span className="text-pink-400">
                            {contact.icon}
                        </span>
                        <a
                            href={contact.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-400 transition-colors duration-300"
                        >
                            {contact.value || contact.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <h3 className="text-3xl font-bold mb-4">{companyName}</h3>
            <p className="opacity-75">
                {t.motto}
            </p>
        </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
        <p className="text-sm opacity-75">
            © {new Date().getFullYear()} {companyName}. {t.rights}
        </p>
        </div>
    </div>
    </footer>
);
};

export default Footer;