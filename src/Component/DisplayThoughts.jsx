import React from 'react'

function DisplayThoughts({ notes, deleteNote }) {

     // console.log(notes)

     return (
          <div className='flex-1 p-6 '>
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {notes && notes.map((t, i) => (
                         <div key={t.id} className='thoughtColor min-h-[180px] p-4 rounded-md shadow-2xl rotate-[-2deg] hover:rotate-0 transition-all break-words flex flex-col justify-between gap-1'>
                              <p className='text-slate-700 font-bold'>{i + 1}</p>
                              <p className='text-black font-semibold'>{t.line}</p>

                              <div className='flex flex-col gap-1'>
                                   <div className='flex flex-row justify-end mb-0'>
                                        <small className='text-slate-500 '>
                                             {new Date(t.time).toLocaleDateString("en-IN")}{" "}
                                             {new Date(t.time).toLocaleTimeString("en-IN", {
                                                  hour: "2-digit",
                                                  minute: "2-digit"
                                             })}
                                        </small>
                                   </div>
                                   <div className='flex flex-row gap-2 justify-between px-4'>
                                        <button className='text-black p-1 bg-green-600 hover:bg-green-500 rounded-md' >Competed</button>
                                        <button className='text-black p-1 bg-red-600 hover:bg-red-500 rounded-md' onClick={() => deleteNote(t.id)}>Delete</button>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     )
}

export default DisplayThoughts
