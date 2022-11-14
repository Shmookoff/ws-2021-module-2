import type { ISearchResult } from "@/components/Search/SearchResult.vue";
import type { ISearchStore } from "@/stores/search";
import { SearchApi } from "./api/SearchApi";
import type { IGetFlight } from "./dto/Flight.dto";

const prepareSearchResult = (
  flight: IGetFlight,
  searchQuery: ISearchStore,
  isReturn: boolean = false
): ISearchResult => {
  const departureDate = flight.from.date
      ? flight.from.date
      : isReturn
      ? searchQuery.returning
      : searchQuery.departing,
    arrivalDate = flight.to.date ? flight.to.date : searchQuery.departing;

  const departureDateTime = new Date(departureDate + " " + flight.from.time),
    arrivalDateTime = new Date(arrivalDate + " " + flight.to.time);
  return {
    id: flight.flight_id,
    flight: flight.flight_code,
    aircraft: flight.flight_code,
    departure: departureDateTime,
    arrival: arrivalDateTime,
    cost: flight.cost * searchQuery.passengers,
  };
};

export async function getSearchResults(searchQuery: ISearchStore) {
  const { flightsTo, flightsBack } = await SearchApi.search(searchQuery);

  const to = flightsTo.map((flight) =>
    prepareSearchResult(flight, searchQuery)
  );
  const back = flightsBack.map((flight) =>
    prepareSearchResult(flight, searchQuery, true)
  );

  console.log({ to, back });

  return { to, back };
}
