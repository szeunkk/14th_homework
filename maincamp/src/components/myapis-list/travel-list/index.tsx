"use client";

import { supabase } from "@/commons/libraries/supabase";
import Button from "@/components/ui/button/Button";

export default async function TravelList() {
  const { data } = await supabase.from("travel-list").select("*");

  return (
    <>
      {data?.map((el, index) => {
        return (
          <div style={{ border: "gray" }}>
            <div>{el.destination}</div>
            <div>{el.title}</div>
            <div>{el.startDate}</div>
            <div>{el.endDate}</div>
          </div>
        );
      })}
    </>
  );
}
