function Footer() {
  return (
    <footer className="bg-black text-white py-16">

      <div className="grid md:grid-cols-4 gap-8 px-10">

        <div>
          <h3 className="font-bold text-xl">
            BookVerse AI
          </h3>

          <p>
            Smart Book Marketplace
          </p>
        </div>

        <div>
          <h3 className="font-bold">
            Quick Links
          </h3>

          <p>Home</p>
          <p>Books</p>
          <p>Rent</p>
        </div>

        <div>
          <h3 className="font-bold">
            Support
          </h3>

          <p>Contact</p>
          <p>FAQ</p>
        </div>

        <div>
          <h3 className="font-bold">
            Follow Us
          </h3>

          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;