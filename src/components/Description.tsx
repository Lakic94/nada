import Image from "next/image";
import { default as Guests } from "../../public/icons/doors.svg";
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
          <Image
            src={Group as string}
            alt="4 guests"
            width={25}
            height={25}
          ></Image>
          4 Gosta
        </div>
        <div className="flex flex-row gap-2">
          <Image
            src={Guests as string}
            alt="4 guests"
            width={25}
            height={25}
          ></Image>
          1 Soba
        </div>
        <div className="flex flex-row gap-2">
          <Image
            src={Bath as string}
            alt="4 guests"
            width={25}
            height={25}
          ></Image>
          1 Kupatilo
        </div>
        <div className="flex flex-row gap-2">
          <Image
            src={Bed as string}
            alt="4 guests"
            width={25}
            height={25}
          ></Image>
          2 Kreveta
        </div>
      </div>
      <h5 className="mb-2 mt-2 text-primary">
        Udoban Apartman sa Pogledom na Zlatiboru
      </h5>

      <div className="mt-6 flex flex-col gap-5">
        <span>
          Dobrodošli u naš prelepi apartman na Zlatiboru, idealan za opuštajući
          boravak u planinskom ambijentu. Ovaj udoban apartman od 40 kvadrata
          nalazi se na četvrtom spratu i pruža spektakularan pogled na
          Zlatiborske predele.
        </span>
        <span>
          <span className="font-bold text-primary"> Površina: </span> Apartman se
          prostire na 40 kvadrata, savršeno uređen za udoban boravak za parove
          ili manje grupe do četiri osobe.
        </span>
        <span>
          <span className="font-bold text-primary"> Soba za Spavanje: </span>
          Uživajte u mirnom snu u prostranoj spavaćoj sobi sa udobnim bračnim
          krevetom. Pogled iz prozora će vas oduševiti svako jutro.
        </span>
        <span>
          <span className="font-bold text-primary"> Dnevna Soba: </span>U dnevnoj
          sobi je udoban kauč na razvlačenje, savršen za dodatne goste ili
          opuštanje uz omiljeni film. Veliki prozori donose svetlost i predivan
          panoramski pogled.
        </span>
        <span>
          <span className="font-bold text-primary"> Kuhinja: </span>Potpuno
          opremljena kuhinja sa svim potrebnim aparatima omogućava vam da
          pripremate ukusne obroke. Tu je i trpezarijski sto za uživanje u
          obrocima.
        </span>
        <span>
          <span className="font-bold text-primary"> Kupatilo: </span>Moderno
          kupatilo sa tuš-kadom i svim potrebnim toaletnim potrepštinama za vašu
          udobnost.
        </span>
        <span>
          <span className="font-bold text-primary"> Balkon: </span>Na privatnom
          balkonu možete uživati u svežem planinskom vazduhu i spektakularnom
          pogledu na okolinu.
        </span>
        <span>
          <span className="font-bold text-primary"> Wi-Fi: </span>Besplatan i brz
          Wi-Fi dostupan je tokom vašeg boravka.
        </span>
        <span>
          <span className="font-bold text-primary"> Parking: </span>Gostima je na
          raspolaganju siguran parking.
        </span>
        <span>
          <span className="font-bold text-primary"> Blizina Atrakcija: </span>
           Apartman je udaljen samo nekoliko minuta vožnje od Tornik ski centra,
          šetališta, prodavnica, i restorana.
        </span>
        <span>
          <span className="font-bold text-primary"> Rezervacije:</span>
        </span>
        <span>
          Započnite svoj nezaboravan boravak na Zlatiboru rezervišući naš
          apartman. Bilo da dolazite zbog skijanja, planinarenja ili opuštanja,
          naša udobna oaza pružiće vam sve što vam je potrebno za prijatan i
          nezaboravan boravak na Zlatiboru. Kontaktirajte nas da saznate više o
          cenama i dostupnosti, i pripremite se da se prepustite čarima
          planinskog raja!
        </span>
      </div>
    </div>
  );
};
