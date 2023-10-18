import { IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const TOUR_PACKAGE_URL = "/tour-packages";

export const tourPackageApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		tourPackages: build.query({
			query: (arg: Record<string, any>) => ({
				url: `${TOUR_PACKAGE_URL}`,
				method: "GET",
				params: arg,
			}),
			transformResponse: (response: any, meta: IMeta) => {
				return {
					tourPackages: response,
					meta,
				};
			},
			providesTags: [tagTypes.tour],
		}),
		tourPackage: build.query({
			query: (id) => ({
				url: `${TOUR_PACKAGE_URL}/${id}`,
				method: "GET",
			}),
			providesTags: [tagTypes.tour],
		}),
	}),
});

export const { useTourPackagesQuery, useTourPackageQuery } = tourPackageApi;
