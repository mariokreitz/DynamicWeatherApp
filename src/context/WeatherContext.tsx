import { createContext, useState, ReactNode } from "react";

type WeatherContextType = {
  city: string;
  setCity: (city: string) => void;
};

export const WeatherContext = createContext<WeatherContextType | null>(null);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCity] = useState("");

  return <WeatherContext.Provider value={{ city, setCity }}>{children}</WeatherContext.Provider>;
};
