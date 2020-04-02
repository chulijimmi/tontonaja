import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { countryLoaded } from "../Modules/Countries/countries-action";
import { genreLoaded } from "../Modules/Genres/genres-action";
/**
 * Do to unit test need export component
 */
export const HeaderLogo = React.lazy(() => import("./header-logo"));
export const HeaderMenu = React.lazy(() => import("./header-menu"));
export const HeaderContainer = React.lazy(() => import("./header-container"));

// HeaderComponent
// Integrated with modules countries, genres, and searchs
function HeaderComponent({ countryLoaded, genreLoaded }) {
  useEffect(() => {
    countryLoaded();
    genreLoaded();
  });
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <HeaderContainer>
        <HeaderLogo title={"Tonton AJa"} />
        <HeaderMenu />
      </HeaderContainer>
    </Suspense>
  );
}

const mtp = ({}) => {
  return {};
};

export default connect(mtp, { countryLoaded, genreLoaded })(HeaderComponent);
