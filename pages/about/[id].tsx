import React from "react";
import { useRouter } from "next/router";

interface User {
	name: string;
	email: string;
	phone: string;
	website: string;
}

interface UserDetailProps {
	dataUser: User;
}

export default function(props: 	UserDetailProps){
	const router = useRouter();
	const { dataUser }	 = props;
	return (
		<>
			<h1>Detail User</h1>
			<p>{dataUser.name}</p>
			<p>{dataUser.email}</p>
			<p>{dataUser.phone}</p>
			<p>{dataUser.website}</p>
		</>
	);
};

export async function getStaticPaths() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
	const dataUser = await res.json()
	const paths = dataUser.map((user:any) => ({
		params: { id: user.id.toString()},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context:any) {
	const id = context.params.id;
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const dataUser = await res.json();
	return {
		props: {
			dataUser,
		},
	};
}

