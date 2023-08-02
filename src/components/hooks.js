import { useState } from "react";
import { useForm } from 'react-hook-form'
export function useFormInput(initialValue){
    const [value,setValue]=useState(initialValue);

    function handleChange(e){
        setValue(e.target.value);
        return new Promise((resolve) => {
            setTimeout(() => {
              resolve()
            }, 4000)
          })
        }
        return (
          <div>
            <h2>Display Loader on Form Submit in React</h2>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="mt-2">
                    <button disabled={isSubmitting} className="btn btn-danger">
                      {isSubmitting && (
                        <span className="spinner-grow spinner-grow-sm"></span>
                      )}
                      Submit
                    </button>
                </div>
            </form>
          </div>
        )
        return{
            value,
            onChange: handleChange
        }
    }

    
