const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Weather App. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://www.example.com/privacy-policy" className="text-gray-400 hover:text-white mr-4">
            Privacy Policy
          </a>
          <a href="https://www.example.com/terms-of-service" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
