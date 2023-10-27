'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
const Projects = () => {
	return (
		<section>
			<h2 className=" text-3xl capitalize font-medium mb-8">My Projects</h2>
			<div>
				{projectsData.map((itm, index) => (
					<React.Fragment key={index}>
						<Project {...itm} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
};

// projectPro m define kr skte h hm
type projectProps = (typeof projectsData)[number];
function Project({ title, description, tags, imageUrl }: projectProps) {
	return (
		<section className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] my-2 sm:my-6 last:mb-0 even:pl-8 hover:bg-gray-200 transition duration-150 ">
			<div className=" h-full py-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col group-even:ml-[18rem]">
				<h3 className=" text-2xl font-semibold">{title}</h3>
				<p className=" mt-2 leading-relaxed text-gray-700">{description}</p>
				<ul className=" flex flex-wrap gap-2 mt-4 sm:mt-auto">
					{tags.map((itm, index) => (
						<li key={index} className=" bg-black/70 px-3 py-1 uppercase text-[0.8rem] tracking-wider text-white rounded-full">
							{itm}
						</li>
					))}
				</ul>
			</div>
			<Image
				src={imageUrl}
				alt="My project"
				quality={90}
				className=" absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:scale-[1.1] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3  group-even:group-hover:rotate-2 transition duration-150  h-full object-cover"
			/>
		</section>
	);
}

export default Projects;
