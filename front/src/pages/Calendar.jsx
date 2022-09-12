import "./Calendar.css";



const Calendar = () => {
    return (
      
        <section className="calendar">
          
          <label htmlFor="start"><h2>Selecciona una fecha:</h2></label>
          
            <input type="date" 
             id="start" 
             name="trip-start" 
             value="2018-07-22"
             min="2018-01-01" 
             max="2018-12-31" />

        </section>
  
    )
};

export default Calendar