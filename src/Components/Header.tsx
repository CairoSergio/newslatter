export default function Header(){
    return(
        <header className="max-lg:pt-4 bg-black/60 backdrop-blur-md z-10 max-lg:border-b border-b-white/30 fixed w-full flex pt-10 pb-2 items-center justify-center">
            <div className="xl:w-3/4 w-11/12 flex items-center justify-between">
                <a href="#">
                    <p className="font-black text-xl">TechLatter</p>
                </a>
                <nav className="flex gap-14 justify-center border-b border-gray-300 py-4 max-lg:hidden px-8 backdrop-blur-3xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-white/30">
                    <a href='#' className='font-bold'>Home</a>
                    <a href='#' className='opacity-50'>Programação</a>
                    <a href='#' className='opacity-50'>Inteligencia Artificial</a>
                    <a href='#' className='opacity-50'>Astronomia</a>
                </nav>
                <div className="max-lg:hidden items-center flex gap-3">
                    <span className="material-symbols-outlined text-sky-400 p-3 rounded-full max-lg:hidden border-gray-300 backdrop-blur-2xl border-transparent cursor-pointer border dark:bg-zinc-800/30 hover:dark:border-neutral-800">
                        dark_mode
                    </span>
                    <span className="material-symbols-outlined p-3 rounded-full max-lg:hidden border-gray-300 backdrop-blur-2xl border-transparent cursor-pointer border dark:bg-zinc-800/30 hover:dark:border-neutral-800">
                        add
                    </span>
                    <span className="h-11 w-11 overflow-hidden rounded-full max-lg:hidden border-gray-300 backdrop-blur-2xl border-transparent cursor-pointer border dark:bg-zinc-800/30 hover:dark:border-neutral-800">
                        {/* person */}
                        <img className="cursor-pointer object-cover w-full h-full" src="/images/img3.png"/>
                    </span>
                </div>
                <div className="lg:hidden">
                    <span className="material-symbols-outlined p-3 hover:rounded-xl hover:border-gray-300 hover:backdrop-blur-2xl border-transparent cursor-pointer border hover:dark:bg-zinc-800/30 hover:dark:border-neutral-800">
                        menu
                    </span>
                </div>
            </div>
        </header>
    )
}