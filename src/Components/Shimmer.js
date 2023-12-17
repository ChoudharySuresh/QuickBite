import SkeletonCard from "./SkeletonCard"

const Shimmer = () => {
  return (
    <div className="flex w-[100%] flex-wrap my-8 justify-center mx-auto">
        {
           Array(20).fill().map((index) => {
            return (<SkeletonCard key={index}/>)
           })
        }
    </div>
  )
}

export default Shimmer