import { supabase } from "@/commons/libraries/supabase";

export default async function useTravelList() {
  const { data } = await supabase.from("travel-list").select("*");
  console.log(data);

  return {};
}
