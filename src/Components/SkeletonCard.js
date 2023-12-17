const SkeletonCard = () => {
    return (
      <div className="w-[20rem] h-[20rem] px-6 py-4 rounded-2xl bg-white shadow-2xl flex flex-col gap-4 m-4 animate-pulse">
          <div className="h-[15rem] rounded-2xl bg-gray-400"></div>
          <div className="w[50%] h-[2.5rem] bg-gray-400 rounded-md"></div>
          <div className="w[30%] h-[1.5rem] bg-gray-400 rounded-md"></div>
          <div className="h-[3rem] bg-gray-400 rounded-md"></div>
      </div>
    )
  }
  
  export default SkeletonCard