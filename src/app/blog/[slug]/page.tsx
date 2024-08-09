import Link from "next/link";
import Tag from "@/components/Tag";

export default function Page() {
    return (
        <div>
            {/*<ScrollTopAndComment />*/}
            <article>
                <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                    <header className="pt-6 xl:pb-6">
                        <div className="space-y-1 text-center">
                            <dl className="space-y-10">
                                <div>
                                    <dt className="sr-only">Published on</dt>
                                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                        {/*<time dateTime={date}>*/}
                                        {/*    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}*/}
                                        {/*</time>*/}
                                    </dd>
                                </div>
                            </dl>
                            <div>
                                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                                    title
                                </h1>
                            </div>
                        </div>
                    </header>
                    <div
                        className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
                        <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
                            <dt className="sr-only">Authors</dt>
                            <dd>
                                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                                    {[].map((author) => (
                                        <li className="flex items-center space-x-2" key={author.name}>
                                            <dl className="whitespace-nowrap text-sm font-medium leading-5">
                                                <dt className="sr-only">Name</dt>
                                                <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                                                <dt className="sr-only">Twitter</dt>
                                                <dd>
                                                    {author.twitter && (
                                                        <Link
                                                            href={author.twitter}
                                                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                                        >
                                                            {author.twitter
                                                                .replace('https://twitter.com/', '@')
                                                                .replace('https://x.com/', '@')}
                                                        </Link>
                                                    )}
                                                </dd>
                                            </dl>
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </dl>
                        <div
                            className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                            <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">content here</div>
                        </div>
                        <footer>
                            <div
                                className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                                <div className="py-4 xl:py-8">
                                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                        Tags
                                    </h2>
                                    <div className="flex flex-wrap">
                                        {['test'].map((tag) => (
                                            <Tag key={tag} href={'/'} text={tag}/>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                                    <div>
                                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                            Previous Article
                                        </h2>
                                        <div
                                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                                            <Link href={`/`}>prev</Link>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                            Next Article
                                        </h2>
                                        <div
                                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                                            <Link href={`/`}>next</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4 xl:pt-8">
                                <Link
                                    href={`/`}
                                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                    aria-label="Back to the blog"
                                >
                                    &larr; Back to the blog
                                </Link>
                            </div>
                        </footer>
                    </div>
                </div>
            </article>
        </div>
    )
}