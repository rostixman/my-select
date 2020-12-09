import { connect } from 'react-redux';
import { modifiedMySelect as MySelectComponent } from './my-select.component';
import { actions as searchActions } from '../../../chunks/search';

const mapStateToProps = state => ({
  data: state.search.data,
  loading: state.search.meta.fetching,
});

const mapDispatchToProps = {
  search: searchActions.request,
};

const MySelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MySelectComponent);

export const modifiedMySelect = MySelectContainer;
