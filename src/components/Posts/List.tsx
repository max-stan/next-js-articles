import Item, {PostItem} from "@/components/Posts/Item";

export default function List({
    posts
}: Readonly<{ posts: PostItem[] }>) {
    const items = posts.map(item => <Item key={item.slug} {...item} />);

    return (
        <ul className="divide-y border-t-2 border-slate-700 pt-8 divide-gray-200 dark:divide-gray-700">
            {items || 'No posts found'}
        </ul>
    )
}