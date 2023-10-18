import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const REVIEW_URL = "/reviews";

export const reviewApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		reviews: build.query({
			query: (arg: Record<string, any>) => ({
				url: `${REVIEW_URL}`,
				method: "GET",
				params: arg,
			}),
			providesTags: [tagTypes.review],
		}),
		review: build.query({
			query: (id) => ({
				url: `${REVIEW_URL}/${id}`,
				method: "GET",
			}),
			providesTags: [tagTypes.review],
		}),
	}),
});

export const { useReviewQuery, useReviewsQuery } = reviewApi;
