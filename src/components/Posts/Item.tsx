import {format, localeFormat} from "light-date";
import Link from "next/link";
import Tag from "@/components/Tag";
import {getFormattedDate} from "@/utils/date";

export interface PostItem {
    slug: string,
    date: string,
    summary: string,
    title: string,
    tags: Array<string>
}

export default function Item({
    date,
    slug,
    summary,
    title,
    tags = []
}: Readonly<PostItem>) {
    return (
        <li key={slug} className="mb-8">
            <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime={date}>{getFormattedDate(date)}</time>
                        </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                    <Link
                                        href={`/blog/${slug}`}
                                        className="text-gray-900 dark:text-gray-100"
                                    >
                                        {title}
                                    </Link>
                                </h2>
                                <div className="flex flex-wrap">
                                    {tags.map((tag) => (
                                        <Tag key={tag} href={tag} text={tag}/>
                                    ))}
                                </div>
                            </div>
                            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                {summary}
                            </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                            <Link
                                href={`/blog/${slug}`}
                                className="text-primary-500 text-red-500 hover:text-red-600"
                                aria-label={`Read more: "${title}"`}
                            >
                                Read more &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </li>
    )
}