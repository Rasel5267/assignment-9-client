import type { MenuProps } from "antd";
import { ProfileOutlined, TableOutlined } from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
export const sidebarItems = (role: string) => {
	const defaultSidebarItems: MenuProps["items"] = [
		{
			label: "Profile",
			key: "profile",
			icon: <ProfileOutlined />,
			children: [
				{
					label: <Link href={`/${role}`}>Account Profile</Link>,
					key: `/${role}/profile`,
				},
				{
					label: (
						<Link href={`/${role}/change-password`}>
							Change Password
						</Link>
					),
					key: `/${role}/change-password`,
				},
			],
		},
	];

	const adminSidebarItems: MenuProps["items"] = [
		...defaultSidebarItems,
		{
			label: <Link href={`/${role}/user`}>Manage Users</Link>,
			icon: <TableOutlined />,
			key: `/${role}/user`,
		},
		{
			label: (
				<Link href={`/${role}/tour-package`}>Manage Tour Packages</Link>
			),
			icon: <TableOutlined />,
			key: `/${role}/tour-package`,
		},
		{
			label: <Link href={`/${role}/order`}>Manage Order</Link>,
			icon: <TableOutlined />,
			key: `/${role}/order`,
		},
	];

	const superAdminSidebarItems: MenuProps["items"] = [
		...defaultSidebarItems,
		{
			label: <Link href={`/${role}/admin`}>Manage Admins</Link>,
			icon: <TableOutlined />,
			key: `/${role}/admin`,
		},
		{
			label: (
				<Link href={`/${role}/manage-admin-role`}>
					Manage Admin Role
				</Link>
			),
			icon: <TableOutlined />,
			key: `/${role}/manage-admin-role`,
		},
	];

	const customerSidebarItems: MenuProps["items"] = [
		...defaultSidebarItems,
		{
			label: <Link href={`/${role}/orders`}>Orders</Link>,
			icon: <TableOutlined />,
			key: `/${role}/orders`,
		},
	];

	if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
	else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
	else if (role === USER_ROLE.STUDENT) return customerSidebarItems;
	else {
		return defaultSidebarItems;
	}
};
