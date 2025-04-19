"use client";
import MobileNav from "@/components/navs/MobileNav";
import Nav from "@/components/navs/Nav";

function Header() {
  return (
    <header className="text-tertiary xl:py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          {/* Nav at the Start */}
          <Nav />
        </div>

        {/* Input and Avatar in the Center */}
        <div className="flex-grow flex items-center justify-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-tertiary flex items-center justify-center"></div>
          <div className="inline-flex">
            <input
              type="text"
              className="text-[14px] h-4 border w-auto focus:outline-none text-tertiary border-b-2 p-4 border-tertiary focus:border-primary placeholder:text-tertiary placeholder:text-[16px] bg-transparent rounded-tr-lg rounded-tl-lg rounded-br-lg"
              id="search"
              name="search"
              autoComplete="off"
              placeholder="Ask me anything!"
            />
          </div>
        </div>

        {/* Starboard Logo at the End */}
        <div className="xl:flex flex-shrink-0 flex items-center space-x-2 flex-col">
          <div className="h-12 w-12 rounded-full bg-tertiary flex items-center justify-center"></div>
          <p className="text-sm uppercase text-tertiary mr-4">Starboard</p>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
