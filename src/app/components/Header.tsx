"use client"

import React from 'react'
import Image from "next/image"
import { signIn, signOut, useSession } from 'next-auth/react'
import { TfiMenu } from "react-icons/tfi"

const Header = () => {
	const { status, data } = useSession();
	const handleLoginInClick = () => signIn();

	return (
		<div className="container mx-auto p-5 flex justify-between">
			<Image src="/logo.png" alt='FullStackWeek Logo' width={183} height={32} />
			
			{
				status === "unauthenticated" && (
					<button
						className="text-primary text-sm font-semibold"
						onClick={handleLoginInClick}>
						Login
					</button>
				)
			}

			{status === "authenticated" && (
				<div className="flex items-center gap-2">
					<p>oi, {data.user?.name}</p>
					<button
						className="text-primary text-sm font-semibold"
						onClick={e => {
							e.preventDefault()
							signOut()

						}}>
						logout
					</button>
				</div>
			)}

		</div>
	)
}

export default Header