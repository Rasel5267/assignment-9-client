"use client";

import { useFormContext, Controller } from "react-hook-form";
import { getErrorMessageByPropertyName } from "../../utils/schema-validator";
interface IInput {
	name: string;
	type?: string;
	value?: string | string[] | undefined;
	placeholder?: string;
	label?: string;
}

const FormInput = ({ name, type, value, placeholder, label }: IInput) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	const errorMessage = getErrorMessageByPropertyName(errors, name);

	return (
		<>
			{label ? label : null}
			<Controller
				control={control}
				name={name}
				render={({ field }) =>
					type === "password" ? (
						<input
							type={type}
							placeholder={placeholder}
							{...field}
							value={value ? value : field.value}
						/>
					) : (
						<input
							type={type}
							placeholder={placeholder}
							{...field}
							value={value ? value : field.value}
						/>
					)
				}
			/>
			<small style={{ color: "red" }}>{errorMessage}</small>
		</>
	);
};

export default FormInput;
