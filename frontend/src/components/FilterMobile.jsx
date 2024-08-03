import React, { useState } from 'react';
import Dropdown from './Dropdown';

const App = () => {
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');

  const locationOptions = ['All', 'London', 'San Francisco', 'Canada'];
  const salaryOptions = ['Any', '< 3 LPA', '3 - 5 LPA', '5 - 10 LPA', '10 - 15 LPA', '15 - 20 LPA', '> 20 LPA'];
  const dateOptions = ['All', 'Today', 'This week', 'This Month'];

  return (
    <div className="p-8 block sm:hidden ">
      <h1 className="text-lg font-bold mb-4 text-logo">Filters</h1>
      <div className="space-x-4">
        <Dropdown
          options={locationOptions}
          selectedOption={location}
          onOptionSelect={setLocation}
          label="Location"
        />
        <Dropdown
          options={salaryOptions}
          selectedOption={salary}
          onOptionSelect={setSalary}
          label="Salary"
        />
        <Dropdown
          options={dateOptions}
          selectedOption={date}
          onOptionSelect={setDate}
          label="Date of Posting"
        />
      </div>
    </div>
  );
};

export default App;
