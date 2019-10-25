import React from "react";
import { VictoryAxis } from "victory-axis/src";
import { VictoryChart } from "victory-chart/src";
import { VictoryLine } from "victory-line/src";
import { VictoryTheme } from "victory-core/src";

const theme = {
  ...VictoryTheme.material,
  ...{ dependentAxis: { orientation: "right" } },
  ...{ independentAxis: { orientation: "top" } }
};

export default class App extends React.Component {
  render() {
    return (
      <div className="demo">
        <h1>Xoadra's Demo</h1>
        <VictoryChart theme={theme}>
          <VictoryAxis />
          <VictoryAxis dependentAxis />
          <VictoryLine />
        </VictoryChart>
      </div>
    );
  }
}
