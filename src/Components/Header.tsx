export default function Header(){
    return(
        <header className="max-lg:pt-4 bg-gray-50/60 dark:bg-darkmode/60 backdrop-blur-md z-10 max-lg:border-b border-b-darkmode/30 dark:border-b-white/30 fixed w-full flex pt-10 pb-2 items-center justify-center">
            <div className="xl:w-3/4 w-11/12 flex items-center justify-between">
                <a href="#">
                    <p className="font-black text-xl">TechLetter</p>
                </a>
                <nav className="flex gap-14 justify-center  items-center border-b border-gray-300 py-2 max-lg:hidden px-8 backdrop-blur-3xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-white/30">
                    <a href='#' className='font-bold'>Home</a>
                    <a href='#' className='opacity-50'>Programação</a>
                    <a href='#' className='opacity-50'>Inteligencia Artificial</a>
                    <a href='#' className='dark:hover:bg-white/80 hover:bg-black/80 transition-colors duration-500 bg-black text-white dark:bg-white py-2 px-4 rounded-md dark:text-black'>Podcast's</a>
                </nav>
                <div className="max-lg:hidden items-center flex gap-3">
                    <span className="material-symbols-outlined bg-white border-darkmode/25 text-sky-400 p-3 rounded-full max-lg:hiddebackdrop-blur-2xl dark:border-transparent cursor-pointer border dark:bg-zinc-800/30 hover:dark:border-neutral-800">
                        dark_mode
                    </span>
                    {/* <button className='dark:hover:bg-white/80 hover:bg-black/80 transition-colors duration-500 bg-black text-white dark:bg-white py-2 px-4 rounded-md dark:text-black'>Login</button>
                    <button className=' border-b border-gray-300 px-4 py-2 backdrop-blur-3xl dark:border-neutral-800 dark:bg-zinc-800/30 rounded-md border bg-white/30'>Sign</button> */}
                    <span className="material-symbols-outlined p-3 bg-white border-darkmode/25 rounded-full max-lg:hidden  backdrop-blur-2xl dark:border-transparent cursor-pointer border dark:bg-zinc-800/30 hover:dark:border-neutral-800">
                        add
                    </span>
                    <span className="h-11 w-11 bg-white border-darkmode/25 overflow-hidden rounded-full max-lg:hidden  backdrop-blur-2xl dark:border-transparent cursor-pointer border dark:bg-zinc-800/30 hover:dark:border-neutral-800">
                        <img className="cursor-pointer object-cover w-full h-full" src="/images/img3.png"/>
                    </span>
                </div>
                <div className="lg:hidden">
                    <span className="material-symbols-outlined  p-3 hover:rounded-xl hover: hover:backdrop-blur-2xl dark:border-transparent cursor-pointer border hover:dark:bg-zinc-800/30 hover:dark:border-neutral-800">
                        menu
                    </span>
                </div>
            </div>
        </header>
    )
}