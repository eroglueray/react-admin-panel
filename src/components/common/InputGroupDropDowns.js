import React from "react";
import {
  InputGroup,
  FormInput,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "shards-react";

export default class InputGroupDropDowns extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      open: false
    };
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <InputGroup>
        <FormInput />
        <Dropdown
          addonType="append"
          open={this.state.open}
          toggle={this.toggle}
        >
          <DropdownToggle caret>Seçiniz</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Tazminat Talep Formu</DropdownItem>
            <DropdownItem>Tazminat Kalan Miktar </DropdownItem>
            <DropdownItem>Anlaşmalı kurumlar</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </InputGroup>
    );
  }
}
