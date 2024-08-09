import List from "@/components/Posts/List";
import {PostItem} from "@/components/Posts/Item";

export default function Home() {
    const posts: PostItem[] = [
        {
            slug: '/test',
            title: "Blog title",
            summary: 'Blog summary',
            date: new Date().toDateString(),
            tags: []
        }
    ];

    const MAX_DISPLAY = 100;

    return (
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Latest
                </h1>
                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                    description
                </p>
            </div>
            <List posts={posts}/>
        </div>
    );
}
