import type { IApiResponse } from "@/api/dto/ApiResponse";

export interface IAirport {
  name: string;
  iata: string;
}

export interface IAirportSearch {
  items: IAirport[];
}

export interface IAirportResponse extends IApiResponse<IAirportSearch> {}
