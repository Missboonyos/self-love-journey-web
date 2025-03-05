//rafce
import FormInputs from '@/components/form/FormInputs';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from "react-hook-form"
import { Form } from 'react-router';

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

                {/* This is to send property (prop) : register to FormInputs.jsx */}
                <FormInputs 
                register={register} 
                name='menu' 
                type='text' 
                placeholder='Input Your Menu Title...'
                />             
            
              <FormInputs 
                register={register} 
                name='price' 
                type='number' 
                placeholder='Input Your Price...'              
              />

              <TextAreaInput 
                register={register} 
                name='description' 
                type='text'                
                placeholder='Input Your Menu Description...'              
              />
            
              </div>
              <button>Submit</button>
              </form>            
        </div>        
    </section>
  )
}

export default Restaurant