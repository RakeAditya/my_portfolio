'use client';
import React from 'react';
import { motion } from 'framer-motion';
const Abut = () => {
	return (
		<motion.section
			className=" mb-28 sm:mb-40 max-w-[45rem] text-center leading-8"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.18 }}
		>
			<h2 className=" text-3xl capitalize font-medium mb-8">About Me</h2>
			<p className="mb-3">
				Currently I am persuing engineering <span className="font-medium">B.Tech</span> in{' '}
				<span className="font-medium">Computer Science & Engineering</span>.I have a passion in game development and in my second year I started web
				development as side skill but now I have fully immersed my self in <span className="font-medium">full-stack web development</span>.{' '}
				<span className="italic">My favorite part of programming</span> is the problem-solving aspect. I <span className="underline">love</span> the
				feeling of finally figuring out a solution to a problem. My core stack is{' '}
				<span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. I am also familiar with TypeScript and GraphQl. I am always looking
				to learn new technologies. I am currently looking for a <span className="font-medium">full-time position</span> as a software developer.
			</p>

			<p className="">
				<span className="italic">When I'm not coding</span>, I enjoy calisthenics, reading books and some loud music. I also enjoy{' '}
				<span className="font-medium">watching animes and movies too.</span>
			</p>
		</motion.section>
	);
};

export default Abut;
