/*import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import { API } from "../services/API";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const EditBooking = () => {
   const {editingBooking} = useContext(JwtContext);
   const {register, handleSubmit} = useForm();
   let navigate = useNavigate();


   const defaultValues = {
    name: editingBooking.name,
    date: editingBooking.date,
    time: editingBooking.time,
    address: editingBooking.address,
    amount: editingBooking.amount,
    issue: editingBooking.issue,
   
  };


  const formSubmit = (formData) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("brand", data.brand);
      formData.append("strings", data.strings);
      formData.append("description", data.description);
      formData.append("price", data.price);
    API.patch('{editingBooking._id}', formData).then(
      (res) => {
     navigate("/booking");
    
    })
 };

};

    return (
    <section>
        <h2>EditBooking</h2>

        <form onSubmit={handleSubmit(formSubmit)}>
             
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" {...register("name")} defaultValues={defaultValues.name} />
                <label htmlFor="date">Fecha</label>
                <input type="text" id="date" name="date" {...register("date")} defaultValues={defaultValues.date} />
                <label htmlFor="time">Hora</label>
                <input type="number" id="time" name="time" min={11} max={21} {...register("time")} defaultValues={defaultValues.time} />
                <label htmlFor="address">Dirección</label>
                <input type="address" id="address" name="address" {...register("address")} defaultValues={defaultValues.address}/>
                <label htmlFor="amount">Cantidad</label>
                <input type="number" id="amount" name="amount" min={1} max={4} {...register("amount")} defaultValues={defaultValues.amount} />
                <label htmlFor="issue">Motivo</label>
                <input type="text" id="issue" name="issue" {...register("issue")}  defaultValues={defaultValues.issue}/>
                <button type="submit">Editar</button>
               
              </form>
      
  
        
    </section>
    )
};

export default EditBooking*/