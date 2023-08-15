import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center gap-4 border-t-2 border-t-border p-5 font-inter text-base sm:flex-row-reverse sm:justify-between lg:px-16 xl:py-7 xl:text-lg">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-10">
        {/* Privacy policy */}
        <Link
          href="mailto:compfest15tim@gmail.com"
          className="font-semibold text-muted-foreground xl:hover:text-foreground"
        >
          Contact Us
        </Link>

        {/* Contact Us */}
        <Link
          href="/privacy-policy"
          className="font-semibold text-muted-foreground xl:hover:text-foreground"
        >
          Privacy Policy
        </Link>
      </div>

      <div>
        {/* Copyright */}
        <p className="text-center font-medium text-muted-foreground">
          Copyright © {year} SeTiket
        </p>
      </div>
    </footer>
  );
};

export default Footer;
