import ReactDOM from 'react-dom';
import React from 'react';
import './bootstrap.min.css';
//import "font-awesome/css/font-awesome.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";


//欢迎界面
// import WelcomeMod from './WelcomeMod';
// ReactDOM.render(<WelcomeMod/>,document.getElementById("welcome"));




// import App from './App';
// import BannerMod from './BannerMod';
// import CommunityPage from './CommunityPage';
// import PostList from './Postlist';

import UploadImage from './ImageUploadMod';
ReactDOM.render(<UploadImage/>,document.getElementById('uploadTool'));
// import CommunityRightPanel from './CommunityRightPanel'

// ReactDOM.render(<BannerMod/>,document.getElementById('welcome'));

 // ReactDOM.render(<CommunityPage/>,document.getElementById("CommunityPage"));
 // ReactDOM.render(<PostList/>,document.getElementById("CommunityContentPanel"))
//ReactDOM.render(<CommunityRightPanel/>,document.getElementById("CommunityRightPanel"));

//ReactDOM.render(<Login/>,document.getElementById("CommunityPage"));

//ReactDOM.render(<Login/>,document.getElementById('loginPage'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

