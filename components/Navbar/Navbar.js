import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/popcornbag.webp"
import Link from "next/link";
// import PopcornFall from "../misc/PopcornFall";
import { useRef } from "react";

const Navbar = ({ children }) => {
    
    const router = useRouter();
    const drawerRef = useRef(null);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const openDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggle = () => {
        // Use the current property of the ref to access the input element
        drawerRef.current.checked = false;
    };

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" ref={drawerRef} />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="navbar fixed bg-stone-900 z-40 justify-between shadow-md shadow-black">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <Link href="/" className="ml-2">
                        <Image
                            className="rounded-lg"
                            src={logo}
                            width={26}
                            height={36}
                            alt="Popcorn Bag">
                        </Image>
                        <div className="flex flex-col">
                            <h1 className="normal-case text-xl lg:text-2xl text-md ml-2 pt-1 text-yellow-400 font-bold">
                                Bring Popcorn
                            </h1>
                            <small className="pl-2">Movie Search Engine</small>
                        </div>
                    </Link>

                    <div className="flex-none hidden lg:block mr-10">
                        <ul className="menu menu-horizontal text-md">
                            {/* <!-- Navbar menu content here --> */}
                            <li><Link href="/browse/nowplaying">Upcoming</Link></li>
                            <li><Link href="/browse/trending">Trending</Link></li>
                            <li><Link href="/browse/popular">Popular</Link></li>
                            <li><Link href="/browse/toprated">Top Rated</Link></li>
                            <li><Link href="/browse/latest">Latest</Link></li>
                            <li><Link href="/search">Search</Link></li>
                            <li tabIndex={0}>
                                <a>
                                    Genres
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2 text-xs bg-stone-900 z-50">
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
                    <div className="mr-2 flex flex-row justify-end">
                        <button className="btn btn-circle btn-ghost shadow shadow-black" onClick={() => router.back()}>
                            <small><span>Back</span></small>
                        </button>
                    </div>
                </div>
                {/* <PopcornFall /> */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-40 bg-stone-900 drop-shadow-sm shadow-white">
                    {/* <!-- Sidebar content here --> */}
                    <li tabIndex={0} onClick={openDropdown}>
                        <a>
                            Genres
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className={!dropdownOpen ? "dropdown-open text-xs bg-stone-900" : "hidden"}>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/action?id=28">Action</Link></li>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/adventure?id=12">Adventure</Link></li>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/animation?id=16">Animation</Link></li>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/comedy?id=35">Comedy</Link></li>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/crime?id=80">Crime</Link></li>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/documentary?id=99">Documentary</Link></li>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/drama?id=18">Drama</Link></li>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/family?id=10751">Family</Link></li>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/fantasy?id=14">Fantasy</Link></li>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/history?id=36">History</Link></li>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/horror?id=27">Horror</Link></li>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/music?id=10402">Music</Link></li>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/mystery?id=9648">Mystery</Link></li>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/romance?id=10749">Romance</Link></li>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/sciencefiction?id=878">Science Fiction</Link></li>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/thriller?id=53">Thriller</Link></li>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/war?id=10752">War</Link></li>
                            <li><Link onClick={() => {toggle(); openDropdown();}} href="/genre/western?id=37">Western</Link></li>
                        </ul>
                    </li>

                    <li><Link onClick={toggle} href="/browse/nowplaying">Upcoming</Link></li>
                    <li><Link onClick={toggle} href="/browse/trending">Trending</Link></li>
                    <li><Link onClick={toggle} href="/browse/popular">Popular</Link></li>
                    <li><Link onClick={toggle} href="/browse/toprated">Top Rated</Link></li>
                    <li><Link onClick={toggle} href="/browse/latest">Latest</Link></li>
                    <li><Link onClick={toggle} href="/search">Search</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;