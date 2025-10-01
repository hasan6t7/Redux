import React, { useState } from 'react'
import { useAddNewPostMutation } from '../redux/features/posts/postApi'

const AddPost = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [userId, setUserId] = useState("")

    const [addNewPost] = useAddNewPostMutation();

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        // add post to the store
        const newPost = {
            title,
            body,
            userId: parseInt(userId)
        }
       try {
        const response = await addNewPost(newPost);
        console.log(response)
       } catch (error) {
        console.log("Error creating new post: " + error)
       }
    }
  return (
    <div className='p-5 shadow-md rounded-lg border max-w-md'>
        <h1>Add New Post</h1>

        <form onSubmit={handleSubmit} className='space-y-2'>
            <div>
                <label className='block mb-1'>Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Post title' className='p-1 border focus:outline-none w-full'/>
            </div>
            <div>
                <label className='block mb-1'>Description</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} type="text" placeholder='Description' className='p-1 border focus:outline-none w-full'/>
            </div>
            <div className='mb-5'>
                <label className='block mb-1'>userId</label>
                <input value={userId} onChange={(e) => setUserId(e.target.value)} type="text" placeholder='Post userId' className='p-1 border focus:outline-none w-full'/>
            </div>
            <button type='submit' className='px-6 py-2 bg-blue-500 text-white mt-5'>Add Post</button>
        </form>
    </div>
  )
}

export default AddPost