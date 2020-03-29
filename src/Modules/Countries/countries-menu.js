import React from "react";
import PropTypes from "prop-types";
import "./countries.scss";
import { connect } from "react-redux";
// Item Text Country
// Probably will render multiple country
// Solution to use react memo to speed up

const propsCountryItem = (prevProps, nextProps) => {
  return prevProps.label === nextProps.label;
};

/**
 * Render the country items link
 * @param {String} props.onClick
 * @param {String} props.label
 */
function CountryItemComponent(props) {
  return (
    <span className="country-button" onClick={props.onClick}>
      {props.label}
    </span>
  );
}

export const CountryItem = React.memo(CountryItemComponent, propsCountryItem);

CountryItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

/**
 * Integrated with reducers Countries
 * @param {Array} menuHeader
 */
function CountryMenu({ menuHeader }) {
  const itemCountry = item => {
    return item.map(country => (
      <div className="country-item" key={country.code}>
        <CountryItem label={country.name} />
      </div>
    ));
  };
  return menuHeader.map((item, index) => {
    return (
      <div className="country-container" key={index.toString()}>
        <div className="country-link left">{itemCountry(item)}</div>
      </div>
    );
  });
}

CountryMenu.propTypes = {
  menuHeader: PropTypes.array.isRequired
};

const mapToProps = ({ Countries }) => {
  const { menuHeader } = Countries;
  return { menuHeader };
};

export default connect(mapToProps)(CountryMenu);
