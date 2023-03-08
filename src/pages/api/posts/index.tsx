import { POSTS } from "@/data/posts";
import TPost from "@/types/TPost";
import { NextApiResponse } from "next/dist/shared/lib/utils";
import { NextApiRequest } from "next/types";

export default function handler(_: NextApiRequest, res: NextApiResponse<TPost[]>) {
	return res.status(200).json(POSTS)
}
