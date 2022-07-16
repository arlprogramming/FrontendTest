import React from "react";
import "./filter.css";

const data = [
  {
    status: 1,
    message: "SUCCESS",
    data: {
      system_message: "SUCCESS",
      response: {
        additionaldata: [],
        billdetails: [
          {
            adminfee: "0.0",
            billid: "1",
            currency: "360",
            file: "TELKOMSEL 50rb - 50.149",
            idialamount: "50149.00",
            descriptions: null,
            body: ["DENOM  : 50000"],
          },
          {
            adminfee: "0.0",
            billid: "2",
            currency: "360",
            file: "TELKOMSEL 75rb - 74.050",
            idialamount: "74050.00",
            descriptions: null,
            body: ["DENOM  : 75000"],
          },
          {
            adminfee: "0.0",
            billid: "3",
            currency: "360",
            file: "TELKOMSEL 200rb - 194900",
            idialamount: "194900.00",
            descriptions: null,
            body: ["DENOM  : 200000"],
          },
        ],
      },
    },
  },
];

const Filter = () => {
  return (
    <div className="col-md-6 container__filter">
      <h2>Data</h2>

      <h3>
        {data.map((e) =>
          e.data.response.billdetails.map((detail) => {
            return detail.body[0].split(":")[1];
          })
        )}
      </h3>

      <h2>Data Filter {">"} 100000</h2>
      <h2>
        {data.map((e) =>
          e.data.response.billdetails
            .filter((details) => details.body[0].split(":")[1] > 100000)
            .map((detail) => {
              return detail.body[0].split(":")[1];
            })
        )}
      </h2>
    </div>
  );
};

export default Filter;
