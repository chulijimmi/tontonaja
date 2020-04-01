import React, { Suspense, lazy } from "react";

/**
 * Do to unit test need export component
 */
export const FooterContainer = lazy(() => import("./footer-container"));
export const FooterMenu = lazy(() => import("./footer-menu"));
export const FooterDownload = lazy(() => import("./footer-download"));
export const FooterBottom = lazy(() => import("./footer-bottom"));

// FooterComponent
function FooterComponent() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <div className="wrapper">
        <FooterContainer>
          <FooterMenu />
          <FooterDownload />
        </FooterContainer>
        <FooterBottom />
      </div>
    </Suspense>
  );
}

export default FooterComponent;
