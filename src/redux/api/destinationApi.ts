import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DESTINATION_URL = "/destinations";

export const destinationApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		destinations: build.query({
			query: (arg: Record<string, any>) => ({
				url: `${DESTINATION_URL}`,
				method: "GET",
				params: arg,
			}),
			providesTags: [tagTypes.destination],
		}),
		destination: build.query({
			query: (id) => ({
				url: `${DESTINATION_URL}/${id}`,
				method: "GET",
			}),
			providesTags: [tagTypes.destination],
		}),
	}),
});

export const { useDestinationsQuery, useDestinationQuery } = destinationApi;
