import srutiLogo from "../assets/partners/sruti.png";
import apforestLogo from "../assets/partners/apforest.png";
import apLogo from "../assets/partners/ap.png";
import apsacsLogo from "../assets/partners/apsacs.png";
import azimLogo from "../assets/partners/azim.png";
import creLogo from "../assets/partners/cre.png";
import goiLogo from "../assets/partners/goi.png";
import goonjLogo from "../assets/partners/goonj.png";
import grengrantLogo from "../assets/partners/grengrant.png";
import heiferLogo from "../assets/partners/heifer.png";
import icrisatLogo from "../assets/partners/icrisat.png";
import irdwsiLogo from "../assets/partners/irdwsi.png";
import irrigationLogo from "../assets/partners/irrigation.png";
import knhLogo from "../assets/partners/knh.png";
import nabardLogo from "../assets/partners/nabard.png";
import nabinLogo from "../assets/partners/nabin.png";
import nationalhealthLogo from "../assets/partners/nhealth.png";
import nskLogo from "../assets/partners/nsk.png";
import tataprojectLogo from "../assets/partners/tataproject.png";
import tatatrustLogo from "../assets/partners/tatatrust.png";
import waterLogo from "../assets/partners/water.png";

// Shared by the home-page marquee and the Partners page.
// `scale` enlarges logos whose image files carry a lot of empty padding.
export const partners = [
  { name: "Sruti Organisation", logo: srutiLogo, type: "NGO" },
  { name: "Andhra Pradesh Forest Department", logo: apforestLogo, type: "Government" },
  { name: "Andhra Pradesh Government", logo: apLogo, type: "Government" },
  { name: "A.P. State AIDS Control Society", logo: apsacsLogo, type: "Government" },
  { name: "Azim Premji Foundation", logo: azimLogo, type: "Foundation", scale: 1.5 },
  { name: "CReNIEO", logo: creLogo, type: "NGO" },
  { name: "Government of India", logo: goiLogo, type: "Government" },
  { name: "Goonj", logo: goonjLogo, type: "NGO", scale: 1.9 },
  { name: "Green Grant", logo: grengrantLogo, type: "Foundation" },
  { name: "Heifer International", logo: heiferLogo, type: "International" },
  { name: "ICRISAT", logo: icrisatLogo, type: "International" },
  { name: "IRDWSI – Integrated Rural Development of Weaker Sections in India", logo: irdwsiLogo, type: "NGO" },
  { name: "Department of Irrigation", logo: irrigationLogo, type: "Government" },
  { name: "Kindernothilfe (KNH)", logo: knhLogo, type: "International" },
  { name: "NABARD", logo: nabardLogo, type: "Institution" },
  { name: "NABFINS", logo: nabinLogo, type: "Institution" },
  { name: "National Health Mission", logo: nationalhealthLogo, type: "Government" },
  { name: "NSKFDC", logo: nskLogo, type: "Government" },
  { name: "Tata Projects", logo: tataprojectLogo, type: "Corporate" },
  { name: "Tata Trusts", logo: tatatrustLogo, type: "Foundation" },
  { name: "Department of Water Resources", logo: waterLogo, type: "Government" },
];
