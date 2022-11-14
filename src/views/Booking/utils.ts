import type { IPassenger } from "@/components/Booking/Passenger.vue";
import type { ISearchResult } from "@/components/Search/SearchResult.vue";
import type { IGetFlight } from "../Search/dto/Flight.dto";
import type {
  IBookingFlightRequest,
  ICreateBookingPassengerRequest,
  IReadBooking,
  IReadBookingPassenger,
} from "./dto/Booking.dto";
import type { IBookingPassenger } from "@/components/Booking/BookingPassenger.vue";

export const preparePassenger = (
  passenger: IPassenger
): ICreateBookingPassengerRequest => {
  return {
    first_name: passenger.firstName,
    last_name: passenger.lastName,
    birth_date: passenger.dateOfBirth,
    document_number: passenger.documentNumber,
  };
};

export const prepareFlight = (flight: ISearchResult): IBookingFlightRequest => {
  return {
    id: flight.id,
    date: flight.departure.toISOString().slice(0, 10),
  };
};

export const flightToSearchResult = (flight: IGetFlight): ISearchResult => {
  return {
    id: flight.flight_id,
    flight: flight.flight_code,
    aircraft: flight.flight_code,
    departure: new Date(flight.date + " " + flight.from.time),
    arrival: new Date(flight.date + " " + flight.to.time),
    cost: flight.cost,
  };
};

export const bookingPassengerToBookingPassengerProps = (
  passenger: IReadBookingPassenger,
  destination: "from" | "back"
): IBookingPassenger => {
  return {
    id: passenger.id,
    firstName: passenger.first_name,
    lastName: passenger.last_name,
    dateOfBirth: passenger.birth_date,
    documentNumber: passenger.document_number,
    seat: destination === "from" ? passenger.place_from : passenger.place_back,
  };
};
