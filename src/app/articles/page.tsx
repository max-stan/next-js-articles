import Link from "next/link";
import Tag from "@/components/Tag";
import Pagination from "@/components/Tags/Pagination";

export default function Page() {
    return (
        <>
            <div>
                <div className="pb-6 pt-6">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        title
                    </h1>
                </div>
                <div className="flex sm:space-x-24">
                    <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
                        <div className="px-6 py-4">
                            <Link
                                href={`/blog`}
                                className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                            >
                                All Posts
                            </Link>
                            <ul>
                                <li className="my-3">
                                    <Link
                                        href={`/articles/tags/test`}
                                        className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                                        aria-label={`View posts tagged test`}
                                    >
                                        Tag (3)
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ul>
                                <li className="py-5">
                                    <article className="flex flex-col space-y-2 xl:space-y-0">
                                        <dl>
                                            <dt className="sr-only">Published on</dt>
                                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                                <time dateTime={''} suppressHydrationWarning>
                                                    date
                                                </time>
                                            </dd>
                                        </dl>
                                        <div className="space-y-3">
                                            <div>
                                                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                    <Link href={`/`} className="text-gray-900 dark:text-gray-100">
                                                        title
                                                    </Link>
                                                </h2>
                                                <div className="flex flex-wrap">
                                                    {['test'].map((tag) => <Tag key={tag} text={tag} href={'/'}/>)}
                                                </div>
                                            </div>
                                            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                                summary
                                            </div>
                                        </div>
                                    </article>
                                </li>
                        </ul>
                        <Pagination currentPage={1} totalPages={20} />
                    </div>
                </div>
            </div>
        </>
    )
}