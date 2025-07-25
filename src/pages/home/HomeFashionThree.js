import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import FeatureIconTwo from "../../wrappers/feature-icon/FeatureIconTwo";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderTen from "../../wrappers/hero-slider/HeroSliderTen";
import NewProductGrid from "../../wrappers/product/NewProductGrid";

const HomeFashionThree = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Mapchain Store</title>
        <meta
          name="description"
          content="Fashion home of Mapchain Store."
        />
      </MetaTags>
      <LayoutOne
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderTen />
        {/* feature icon */}
        <FeatureIconTwo spaceTopClass="pt-100" spaceBottomClass="pb-60" />
        {/* product grid */}
        <NewProductGrid category="accessories" limit={10} />
        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionThree;
