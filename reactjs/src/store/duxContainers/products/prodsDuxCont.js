// To connect to the component
import { connect } from 'react-redux';
// Gets the action 'fetchProds' from products/actions
import { fetchProds } from '../../products/actions';

// Map the state to props
function mapStateToProps(state) {
  const {
    products: { byId, allIds },
  } = state;
  return {
    products: allIds.map((id) => byId[id].data),
  };
}

// Set the actions that are needed in this component.
const mapDispatchToProps = { fetchProds };

// Using connect, export the mapStateToProps and mapDispatchToProps
export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
