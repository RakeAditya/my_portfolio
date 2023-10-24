'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
export default function Intro() {
	return (
		<section className=" mb-32 text-center max-w-[50rem] sm:mb-0">
			{/* image div */}
			<div className=" flex items-center justify-center">
				<motion.div
					className="relative"
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ type: 'tween', duration: '0.6' }}
				>
					<Image
						src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
						width={200}
						height={200}
						priority={true}
						quality={90}
						className=" rounded-full h-28 w-28 border-[0.25rem] border-white shadow-xl object-cover"
					/>
					<motion.span
						className="text-4xl absolute bottom-0 right-0"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'spring', delay: 0.7, duration: '0.9', stiffness: 200 }}
					>
						🙋‍♂️
					</motion.span>
				</motion.div>
			</div>
			{/* content  */}
			<div>
				<motion.p
					className=" mb-10 mt-4 px-5 font-medium text-2xl sm:text-4xl !leading-[1.5]"
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0, animationDelay: '1' }}
				>
					<span className="font-bold">Hola, I'm Aditya.</span> I'm an experienced <span className="font-bold">MERN web developer</span> with{' '}
					<span className="font-bold">3 years</span> in Full Stack development. I enjoy building dynamic and responsive
					<span className="italic">websites</span> with precision.
					<br /> My focus is <span className="underline">React (Next.js)</span>.
				</motion.p>
			</div>
			{/* Navigation menu */}
			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
				initial={{ opacity: 0, x: 100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2 }}
			>
				<Link
					href="#contact"
					className=" group px-7 py-3 bg-gray-800 text-white flex items-center gap-3 rounded-full shadow-lg outline-none  focus:scale-110 hover:scale-110 hover:bg-gray-900 active:scale-100 duration-200 "
				>
					Contact Me <BsArrowRight className=" opacity-70 group-hover:translate-x-2 transition-all" />{' '}
				</Link>

				<a
					href="/CV.pdf"
					download={true}
					className="px-7 py-3 bg-white flex items-center gap-3 rounded-full outline-none  focus:scale-110 hover:scale-110  active:scale-100 group border-black/10"
				>
					Download CV <HiDownload className=" opacity-70 group-hover:translate-y-1 duration-300" />{' '}
				</a>
				<div className="flex items-center justify-around gap-4">
					<a
						href="https://www.linkedin.com/in/aditya-srivastava106/"
						target="_blank"
						className="p-4 bg-white flex items-center text-gray-600 gap-3 rounded-full outline-none  focus:scale-110 hover:scale-110  active:scale-100 transition-all border-black/20"
					>
						<BsLinkedin />
					</a>
					<a
						href="https://github.com/RakeAditya"
						target="_blank"
						className="p-4 bg-white flex items-center text-gray-600 gap-3 rounded-full outline-none  focus:scale-110 hover:scale-110  active:scale-100  transition-all border-gray-600/10"
					>
						<BsGithub />
					</a>
				</div>
			</motion.div>
		</section>
	);
}
