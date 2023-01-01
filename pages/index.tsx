import { Inter } from '@next/font/google'
import Head from 'next/head'
import Header from '../components/header'
import Layout from '../components/layout/Layout'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { use } from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  const router = useRouter();
  const { dataUser } = props
  console.log(dataUser)
  return (
		<>
			<Layout pageTitle={"Basic Next | Home"}>
				<h1 className={styles.title}>This is HomePage</h1>
        <Image src={"/vercel.png"} width={200} height={200} alt={'profile'} />
        <ul>
          {dataUser.map((user) => (
            <li onClick={() => router.push(`/about/${user.id}`)  } key={user.id}>{user.name}</li>
          ))}
        </ul>
        
			</Layout>
		</>
	);
}

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const dataUser = await res.json()
  return {
    props: {
      dataUser,
    },
  }
}