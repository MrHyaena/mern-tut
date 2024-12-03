import { WorkoutsContex } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContex);

  if (!context) {
    throw Error(
      "useWorkoutContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};
