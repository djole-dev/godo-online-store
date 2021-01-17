import React from "react";
import "./CategoriesPage.css";
import CategoryComponent from "../../components/category-component/CategoryComponent";

/*<img
        className='categories-image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
      />*/
function CategoriesPage() {
  return (
    <div className='categories'>
      <div>
        <img
          className='categories-image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />

        <div className='categories-section'>
          <CategoryComponent
            title={"Laptops"}
            image={
              "https://image.freepik.com/free-psd/laptop-mock-up-isolated_1310-1458.jpg"
            }
            category={"laptops"}
          />
          <CategoryComponent
            title={"Phones"}
            image={
              "https://image.freepik.com/free-psd/smartphone-mock-up-isolated_1310-1576.jpg"
            }
            category={"phones"}
          />
          <CategoryComponent
            title={"Computer Acessories"}
            image={
              "https://image.freepik.com/free-psd/creative-headphone-mockup_1310-740.jpg"
            }
            category={"computeracessories"}
          />
        </div>

        <div className='categories-section'>
          <CategoryComponent
            title={"TVs"}
            image={
              "https://image.freepik.com/free-psd/smart-tv-mock-up-isolated_1310-1186.jpg"
            }
            category={"tvs"}
          />
          <CategoryComponent
            title={"Tablets"}
            image={
              "https://image.freepik.com/free-psd/tablet-mock-up-isolated_1310-1661.jpg"
            }
            category={"tablets"}
          />
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
