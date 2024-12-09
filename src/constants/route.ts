export const routes = {
  signIn: '/auth/sign-in',
  signUp: '/auth/sign-up',
  otpVerify: '/auth/otp-verify',

  //PROTECT
  profile: '/profile',
  message: '/message',
  taskerProfile: '/tasker/',

  //PUBLIC
  home: '/',
  exploreJob: '/job/explore-jobs',
  adsCenter: '/listing/ads-center',
  howItWorks: '/how-taskbear-works',
};

export const api = {
  //AUTH
  sign_in: 'auth/web-token',
  sign_up: 'auth/register',
  auth_verify_otp: 'auth/verify-otp',
  auth_resend_otp: 'auth/resend-otp',
  profile: 'user',
  google_sign_in: 'auth/google-reg',

  //PUBLIC
  most_popular_ads: 'public/most-popular-ads',
  category: 'public/categories',
  public_job: 'public/jobs?',
  public_listing: 'public/listings?',

  //PROTECTED
  categories: 'categories',
  image_upload: 'upload',

  //POSTER
  poster_address: 'poster/address',
  create_job: 'job/create-job',
  edit_job: 'job/edit-job-1/',
  job_by_id: 'job/',
  listing_by_id: 'listing/listing/',
  posted_jobs: 'poster/posted-jobs-web?',
  direct_offer: 'offers/direct-offer?receiverId=',

  //TASKER
  tasker_profile: 'public/user/',

  //JOB
  add_comment: 'job/discussion?id=',
  add_reply: 'job/discussion-reply/',
};
