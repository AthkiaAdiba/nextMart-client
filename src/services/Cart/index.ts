/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";

import { IOrder } from "@/types";
import { cookies } from "next/headers";

export const createOrder = async (order: IOrder) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/order`, {
      method: "POST",
      headers: {
        authorization: (await cookies()).get("accessToken")!.value,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const addCoupon = async ({
  shopId,
  subTotal,
  couponCode,
}: {
  shopId: string;
  subTotal: number;
  couponCode: string;
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/coupon/${couponCode}`,
      {
        method: "POST",
        headers: {
          authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderAmount: subTotal, shopId }),
      }
    );

    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};
