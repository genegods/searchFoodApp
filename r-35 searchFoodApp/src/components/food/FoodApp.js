import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import tryImage from "../../asserts/images/tryFood.jpg";
import { loadData } from "../../redux/foodRedux/food.actions";
import { FOOD_KEY } from "../../redux/foodRedux/food.reducer";

const FoodApp = () => {
  // initialize dispatch
  let dispatch = useDispatch();

  // useEffect(() =>{
  //     dispatch(loadData())

  // }, [])

  // bind input
  let [nationality, setNationality] = useState({
    foodName: "",
  });

  let handleChange = (event) => {
    setNationality({
      ...nationality,
      [event.target.name]: event.target.value,
    });
  };

  //  handle submit
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loadData(nationality.foodName));
  };

  //  view store
  let viewFood = useSelector((state) => {
    return state[FOOD_KEY];
  });

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(viewFood)}</pre> */}
      <div className="card">
        <div className="card-header centered">
          <h5>SEARCH FOOD APP - By Nationality</h5>
        </div>

        <div className="card-body">
          <div className="body-section centered">
            <form className="form-inline" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  name="foodName"
                  value={nationality.foodName}
                  onChange={handleChange}
                  type="text"
                  size="30"
                  className="form-control"
                  placeholder="Enter your Nationality"
                />

                <input type="submit" value="SEARCH" className="btns" />
              </div>
            </form>
          </div>
        </div>

        {/* image section */}
        <div className="card-footer">
          {viewFood.data.length === 0 ? null : (
            <React.Fragment>
              {viewFood.data.meals.map((item) => {
                return (
                  <div key={item.idMeal}>
                    <div className="foodContainer">
                      <div className="imgContainer">
                        <img
                          src={item.strMealThumb}
                          alt=""
                          width="250px"
                          height="150px"
                        />
                      </div>
                      <div className="nameContainer centered">
                        <p>{item.strMeal}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FoodApp;
