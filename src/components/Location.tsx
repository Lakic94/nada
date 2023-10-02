import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { env } from "~/env.mjs"; // On client - same import!

export const Location = (props: {
  setActiveNavItem: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
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
    <div className="mt-10 flex xs:p-4 xs:w-full  w-[60%] flex-col" ref={ref} id="location">
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
