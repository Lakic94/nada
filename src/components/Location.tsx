import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Image from "next/image";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";

export const Location = (props: { [key: string]: any }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD5dcb7T-uNU04Y0mOpjyUJmWoMo4ZXRyg",
  });
  const center = useMemo(
    () => ({ lat: 43.73558548928098, lng: 19.705922845373173 }),
    [],
  );
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      props.setActiveNavItem("Location");
    }
  }, [inView]);

  return (
    <div className="mt-10 flex  w-[60%] flex-col" ref={ref} id="location">
      <h3 className="mb-10 text-primary">Lokacija</h3>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="h-96 rounded-2xl"
          center={center}
          zoom={17}
        >
          <Marker position={center}></Marker>
        </GoogleMap>
      )}
    </div>
  );
};
