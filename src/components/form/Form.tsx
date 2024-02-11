import { useForm, SubmitHandler } from "react-hook-form";
import './Form.css';

type Inputs = {
  name: string
  email: string,
  inquiry: string
}

export function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }

  return (
    <div>
      <h2>Store name</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("name", { required: true })} />
        {errors.name && <div><span className="error">This field is required</span></div>}
      </div>
      
      <div>
        <input {...register("email", { required: true })} />
        {errors.email && <div><span className="error">This field is required</span></div>}
      </div>

      <div>
        <input {...register("inquiry", { required: true })} />
        {errors.inquiry && <div><span className="error">This field is required</span></div>}
      </div>

      <input type="submit" />
    </form>
    </div>
    
  )
}