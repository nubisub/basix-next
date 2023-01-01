import Link from 'next/link';
import React from 'react'

const header = () => {
  return (
		<>
			<header>
				<ol>
					<li>
						<Link href={"/"}>Home</Link>
					</li>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<Link href={"/about"}>About</Link>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/about/user">User</a>
					</li>
					<li>
						<Link href={"/blog"}>blog</Link>
					</li>
				</ol>
			</header>
		</>
	);
}

export default header