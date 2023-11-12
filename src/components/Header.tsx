import Image from "next/image";
import { ModeToggle } from "@/components/ui/ThemeModeToggle";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Image
            src="/path/to/your/logo.png"
            alt="Logo"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center space-x-4">
          {/* Add your navigation links here */}

          <a
            href="#"
            className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
          >
            Stack
          </a>
          <a
            href="#"
            className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
          >
            Contact
          </a>

          {/* Dark Mode Toggle */}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
