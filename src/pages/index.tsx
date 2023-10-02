import Image from "next/image";
import { useState } from "react";
import { Amenities } from "~/components/Amenities";
import { Availability } from "~/components/Availability";
import { Contact } from "~/components/Contact";
import { Description } from "~/components/Description";
import { Location } from "~/components/Location";
import { NavItem } from "~/components/NavItem";
import { Pictures } from "~/components/Pictures";
import hero from "../../public/hero.webp";
import { NAV_ITEMS } from "../constants/navItems";
export default function Home() {
  const [activeItem, setActiveItem] = useState("Description");
  const [scrollToView, setScrollToView] = useState("");

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
      <div className="sticky xs:static top-0 z-10 mb-2 xs:flex-wrap xs:p-0 xs:gap-6 flex w-full flex-row justify-center bg-background p-5 pt-6">
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
    </div>
  );
}
