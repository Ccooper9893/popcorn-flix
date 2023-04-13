import Image from "next/image";
import logo from '../public/popcornbag.webp';
import Link from "next/link";

const Navbar = ({ children }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="navbar bg-zinc-900 z-50 lg:justify-between">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="ml-2">
                        <Image
                            className="rounded-lg"
                            src={logo}
                            width={26}
                            height={36}
                            alt="Popcorn Bag">
                        </Image>
                        <h1 className="normal-case lg:text-2xl text-md ml-2 pt-1 text-yellow-400 font-bold">
                            Bring Popcorn
                        </h1>
                    </div>


                    <div className="flex-none hidden lg:block mr-10">
                        <ul className="menu menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}
                            <li><Link href="featured/trending">Trending</Link></li>
                            <li><Link href="featured/popular">Popular</Link></li>
                            <li><Link href="featured/toprated">Top Rated</Link></li>
                            <li><Link href="featured/upcoming">Upcoming</Link></li>
                            <li tabIndex={0}>
                                <a>
                                    Genres
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2 text-xs bg-zinc-900 z-50">
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
                    {/* Search Bar */}
                    <div className="lg:mr-6 flex flex-row justify-end w-full lg:w-auto">
                        <input type="text" placeholder="Search movies" className="input input-bordered input-sm w-3/4 lg:w-full text-black" />
                        <button className="btn btn-ghost btn-circle lg:mx-2 w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>

                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-52 bg-zinc-900">
                    {/* <!-- Sidebar content here --> */}
                    <li tabIndex={0}>
                        <a>
                            Genres
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="text-xs bg-zinc-900 z-50">
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
                    <li><Link href="/featured/trending">Trending</Link></li>
                    <li><Link href="/featured/popular">Popular</Link></li>
                    <li><Link href="/featured/toprated">Top Rated</Link></li>
                    <li><Link href="/featured/upcoming">Upcoming</Link></li>


                </ul>

            </div>
        </div>
    )
}

export default Navbar;