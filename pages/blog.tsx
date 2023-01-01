import React from 'react'
import Layout from '../components/layout/Layout'
import Image from 'next/image'

export const Blog = (props): JSX.Element => {
	const { dataPhoto } = props
	return (
		<>
			<Layout pageTitle={"Basic Next | Blog"}>
				<h1 className="title">This is blog</h1>
				<div key={dataPhoto.id}>
					<p>{dataPhoto.title}</p>
				</div>
			</Layout>
		</>
	);
}

export async function getServerSideProps() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/photos/2`);
	const dataPhoto = await res.json()
	return {
		props: {
			dataPhoto,
		},
	}
}

export default Blog
