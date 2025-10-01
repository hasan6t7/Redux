import React from 'react'
import { useParams } from 'react-router'
import { useDeletePostByIdMutation, useGetPostByIdQuery, useUpdatePostByIdMutation } from '../redux/features/posts/postApi'

const SinglePost = () => {
    const {id} = useParams()

    const {data, isLoading, error} = useGetPostByIdQuery(id)

    const [deletePostById] =  useDeletePostByIdMutation();
    const [updatePostById] = useUpdatePostByIdMutation()


    if(error) return <div>Something Went Wrong!</div>
    if(isLoading) return <div>Loading...</div>

    const handleDeletePost = async () => {
      try {
       const respone =  await deletePostById(id);
       console.log(respone)
      } catch (error) {
        console.error("Error deleting post:", error)
      }
    }

    const handleUpdatePost = async () => {
      const data = {
        title: 'Updated Post Title',
        body: 'Updated Post Body',
        userId: 1
      }
      try {
        const respone =  await updatePostById({id, data});
        console.log("Post Updated Successfully done!", respone)
       } catch (error) {
         console.error("Error updating post:", error)
       }
    }
  return (
    <div className='p-5 space-y-2' >
        <h1 className='text-xl font-semibold'>{id}. {data.title}</h1>
        <p>{data.body}</p>
        <p>Author: {data.userId}</p>

        <button onClick={handleDeletePost} className='p-2 bg-red-500 text-white'>Delete This Post</button>
        <button onClick={handleUpdatePost} className='p-2 bg-blue-500 text-white ml-5'>Update Post</button>
    </div>
  )
}

export default SinglePost