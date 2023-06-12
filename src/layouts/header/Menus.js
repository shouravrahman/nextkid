import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
	<Fragment>
		<li>
			<Link href='/'>Home</Link>
		</li>
	</Fragment>
);
export const Pages = () => (
	<Fragment>
		<li>
			<Link href='/calendar'>Academic Calendar</Link>
		</li>
		<li>
			<Link href='/testimonials'>testimonials</Link>
		</li>
		<li>
			<Link href='/time-table'>Time Table</Link>
		</li>
		<li>
			<Link href='/gallery'>gallery</Link>
		</li>
		<li>
			<Link href='/pricing'>pricing</Link>
		</li>
		<li>
			<Link href='/faq'>Faq</Link>
		</li>
	</Fragment>
);
export const Teacher = () => (
	<Fragment>
		<li>
			<Link href='/teachers'>Teacher</Link>
		</li>
	</Fragment>
);
export const Classes = () => (
	<Fragment>
		<li>
			<Link href='/classes'>Classes</Link>
		</li>
	</Fragment>
);
export const Event = () => (
	<Fragment>
		<li>
			<Link href='/events'>Event</Link>
		</li>
	</Fragment>
);
export const Program = () => (
	<Fragment>
		<li>
			<Link href='/program'>Program</Link>
		</li>
	</Fragment>
);

export const About = () => <Link href='/about'>About</Link>;
export const Contact = () => <Link href='/contact'>CONTACTS</Link>;
