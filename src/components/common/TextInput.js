import React, { Component } from "react";
import { storiesOf } from "@storybook/react";

import {
  Grommet,
  Box,
  CheckBox,
  FormField,
  Select,
  TextArea,
  TextInput,
  Form
} from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

const suggestions = Array(100)
  .fill()
  .map((_, i) => `suggestion ${i + 1}`);

class SuggestionsTextInput extends Component {
  state = { value: "" };

  onChange = event => this.setState({ value: event.target.value });

  onSelect = event => this.setState({ value: event.suggestion });

  render() {
    const { value } = this.state;
    return (
      <Grommet full theme={grommet}>
        <Box fill align="center" justify="start" pad="large">
          <Box width="medium">
            <TextInput
              value={value}
              dropProps={{ height: "small" }}
              onChange={this.onChange}
              onSelect={this.onSelect}
              suggestions={suggestions}
            />
          </Box>
        </Box>
      </Grommet>
    );
  }
}
  export default TextInput