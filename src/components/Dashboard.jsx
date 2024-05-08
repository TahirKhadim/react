import React from "react";

const Dashboard = () => {
  const logoutHandler = () => {
    localStorage.removeItem("MyToken"); // Remove token from localStorage
    window.location.reload(); // Reload the page to reflect logout
  };

  return (
    <>
      <div className="card my_login_card">
        <div className="card-body">
          <h3>Click here to Logout</h3>
          <button
            type="button"
            className="btn btn-danger"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
