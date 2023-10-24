'use client';
import React from 'react';
import { motion } from 'framer-motion';
const Divider = () => {
	return (
		<motion.div
			className=" bg-gray-600/20 h-28 w-1 hidden sm:block my-20"
			initial={{ opacity: 0.5, y: -50 }}
			whileInView={{ opacity: 1 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				ease: 'easeInOut',
				delay: 1,
				duration: 2,
				repeat: Infinity,
				repeatDelay: 1,
			}}
		></motion.div>
	);
};

export default Divider;
