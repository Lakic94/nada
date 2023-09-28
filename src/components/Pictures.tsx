import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Dialog, Transition } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Virtual,
} from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
export const Pictures = (props: { [key: string]: any }) => {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  let [isOpen, setIsOpen] = useState(false);
  const [swiperRef, setSwiperRef] = useState(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleClick(index: number) {
    console.log(swiperRef);
    if (swiperRef) {
      (swiperRef as any).slideTo(index - 1, 0);
    }
  }

  useEffect(() => {
    if (inView) {
      props.setActiveNavItem("Pictures");
    }
  }, [inView]);

  return (
    <div className="mt-10 w-[60%]" ref={ref} id="pictures">
      <h3 className="mb-10 text-primary">Slike</h3>
      <div className="grid grid-cols-3 gap-14">
        {pictures.slice(0, 6).map((pic, i) => (
          <div className="flex  flex-col gap-2" key={pic.name + i}>
            <div
              style={{ position: "relative", height: "20vh" }}
              className="w-full rounded-lg"
            >
              <Image
                src={pic.url}
                alt="4 guests"
                fill
                style={{
                  objectFit: "cover",
                }}
                className="rounded-[1.5rem]"
                onClick={() => {
                  setIsOpen(true);
                  handleClick(i);
                }}
              ></Image>
            </div>
            <span className="text-primary">{pic.name}</span>
          </div>
        ))}
      </div>
      <button
        className="mt-10 text-accent"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Pogledaj Sve Slike
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-black fixed inset-0 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-white h-[1000px] w-3/4 transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all">
                  <Swiper
                    modules={[Navigation, Keyboard, Virtual]}
                    navigation
                    keyboard
                    virtual
                    className="h-full"
                    onSwiper={(swiper: any) => {
                      setSwiperRef(swiper);
                    }}
                  >
                    {pictures.map((pic, i) => {
                      return (
                        <SwiperSlide key={i} virtualIndex={4}>
                          <Image
                            src={pic.url}
                            alt="4 guests"
                            fill
                            style={{
                              objectFit: "cover",
                            }}
                            className="rounded-[1.5rem]"
                          ></Image>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

const pictures = [
  {
    name: "Dnevna Soba",
    url: "/hero.webp",
  },
  {
    name: "Spavaca Soba",
    url: "/bedroom.jpg",
  },
  {
    name: "Trpezarija",
    url: "/kuhinja trpezarija.jpg",
  },
  {
    name: "Trpezarijski Sto",
    url: "/sto trpezarija.jpg",
  },
  {
    name: "Dnevna Soba",
    url: "/table.jpg",
  },
  {
    name: "Dnevna Soba Sto",
    url: "/tv.jpg",
  },
  {
    name: "Hleb",
    url: "/hleb.jpg",
  },
  {
    name: "Hleb",
    url: "/spavaca slike.jpg",
  },
  {
    name: "Hleb",
    url: "/dnevna slika.jpg",
  },
  {
    name: "Hleb",
    url: "/trpezarija ugao.jpg",
  },
  {
    name: "Hleb",
    url: "/kuhinja ugao.jpg",
  },
  {
    name: "Hleb",
    url: "/spavaca cvece.jpg",
  },
  {
    name: "Hleb",
    url: "/dnevna sirok.jpg",
  },
  {
    name: "Hleb",
    url: "/spavaca nocni.jpg",
  },
  {
    name: "Hleb",
    url: "/kuhinja sirok.jpg",
  },
  {
    name: "Hleb",
    url: "/komoda.jpg",
  },
  {
    name: "Spa Spolja",
    url: "/spa spolja.jpg",
  },
  {
    name: "Bazen",
    url: "/bazen.jpg",
  },
  {
    name: "Spa",
    url: "/spa.jpg",
  },
  {
    name: "Sauna",
    url: "/sauna.jpg",
  },
  {
    name: "Spa Spolja Sneg",
    url: "/spa spolja sneg.jpg",
  },
  {
    name: "Spa Spolja Sneg",
    url: "/spa ugao.jpg",
  },
  {
    name: "Spa Spolja Sneg",
    url: "/bazen terasa.jpg",
  },
  {
    name: "Spa Spolja Sneg",
    url: "/lezaljka.jpg",
  },
  {
    name: "Spa Spolja Sneg",
    url: "/bazen ugao.jpg",
  },
  {
    name: "Spa Spolja Sneg",
    url: "/bazen prozor.jpg",
  },
];
