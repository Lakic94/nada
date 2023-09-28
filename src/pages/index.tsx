import Image from "next/image";
import { useState } from "react";
import { Amenities } from "~/components/Amenities";
import { Availability } from "~/components/Availability";
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
        className="rounded-lg w-full"
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
      <div className="sticky top-0 z-50 mb-2 flex w-full flex-row justify-center bg-background pt-6">
        {NAV_ITEMS.map((navItem: NavItem) => (
          <NavItem
            name={navItem.name}
            key={navItem.name}
            activeItem={activeItem}
            scroll={navItem.name === scrollToView}
            href={navItem.href}
          ></NavItem>
        ))}
      </div>
      <hr className="border-black-500 h-10 border-b-2 border-solid"></hr>
      <Description setActiveNavItem={setActiveItem} />
      <Pictures setActiveNavItem={setActiveItem} />
      <Amenities setActiveNavItem={setActiveItem} />
      <Location setActiveNavItem={setActiveItem} />
      <Availability setActiveNavItem={setActiveItem} />
    </div>
  );
}
