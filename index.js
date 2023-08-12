const element = (
  // Write your code here.
  <div className="bg-container">
    <div>
      <h1 className="heading">Congratulations</h1>
    </div>
    <div className="congrats-card">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="profile-heading">Kiran V</h1>
      <p className="profile-details">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
