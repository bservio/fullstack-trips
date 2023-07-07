"use client"

import React, { useState } from 'react'
import Image from "next/image"
import { signIn, signOut, useSession } from 'next-auth/react'
import { TfiMenu } from "react-icons/tfi"

const Header = () => {
	const [ menuIsOpen, setMenuIsOpen ] = React.useState(false);

	const { status, data } = useSession();

	const handleMenuClick = () => {
		setMenuIsOpen(!menuIsOpen);
	};


	const handleLoginInClick = () => signIn();

	const handleLogoutClick = () => {
		setMenuIsOpen(false);
		signOut();
	};

	return (
		<div className="container mx-auto p-5 flex justify-between">
			<div className="relative h-[32px] w-[182px]">
				<Image src="/logo.png" alt='FullStackWeek Logo' fill />
			</div>
			
			{
				status === "unauthenticated" && (
					<button
						className="text-primary text-sm font-semibold"
						onClick={handleLoginInClick}>
						Login
					</button>
				)
			}

			{status === "authenticated" && data.user && (
				<div className="flex items-center gap-3 border border-solid border-bgray rounded-full p-2 cursor-pointer relative">
					<TfiMenu size={16} onClick={handleMenuClick} />
					<Image 
						height={30} 
						width={30} 
						className='rounded-full'
						alt={data.user.name!} 
						src={data.user.image!} />

						{
							menuIsOpen && (
								<div className="absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
								<button className="text-primary text-sm font-semibold" onClick={handleLogoutClick}>
									Logout 
								</button>
								</div>
							)
						}
				</div>
			)}

		</div>
	)
}

export default Header