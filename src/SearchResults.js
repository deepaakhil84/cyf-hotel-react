import React from "react";

import moment from "moment";

const SearchResults = props => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">FirstName</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">RoomId</th>
          <th scope="col">CheckInDate</th>
          <th scope="col">CheckOutDate</th>
          <th scope="col">Nuber Of days stayed</th>
        </tr>
      </thead>

      <tbody>
        {props.results.map(data => {
          return (  
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.firstName}</td>
              <td>{data.surname}</td>
              <td>{data.email}</td>
              <td>{data.roomId}</td>
              <td>{data.checkInDate}</td>
              <td>{data.checkOutDate}</td>
              <td>
                {moment(data.checkOutDate).diff(data.checkInDate, "days")}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
