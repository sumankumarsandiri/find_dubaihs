const server = "http://localhost:8000"

const apiList = {


    // User APIs
      // user auth
    signup : `${server}/auth/signup`,
    login:`${server}/auth/login`,
    googleCallback:`${server}/auth/google/callback`,
    loginSuccess:`${server}/auth/login/success`,
    sendOtp:`${server}/auth/sendotp`,
    verifyOtp: `${server}/auth/otpverify`,
    reviewRating:`${server}/get-ratings-reviews`,
    submitReview:`${server}/submit-review`,

    // Admin APIs
    adminServicesSearch: `${server}/services/search`,
     
      // services apis
    gettingServices: `${server}/services/search`,
    addingService: `${server}/services/addservice`,
    gettingServiceId: `${server}/services/service`,
    editingService: `${server}/services/edit`,
    deletingService: `${server}/services/delete`,
    // categories apis
    gettingCategories: `${server}/services/categories`,
    addingCategories: `${server}/services/addcategory`,
    gettingCategoriesId: `${server}/services/category`,
    editingCategories: `${server}/services/editcategory`,
    deletingCategories: `${server}/services/deletecategory`,
    getCategoryImage: `${server}/images`,

    // User data
    userGetDocument: `${server}/getData`,
    userUploadDocument: `${server}/CreateUsers`,
    userDeleteDocument: (id) => `${server}/deleteUser/${id}`, // Updated to be a function
    



    //admin apis

    adminServicesSearch:`${server}/services/search`,




    //vendor apis

    categories: `${server}/api/vendors/categories`,
    serviceNames: (category) => `${server}/api/vendors/serviceNames?category=${category}`,
    AddVendor:`${server}/api/vendors/register`,
    vendorPagination: (page, rowsPerPage) => `${server}/api/vendors?page=${page}&limit=${rowsPerPage}`,
    deleteVendor: (id) => `${server}/api/vendors/${id}`,
    updateVendor: (id) => `${server}/api/vendors/${id}`,
    LoginVendor:`${server}api/vendors/login`,
    VendorLogin: `${server}/auth/Vendorlogin`,
    VendorSignup: `${server}/auth/Vendorsignup`


}

export default apiList;
