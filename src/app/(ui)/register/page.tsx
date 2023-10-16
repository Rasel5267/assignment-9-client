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
import { useCreateCustomerMutation } from "@/redux/api/userApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
	name: z.string(),
	email: z.string(),
	contactNo: z.string(),
	address: z.string(),
	password: z.string(),
});

const Register = () => {
	const router = useRouter();
	const [createCustomer] = useCreateCustomerMutation();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	const onSubmit = async (data: z.infer<typeof FormSchema>) => {
		const transformedData = {
			password: data.password,
			customer: {
				email: data.email,
				name: data.name,
				contactNo: data.contactNo,
				address: data.address,
			},
		};
		try {
			const res = await createCustomer(transformedData).unwrap();
			if (res !== undefined) {
				router.push("/login");
				toast.success("Customer created successfully");
			}
		} catch (error: any) {
			toast.error(error?.data?.errorMessages[0]?.message);
		}
	};

	return (
		<div className="flex items-center justify-center w-full h-screen">
			<div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto py-8 px-4 shadow-md rounded-md">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="w-full"
					>
						<div className="space-y-2">
							<h2 className="text-lg text-center font-bold mb-4">
								Register Now
							</h2>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>User Name</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter Your Name"
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
								name="contactNo"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											User Contact Number
										</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter Your Contact Number"
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
								name="address"
								render={({ field }) => (
									<FormItem>
										<FormLabel>User Address</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter Your Address"
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
							Register
						</Button>
					</form>
					<div className="text-end text-sm">
						<p>
							Already have an account?
							<Link href="/login" className="text-blue-800">
								Login
							</Link>
						</p>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default Register;
