import React from 'react'
import { useForm } from 'react-hook-form'

const CreateChampion = () => {

    const {register, handleSubmit} = useForm();

    const createChamp = (datos) => {
      const formData = new FormData();
      formData.append("name", datos.name);
      formData.append("title", datos.title);
      formData.append("image", datos.image[0]);

      console.log(datos);
    }

  return (
    <form onSubmit={handleSubmit(createChamp)}>
        <label>Name:
            <input type="text" {...register("name", {required: true})}/>
        </label>
        <label>Title:
            <input type="text" {...register("title", {required: true})}/>
        </label>
        <label>Image:
            <input type="file" {...register("image", {required: true})}/>
        </label>
        <button>Submit</button>
    </form>
  )
}

export default CreateChampion