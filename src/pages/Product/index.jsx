import ProductListings from "./ProductListings";
import SideBar from "./SideBar";

const ProductPage = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto flex gap-x-6 pt-11 px-8 xl:mt-0 mt-3 overflow-hidden">
        <SideBar />
        <ProductListings />
      </div>
    </>
  );
};

export default ProductPage;
