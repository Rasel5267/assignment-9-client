"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { isLoggedIn, storeUserInfo } from "@/services/auth.service";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const FormSchema = z.object({
	email: z.string(),
	password: z.string(),
});

const Login = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});
	const router = useRouter();

	const [userLogin] = useUserLoginMutation();

	useEffect(() => {
		const isLogged = isLoggedIn();
		if (isLogged) {
			return router.push("/");
		}
	});

	const onSubmit = async (data: z.infer<typeof FormSchema>) => {
		try {
			const res = await userLogin(data).unwrap();
			if (res.accessToken) {
				router.push("/");
				storeUserInfo({ accessToken: res.accessToken });
				toast.success("User logged in successfully");
			}
		} catch (error: any) {
			toast.error(error?.data?.errorMessages[0]?.message);
		}
	};

	return (
		<div className="flex items-center justify-center w-full h-screen">
			<div className="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[35%] mx-auto py-8 px-6 shadow-md rounded-md">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="w-full"
					>
						<div className="space-y-2">
							<h2 className="text-lg text-center font-bold mb-4">
								Login Now
							</h2>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>User Email</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter Your Email"
												value={field.value}
												onChange={field.onChange}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>User Password</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="Enter Your Password"
												value={field.value}
												onChange={field.onChange}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<Button type="submit" className="mt-4">
							Login
						</Button>
					</form>
					<div className="text-end text-sm mt-3">
						<p>
							Don&apos;t have an account?{" "}
							<Link href="/register" className="text-blue-800">
								Register
							</Link>
						</p>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default Login;
