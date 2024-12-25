import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-800 p-4">
        <div className="text-center">
          <p className="text-white text-lg">© 2024 Gualambo. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy-policy" className="text-blue-200 hover:text-blue-100 transition duration-300 mx-2">
              Privacy Policy
            </Link>
            |
            <Link href="/terms" className="text-blue-200 hover:text-blue-100 transition duration-300 mx-2">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
      
    );
}

export default Footer;