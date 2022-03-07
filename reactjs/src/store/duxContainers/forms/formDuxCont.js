import { connect } from 'react-redux';
import {
  fetchProd, createProd, updateProd, deleteProd,
} from '../../products/actions';

function mapStateToProps(state, props) {
  const { match: { params: { id } } } = props;
  const { products: { byId: { [id]: { data: prod } = {} } } } = state;
  return { prod };
}
// Set the actions that are needed
const mapDispatchToProps = {
  fetchProd, createProd, updateProd, deleteProd,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
