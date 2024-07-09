import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Registration } from './components/registration';

import Congratulations from './components/congratulations';
import Home from './components/Home';

import ForgotPassword from './components/forgot password/ForgotPassword';
import NewPassword from './components/new password/NewPassword';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import PasswordSet from './components/password set/PasswordSet';
import VerifyCode from './components/verifycode/VerifyCode';
import AdminServices from './components/admin/AdminServices';
import AddCategory from './components/admin/AddCategory';
import Navbar from './common/Navbar/Navbar';


import { Jobservice } from './components/Jobservice/jobservice';
import Apply from './components/detailscomponent/details';
import Button from './components/readytoapply/readytoapply';
import { JobcompanyPage } from './components/jobcompanycomponent/jobcompany';



import { BeautySpaComponent } from './components/beautySpa/beautySpa.component';
import { FaceSpaComponent } from './components/faceSpa/faceSpa.component';
import { HaircareComponent } from './components/haircare/haircare.component';
import { MakeupComponent } from './components/makeup/makeup.component';
import { FaceTreatementComponent } from './components/faceTreatement/faceTreatement.component';



import { RealEstateComponent } from './components/realesatecomponent/realestatepage/realestatepage';
import { RealestatePage } from './components/realesatecomponent/realestatesale/realestatesale';
import { RealestateSinglepageComponent } from './components/realesatecomponent/rs-singlepage/rs-singlepage';



import HospitalHome from './components/hospitals/HospitalHome';
import HospitalList from './components/hospitals/HospitalList';
import HospitalDisplay from './components/hospitals/HospitalDisplay';
import Hspdisplydental from './components/hospitals/hspdisplydental';
import Hspdisplyneuro from './components/hospitals/hspdisplyneuro';
import Hspdisplygenral from './components/hospitals/hspdisplygenral';


import Packages from './components/packages/packages';
import Hpackages from './components/hpackages/hpackages';
import Dpackages from './components/dpackages/dpackages';
import Tpackages from './components/tpackages/tpackages';
import Formpackage from './components/formpackage/formpackage';



import { ExploreMore } from './components/Explore_more/Explore_more';

import { BiryaniPage } from './components/Restaurent_service/Biryani_page/Biryani_page';
import { RestaurantComponent } from './components/Restaurent_service/Restaurent/Restaurent';

import { BawarchiBiryaniComponent } from './components/Restaurent_service/Bawarchi/Bawarchi';

import Footer from './common/Footer/Footer';


import Collapse from './components/admin/Collapse';
import VendorForm from './components/admin/VendorForm';
// import VendorLogin from './components/admin/VendorLogin';
import VendorList from './components/admin/VendorList';
import AdminWelcomePage from './components/admin/AdminWelcomePage';

import { UserGetDocument } from './components/user/userdocument/userGetDocument';
import UserDocument from './components/user/userdocument/useruploaddocument';
import VendorLogin from './components/vendor/vendor login/VendorLogin';
import VendorRegistration from './components/vendor/vendor registration/vendorRegistration';
import Sidebar from './common/Navbar/sidebar';
import { TravelHomepage } from './components/Travel_Services/TravelHomePage';
import { ReviewRatings } from './reviewrating/reviewrating';
import CarMain from './components/Travel_Services/Car/CarMain/CarMain';
import CarList from './components/Travel_Services/Car/CarList/CarList';
import CarBooking from './components/Travel_Services/Car/CarBooking/CarBooking';
import BusHome from './components/Travel_Services/Bus/BusHome/BusHome';
import BusSearchResults from './components/Travel_Services/Bus/BusSearchResults/BusSearchResults';
import BusBooking from './components/Travel_Services/Bus/BusBooking';








function App() {
  const location = useLocation();
  const noNavFooterPaths = [
    '/registervendors',
    '/loginvendors',
    '/vendorslist',
    '/admin',
  ];

  const showNavFooter = !noNavFooterPaths.some(path => location.pathname.startsWith(path));



  return (
    <div className="App">
      {showNavFooter && <Navbar />}
      <Routes>
        {/* user routes */}
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/createpassword' element={<NewPassword />} />
        <Route path='/verifyotp' element={<VerifyCode />} />
        <Route path='/passwordset' element={<PasswordSet />} />
        <Route exact path="/explore-more" element={<ExploreMore />} />
        <Route path="/biryani_page" element={<BiryaniPage></BiryaniPage>}></Route>
        <Route path='/restaurent' element={<RestaurantComponent></RestaurantComponent>}></Route>
        <Route path='/bawarchi_biryani' element={<BawarchiBiryaniComponent></BawarchiBiryaniComponent>}></Route>
        <Route path='/travel' element={<TravelHomepage />} />
        <Route path='/packages' element={<Packages></Packages>}></Route>
        <Route path='/hpackages' element={<Hpackages></Hpackages>}></Route>
        <Route path='/dpackages' element={<Dpackages></Dpackages>}></Route>
        <Route path='/tpackages' element={<Tpackages></Tpackages>}></Route>
        <Route path='/formpackage' element={<Formpackage></Formpackage>}></Route>
        <Route path="/hospitalhome" element={<HospitalHome />} />
        <Route path="/hospitallist" element={<HospitalList />} />
        <Route path="/hospitaldisplay" element={<HospitalDisplay />} />
        <Route path="/hspdental" element={<Hspdisplydental />} />
        <Route path="/hspneuro" element={<Hspdisplyneuro />} />
        <Route path="/hspgenral" element={<Hspdisplygenral />} />
        <Route path='/realestate' element={<RealEstateComponent></RealEstateComponent>}></Route>
        <Route path='/sale' element={<RealestatePage></RealestatePage>}></Route>
        <Route path='/villas' element={<RealestateSinglepageComponent></RealestateSinglepageComponent>}></Route>
        <Route path='/beauty' element={<BeautySpaComponent></BeautySpaComponent>}></Route>
        <Route path='/facespa' element={<FaceSpaComponent></FaceSpaComponent>}></Route>
        <Route path='/haircare' element={<HaircareComponent></HaircareComponent>}></Route>
        <Route path='/makeup' element={<MakeupComponent></MakeupComponent>}></Route>
        <Route path='/faceTreatement' element={<FaceTreatementComponent></FaceTreatementComponent>}></Route>

        <Route path="/review-rating" element={<ReviewRatings />} />

        <Route path='/Job-Service' element={<Jobservice></Jobservice>}></Route>
        <Route path='/job-apply' element={<Apply></Apply>}></Route>
        <Route path='/job-readytoapply' element={<Button></Button>}></Route>
        <Route path='/job-companies' element={<JobcompanyPage></JobcompanyPage>}></Route>





        {/* admin routes */}

        {/* <Route path='/dashboard' element={<Dashboard/>} /> */}
        <Route path='/admin/services' element={<AdminServices/>} />
        <Route path='/admin/categories' element={<AddCategory/>} />



        <Route path="/user/GetDocument" element={<VendorData />} />
        <Route path="/user/UploadDocument" element={<UserDocument />} />
        <Route path="/vendor/login" element={<VendorLogin />} />
        <Route path="/vendor/register" element={<VendorRegistration />} />






        {/* vendor route */}

        <Route path="/registervendors" element={<><Collapse /><VendorForm /> </>} />
        <Route path="/loginvendors" element={<> <Collapse /> <VendorLogin /></>} />
        <Route path="/vendorslist" element={<><Collapse /> <VendorList /></>} />
        <Route path="/admin" element={<> <Collapse /> <AdminWelcomePage /></>} />

        {/* NarsimhaTReddy */}
        <Route path='/carmain' element={<CarMain></CarMain>}></Route>
        <Route path='/carlist' element={<CarList />}></Route>
        <Route path='/carbooking' element={<CarBooking />}></Route>
        <Route path="/bushome" element={<BusHome />} />
        <Route path="/bussearch" element={<BusSearchResults />} />
        <Route path='/busbooking' element={<BusBooking />}></Route>



      </Routes>
     {/* <Footer/> */}
      {showNavFooter && <Footer />}


    </div >
  );
}

export default App;

function VendorData() {
  return (
    <div>
      <Sidebar></Sidebar>
      <UserGetDocument></UserGetDocument>
    </div>
  )
}
