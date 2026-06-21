import gallery1Jpg from '../assets/gallery/85423AM-gallery.jpg';
import gallery1Webp from '../assets/gallery/85423AM-gallery.webp';
import gallery2Jpg from '../assets/gallery/85424AM-gallery.jpg';
import gallery2Webp from '../assets/gallery/85424AM-gallery.webp';
import gallery3Jpg from '../assets/gallery/85425AM-gallery.jpg';
import gallery3Webp from '../assets/gallery/85425AM-gallery.webp';
import gallery4Jpg from '../assets/gallery/85426AM-gallery.jpg';
import gallery4Webp from '../assets/gallery/85426AM-gallery.webp';
import gallery5Jpg from '../assets/gallery/85427AM1-gallery.jpg';
import gallery5Webp from '../assets/gallery/85427AM1-gallery.webp';
import gallery6Jpg from '../assets/gallery/85427AM-gallery.jpg';
import gallery6Webp from '../assets/gallery/85427AM-gallery.webp';
import gallery7Jpg from '../assets/gallery/85428AM-gallery.jpg';
import gallery7Webp from '../assets/gallery/85428AM-gallery.webp';
import gallery8Jpg from '../assets/gallery/85429AM-gallery.jpg';
import gallery8Webp from '../assets/gallery/85429AM-gallery.webp';
import gallery9Jpg from '../assets/gallery/85430AM-gallery.jpg';
import gallery9Webp from '../assets/gallery/85430AM-gallery.webp';
import gallery10Jpg from '../assets/gallery/85433AM1-gallery.jpg';
import gallery10Webp from '../assets/gallery/85433AM1-gallery.webp';

export const THEMES = {
  'Warm Tan': { main: '#a9783f', dark: '#875f31' },
  'Deep Maroon': { main: '#8c3f44', dark: '#6e3034' },
  'Royal Blue': { main: '#3f5a8c', dark: '#30456e' },
};

export const navLinks = ['About', 'Our Arms', 'The Founder', 'Events', 'Media'];
export const utilityLinks = ['Crusades', 'Campus Invasion', 'Bible School', 'Testimonies'];

export const events = [
  {
    title: 'Medical Outreach',
    location: 'Makoko, Lagos',
    date: 'Sat, March 14, 2026',
    time: '9:00 AM – 3:00 PM',
    body: 'Free medical screening, treatment, and Gospel ministry to the riverine community of Makoko — bringing physical healing alongside the message of salvation to families who lack access to basic healthcare.',
    tag: 'Outreach',
  },
  {
    title: 'Campus Crusade',
    location: 'Igbinedion University, Okada',
    date: 'Sat, April 18, 2026',
    time: '5:00 PM – 8:00 PM',
    body: 'An evening of worship, the Word, and an altar call for students — igniting revival on campus and raising a generation of believers who are bold for Christ.',
    tag: 'Crusade',
  },
  {
    title: 'Crusade',
    location: 'University of Ibadan, Oyo State',
    date: 'Sat, May 23, 2026',
    time: '4:00 PM – 7:30 PM',
    body: 'A citywide crusade reaching students and residents around the University of Ibadan with the Gospel, prayer for healing, and deliverance.',
    tag: 'Crusade',
  },
];

export const testimonials = [
  {
    name: 'Mrs. Eunice A.',
    location: 'Lagos',
    quote: 'I came to the medical outreach in Makoko for a check-up and left with my health restored and my soul saved. Healing Nations gave me hope I had stopped believing in.',
  },
  {
    name: 'David O.',
    location: 'Igbinedion University, Okada',
    quote: 'The Campus Crusade changed the direction of my life. I gave my life to Christ that night and joined the campus fellowship — I have never been the same since.',
  },
  {
    name: 'Pastor John K.',
    location: 'Ibadan',
    quote: "We invited Healing Nations for a crusade in our community and saw deliverance, healing, and salvation testimonies we still talk about today. A truly anointed ministry.",
  },
];

export const arms = [
  { num: '01', title: 'Campus Invasion', body: 'Reaching students in tertiary institutions, igniting revival, and raising young believers who are on fire for God.' },
  { num: '02', title: 'Crusades & Outreaches', body: 'Taking the Gospel to cities and communities through evangelistic meetings — bringing salvation, healing, and deliverance to many.' },
  { num: '03', title: 'Discipleship & Bible School', body: 'Grounding believers in sound doctrine, equipping them for spiritual growth, and raising leaders who will advance the Kingdom.' },
];

export const facts = [
  { label: 'Founded by', value: 'Pastor Edafe Kelvin Ezebue' },
  { label: 'Origin', value: 'A campus-driven vision' },
  { label: 'Reach', value: 'Cities & nations, globally' },
  { label: 'Roots', value: 'Delta State, Nigeria' },
];

export const credentials = [
  'Two-time President, Redeemed Christian Fellowship',
  'President, Christian Community — Igbinedion University Chapter',
  'President, CANS — South-South Region',
  'Trained Medical Doctor & seasoned teacher of the Word',
];

export const links = ['Find a Crusade', 'Join Campus Fellowship', 'Apply to Bible School', 'Partner With Us', 'Prayer Request', 'Watch Sermons'];

export const searchIndex = [
  { label: 'About Us', target: '#story' },
  { label: 'Our Story', target: '#story' },
  { label: 'Our Three Arms', target: '#arms' },
  { label: 'Campus Invasion', target: '#arms' },
  { label: 'Crusades & Outreaches', target: '#arms' },
  { label: 'Discipleship & Bible School', target: '#arms' },
  { label: 'The Founder', target: '#founder' },
  { label: 'Dr. Edafe Kelvin Ezebue', target: '#founder' },
  { label: 'Outreach Gallery', target: '#gallery' },
  { label: 'Media', target: '#gallery' },
  { label: 'Contact Us', target: '#contact' },
  { label: 'Prayer Request', target: '#contact' },
  { label: 'Events', target: '#events' },
  { label: 'Find a Crusade', target: '#events' },
  { label: 'Join Campus Fellowship', target: '#events' },
  { label: 'Apply to Bible School', target: '#events' },
  { label: 'Watch Sermons', target: '#events' },
  { label: 'Give Online', target: '/give' },
  { label: 'Partner With Us', target: '/give' },
  { label: 'Testimonies', target: '#testimonials' },
  { label: 'Medical Outreach', target: '#events' },
  { label: 'Campus Crusade', target: '#events' },
  { label: 'University of Ibadan Crusade', target: '#events' },
];

export const gallery = [
  { jpg: gallery1Jpg, webp: gallery1Webp, width: 700, height: 525 },
  { jpg: gallery2Jpg, webp: gallery2Webp, width: 700, height: 525 },
  { jpg: gallery3Jpg, webp: gallery3Webp, width: 700, height: 933 },
  { jpg: gallery4Jpg, webp: gallery4Webp, width: 700, height: 525 },
  { jpg: gallery5Jpg, webp: gallery5Webp, width: 700, height: 525 },
  { jpg: gallery6Jpg, webp: gallery6Webp, width: 700, height: 933 },
  { jpg: gallery7Jpg, webp: gallery7Webp, width: 700, height: 933 },
  { jpg: gallery8Jpg, webp: gallery8Webp, width: 700, height: 525 },
  { jpg: gallery9Jpg, webp: gallery9Webp, width: 700, height: 525 },
  { jpg: gallery10Jpg, webp: gallery10Webp, width: 700, height: 525 },
];
