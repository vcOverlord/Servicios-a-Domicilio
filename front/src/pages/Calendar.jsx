const Calendar = () => {
    return (
      <div>
        <section className="calendar">
          <label htmlFor="start"><h3>Selecciona una fecha:</h3></label>

            <input type="date" 
             id="start" 
             name="trip-start" 
             value="2018-07-22"
             min="2018-01-01" 
             max="2018-12-31" />

        </section>
      </div>
    )
};

export default Calendar