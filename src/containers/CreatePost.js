import { connect } from 'react-redux';
import { getHeroes } from '../actions/postsActions';
import NewPost from '../components/NewPost';

const mapDispatchToProps = dispatch => {
  return {
    searchHeroes: name => {
      dispatch(getHeroes(name));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewPost);