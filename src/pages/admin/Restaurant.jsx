//rafce
import FormInputs from '@/components/form/FormInputs';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from "react-hook-form"
import { Form } from 'react-router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { Description } from '@radix-ui/react-toast';
import { restaurantSchema } from '@/utils/schemas';
import Mainmap from '@/components/map/Mainmap';
import Buttons from '@/components/form/Buttons';



const Restaurant = () => {
  // formState is used for receiving & displaying errors that conflict with the conditions ie more than 2 characters. 
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(restaurantSchema),
  });

  // destructure errors to get error message
  const { errors, isSubmitting } = formState
  console.log(errors)
  // console.log(formState.errors.menu)

  console.log(isSubmitting)
  const eatingSubmit = async (data) => {
    // code body
    await new Promise((resolve)=> setTimeout(resolve, 3000))

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
                errors={errors}
                />             
            
              <FormInputs 
                register={register} 
                name='price' 
                type='number' 
                placeholder='Input Your Price...' 
                errors={errors}             
              />

              <TextAreaInput 
                register={register} 
                name='description' 
                type='text'                
                placeholder='Input Your Menu Description...'  
                errors={errors}            
              />            
              </div>

              {/* เรียกใช้โดยการส่ง register,  */}
              <Mainmap register={register} setValue={setValue} /> 

              <Buttons 
              text="create restaurant" 
              isPending={isSubmitting}
              type="submit"
              />
              </form>            
        </div>        
    </section>
  )
}

export default Restaurant