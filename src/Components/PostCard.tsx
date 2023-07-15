interface PostCardProps {
    user: string,
    position: string,
    image: string,
    profile: string,
    likes:string,
    dislikes:string
}
export default function PostCard(props : PostCardProps){
    return(
        <div className="max-lg:w-full w-90 p-3 border-b border-neutral-800 flex flex-col gap-4">
        <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
                <span className="overflow-hidden h-12 w-12 rounded-full bg-slate-900">
                    <img className="cursor-pointer object-cover w-full h-full" src={props.profile}/>
                </span>
                <div>
                    <h3 className="font-bold">{props.user}</h3>
                    <h5 className="opacity-50 text-[0.60rem]">{props.position}</h5>
                </div>
            </div>
            <span className="dark:bg-white/10 rounded-md bg-white border-darkmode/25 text-sm hover:border-neutral-800 dark:border-transparent border backdrop-blur-2xl py-2 px-4 cursor-pointer">
                Você
            </span>
        </div>
        <div className="w-full flex flex-col gap-2">
            <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam alias animi autem nisi architecto eum consectetur deleniti? Itaque placeat qui voluptas temporibus deserunt ut culpa possimus, nulla delectus nam Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil dolore quibusdam reprehenderit culpa vitae temporibus ea pariatur nostrum quam omnis eos magni perferendis incidunt exercitationem delectus natus, magnam accus...
            <span className="opacity-50 cursor-pointer"> ler mais</span>
            </p>
            <div className="overflow-hidden  w-full rounded-xl h-60 bg-red-900">
                <img  className="cursor-pointer object-cover w-full h-full" src={props.image}/>
            </div>
        </div>
        <div className="flex gap-3 text-xs">
            <div className="flex gap-2 flex-col items-center">
                {/* <span className="bg-white/10 cursor-pointer border-neutral-800 p-3 max-w-max rounded-full material-symbols-outlined">
                    heart_plus
                </span> */}
                <span className="dark:bg-white/10 bg-white border-darkmode/25 cursor-pointer dark:border-neutral-800 p-3 max-w-max rounded-full material-symbols-rounded">
                    favorite    
                </span>
                <p className="opacity-50">
                    {props.likes}
                </p>
            </div>
            <div className="flex gap-2 flex-col items-center">
                <span className="dark:bg-white/10 cursor-pointer bg-white border-darkmode/25 dark:border-neutral-800 p-3 max-w-max rounded-full material-symbols-outlined">
                    heart_minus
                </span>
                <p className="opacity-50">
                    {props.dislikes}
                </p>
            </div>
        </div>
    </div>
    )
}