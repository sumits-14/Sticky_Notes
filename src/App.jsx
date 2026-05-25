import { useState } from 'react'
import DisplayThoughts from './Component/DisplayThoughts'

function App() {

  const [note, setNote] = useState({
    // title : "",
    line: "",
  })
  const [storeNotes, setStoreNotes] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target

    setNote(prev => ({
      ...prev, [name]: value
    }))
  }

  const submitNote = () => {

    if (note.line) {
      const updatedContent = {
        ...note,
        time: new Date(),
        id: Date.now()
      }

      setStoreNotes(prev => (
        [...prev, updatedContent]
      ))

      setNote({
        line: "",
      })
    }
  }

  const handleDelete = (id) => {
    const updatedNotesList = storeNotes.filter(note => note.id !== id)

    setStoreNotes(updatedNotesList)
  }

  return (
    <div className='flex flex-col min-h-screen bg-gray-700'>
      <div className='w-full bg-gray-800 p-4 shadow-lg sticky top-0 z-10'>
        <div className='max-w-4xl mx-auto flex flex-col gap-3 justify-center items-center'>
          <input
            type="text"
            className='p-2 rounded-md text-black w-60'
            value={note.line}
            name='line'
            placeholder='Enter your note'
            onChange={handleChange}
          />
          <button className='bg-blue-600 rounded-md p-1 w-40' onClick={submitNote}>Add Note</button>
        </div>
      </div>
      <DisplayThoughts deleteNote={handleDelete} notes={storeNotes} />
    </div>
  )
}

export default App
