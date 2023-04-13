import Image from "next/image";
import logo from '../public/popcornbag.webp';
import Link from "next/link";

const Navbar = ({ children }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar absolute bg-zinc-900 z-50">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="pl-6">
                        <Image
                            className="rounded-lg"
                            src={logo}
                            width={35}
                            height={40}
                            alt="Popcorn Bag">
                        </Image>
                        <h1 className="normal-case text-2xl ml-4 pt-2 text-yellow-400 font-bold">
                            Bring Popcorn
                        </h1>
                    </div>
                    <div className="flex-none hidden lg:block lg:absolute right-10">
                        <ul className="menu menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}
                            <li><Link href="/trending">Trending</Link></li>
                            <li><Link href="/popular">Popular</Link></li>
                            <li><Link href="/toprated">Top Rated</Link></li>
                            <li><Link href="/upcoming">Upcoming</Link></li>
                            <li tabIndex={0}>
                                <a>
                                    Genres
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2  bg-zinc-900 z-50">
                                <li><Link href="/genre/action?id=28">Action</Link></li>
                                    <li><Link href="/genre/adventure?id=12">Adventure</Link></li>
                                    <li><Link href="/genre/animation?id=16">Animation</Link></li>
                                    <li><Link href="/genre/comedy?id=35">Comedy</Link></li>
                                    <li><Link href="/genre/crime?id=80">Crime</Link></li>
                                    <li><Link href="/genre/documentary?id=99">Documentary</Link></li>
                                    <li><Link href="/genre/drama?id=18">Drama</Link></li>
                                    <li><Link href="/genre/family?id=10751">Family</Link></li>
                                    <li><Link href="/genre/fantasy?id=14">Fantasy</Link></li>
                                    <li><Link href="/genre/history?id=36">History</Link></li>
                                    <li><Link href="/genre/horror?id=27">Horror</Link></li>
                                    <li><Link href="/genre/music?id=10402">Music</Link></li>
                                    <li><Link href="/genre/mystery?id=9648">Mystery</Link></li>
                                    <li><Link href="/genre/romance?id=10749">Romance</Link></li>
                                    <li><Link href="/genre/sciencefiction?id=878">Science Fiction</Link></li>
                                    <li><Link href="/genre/thriller?id=53">Thriller</Link></li>
                                    <li><Link href="/genre/war?id=10752">War</Link></li>
                                    <li><Link href="/genre/western?id=37">Western</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-52 bg-zinc-900">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link href="/trending">Trending</Link></li>
                            <li><Link href="/popular">Popular</Link></li>
                            <li><Link href="/toprated">Top Rated</Link></li>
                            <li><Link href="/upcoming">Upcoming</Link></li>
                            <li tabIndex={0}>
                                <a>
                                    Genres
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="absolute left-0 top-12 text-xs w-full bg-zinc-900 z-50">
                                    <li><Link href="/genre/action">Action</Link></li>
                                    <li><Link href="/genre/adventure">Adventure</Link></li>
                                    <li><Link href="/genre/animation">Animation</Link></li>
                                    <li><Link href="/genre/comedy">Comedy</Link></li>
                                    <li><Link href="/genre/crime">Crime</Link></li>
                                    <li><Link href="/genre/documentary">Documentary</Link></li>
                                    <li><Link href="/genre/drama">Drama</Link></li>
                                    <li><Link href="/genre/family">Family</Link></li>
                                    <li><Link href="/genre/fantasy">Fantasy</Link></li>
                                    <li><Link href="/genre/history">History</Link></li>
                                    <li><Link href="/genre/horror">Horror</Link></li>
                                    <li><Link href="/genre/music">Music</Link></li>
                                    <li><Link href="/genre/mystery">Mystery</Link></li>
                                    <li><Link href="/genre/romance">Romance</Link></li>
                                    <li><Link href="/genre/sciencefiction">Science Fiction</Link></li>
                                    <li><Link href="/genre/thriller">Thriller</Link></li>
                                    <li><Link href="/genre/war">War</Link></li>
                                    <li><Link href="/genre/western">Western</Link></li>
                                </ul>
                            </li>

                </ul>

            </div>
        </div>
    )
}

export default Navbar;