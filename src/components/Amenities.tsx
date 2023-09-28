import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Amenities = (props: {
  setActiveNavItem: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      props.setActiveNavItem("Amenities");
    }
  }, [inView]);
  return (
    <div className="mt-10 w-[60%]" ref={ref} id="amenities">
      <h3 className="mb-10 text-primary">Pogodnosti</h3>
      <div className="grid grid-cols-3 gap-14">
        {amenities.map((amenitie) => (
          <div className="flex flex-col gap-4" key={amenitie.name}>
            <span className="text-primary">{amenitie.name}</span>
            {amenitie.list.map((item) => (
              <span className="text-black text-xs" key={item}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const amenities = [
  {
    name: "Kupatilo",
    list: ["toalet papir", "peškiri", "tuš", "papuče"],
  },
  {
    name: "Spavaca Soba",
    list: ["posteljina", "garderober", "ekstra dugački kreveti( > 2 metra)"],
  },
  {
    name: "Dnevni boravak",
    list: ["trpezarija", "kauč", "radni sto"],
  },
  {
    name: "Dvoriste",
    list: [
      "piknik prostor",
      "spoljni nameštaj",
      "spoljni prostor za ručavanje",
      "terasa",
      "bašta",
    ],
  },
  {
    name: "Kuhinja",
    list: [
      "sto za ručavanje",
      "sredstva za čišćenje",
      "ploča za kuvanje",
      "posuđe",
      "frižider",
    ],
  },
  {
    name: "Sadržaji u smeštajnoj jedinici",
    list: ["krevet na rasklapanje", "vešalica za odeću"],
  },
  {
    name: "Mediji i tehnologija",
    list: ["Smart TV"],
  },
  { name: "Internet", list: ["Bežični internet dostupan besplatno."] },
  {
    name: "Parking",
    list: [
      "Besplatan javni parking je moguć na licu mesta (nije neophodna rezervacija).",
    ],
  },
  {
    name: "Zabava i porodični sadržaji",
    list: ["igralište na otvorenom"],
  },
  {
    name: "Usluge čišćenja",
    list: ["usluga peglanja (uz doplatu)", "usluga pranja veša (uz doplatu)"],
  },
  {
    name: "Bezbednost i sigurnost",
    list: [
      "video-nadzor ispred objekta",
      "detektor dima",
      "sigurnosni alarm",
      "obezbeđenje koje radi non-stop",
    ],
  },
  {
    name: "Bazen u zatvorenom (uz doplatu)",
    list: [
      "Otvoren tokom cele godine",
      "Pogodan za sve uzraste",
      "grejani bazen",
      "bazen sa barom",
    ],
  },
  {
    name: "Velnes (uz doplatu)",
    list: [
      "svlačionice u fitnes/spa sadržajima",
      "masaža celog tela",
      "masaža ruku",
      "masaža glave",
      "masaža za parove",
      "masaža stopala",
      "spa i velnes paketi",
      "soba za relaksaciju",
      "parno kupatilo",
      "tretmani lica",
      "tretmani ulepšavanja",
    ],
  },
];
