import TPost from "@/types/TPost"
import {POSTS} from "@/data/posts"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import styles from './Posts.module.css'
import Link from "next/link"

export default function Posts({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
	return <div className={styles.grid}>
		{posts.map(({id, content, description, headline}) =>
			<Link href={`/posts/${id}`} key={`post-${id}`}>
				<h2>{headline}</h2>
				<p>{description}</p>
				<p>{content}</p>
			</Link>
		)}
	</div>
}

export const getStaticProps: GetStaticProps<{posts: TPost[]}> = async () => {
	return await Promise.resolve({props: {posts: POSTS}})
}
