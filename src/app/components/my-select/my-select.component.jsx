import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-spinners/BeatLoader';

import './my-select.scss';
import { createClasses } from './my-select.classes';

class MySelectComponent extends PureComponent {
  static propTypes = {
    search: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    // eslint-disable-next-line react/forbid-prop-types
    selected: PropTypes.object,
    value: PropTypes.string,
    loading: PropTypes.bool,
    focused: PropTypes.bool,
  };

  static defaultProps = {
    data: [],
    selected: null,
    value: '',
    loading: false,
    focused: false,
  };

  state = {
    selected: this.props.selected,
    value: this.props.value,
    focused: this.props.focused,
    loading: this.props.loading,
  };

  timer = null;

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.props.search('Москва');
  }

  componentDidUpdate(prevProps) {
    const { loading } = this.props;

    if (loading !== prevProps.loading) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ loading });
    }
  }

  focusInput = () => {
    if (!this.state.focused) {
      this.inputRef.current.focus();
      this.setState({ focused: true });
    }
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
      loading: true,
    });

    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.props.search(this.state.value);
    }, 300);
  };

  handleFocus = () => {
    this.setState({
      focused: true,
    });
  };

  handleBlur = () =>
    setTimeout(() => {
      this.setState({
        focused: false,
        value: '',
      });
    }, 150);

  handleSelectedClick = () => {
    this.focusInput();
  };

  handleArrowClick = () => {
    this.focusInput();
  };

  handleResultClick = datum => {
    this.setState({
      selected: datum,
      value: '',
      focused: false,
    });
  };

  handleKeyDown = e => {
    const { selected } = this.state;
    if (e.keyCode === 8 && selected) {
      this.setState({
        selected: null,
      });
    }
  };

  render() {
    const { data } = this.props;
    const { value, loading, focused, selected } = this.state;

    const showResults = data.length > 0 && !loading;
    const showEmpty = data.length === 0 && value.length > 0 && !loading;
    const showDropdown = focused && (loading || showResults || showEmpty);
    const showSelected = selected && value.length === 0;

    const classes = createClasses(showDropdown, showSelected);

    return (
      <div className={classes.root}>
        <div className={classes.selectedId}>
          OSM id:
          {selected && selected.osm_id}
          <br />
          InputValue:
          {value}
        </div>
        <div className={classes.control}>
          <input
            className={classes.input}
            ref={this.inputRef}
            value={value}
            type="value"
            placeholder={selected ? '' : 'Type and select...'}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onKeyDown={this.handleKeyDown}
          />

          {showSelected && (
            <div className={classes.selected}>
              <button type="button" onClick={this.handleSelectedClick}>
                {selected.display_name}
              </button>
            </div>
          )}

          {loading && (
            <div className={classes.loader}>
              <Loader size={4} margin={2} color="#000" loading={loading} />
            </div>
          )}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div onClick={this.handleArrowClick} className={classes.arrow} />
        </div>

        {showDropdown && (
          <div className={classes.dropdown}>
            {showResults &&
              data.map(datum => (
                <button
                  type="button"
                  onClick={() => this.handleResultClick(datum)}
                  className={classes.result}
                  key={datum.osm_id + datum.lat + datum.lon}
                >
                  {datum.display_name}
                </button>
              ))}

            {showEmpty && <div className={classes.empty}>No options</div>}
            {loading && <div className={classes.loading}>Loading...</div>}
          </div>
        )}
      </div>
    );
  }
}

export const modifiedMySelect = MySelectComponent;
