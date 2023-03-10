import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header-left">
          <svg
            width="33"
            height="30"
            viewBox="0 0 33 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9844 27.4376C14.179 26.9367 14.2717 26.4021 14.2573 25.865C14.2869 24.3764 14.6848 22.9184 15.4153 21.621C16.144 20.3258 17.1831 19.2321 18.4393 18.438C18.9044 18.1885 19.3141 17.8473 19.6435 17.4349C19.9729 17.0225 20.2153 16.5476 20.3559 16.0389C20.4965 15.5301 20.5324 14.9982 20.4615 14.4751C20.3906 13.9521 20.2143 13.4489 19.9433 12.996C19.5813 12.391 19.0603 11.895 18.4393 11.565C18.0833 11.318 17.7413 11.052 17.4153 10.767L16.5983 9.967C15.1012 8.3932 14.2617 6.30708 14.2513 4.135C14.2667 3.59777 14.1745 3.06288 13.9799 2.56188C13.7853 2.06089 13.4923 1.60395 13.1183 1.218C12.7459 0.832488 12.2997 0.52595 11.8063 0.316684C11.3128 0.107418 10.7823 -0.000286365 10.2463 5.71818e-07C9.71061 0.000756001 9.18052 0.108938 8.68739 0.318146C8.19426 0.527354 7.74809 0.833339 7.37528 1.218C7.00191 1.60462 6.70939 2.06183 6.51485 2.56287C6.3203 3.06391 6.22764 3.59872 6.24228 4.136C6.25102 4.83344 6.44312 5.5163 6.79928 6.116C7.15422 6.71469 7.66098 7.20902 8.26828 7.549C10.7273 9.105 12.4383 12.08 12.4383 15.006C12.4322 17.1592 11.6087 19.2298 10.1343 20.799L8.27428 22.451C7.66728 22.79 7.16028 23.284 6.80428 23.884C6.44728 24.483 6.25628 25.167 6.24728 25.865C6.23199 26.4022 6.32435 26.9371 6.51893 27.438C6.71352 27.939 7.00638 28.396 7.38028 28.782C7.75272 29.1674 8.19896 29.4739 8.69238 29.6832C9.18581 29.8924 9.71632 30.0002 10.2523 30C10.7881 29.9994 11.3184 29.8913 11.8117 29.682C12.305 29.4728 12.7514 29.1668 13.1243 28.782C13.4975 28.3955 13.7899 27.9384 13.9844 27.4376Z"
              fill="#009E61"
            />
            <path
              d="M19.4163 6.36C18.9753 5.698 18.7403 4.919 18.7403 4.123C18.741 3.05673 19.1634 2.034 19.9153 1.278C20.5691 0.62024 21.4314 0.210504 22.3543 0.119089C23.2772 0.0276751 24.2032 0.260281 24.9733 0.777001C25.633 1.2199 26.1466 1.84836 26.4493 2.583C26.752 3.31848 26.831 4.12692 26.6765 4.9071C26.5219 5.68728 26.1406 6.40452 25.5803 6.969C25.0217 7.53193 24.308 7.91563 23.5304 8.07112C22.7527 8.22661 21.9464 8.14685 21.2143 7.842C20.4815 7.53685 19.8557 7.02107 19.4163 6.36Z"
              fill="#009E61"
            />
            <path
              d="M20.5213 22.518C21.1803 22.076 21.9553 21.84 22.7473 21.84V21.838C23.2738 21.8386 23.7949 21.9432 24.2809 22.1457C24.7669 22.3482 25.2081 22.6446 25.5793 23.018C26.2352 23.6779 26.6432 24.544 26.7343 25.47C26.8254 26.3959 26.594 27.3249 26.0793 28.1C25.6399 28.762 25.0137 29.2785 24.2803 29.584C23.5482 29.8888 22.7418 29.9686 21.9642 29.8131C21.1865 29.6576 20.4729 29.2739 19.9143 28.711C19.3538 28.1464 18.9724 27.429 18.8178 26.6486C18.6632 25.8683 18.7423 25.0596 19.0453 24.324C19.348 23.5894 19.8617 22.9609 20.5213 22.518Z"
              fill="#009E61"
            />
            <path
              d="M32.3243 12.758C32.7641 13.4198 32.9991 14.1974 32.9993 14.9931C32.9986 16.0597 32.5762 17.0827 31.8243 17.839C31.453 18.2122 31.0118 18.5086 30.5258 18.7111C30.0399 18.9136 29.5187 19.0182 28.9923 19.019C28.1994 19.019 27.4245 18.783 26.7663 18.341C26.1066 17.8981 25.593 17.2696 25.2903 16.535C24.9873 15.7994 24.9082 14.9907 25.0628 14.2104C25.2174 13.43 25.5988 12.7126 26.1593 12.148C26.718 11.5849 27.4318 11.2011 28.2097 11.0456C28.9875 10.8901 29.7941 10.9699 30.5263 11.275C31.2592 11.5804 31.885 12.0966 32.3243 12.758Z"
              fill="#009E61"
            />
            <path
              d="M1.78026 11.647C2.43926 11.205 3.21326 10.969 4.00626 10.969C4.53261 10.9701 5.05357 11.075 5.53934 11.2776C6.02511 11.4803 6.46617 11.7767 6.83726 12.15C7.49287 12.8097 7.90068 13.6754 7.99178 14.601C8.08288 15.5265 7.85169 16.4552 7.33726 17.23C6.89793 17.8914 6.27217 18.4075 5.53926 18.713C4.8069 19.0164 4.00093 19.0953 3.22361 18.9399C2.44629 18.7845 1.73266 18.4017 1.17326 17.84C0.612965 17.2755 0.231653 16.5583 0.0770756 15.7781C-0.0775017 14.9979 0.00152573 14.1895 0.304262 13.454C0.606855 12.719 1.12048 12.0902 1.78026 11.647Z"
              fill="#009E61"
            />
          </svg>
          <ul className="header-left__options">
            <li>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 4.33333V7M7 9.66667H7.00667M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z"
                  stroke="#374151"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Disclaimer !</span>
            </li>
            <li>
              <span>All Categories</span>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <a
            href="https://github.com/ln-dev7/cameroon-logos"
            className="github"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 0C3.5816 0 0 3.67194 0 8.20291C0 11.8265 2.292 14.9015 5.4712 15.9857C5.8712 16.0611 6.0168 15.808 6.0168 15.5902C6.0168 15.3961 6.0104 14.8794 6.0064 14.1956C3.7808 14.691 3.3112 13.0958 3.3112 13.0958C2.948 12.1475 2.4232 11.8953 2.4232 11.8953C1.6968 11.3876 2.4784 11.3974 2.4784 11.3974C3.2808 11.4548 3.7032 12.2425 3.7032 12.2425C4.4168 13.4955 5.576 13.1335 6.0312 12.9239C6.1048 12.394 6.3112 12.0329 6.54 11.8282C4.764 11.621 2.896 10.9167 2.896 7.77381C2.896 6.87875 3.208 6.14584 3.7192 5.57261C3.6368 5.36543 3.3624 4.53097 3.7976 3.40252C3.7976 3.40252 4.4696 3.18142 5.9976 4.24272C6.65021 4.06052 7.32355 3.96772 8 3.96675C8.68 3.97002 9.364 4.06092 10.0032 4.24272C11.5304 3.18142 12.2008 3.40171 12.2008 3.40171C12.6376 4.53097 12.3624 5.36543 12.2808 5.57261C12.7928 6.14584 13.1032 6.87875 13.1032 7.77381C13.1032 10.9249 11.232 11.6185 9.4504 11.8216C9.7376 12.0747 9.9928 12.575 9.9928 13.3407C9.9928 14.4364 9.9832 15.3216 9.9832 15.5902C9.9832 15.8097 10.1272 16.0652 10.5336 15.9849C12.1266 15.438 13.5115 14.3924 14.4924 12.996C15.4733 11.5995 16.0007 9.92286 16 8.20291C16 3.67194 12.4176 0 8 0Z"
                fill="#151515"
              />
            </svg>
            <span>Contribute on Github</span>
          </a>
          <button className="upload">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83333 13.3333C3.99238 13.3333 2.5 11.8409 2.5 9.99999C2.5 8.41078 3.61214 7.08133 5.10059 6.74745C5.03474 6.45328 5 6.14736 5 5.83332C5 3.53214 6.86548 1.66666 9.16667 1.66666C11.1828 1.66666 12.8644 3.09853 13.2501 5.0008C13.2778 5.00026 13.3055 4.99999 13.3333 4.99999C15.6345 4.99999 17.5 6.86547 17.5 9.16666C17.5 11.1825 16.0685 12.8639 14.1667 13.25M7.5 15.8333L10 18.3333M10 18.3333L12.5 15.8333M10 18.3333V8.33332"
                stroke="#009E61"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span>Upload logo</span>
          </button>
        </div>
      </div>
    </header>
  );
}
