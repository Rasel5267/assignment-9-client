import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const USER_URL = "/users";

export const userApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		createCustomer: build.mutation({
			query: (payload) => ({
				url: `${USER_URL}/create-customer`,
				method: "POST",
				data: payload,
			}),
			invalidatesTags: [tagTypes.customer],
		}),
	}),
});

export const { useCreateCustomerMutation } = userApi;
