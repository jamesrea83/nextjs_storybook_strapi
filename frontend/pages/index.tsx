import Head from 'next/head';
import styled from '@emotion/styled';

import { Course } from '@/components/Course';

const CoursesWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 2vw;
	margin: 2vh 1vw;
`;

export default function Home() {
	return (
		<>
			<Head>
				<title>Coursesbox</title>
				<meta name="description" content="Test app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<CoursesWrapper>
				{Array(4)
					.fill('')
					.map(() => (
						<Course
							key={Math.random()}
							header="This is a header"
							link="some-page"
							imageProps={{
								width: 1368,
								height: 770,
								alt: 'Logo',
								src: '/hands-on_reactjs_cover.png',
							}}
						>
							<>
								Lorem ipsum dolor sit amet. Eum quaerat odio cum soluta quas aut
								sunt repellat et aliquid laboriosam. Aut corrupti excepturi est
								consequatur nostrum aut quos facere. Sit nobis voluptatum non
								veniam fuga est ducimus mollitia vel perspiciatis mollitia aut
								commodi praesentium vel officiis repellendus.
								<ul>
									<li>Point 1</li>
									<li>Point 2</li>
									<li>Point 3</li>
								</ul>
							</>
						</Course>
					))}
			</CoursesWrapper>
		</>
	);
}
