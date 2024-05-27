import React, { useState, useEffect } from 'react';
import { data } from '../../Data/Data';
import './Dashboard.css';
import man from '../images/man.jpg';
import imgg from '../images/up.jpg';
import goldmedal from '../images/1st_Rank.png';
import silvermedal from '../images/2nd_Rank.png';
import bronzemedal from '../images/3rd_Rank.png';

const Dashboard = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    setEmployee(data);
  }, []);

  const getMedal = (rank) => {
    switch (rank) {
      case 1:
        return <img src={goldmedal} alt="Gold Medal" className="medal" />;
      case 2:
        return <img src={silvermedal} alt="Silver Medal" className="medal" />;
      case 3:
        return <img src={bronzemedal} alt="Bronze Medal" className="medal" />;
      default:
        return null;
    }
  };

  return (
    <div className='employee'>
      <table className='emp-table'>
        <colgroup className='emp-col'>
          <col style={{ width: '5%' }} />
          <col style={{ width: '5%' }} />
          <col style={{ width: '5%' }} />
          <col style={{ width: '10%' }} />
          <col style={{ width: '10%' }} />
        </colgroup>
        <thead>
          <tr id="col">
            <th>Rank</th>
            <th>Name</th>
            <th>Designation</th>
            <th>No. of hours worked</th>
            <th>Changes</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp, index) => (
            <tr key={index}>
              <td className='rank'>{getMedal(emp.Rank)} <p>{emp.Rank}</p></td>
              <td className='name'><img src={emp.image} alt="Employee" className="small-dp" /> {emp.Name}</td>
              <td>{emp.Designation}</td>
              <td>{emp.Hours}</td>
              <td>
             
                        {emp.ChangesDir === 1 ?
                            <svg fill="#097969" width="1.0rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#097969"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="arrow-up"> <rect width="21" height="21" transform="rotate(90 12 12)" opacity="0"></rect> <path d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1z"></path> </g> </g> </g></svg>
                            :
                            <svg fill="#C70039" width="1.0rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="arrow-downward"> <rect width="21" height="21" transform="rotate(-90 12 12)" opacity="0"></rect> <path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z"></path> </g> </g> </g></svg>
                        }
                    
                {emp.Changes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="employee-man">
        <div className='employee-man-rank'>
          <img src={man} alt="Employee of the Month" className='man-img' />
          <h3>Employee of the Month</h3>
          <p>Rakesh Sharma</p>
          <h6>UI/UX Designer</h6>
          <img src={imgg} alt="Employee of the Month" className='img' />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
