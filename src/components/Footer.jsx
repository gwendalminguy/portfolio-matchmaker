import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-base-content text-center py-4 mt-auto">
      <p className="max-w-7xl mx-auto px-4 text-sm opacity-80">
        © {new Date().getFullYear()} <span className="font-semibold">MatchMaker</span>. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
