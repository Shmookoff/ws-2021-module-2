import { BaseApi } from "@/api/BaseApi";
import { AirportApi } from "./AirportApi";
import { FlightApi } from "./FlightApi";
import type { IGetFlight } from "../dto/Flight.dto";
import type { ISearchStore } from "@/stores/search";

export class SearchApi extends BaseApi {
  static async searchAirports(fromQuery: string, toQuery: string) {
    const [airportsFrom, airportsTo] = await Promise.all([
      AirportApi.searchAirports(fromQuery),
      AirportApi.searchAirports(toQuery),
    ]);
    return { airportsFrom, airportsTo };
  }

  static async search(data: ISearchStore) {
    const { airportsFrom, airportsTo } = await this.searchAirports(
      data.flightFrom,
      data.flightTo
    );
    const flightsTo: IGetFlight[] = [];
    const flightsBack: IGetFlight[] = [];

    for (const airportFrom of airportsFrom.data.items) {
      for (const airportTo of airportsTo.data.items) {
        const { data: flights } = await FlightApi.searchFlights(
          airportFrom.iata,
          airportTo.iata,
          data.departing,
          data.returning,
          data.passengers
        );
        flightsTo.push(...flights.flights_to);
        flightsBack.push(...flights.flights_back);
      }
    }
    return { flightsTo, flightsBack };
  }
}
