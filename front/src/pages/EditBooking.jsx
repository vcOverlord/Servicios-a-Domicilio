import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import { API } from "../services/API";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./EditBooking.css";


const EditBooking = () => {
   const {editingBooking} = useContext(JwtContext);
   console.log(editingBooking);
   const {register, handleSubmit} = useForm();
   let navigate = useNavigate();


  /* const defaultValues = {
    name: editingBooking.name,
    date: editingBooking.date,
    time: editingBooking.time,
    address: editingBooking.address,
    mobile: editingBooking.mobile,
    amount: editingBooking.amount,
    
   
  };*/


  const formSubmit = (data) => {
      

    API.patch(`/citas/${editingBooking._id}`, data).then( 
      (res) => {
     navigate("/booking");
    
    })
 };

 return (
  <section className="editbooking">
      <h2>Cambiar cita</h2>
      <form onSubmit={handleSubmit(formSubmit)}>
           
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name"  required {...register("name")}/* defaultValues={defaultValues.name}*/ />
              <label htmlFor="date">Fecha</label>
              <input type="text" id="date" name="date" required {...register("date")} /*defaultValues={defaultValues.date} *//>
              <label htmlFor="time">Hora</label>
              <input type="number" id="time" name="time" required min={11} max={21} {...register("time")} /*defaultValues={defaultValues.time}*/ />
              <label htmlFor="address">Dirección</label>
              <input type="address" id="address" name="address" required {...register("address")} /*defaultValues={defaultValues.address}*//>
              <label htmlFor="amount">Cantidad</label>
              <input type="number" id="amount" name="amount" required min={1} max={4} {...register("amount")} /*defaultValues={defaultValues.amount}*/ />
              
              <button type="submit">Confirmar cambios</button>
             
            </form>
    

  </section>
  );





};

    



export default EditBooking