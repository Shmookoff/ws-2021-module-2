import type { IApiResponse } from "@/api/dto/ApiResponse";

export interface IGetFlightAirport {
  city: string;
  airport: string;
  iata: string;
  date: string | null;
  time: string;
}

export interface IGetFlight {
  flight_id: number;
  flight_code: string;
  from: IGetFlightAirport;
  to: IGetFlightAirport;
  cost: number;
  avaliability: number;
  date: string;
}

export interface IFlightSearch {
  flights_to: IGetFlight[];
  flights_back: IGetFlight[];
}

export interface IFlightSearchResponse extends IApiResponse<IFlightSearch> {}
