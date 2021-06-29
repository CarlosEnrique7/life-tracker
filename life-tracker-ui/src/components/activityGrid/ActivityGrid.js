import React from "react";
import { Grid } from "@material-ui/core";

const style = {
  margin: 20,
  background: "linear-gradient(45deg, #48cae4 30%, #0077b6 90%)",
  height: 250,
  marginTop: 200,
  borderRadius: 12,
};
const altStyle = {
  margin: 20,
  background: "linear-gradient(45deg, #48cae4 30%, #0077b6 90%)",
  height: 250,
  marginTop: 40,
  borderRadius: 12,
};

const ActivityGrid = ({ exercise, calories, sleep }) => {
  return (
    <div>
      <Grid container spacing={10}>
        <Grid item xs={false} sm={2}></Grid>
        <Grid item style={style} xs={12} sm={4}>
          <h2 className="label">Average Exercise</h2>
          <h4 className="time">{exercise + " minutes"}</h4>
        </Grid>
        <Grid item style={style} xs={12} sm={4}>
          <h2 className="label">Average Calories</h2>
          <h4 className="time">{calories + " calories consumed"}</h4>
        </Grid>
        <Grid item xs={false} sm={2}></Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={false} sm={2}></Grid>
        <Grid item style={altStyle} xs={12} sm={4}>
          <h2 className="label">Average Hours of Sleep</h2>
          <h4 className="time">{sleep + " hours"}</h4>
        </Grid>
        <Grid item xs={false} sm={2}></Grid>
      </Grid>
    </div>
  );
};

export default ActivityGrid;
