
import Link from "next/link";

const ShareLink = ({ platform, link, isShareURL = false }: { platform: string; link: string; isShareURL?: boolean; }) => {

    return <Link href={link}}>
        <div className={`${isShareURL ? "py-2 px-3 bg-neutral-200 rounded-md text-neutral-600 hover:bg-neutral-600 hover:text-neutral-100 duration-10 ease-in-out transition-colors"
            : ""}`}>{getIcon(platform)}</div>
</Link >;
}


export default ShareLink;
