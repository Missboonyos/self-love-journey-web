//rafce
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from "react-hook-form"

const Restaurant = () => {
  const { register, handleSubmit} = useForm()

  const eatingSubmit = (data) => {
    // code body
    console.log(data)
  };

  return (
    <section>
        <h1 className='capitalize text-2xl font-semibold mb-4'>Create Restaurant</h1>
        <div className='border p-8 rounded-md'>
            <form onSubmit={handleSubmit(eatingSubmit)}>
              <div className="grid md:grid-cols-2 gap-4 mt-4">              
            
              <Input 
              {...register('price')}
              type='number' placeholder='price' />

              <Input 
              {...register('description')}
              type='text' placeholder='description' />

              <button>Submit</button>
              </div>
              </form>            
        </div>        
    </section>
  )
}

export default Restaurant