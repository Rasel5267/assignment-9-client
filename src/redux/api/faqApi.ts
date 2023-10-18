import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const FAQ_URL = "/faqs";

export const faqApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		faqs: build.query({
			query: (arg: Record<string, any>) => ({
				url: `${FAQ_URL}`,
				method: "GET",
				params: arg,
			}),
			providesTags: [tagTypes.faq],
		}),
		faq: build.query({
			query: (id) => ({
				url: `${FAQ_URL}/${id}`,
				method: "GET",
			}),
			providesTags: [tagTypes.faq],
		}),
	}),
});

export const { useFaqQuery, useFaqsQuery } = faqApi;
