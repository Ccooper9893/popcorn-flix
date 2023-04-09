import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Upcoming</a></li>
        <li><a>Latest</a></li>
        <li><a>Now Playing</a></li>
        <li><a>Popular</a></li>
        <li><a>Top Rated</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Popcorn Flix</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>Upcoming</a></li>
        <li><a>Latest</a></li>
        <li><a>Now Playing</a></li>
        <li><a>Popular</a></li>
        <li><a>Top Rated</a></li>
    </ul>
  </div>
</div>
  )
}
