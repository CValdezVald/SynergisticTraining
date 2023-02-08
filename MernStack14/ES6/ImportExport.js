// we will be using import and export keywords to share info between files


//exported module js
export const sessionName= "ES6";
export const valueOfPi = 3.1456;

export default  user ={name:"name"}; // default export


import{sessionName} from "./ImportExport.js";// named import

import user from "./ImportExport.js"// default import

import user,{sessionName,valueOfPi} from "./ImportExport.js"// named and default import