import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../public/popcornbag.webp';
import Image from 'next/image';

const Navbar = () => {
    const { pathname } = useRouter();

    return (
        <div className="navbar bg-zinc-900 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-zinc-900 rounded-box w-52">
                        <li><Link href="upcoming">Upcoming</Link></li>
                        <li><Link href="latest">Latest</Link></li>
                        <li><Link href="nowplaying">Now Playing</Link></li>
                        <li><Link href="popular">Popular</Link></li>
                        <li><Link href="toprated">Top Rated</Link></li>
                    </ul>
                </div>
                <Image
                        className="rounded-lg"
                        src={logo}
                        width={35}
                        height={40}
                        alt="Popcorn Bag">
                    </Image>
                <Link href="/" className="normal-case text-2xl ml-4 text-yellow-400 font-bold">
                    Popcorn Flix
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className={pathname === "/upcoming" ? "border-b border-b-yellow-400" : ""} href="upcoming">Upcoming</Link></li>
                    <li><Link className={pathname === "/latest" ? "border-b border-b-yellow-400" : ""} href="latest">Latest</Link></li>
                    <li><Link className={pathname === "/nowplaying" ? "border-b border-b-yellow-400" : ""} href="nowplaying">Now Playing</Link></li>
                    <li><Link className={pathname === "/popular" ? "border-b border-b-yellow-400" : ""} href="popular">Popular</Link></li>
                    <li><Link className={pathname === "/toprated" ? "border-b border-b-yellow-400" : ""} href="toprated">Top Rated</Link></li>
                </ul>
            </div>
            <div className="lg:flex navbar-end">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
            </div>
        </div>
    );
};

export default Navbar;