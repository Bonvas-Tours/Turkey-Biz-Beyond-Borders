import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const socialMedia = [
  { Icon: FaFacebookF, href: 'https://web.facebook.com/bonvastours', label: 'Facebook' },
  { Icon: FaInstagram, href: 'https://www.instagram.com/bonvastours/', label: 'Instagram' },
  { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/bonvas-tours-limited/', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">Contact us for inquiries or bookings:</h2>
        <p className="mb-2">Email: admin@bonvastours.com</p>
        <p className="mb-6">Call/WhatsApp: +233 261 671 686/+233 531 090 068</p>

        <div className="flex justify-center space-x-4 mb-6">
          {socialMedia.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="bg-white text-black p-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="text-sm">
          <p className="mb-2">
            All Rights Reserved
          </p>
          <p>Copyright © 2025 Bonvas Tours</p>
        </div>
      </div>
    </footer>
  );
}