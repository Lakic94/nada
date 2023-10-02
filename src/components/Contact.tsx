import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Phone from "../../public/icons/phone.svg";
import Mail from "../../public/icons/mail.svg";

export const Contact = (props: {
  setActiveNavItem: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      props.setActiveNavItem("contact");
    }
  }, [inView]);
  return (
    <div ref={ref} id="contact" className={`mb-32 mt-10 flex w-[60%] flex-col xs:p-4 xs:w-full`}>
      <h3 className="mb-10 text-primary">Kontakt</h3>
      <div className="flex flex-row gap-14 xs:flex-col">
        <div className="flex flex-row  gap-2">
          <Image
            src={Phone as string}
            alt="4 guests"
            width={25}
            height={25}
          ></Image>
          <a href="tel:+381629783003">+381 62 978 3003</a>
        </div>
        <div className="flex flex-row gap-2">
          <Image
            src={Mail as string}
            alt="4 guests"
            width={25}
            height={25}
          ></Image>
          <a href="mailto:nilakic94@gmail.com">+nilakic94@gmail.com</a>
        </div>
      </div>
    </div>
  );
};
