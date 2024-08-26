import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
    name: z.string().min(1, { message: 'Required' })

  });
  

export const FormComponent = ()=>{
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(schema),
      });
      const onSubmit =(data)=>{

      }

    return(
        <>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <h1>Form</h1>
            <input className="bg-orange-500 " {...register('name')} />
            <button type="submit" >add </button>
            </form>
        </>
    )
}