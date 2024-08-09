import Link from "next/link";

export default function Tag(
    { href, text }: Readonly<{ href: string, text: string }>
) {
    return (
        <Link href={href} className={"mr-3 text-sm font-medium uppercase text-red-500 hover:text-red-600"}>
            {text}
        </Link>
    )
}