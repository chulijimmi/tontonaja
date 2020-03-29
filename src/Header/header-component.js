import React, { Suspense } from "react";

/**
 * Do to unit test need export component
 */
export const HeaderLogo = React.lazy(() => import("./header-logo"));
export const HeaderMenu = React.lazy(() => import("./header-menu"));
export const HeaderContainer = React.lazy(() => import("./header-container"));

// HeaderComponent
// Integrated with modules countries, genres, and searchs
function HeaderComponent() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <HeaderContainer>
        <HeaderLogo title={"Tonton AJa"} />
        <HeaderMenu />
      </HeaderContainer>
    </Suspense>
  );
}

export default HeaderComponent;
