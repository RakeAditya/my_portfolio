import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import aiAppPage from '@/public/aiAppPage.png';
import foodPage from '@/public/foodPage.png';
import bankPage from '@/public/bankPage.png';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Journey',
		hash: '#journey',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

export const journeyData = [
	{
		title: 'Unreal Game developer',
		location: 'Gorakhpr, UP, India',
		description:
			'I started learning game development and created simplistic shooter and navigation games and immersed my self in graphic designing tools for freelancing',
		icon: React.createElement(LuGraduationCap),
		date: '2015-2019',
	},
	{
		title: 'Web Developer',
		location: 'Ghaziabad , UP',
		description: 'I started my web development journey by learning HTML,CSS and Javascript',
		icon: React.createElement(CgWorkAlt),
		date: '2020 - 2022',
	},
	{
		title: 'Front-End developer',
		location: 'Ghaziabad, UP',
		description: 'I then upgraded my skills and started building projects on React Js and applied for online remote internships',
		icon: React.createElement(FaReact),
		date: '2022-2023',
	},

	{
		title: 'Full-stack Developer',
		location: 'Ghaziabad, UP',
		description: 'I am now a full-stack web developer and started freelancig last month',
		icon: React.createElement(FaReact),
		date: '2023 - present',
	},
] as const;

export const projectsData = [
	{
		title: 'Ai Image Generator',
		description: 'I worked as a full-stack developer on this project in which I build an AI generator web app using Dall E API',
		tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Cloudinary'],
		imageUrl: aiAppPage,
	},
	{
		title: 'Restaurent App Design',
		description: 'I created a restaurant app landing page design I got from onlne resoureces and converted it into a React app with core css',
		tags: ['React', 'Advance Css'],
		imageUrl: foodPage,
	},
	{
		title: 'Bank landing page design',
		description: 'I created a banking system and app landing page design I got from onlne resoureces ',
		tags: ['React', 'Tailwind'],
		imageUrl: bankPage,
	},
] as const;

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Node.js',
	'Git',
	'Tailwind',
	'MongoDB',
	'Redux',
	'Express',
	'SQL',
	'Material Ui',
	'C++',
	'Unreal Engine',
] as const;
