"use client";

import { withAuth } from "@/commons/hocs/withAuth";
import { FETCH_USER_LOGGED_IN } from "@/graphql/queries/login";
import { useQuery } from "@apollo/client";

export default withAuth(function MyPagePage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return <h1>마이페이지 입니다... 구현 예정 ... </h1>;
});
