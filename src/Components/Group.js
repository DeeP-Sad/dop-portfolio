import React from 'react'

const Group = () => {
  return (
    <div className="text-white p-10 font-medium text-2xl">
      {/* block div to keep a fixed distance from the fixed navbar */}
      <div className="block h-10 bg-black">
      </div>
      <div>
      
      </div>
        Group
        <div className="grid grid-cols-3 mt-10"  >
        <div className="bg-indigo-500 hover:bg-indigo-700 text-lg text-white text-center rounded-xl mx-5 my-5">
          <h1 className="my-20">
            PhD Dissertation: Ongoing</h1>
          </div>
        <div className="bg-indigo-500 hover:bg-indigo-700 text-lg text-white text-center rounded-xl mx-5 my-5">
          <h1 className="my-20">
            Research Fellow: Ongoing</h1>
          </div>
          <div className="bg-indigo-500 hover:bg-indigo-700 text-lg text-white text-center rounded-xl mx-5 my-5">
          <h1 className="my-20">
            M.Tech Dissertation: Awarded</h1>
          </div>
          <div className="bg-indigo-500 hover:bg-indigo-700 text-lg text-white text-center rounded-xl mx-5 my-5">
          <h1 className="my-20">
            B.Tech Projects: Awarded</h1>
          </div>
          <div className="bg-indigo-500 hover:bg-indigo-700 text-lg text-white text-center rounded-xl mx-5 my-5">
          <h1 className="my-20">
            B.Tech Projects: Ongoing</h1>
        </div>
          <div className="bg-indigo-500 hover:bg-indigo-700 text-lg text-white text-center rounded-xl mx-5 my-5">
          <h1 className="my-20">
            Others</h1>
          </div>
      </div>
    </div>
  )
}

export default Group