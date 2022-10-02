import { homepageConstant } from "./Homepage.constant";
import { Box, Button, Typography } from "@mui/material";
import { useFormContext, SubmitHandler } from "react-hook-form";
import { libAndRoads } from "src/services/libAndRoads";
import { HandleCalculateCitiesAndRoadsRepairCostProps } from "src/pages/Homepage/Homepage.types";
import { CustomTextField } from "src/components/CustomTextField";
import { useState } from "react";
import styles from "./Homepage.module.scss";

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = () => {
  const { handleSubmit } =
    useFormContext<HandleCalculateCitiesAndRoadsRepairCostProps>();
  const [calculationResult, setCalculationResult] = useState<
    number | undefined
  >(undefined);

  const handleCalculateCitiesAndRoadsRepairCost: SubmitHandler<
    HandleCalculateCitiesAndRoadsRepairCostProps
  > = ({ n_cities, c_lib, c_road, cities }) => {
    const result = libAndRoads({
      n: n_cities,
      c_lib,
      c_road,
      cities: JSON.parse(cities),
    });
    setCalculationResult(result);
  };

  return (
    <div className={styles.container}>
      <Box
        className={styles.form}
        component="form"
        onChange={() => setCalculationResult(undefined)}
        onSubmit={handleSubmit(handleCalculateCitiesAndRoadsRepairCost)}
      >
        {homepageConstant.formFields.map((item, i) => (
          <CustomTextField key={i} {...item} />
        ))}

        {calculationResult && (
          <Typography sx={{ gridColumn: "1 / -1" }}>
            The cost is {calculationResult}
          </Typography>
        )}

        <Button
          className={styles.form__button}
          variant="contained"
          type="submit"
        >
          Calculate cost
        </Button>
      </Box>
    </div>
  );
};

export default Homepage;
