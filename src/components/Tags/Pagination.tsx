'use client';

import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Pagination({
   currentPage,
   totalPages
}: Readonly<{ currentPage: number, totalPages: number }>) {
    const { pathname } = useRouter()
    const prevPage = currentPage - 1 > 0
    const nextPage = currentPage + 1 <= totalPages

    return (
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <nav className="flex justify-between">
                {!prevPage && (
                    <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
                        Previous
                    </button>
                )}
                {prevPage && (
                    <Link
                        href={`/prev`}
                        rel="prev"
                    >
                        Previous
                    </Link>
                )}
                <span>
  {currentPage} of {totalPages}
</span>
                {!nextPage && (
                    <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
                        Next
                    </button>
                )}
                {nextPage && (
                    <Link href={`/next`} rel="next">
                        Next
                    </Link>
                )}
            </nav>
        </div>
    )
}