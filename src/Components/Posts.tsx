import PostCard from "./PostCard";

const allPosts = [
    {user: 'Cairo Sergio Ndava', position: 'React Native Developer', image:'/images/IAI.webp', profile: '/images/img3.png', likes:'320', dislikes:'0'},
    {user: 'Filipe Dechamps', position: 'Digital Content Creator', image:'/images/img2.webp', profile: '/images/img1.jpg', likes:'20', dislikes:'16'},
]


export default function Posts(){
    return(
        <div className="pt-36 pb-12 flex flex-col w-[750px] gap-10 max-w-full mx-auto my-0">
            {
                allPosts.map((post)=>(
                    <PostCard
                        {...post}
                    />
                ))
            }
        </div>
    )
}