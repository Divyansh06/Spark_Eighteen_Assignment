import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import { Update_data } from "../Redux/Actions/action";
import { connect } from "react-redux";

function index(props) {
  const { data, updatedData } = props;

  function handleToggle(groupid, itemid) {
    const newData = [...data];
    const groupindex = newData.findIndex((item) => item.groupid === groupid);
    const itemindex = newData[groupindex].items.findIndex(
      (item) => item.itemid === itemid
    );
    newData[groupindex].items[itemindex].selected = !newData[groupindex].items[
      itemindex
    ].selected;
    updatedData(newData);
  }

  function FilterData(data) {
    const newData = [];
    data.forEach((item) => {
      let flag = false;
      item.items.forEach((element) => {
        if (element.selected) {
          flag = true;
        }
      });
      if (flag) {
        newData.push(item);
      }
    });
    return newData;
  }

  function isChecked(groupid, itemid) {
    const newData = [...data];
    const groupindex = newData.findIndex((item) => item.groupid === groupid);
    const itemindex = newData[groupindex].items.findIndex(
      (item) => item.itemid === itemid
    );
    return newData[groupindex].items[itemindex].selected;
  }

  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${"https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&h=800"})`,
          backgroundSize: "cover",
          height: window.innerHeight / 1.085,
        }}
      >
        <Grid container justify={"center"}>
          <Grid item md={4}>
            <LeftCard
              data={data}
              setData={(groupid, itemid) => handleToggle(groupid, itemid)}
              isChecked={(groupid, itemid) => isChecked(groupid, itemid)}
            />
          </Grid>
          <Grid item md={4}>
            <RightCard
              data={FilterData(data)}
              setData={(groupid, itemid) => handleToggle(groupid, itemid)}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updatedData: (value) => Update_data(value, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
