import Image from "next/image";
import {default as Guests} from "../../public/icons/doors.svg";
import Group from "../../public/icons/group.svg";
import Bath from "../../public/icons/bathroom.svg";
import Bed from "../../public/icons/bed.svg";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const Description = (props: {
  setActiveNavItem: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      props.setActiveNavItem("Description");
    }
  }, [inView]);

  return (
    <div className="w-[60%]" ref={ref} id="description">
      <span className="text-primary">Apartman</span>
      <h2 className="mb-2 text-primary">Nada Zlatibor</h2>
      <div className="flex flex-row gap-14">
        <div className="flex flex-row gap-2">
          <Image src={Group as string} alt="4 guests" width={25} height={25}></Image>4
          Gosta
        </div>
        <div className="flex flex-row gap-2">
          <Image src={Guests as string} alt="4 guests" width={25} height={25}></Image>1
          Soba
        </div>
        <div className="flex flex-row gap-2">
          <Image src={Bath as string} alt="4 guests" width={25} height={25}></Image>1
          Kupatilo
        </div>
        <div className="flex flex-row gap-2">
          <Image src={Bed as string} alt="4 guests" width={25} height={25}></Image>2
          Kreveta
        </div>
      </div>
      <div className="mt-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        atque corrupti dolorum odit voluptatibus optio neque quam numquam est
        inventore. Velit sunt molestiae voluptatum fuga nihil quidem
        voluptatibus magnam veritatis? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eum dicta, temporibus corrupti natus, suscipit fugiat
        praesentium ducimus eaque fuga laboriosam at sunt saepe odit
        consectetur. Mollitia sed itaque illum sit! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quas voluptatibus illum corporis
        recusandae explicabo iste, labore quis rem consectetur praesentium
        accusantium laudantium velit, quasi consequatur illo error deleniti
        temporibus aliquam! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Quibusdam tenetur quidem at architecto reiciendis nemo quam velit
        ea. Quibusdam ad dolorem explicabo aliquid tenetur aliquam incidunt
        mollitia corporis ratione impedit! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Neque nobis nam libero quis eum deserunt
        facere voluptates iste dolor corporis earum reprehenderit, blanditiis
        distinctio repudiandae fugit, obcaecati vel in recusandae.
      </div>
    </div>
  );
};
