import React, { Component } from "react";
import _ from "lodash";
import { ErrorObject } from "@open-rpc/meta-schema";
import ExpansionTable from "../ExpansionTable/ExpansionTable";

interface IProps {
  errors?: ErrorObject[];
  reactJsonOptions?: any;
}

class Errors extends Component<IProps> {
  public render() {
    const { errors} = this.props;
    if (!errors || errors.length === 0) {
      return null;
    }
    return (
      <ExpansionTable headers={["Code", "Message"]}>
        {errors.map((row, i) => (
          <tr key={i}>
            <td>{row.code}</td>
            <td>{row.message}</td>
          </tr>
        ))}
      </ExpansionTable>
    );
  }
}

export default Errors;
