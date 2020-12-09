import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actions } from 'chunks/app/app.reducer';
import { modifiedApp as AppComponent } from './app.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  appLaunch: actions.launch,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent);

export const modifiedApp = withRouter(AppContainer);
