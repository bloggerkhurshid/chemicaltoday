// // App.js
import React from "react";
import "./employees.css"; // We'll add custom styles here

const employees = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    imageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    link: "/visiting_card/manjunath",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "UI/UX Designer",
    imageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    link: "https://example.com",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "Frontend Developer",
    imageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    link: "https://example.com",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Project Manager",
    imageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    link: "https://example.com",
  },
  {
    id: 5,
    name: "Daniel Lee",
    designation: "Backend Developer",
    imageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    link: "https://example.com",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    designation: "Business Analyst",
    imageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    link: "https://example.com",
  },
  {
    id: 7,
    name: "Chris Evans",
    designation: "DevOps Engineer",
    imageUrl:
      "https://media.istockphoto.com/id/1705503967/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=_f2sAtCUkBBgKK8oxDnzGs2CLvYBTN5jfOLl1glQ8yw=",
    link: "https://example.com",
  },
  {
    id: 8,
    name: "Anna Brown",
    designation: "HR Manager",
    imageUrl:
      "https://media.istockphoto.com/id/1705503967/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=_f2sAtCUkBBgKK8oxDnzGs2CLvYBTN5jfOLl1glQ8yw=",
    link: "https://example.com",
  },
  {
    id: 9,
    name: "James Miller",
    designation: "Product Owner",
    imageUrl:
      "https://media.istockphoto.com/id/1705503967/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=_f2sAtCUkBBgKK8oxDnzGs2CLvYBTN5jfOLl1glQ8yw=",
    link: "https://example.com",
  },
  {
    id: 10,
    name: "Olivia Taylor",
    designation: "Marketing Lead",
    imageUrl:
      "https://media.istockphoto.com/id/1705503967/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=_f2sAtCUkBBgKK8oxDnzGs2CLvYBTN5jfOLl1glQ8yw=",
    link: "https://example.com",
  },
  {
    id: 11,
    name: "William Anderson",
    designation: "QA Engineer",
    imageUrl:
      "https://media.istockphoto.com/id/1705503967/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=_f2sAtCUkBBgKK8oxDnzGs2CLvYBTN5jfOLl1glQ8yw=",
    link: "https://example.com",
  },
  {
    id: 12,
    name: "Sophia Thomas",
    designation: "Content Writer",
    imageUrl:
      "https://media.istockphoto.com/id/1705503967/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=_f2sAtCUkBBgKK8oxDnzGs2CLvYBTN5jfOLl1glQ8yw=",
    link: "https://example.com",
  },
];

function Employees() {
  return (
    <div className="app">
      <h1 className="heading">Employees Details</h1>
      <div className="grid">
        {employees.map((employee) => (
          <div key={employee.id} className="card">
            <a href={employee.link} target="_blank" rel="noopener noreferrer">
              <img
                src={employee.imageUrl}
                alt={employee.name}
                className="employee-img"
              />
            </a>
            <h2 className="employee-name">{employee.name}</h2>
            <p className="employee-designation">{employee.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Employees;
