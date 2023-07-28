
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewAllForms = () => {
  const [contactForms, setContactForms] = useState([]);

  useEffect(() => {
    axios.get('/api/contact')
      .then((response) => {
        setContactForms(response.data);
      })
      .catch((err) => {
        alert('Failed to fetch contact forms.');
      });
  }, []);

  return (
    <div>
      <h1>All Contact Forms</h1>
      <ul>
        {contactForms.map((form) => (
          <li key={form._id}>
            {/* Display form data */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewAllForms;