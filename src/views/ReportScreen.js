import React, { Component } from "react";

import { Box, Calendar, Grommet } from "grommet";
import { grommet } from "grommet/themes";
import FixedSizesBox from '../components/common/FixedSizesBox'

class ReportScreen extends Component {
  state = {};

  onSelect = nextDate => {
    const { date } = this.state;
    this.setState({ date: nextDate !== date ? nextDate : undefined });
  };

  render() {
    const { date } = this.state;
    return (
      <Grommet theme={grommet}>
       <FixedSizesBox>
        <Box align="center" pad="large">
          <Calendar
            date={date}
            onSelect={this.onSelect}
            size="small"
            bounds={["2018-09-08", "2050-12-13"]}
          />
        </Box>
        <Box align="center" pad="large">
          <Calendar
            date={date}
            onSelect={this.onSelect}
            size="small"
            bounds={["2018-09-08", "2050-12-13"]}
          />
        </Box>
       </FixedSizesBox>
      </Grommet>
    );
  }
}

export default ReportScreen