import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';

import { Course as CourseType, Response } from '@/types';
import { Course } from '@/components/Course';

const CoursesWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-wrap: wrap;
	gap: 2vw;
	margin: 2vh 1vw;
`;

type CoursesResponse = Response<CourseType[]>;

export const getStaticProps: GetStaticProps = async () => {
	const api_url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

	const responce = await fetch(`${api_url}/courses?populate=*`, {
		method: 'GET',
	});

	const { data: courses, meta, error }: CoursesResponse = await responce.json();

	const status = error?.status;

	if (status && (status < 200 || status >= 300)) {
		return {
			props: {
				courses: [],
				meta: {},
			},
		};
	}

	return {
		props: {
			courses,
			meta,
		},
	};
};

const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;

const Home: NextPage<{
	courses: CourseType[];
}> = ({ courses }) => (
	<>
		<Head>
			<title>CoursesBox</title>
			<meta name="description" content="IT courses for everyone" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<CoursesWrapper>
			{courses.map(
				({
					id,
					attributes: {
						header,
						subtitle,
						publishedAt,
						cover: {
							data: {
								attributes: {
									formats: {
										thumbnail: { url, width, height },
									},
								},
							},
						},
					},
				}) => (
					<Course
						key={`courseid-${id}`}
						header={header}
						link={`/course/${id}`}
						imageProps={{
							width,
							height,
							alt: `Cover for ${header}`,
							src: `${strapi_url}${url}`,
						}}
					>
						<>
							{subtitle}
							<time dateTime={publishedAt}>
								{new Date(publishedAt).toDateString()}
							</time>
						</>
					</Course>
				)
			)}
		</CoursesWrapper>
	</>
);

// const Home: NextPage<{ courses: CourseType[] }> = ({ courses }) => (
// 	<>
// 		<Head>
// 			<title>Coursesbox</title>
// 			<meta name="description" content="Test app" />
// 			<link rel="icon" href="/favicon.ico" />
// 		</Head>
// 		<CoursesWrapper>
// 			{courses.map(course => (
// 				<Course
// 					key={Math.random()}
// 					header={'header'}
// 					link="some-page"
// 					imageProps={{
// 						width: 1368,
// 						height: 770,
// 						alt: 'Logo',
// 						src: '/hands-on_reactjs_cover.png',
// 					}}
// 				>
// 					<>
// 						Lorem ipsum dolor sit amet. Eum quaerat odio cum soluta quas aut
// 						sunt repellat et aliquid laboriosam. Aut corrupti excepturi est
// 						consequatur nostrum aut quos facere. Sit nobis voluptatum non veniam
// 						fuga est ducimus mollitia vel perspiciatis mollitia aut commodi
// 						praesentium vel officiis repellendus.
// 						<ul>
// 							<li>Point 1</li>
// 							<li>Point 2</li>
// 							<li>Point 3</li>
// 						</ul>
// 					</>
// 				</Course>
// 			))}
// 		</CoursesWrapper>
// 	</>
// );

export default Home;
