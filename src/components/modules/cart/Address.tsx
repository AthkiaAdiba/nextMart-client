"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cities } from "@/constants/cities";
import {
  citySelector,
  shippingAddressSelector,
  updateCity,
  updateShippingAddress,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Address() {
  const dispatch = useAppDispatch();
  const city = useAppSelector(citySelector);
  const shippingAddress = useAppSelector(shippingAddressSelector);

  console.log(city, shippingAddress);

  const handleCitySelect = (city: string) => {
    dispatch(updateCity(city));
  };

  const handleShippingAddressSelect = (address: string) => {
    dispatch(updateShippingAddress(address));
  };

  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 p-5 shadow-md">
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-2xl font-bold">Address</h1>
        <p className="text-gray-500">Enter your address.</p>
        <div className="mt-5">
          <Select onValueChange={(city) => handleCitySelect(city)}>
            <SelectTrigger className="mb-5">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Textarea
            onChange={(e) => handleShippingAddressSelect(e.target.value)}
            rows={5}
          />
        </div>
      </div>
    </div>
  );
}
