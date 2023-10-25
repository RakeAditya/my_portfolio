import Header from '@/components/Header';
import Intro from './Intro';
import Divider from '@/components/Divider';
import Abut from '@/components/Abut';
export default function Home() {
	return (
		<main className=" flex items-center justify-center flex-col px-4">
			<Intro />
			<Divider />
			<Abut />
		</main>
	);
}
