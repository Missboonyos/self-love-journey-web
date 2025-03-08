//rafce
import React from 'react'
import { Button } from '../ui/button'
import { RotateCw } from 'lucide-react';
// import { P } from '@clerk/clerk-react/dist/useAuth-BQT424bY'

const Buttons = ({text, isPending, type}) => {
  return <Button
            type={type}
            disabled={isPending} 
            className="capitalize mt-2">
              {
                isPending
                ? <>
                <RotateCw className='animate-spin' />
                <span>Please wait...</span>
                </>
                : <p>{text}</p>
              }
            </Button>
  
}

export default Buttons