//console.log("App is running!");

var user = {
  name: "Navin",
  age: "23",
  location: "Bangalore",
};

function getLocation(location) {
  if (location) {
    return <p>Location : {location}</p>;
  }
}

var template = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
