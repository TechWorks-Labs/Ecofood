import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const hostname = 'http://localhost:9000';
// const hostname = 'https://ecofood.techworks.fr';

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch(`${hostname}/employees`);
      const employeesData = await response.json();
      setEmployees(employeesData);
    };
    fetchEmployees();
  }, []);

  return (
    <div className="w-full px-8">
      <h1 className="py-4">Employés</h1>
      <table className="table-auto w-3/6">
        <thead className="border-b border-black sticky top-0 bg-white shadow-ysm">
          <tr>
            <th className="text-left pb-3">ID</th>
            <th className="text-left pb-3">Name</th>
            <th className="text-left pb-3">Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) =>
            <tr key={employee.id} className="hover:bg-slate-100 h-8">
              <td className="text-left">{employee.id}</td>
              <td className="text-left">{employee.username}</td>
              <td className="text-left capitalize">{employee.role}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}