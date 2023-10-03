import Image from "next/image";
import { useEffect, useState } from "react";
import { Amenities } from "~/components/Amenities";
import { Availability } from "~/components/Availability";
import { Contact } from "~/components/Contact";
import { Description } from "~/components/Description";
import { Location } from "~/components/Location";
import { NavItem } from "~/components/NavItem";
import { Pictures } from "~/components/Pictures";
import hero from "../../public/hero.webp";
import { NAV_ITEMS } from "../constants/navItems";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function Home() {
  const [activeItem, setActiveItem] = useState("Description");
  const [scrollToView, setScrollToView] = useState("");

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center bg-background">
      <div
        style={{ position: "relative", height: "60vh" }}
        className="w-full rounded-lg"
      >
        <Image
          alt="Mountains"
          src={hero}
          fill
          style={{
            objectFit: "cover",
          }}
          className="rounded-large p-2"
        />
      </div>
      <div className="sticky top-0 z-10 mb-2 flex w-full flex-row justify-center bg-background p-5 pt-6 xs:static xs:flex-wrap xs:gap-6 xs:p-0">
        {NAV_ITEMS.map(
          (navItem: { name: string; href: string; item: string }) => (
            <NavItem
              name={navItem.name}
              key={navItem.name}
              activeItem={activeItem}
              scroll={navItem.name === scrollToView}
              href={navItem.href}
              item={navItem.item}
            ></NavItem>
          ),
        )}
      </div>
      <hr className="border-black-500 h-10 border-b-2 border-solid"></hr>
      <Description setActiveNavItem={setActiveItem} />
      <Pictures setActiveNavItem={setActiveItem} />
      <Amenities setActiveNavItem={setActiveItem} />
      <Location setActiveNavItem={setActiveItem} />
      <Availability setActiveNavItem={setActiveItem} />
      <Contact setActiveNavItem={setActiveItem} />
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          position: "fixed",
          fontSize: "20px",
          bottom: "40px",
          right: "40px",
          color: "white",
          backgroundColor:"black",
          textAlign: "center",
        }}
        className="rounded-3xl"
      >
        <MdKeyboardArrowUp className="h-10 w-10"/>
      </button>
    </div>
  );
}
