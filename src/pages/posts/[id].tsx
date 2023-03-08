import { POSTS } from "@/data/posts";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

export default function Post({post}: InferGetStaticPropsType<typeof getStaticProps>) {
	return <div>
		<h1>
			{post.headline}
		</h1>
	</div>
}

export const getStaticProps: GetStaticProps = async ({params}) => {
	const postId = params?.id

	return await Promise.resolve({props: {post: POSTS.find(({id}) => id.toString() === postId)}})
}

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: POSTS.map(({id}) => ({params: {id: id.toString()}})),
		fallback: false
	}
}
