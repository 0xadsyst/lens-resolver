import { ConnectButton } from '@rainbow-me/rainbowkit'
import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import LensProfile from 'src/components/LensProfile'
import { useEnsAddress } from 'wagmi'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	const [address, setAddress] = useState('')
	const [ensName, setEnsName] = useState('')

	const {
		data: ensData,
		isError,
		isLoading
	} = useEnsAddress({
		name: ensName
	})

	useEffect(() => {
		if (ensData) {
      console.log(ensData)
			setAddress(ensData)
		}
	}, [ensData])

	return (
		<div className={styles.container}>
			<Head>
				<title>Lens Resolver</title>
				<meta
					name="description"
					content="Generated by @rainbow-me/create-rainbowkit"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Lens ENS Resolver</h1>

				<form>
					<label>
						ENS name: 
						<input
							type="text"
							value={ensName}
							onChange={(e) => setEnsName(e.target.value)}
						/>
					</label>
				</form>
        <p/>
        <form>
					<label>
						Ethereum address:
						<input
							type="text"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</label>
				</form>
        <p/>
				<LensProfile address={address} key={address} />
			</main>
		</div>
	)
}

export default Home
