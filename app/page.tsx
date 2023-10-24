import Header from '@/components/Header';
import Intro from './Intro';
import Divider from '@/components/Divider';
export default function Home() {
	return (
		<main className=" flex items-center justify-center flex-col px-4">
			<Intro />
			<Divider />
		</main>
	);
}
