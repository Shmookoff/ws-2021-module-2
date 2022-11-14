import type { IApiResponse } from "@/api/dto/ApiResponse";
import type { IGetFlight } from "@/views/Search/dto/Flight.dto";

export interface IBookingFlightRequest {
  id: number;
  date: string;
}

export interface ICreateBookingPassengerRequest {
  first_name: string;
  last_name: string;
  birth_date: string;
  document_number: string;
}

export interface ICreateBookingRequest {
  flight_from: IBookingFlightRequest;
  flight_back?: IBookingFlightRequest;
  passengers: ICreateBookingPassengerRequest[];
}

export interface ICreateBooking {
  code: string;
}

export interface ICreateBookingResponse extends IApiResponse<ICreateBooking> {}

export interface IReadBookingPassenger extends ICreateBookingPassengerRequest {
  id: number;
  place_from: string | null;
  place_back: string | null;
}

export interface IReadBooking {
  code: string;
  cost: number;
  flights: IGetFlight[];
  passengers: IReadBookingPassenger[];
}

export interface IReadBookingResponse extends IApiResponse<IReadBooking> {}
