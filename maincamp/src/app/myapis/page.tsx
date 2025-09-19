import TravelList from "@/components/myapis-list/travel-list";
import TravelWrite from "@/components/myapis-list/travel-write";
import Button from "@/components/ui/button/Button";

export default function MyapisPage() {
  return (
    <>
      <Button variant="FormBtn" type="button">
        여행등록하기
      </Button>
      <TravelWrite></TravelWrite>
      <TravelList></TravelList>
    </>
  );
}
