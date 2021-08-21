import { LOAD_DATA_REQUEST,
         LOAD_DATA_SUCCESS,
         LOAD_DATA_FAILURE } from "./food.actionTypes";
import Axios from "axios";

export const loadData =(nationality) =>{
    return async (dispatch) =>{
        try{
            dispatch({type: LOAD_DATA_REQUEST})
            let dataURL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality} ` 
            let response = await Axios.get(dataURL)
            dispatch({type:LOAD_DATA_SUCCESS, payload:response.data})
        }
        catch(error){
            dispatch({type:LOAD_DATA_FAILURE, payload:error})
        }
    }
}