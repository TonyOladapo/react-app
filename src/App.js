import "./App.css";
import Form from "./components/Form";
import User from "./components/User";
import { connect } from "react-redux";

function App(props) {
  //variable users contains data passed in by connect.
  const users = props.users;

  return (
    <div>
      {/*Form component*/}
      <Form />

      {/*Maps through the users array and renders the User component for each item in the array*/}
      {users.map((user) => {
        return <User name={user.name} />;
      })}
    </div>
  );
}

//function to read from reducer
const mapStateToProps = (state) => ({
  users: state.users,
});

//connect passes the data read from the reducer to the App component as a prop.
export default connect(mapStateToProps)(App);
