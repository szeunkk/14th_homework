"use client";

import _ from "lodash";

export default function useSearchBar({
  endDate,
  startDate,
  search,
  setEndDate,
  setStartDate,
  setSearch,
  refetch,
}) {
  const getDebounce = _.debounce((value) => {
    refetch({
      search: value,
      page: 1,
    });
    setSearch(value);
  }, 500);

  const onChangeSearch = (event) => {
    getDebounce(event.target.value);
  };

  return {
    onChangeSearch,
  };
}
