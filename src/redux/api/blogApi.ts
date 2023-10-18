import { IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BLOG_URL = "/blogs";

export const blogApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		blogs: build.query({
			query: (arg: Record<string, any>) => ({
				url: `${BLOG_URL}`,
				method: "GET",
				params: arg,
			}),
			transformResponse: (response: any, meta: IMeta) => {
				return {
					blogs: response,
					meta,
				};
			},
			providesTags: [tagTypes.blog],
		}),
		blog: build.query({
			query: (id) => ({
				url: `${BLOG_URL}/${id}`,
				method: "GET",
			}),
			providesTags: [tagTypes.blog],
		}),
	}),
});

export const { useBlogQuery, useBlogsQuery } = blogApi;
