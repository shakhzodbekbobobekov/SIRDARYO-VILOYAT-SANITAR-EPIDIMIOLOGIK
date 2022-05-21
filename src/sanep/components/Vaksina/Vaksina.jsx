import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Style/Vaksina.scss'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Vaksina() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: '100%' }} className='vaksina-page'>
      <Box sx={{ maxWidth: { xs: 320, sm: 480, md: 600, lg: 850 }, borderBottom: 1, borderColor: 'divider' }} className='vaksina-box'>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          className='vaksina-tabs'
        >
          <Tab className='Tab' label=" Спутник V" {...a11yProps(0)} />
          <Tab className='Tab' label="BioNTech, Pfizer" {...a11yProps(1)} />
          <Tab className='Tab' label="Astra Zeneca" {...a11yProps(2)} />
          <Tab className='Tab' label="ZF-UZ-VAC 2001" {...a11yProps(3)} />
          <Tab className='Tab' label="Moderna" {...a11yProps(4)} />
          <Tab className='Tab' label="Sinovac" {...a11yProps(5)} />
          <Tab className='Tab' label="Sputnik light" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className='vaksina-about'>
        <h1 className="vaksina-name">
          Спутник V
        </h1>
        <p className="vaksina-comment">
          Sputnik V-Rossiyada ishlab chiqarilgan vaksina bo‘lib, suyuq foydalanishga tayyor holda chiqariladi va mushak orasiga qabul qilinadi. Dozasi -0,5 ml (2 komponentlik). Ishlab chiqarish shakli: bir dozali ampula 0,5 ml. , ikki dozali ampula 1,0 ml., 5 dozali flakon 2,5 ml.
        </p>
        <p className="vaksina-comment">
          I –komponent alohida, II-komponent alohida ampula (flakon)da ishlab chiqarilgan. Ampula (flakon) ochilgandan so‘ng xona haroratida 2 soat ichida foydalanish mumkin. Vaksinaning samaradorligi 92%.  -18°C yuqori bo‘lmagan haroratda, saqlash muddati 6 oy. Dozalash rejimi -2 dozada 21 kunlik interval bilan qabul qilinadi. Vaksinani chayqatish mumkin emas.
        </p>
        <p className="vaksina-comment">
          -18gradus S da saqlanadi. Gripp, yoki boshqa turdagi vaksinalar bilan bir vaqtda emlash mumkin emas,  14 kun oraliq bo‘lishi kerak.
        </p>
      </TabPanel>
      <TabPanel value={value} index={1} className='vaksina-about'>
        <h1 className="vaksina-name">
          BioNTech, Pfizer
        </h1>
        <p className="vaksina-comment">
          Pfizer / BioNTech tomonidan tayyorlangan (BNT162b2) AQShda ishlab chiqarilgan vaksina bo‘lib, quruq, qayta tiklash uchun liofilizatsiya qilingan holda chiqariladi va mushak orasiga qabul qilinadi. Dozasi 0,3 ml (2 martalik)

        </p>
        <p className="vaksina-comment">
          I –komponent alohida, II-komponent alohida ampula (flakon)da ishlab chiqarilgan. Ampula (flakon) ochilgandan so‘ng xona haroratida 2 soat ichida foydalanish mumkin. Vaksinaning samaradorligi 92%.  -18°C yuqori bo‘lmagan haroratda, saqlash muddati 6 oy. Dozalash rejimi -2 dozada 21 kunlik interval bilan qabul qilinadi. Vaksinani chayqatish mumkin emas.
        </p>
        <p className="vaksina-comment">
          -18gradus S da saqlanadi. Gripp, yoki boshqa turdagi vaksinalar bilan bir vaqtda emlash mumkin emas,  14 kun oraliq bo‘lishi kerak.
        </p>
      </TabPanel>
      <TabPanel value={value} index={2} className='vaksina-about'>
        <h1 className="vaksina-name">
          Astra Zeneca
        </h1>
        <p className="vaksina-comment">
          AstraZeneca- Niderlandiya, (Covisheld)-  Hindistonda ishlab chiqariladi. Suyuq foydalanishga tayyor holda chiqariladi va mushak orasiga qabul qilinadi. Dozasi -0,5 ml (2 martalik). Ishlab chiqarish shakli  5 ml flakon (diametr 16,5 mm x balandlik 52 mm). 10 dozali flakonda chiqariladi.

        </p>
        <p className="vaksina-comment">
          Qopqoqni olib tashlagandan so‘ng birinchi dozani olib 6 soat davomida foydalanish mumkin. Vaksinaning samaradorligi  97%. Saqlash muddati   +2 +8°C da  9 oy davomida. Dozalash rejimi- 2 dozada 21-28 kunlik    interval bilan qabul qilinadi. Vaksinani chayqatish mumkin emas. Muzlatish qat’iyan taqiqlanadi. Gripp, yoki boshqa turdagi vaksinalar
        </p>
        <p className="vaksina-comment">
          bilan bir vaqtda emlash mumkin emas,  14 kun oraliq bo‘lishi kerak.
        </p>
      </TabPanel>
      <TabPanel value={value} index={3} className='vaksina-about'>
        <h1 className="vaksina-name">
          ZF-UZ-VAC 2001
        </h1>
        <p className="vaksina-comment">
          ZF-UZ-VAC 2001- O‘zbekiston va Xitoy hamkorligida ishlab chiqarilgan vaksina bo‘lib, suyuq foydalanishga tayyor holda chiqariladi va mushak orasiga qabul qilinadi. Dozasi -0,5 ml (3 martalik). ). Ishlab chiqarish shakli bir dozali ampula 0,5 ml., 2 dozali 1,0 ml. , 5 va 10 dozali flakonlarda. Ampula ochilgandan so‘ng darhol ishlatilishi kerak. Vaksinaning samaradorligi 95%. +2 +8°C haroratda saqlanadi. Saqlash muddati 24 oy. Dozalash rejimi 1 oyda 1 dozadan 3oy davomida 3 marotaba. Yengil silkitib aralashtiriladi! Muzlatish qat’iyan taqiqlanadi. Gripp, yoki boshqa turdagi vaksinalar bilan bir vaqtda emlash mumkin emas,  14 kun oraliq bo‘lishi kerak.
        </p>
      </TabPanel>
      <TabPanel value={value} index={4} className='vaksina-about'>
        <h1 className="vaksina-name">
          Moderna
        </h1>
        <p className="vaksina-comment">
          Moderna (mRNK-1273) AQShda ishlab chiqarilgan vaksina bo‘lib, suyuq foydalanishga tayyor holda chiqariladi va mushak orasiga qabul qilinadi. Dozasi -0,5 ml (2 martalik). Ishlab chiqarish shakli  10 dozali 5,0 ml flakonda (diametr 16,5 mm x balandlik 52 mm). 14 dozali 7,0 ml flakonda  chiqariladi. Flakon qopqog‘i ochilgandan so‘ng xona haroratida 6 soat ichida foydalanish mumkin. Vaksinaning samaradorligi 94.5%. Saqlash muddati   -25°C -15°Cda 7 oy davomida, +2 +8°Cda 30 kun davomida. Dozalash rejimi-2 dozada 21- 28 kunlik interval bilan qilinadi. Vaksinani chayqatish mumkin emas. Muzlatish qat’iyan taqiqlanadi. Gripp, yoki boshqa turdagi vaksinalar bilan bir vaqtda emlash mumkin emas,  14 kun oraliq bo‘lishi kerak.
        </p>
      </TabPanel>
      <TabPanel value={value} index={5} className='vaksina-about'>
        <h1 className="vaksina-name">
          Sinovac
        </h1>
        <p className="vaksina-comment">
          Sinovac-CoronaVac  Xitoyda ishlab chiqarilgan vaksina bo‘lib, suyuq foydalanishga tayyor holda chiqariladi va mushak orasiga qabul qilinadi. Dozasi -0,5 ml (2 martalik). Ishlab chiqarish shakli  bir dozali ampula 0,5 ml.
        </p>
        <p className="vaksina-comment">
          Flakon qopqog‘i ochilgandan so‘ng xona haroratida 6 soat ichida foydalanish mumkin. Vaksinaning samaradorligi 95%. +2 +8°C haroratda saqlanadi. Dozalash rejimi 2 dozada 21- 28 kunlik interval bilan. Vaksinani chayqatish mumkin emas. Muzlatish qat’iyan taqiqlanadi. Gripp, yoki boshqa turdagi vaksinalar bilan bir vaqtda emlash mumkin emas,  14 kun oraliq bo‘lishi kerak.
        </p>
      </TabPanel>
      <TabPanel value={value} index={6} className='vaksina-about'>
        <h1 className="vaksina-name">
          Sputnik light
        </h1>
        <p className="vaksina-comment">
          Sputnik Light-Rossiyada ishlab chiqarilgan vaksina bo‘lib, suyuq foydalanishga tayyor holda chiqariladi va mushak orasiga qabul qilinadi. Dozasi -0,5 ml (1 martalik). Ishlab chiqarish shakli bir dozali ampula 0,5 ml.
        </p>
        <p className="vaksina-comment">
          Ampula ochilgandan so‘ng xona haroratida 2 soat ichida foydalanish mumkin.
        </p>
        <p className="vaksina-comment">
          Vaksinaning samaradorligi 98,1%. -18°C yuqori bo‘lmagan haroratda, saqlash muddati 6 oy. Dozalash rejimi 1 dozada. Vaksinani chayqatish mumkin emas. Eritilgandan so‘ng qayta muzlatish qat’iyan taqiqlanadi. Gripp, yoki boshqa turdagi vaksinalar bilan bir vaqtda emlash mumkin emas,  14 kun oraliq bo‘lishi kerak.
        </p>
      </TabPanel>

    </Box>
  );
}
