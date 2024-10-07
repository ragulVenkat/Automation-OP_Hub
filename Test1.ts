//"appium:appPackage": "com.plenome.ophub",
//"appium:appWaitActivity": "com.plenome.ophub.views.MainActivity",
// "app : app9.apk"
//  specs: [ './Apptest/specs/Test1.ts']

describe("My Login application", () => {
  var originalTimeout: number;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it("It Sholud Validate the Email and Password", async () => {
    await driver.pause(1000);

    const Email = await $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText'
    );
    await Email.click();
    await Email.setValue("venktrmn2114@gmail.com");
    await driver.pause(1000);

    const Password = await $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout[1]/android.widget.EditText'
    );
    await Password.click();
    await Password.setValue("Venkat@123");
    await driver.pause(1000);

    const Password_eye = await $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout[1]/android.widget.CheckBox'
    );
    await Password_eye.click();
    await driver.pause(1000);


    const Signin = await $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button'
    );
    await Signin.click();
    await driver.pause(1000);

    // const Book_Appointment = await $(
    //   '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[1]/android.widget.Button'
    // );
    // await Book_Appointment.click();
    // await driver.pause(1000);



      const Qr = await $('//android.widget.EditText[@resource-id="com.plenome.ophub:id/edtPatientId"]');
      await Qr.click();
      await driver.pause(10000);

      const Select_Doctor = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout[1]/android.widget.Button[2]');
        await Select_Doctor.click();
        await driver.pause(3000);

        const Filter = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.RelativeLayout[1]/android.widget.ImageView[2]');
        await Filter.click();
        await driver.pause(3000);

        const Select_spec = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.RelativeLayout[3]/android.widget.Spinner/android.widget.TextView');
        await Select_spec.click();
        await driver.pause(3000);

        const Cardio = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[7]');
        await Cardio.click();
        await driver.pause(3000);

        const Submit = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]');
        await Submit.click();
        await driver.pause(3000);

        const Doc_Venkat = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.RelativeLayout[2]/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[2]/android.widget.Button');
        await Doc_Venkat.click();
        await driver.pause(3000);

        

        const day_28_9 = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[2]/android.widget.TextView[1]');
        await day_28_9.click();
        await driver.pause(3000);

        const evening = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.HorizontalScrollView/android.widget.LinearLayout/android.widget.TextView[2]');
        await evening.click();
        await driver.pause(3000);

        const day_27_9 = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.TextView[2]');
        await day_27_9.click();
        await driver.pause(3000);

        const Morning = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.HorizontalScrollView/android.widget.LinearLayout');
        await Morning.click();
        await driver.pause(3000);

        

        


        const Confirm = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.Button');
        await Confirm.click();
        await driver.pause(9000);

        const Paylater = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]');
        await Paylater.click();
        await driver.pause(3000);

        const Print_Token_Cancel = await $('');
        await Print_Token_Cancel.click();
        await driver.pause(3000);

        const Start_Consultation = await $('');
        await Start_Consultation.click();
        await driver.pause(3000);

        const Close_Consultation = await $('');
        await Close_Consultation.click();
        await driver.pause(3000);

        const ok = await $('');
        await ok.click();
        await driver.pause(3000);

        const Payment = await $('');
        await Payment.click();
        await driver.pause(3000);

        const Cash = await $('');
        await Cash.click();
        await driver.pause(3000);

        const Payment_ID = await $('');
        await Payment_ID.isDisplayed();
        await driver.pause(3000);

        const Menu = await $('');
        await Menu.click();
        await driver.pause(3000);

        const Appointment = await $('');
        await Appointment.click();
        await driver.pause(3000);

        // const Inprogress = await 



        



    //   const Continue = await $('//android.widget.Button[@resource-id="com.plenome.ophub:id/btnContinue"]');
    //   await Continue.click();
    //   await driver.pause(6000);

    //   const abhaNumberElement = await $('//android.widget.TextView[@text="ABHA Number"]');
    //   const isAbhaNumberDisplayed = await abhaNumberElement.isDisplayed();

    //   if (isAbhaNumberDisplayed) {
    //     console.log('ABHA Number exists, pressing back button...');
    //     await driver.back();
    //     await driver.pause(1000);
    // } else
    // {
    //   const Set_Value = await $('//android.widget.EditText[@resource-id="com.plenome.ophub:id/edtPatientId"]');
    //   await Set_Value.setValue('9884294430');
    //   await driver.pause(1000);

    // }
  });
});

describe("ABHA Number Verification and Patient Details Entry", () => {

  
  const patients = [
    
    // {
    //   phoneNumber: "9840312321",
    //   name: "Jacob Vinoth",
    //   dob: "01-01-1979",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 45,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9444942001",
    //   name: "Muthukamatchi",
    //   dob: "01-01-1976",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 48,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9884241755",
    //   name: "Usha",
    //   dob: "01-01-1963",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 61,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9500676101",
    //   name: "Purushothaman",
    //   dob: "01-01-1988",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 36,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "8667229644",
    //   name: "Logesh",
    //   dob: "01-01-2002",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 22,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9962546011",
    //   name: "Monish",
    //   dob: "01-01-2011",
    //   gender: "Male",
    //   salutation: "Master.",
    //   age: 13,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9176634345",
    //   name: "Rajeshwari C",
    //   dob: "01-01-1965",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 59,
    //   place: "Chennai Andaman and Nicobar Islands",
    // },
    // {
    //   phoneNumber: "9894284665",
    //   name: "Sivabackiyam",
    //   dob: "01-01-1959",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 65,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9941562388",
    //   name: "Sathish Kumar",
    //   dob: "01-01-1984",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 40,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9941162032",
    //   name: "Jeeva",
    //   dob: "01-01-1974",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 50,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9566034134",
    //   name: "Saravin",
    //   dob: "01-01-1993",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 31,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "8608787771",
    //   name: "Abirami",
    //   dob: "01-01-1992",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 32,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9788170669",
    //   name: "Logabala Victor",
    //   dob: "01-01-1989",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 35,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "7092149903",
    //   name: "Rithish Kumar",
    //   dob: "01-01-2007",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 17,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9962124433",
    //   name: "Rajkumar",
    //   dob: "01-01-2003",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 21,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9948851489",
    //   name: "Pasupuleti Nageswara Rao",
    //   dob: "01-01-1956",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 68,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "8072249221",
    //   name: "Yamini",
    //   dob: "01-01-1985",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 39,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "8884102663",
    //   name: "Dhanaraj",
    //   dob: "01-01-1990",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 34,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "7708550977",
    //   name: "Janakiamma",
    //   dob: "01-01-1938",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 86,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "8610205586",
    //   name: "Gurusamy",
    //   dob: "01-01-1940",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 84,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9941369035",
    //   name: "Swetha",
    //   dob: "01-01-2010",
    //   gender: "Female",
    //   salutation: "Ms.",
    //   age: 14,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9841026976",
    //   name: "Charles Edward",
    //   dob: "01-01-1938",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 86,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9962171777",
    //   name: "Seethalakshmi",
    //   dob: "01-01-1991",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 33,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "6380957168",
    //   name: "Gowtham",
    //   dob: "01-01-2002",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 22,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "7845282021",
    //   name: "Kanchana",
    //   dob: "01-01-1947",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 77,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9884500965",
    //   name: "Vaishnavi",
    //   dob: "01-01-1995",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 29,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9840128673",
    //   name: "Sundhararaman",
    //   dob: "01-01-1973",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 51,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "7845282021",
    //   name: "Ammu G",
    //   dob: "01-01-1981",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 43,
    //   place: "Chennai Tamil Nadu",
    // },

    // {
    //   phoneNumber: "8754510720",
    //   name: "Padmanaban",
    //   dob: "01-01-1998",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 26,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9659062659",
    //   name: "Ravichandran",
    //   dob: "01-01-1985",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 39,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9003005039",
    //   name: "Devi",
    //   dob: "01-01-1982",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 42,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9841026741",
    //   name: "Pattammal",
    //   dob: "01-01-1948",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 76,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9884235975",
    //   name: "Madhan Kumar",
    //   dob: "01-01-1987",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 37,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9841026742",
    //   name: "Paramasivam",
    //   dob: "01-01-1956",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 68,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9841026743",
    //   name: "Ananthalakshmi",
    //   dob: "01-01-1959",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 65,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9962112345",
    //   name: "Premnath",
    //   dob: "01-01-1995",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 29,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "8754510721",
    //   name: "Sridevi",
    //   dob: "01-01-1993",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 31,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9841054321",
    //   name: "Saravanan",
    //   dob: "01-01-1980",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 44,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9087654321",
    //   name: "Madhavi",
    //   dob: "01-01-1981",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 43,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9789898989",
    //   name: "Rajan",
    //   dob: "01-01-1978",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 46,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9445123456",
    //   name: "Lakshmi",
    //   dob: "01-01-1968",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 56,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "7890123456",
    //   name: "Subramanian",
    //   dob: "01-01-1955",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 69,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9876543210",
    //   name: "Ramesh",
    //   dob: "01-01-1970",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 54,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9001234567",
    //   name: "Sudha",
    //   dob: "01-01-1965",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 59,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9845012345",
    //   name: "Sundari",
    //   dob: "01-01-1947",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 77,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9998765432",
    //   name: "Manikandan",
    //   dob: "01-01-1988",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 36,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "8765432190",
    //   name: "Nirmala",
    //   dob: "01-01-1990",
    //   gender: "Female",
    //   salutation: "Mrs.",
    //   age: 34,
    //   place: "Chennai Tamil Nadu",
    // },
    // {
    //   phoneNumber: "9876012345",
    //   name: "Balaji",
    //   dob: "01-01-1976",
    //   gender: "Male",
    //   salutation: "Mr.",
    //   age: 48,
    //   place: "Chennai Tamil Nadu",
    // },

    {
        phoneNumber: "9876012345",
        name: "Balaji",
        dob: "01-01-1976",
        gender: "Male",
        salutation: "Mr.",
        age: 48,
        place: "Chennai Tamil Nadu",
      },

      {
        phoneNumber: "9344269524",
        
      },



  ];

  patients.forEach((patient) => {
    it(`should enter phone number ${patient.phoneNumber}, validate Upcoming_Consultation or enter patient details for ${patient.name}`, async () => {
     
     const Book_Appointment = await $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[1]/android.widget.Button'
    );
    await Book_Appointment.click();
    await driver.pause(1000);

      const phoneNumberField = await $(
        '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText[2]'
      );
      await phoneNumberField.setValue(patient.phoneNumber);
      await driver.pause(1000);

      const Continue = await $(
        '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[1]'
      );
      await Continue.click();
      await driver.pause(1000);

      const Upcoming_Consultation = await $(
        '//android.widget.LinearLayout[@content-desc="Upcoming Consultation"]/android.widget.TextView'
      );

      if (await Upcoming_Consultation.isDisplayed()) {
        console.log(
          `Upcoming_Consultation exists for phone number ${patient.phoneNumber}. Pressing back.`
        );

        const Select_Doctor = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout[1]/android.widget.Button[2]');
        await Select_Doctor.click();
        await driver.pause(3000);

        const Filter = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.RelativeLayout[1]/android.widget.ImageView[2]');
        await Filter.click();
        await driver.pause(3000);

        const Select_spec = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.RelativeLayout[3]/android.widget.Spinner/android.widget.TextView');
        await Select_spec.click();
        await driver.pause(3000);

        const Cardio = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[7]');
        await Cardio.click();
        await driver.pause(3000);

        const Submit = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]');
        await Submit.click();
        await driver.pause(3000);

        const Doc_Venkat = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.RelativeLayout[2]/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[2]/android.widget.Button');
        await Doc_Venkat.click();
        await driver.pause(3000);

        // const day_27_9 = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.TextView[2]');
        // await day_27_9.click();
        // await driver.pause(3000);

        // const Morning = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.HorizontalScrollView/android.widget.LinearLayout');
        // await Morning.click();
        // await driver.pause(3000);

        // const day_28_9 = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[2]/android.widget.TextView[1]');
        // await day_28_9.click();
        // await driver.pause(3000);

        // const evening = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.HorizontalScrollView/android.widget.LinearLayout/android.widget.TextView[2]');
        // await evening.click();
        // await driver.pause(3000);

        

        const day_28_9 = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.TextView[1]');
        await day_28_9.click();
        await driver.pause(3000);

        const evening = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.HorizontalScrollView/android.widget.LinearLayout/android.widget.TextView[2]');
        await evening.click();
        await driver.pause(3000);

        const day_27_9 = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[2]/android.widget.TextView[2]');
        await day_27_9.click();
        await driver.pause(3000);

        const Morning = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.HorizontalScrollView/android.widget.LinearLayout');
        await Morning.click();
        await driver.pause(3000);


        const Confirm = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.Button');
        await Confirm.click();
        await driver.pause(9000);

        const Paylater = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]');
        await Paylater.click();
        await driver.pause(3000);

        const Print_Token = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[6]/android.widget.Button[1]');
        await Print_Token.click();
        await driver.pause(3000);





        const Doc_Dhesingaraja = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.RelativeLayout[2]/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.Button');
        await Doc_Dhesingaraja.click();
        await driver.pause(3000);




        const back_button = await $(
          '//android.widget.ImageView[@resource-id="com.plenome.ophub:id/imgBack"]'
        );


        await back_button.click();
        await driver.pause(1000);
      } else {
        console.log(
          `Upcoming_Consultation not found for phone number ${patient.phoneNumber}. Entering patient details.`
        );

        const nameField = await $(
          '//android.widget.EditText[@resource-id="com.plenome.ophub:id/edtName"]'
        );
        const dobField = await $(
          '//android.widget.EditText[@resource-id="com.plenome.ophub:id/edtDob"]'
        );
        const genderDropdown = await $(
          '//android.widget.Spinner[@resource-id="com.plenome.ophub:id/spinGender"]'
        );
        const Agefield = await $(
          '//android.widget.EditText[@resource-id="com.plenome.ophub:id/edtAge"]'
        );
        const salutation = await $(
          '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.Spinner'
        );
        const address = await $(
          '//android.widget.EditText[@resource-id="com.plenome.ophub:id/edtPermenantAddr"]'
        );

        await nameField.setValue(patient.name);
        await dobField.setValue(patient.dob);
        await Agefield.setValue(patient.age);
        await address.setValue(patient.place);

        await salutation.click();

        if (patient.salutation === "Mr.") {
          const salutationMr = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[1]');
          await salutationMr.click();
          await driver.pause(1000);
        } else {
          const salutationMrs = await $(
            '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[2]'
          );
          await salutationMrs.click();
          await driver.pause(1000);
        }

        await genderDropdown.click();

        await driver.pause(1000);

        if (patient.gender === "Male") {
          const genderMale = await $('//android.widget.TextView[@text="Male"]');
          await genderMale.click();
          await driver.pause(1000);
        } else {
          const genderFemale = await $(
            '//android.widget.TextView[@text="Female"]'
          );
          await genderFemale.click();
          await driver.pause(1000);
        }

        await driver.pause(1000);
        const Submit = await $(
          '//android.widget.Button[@resource-id="com.plenome.ophub:id/btnSubmit"]'
        );
        await Submit.click();
        await driver.pause(1000);

        const Upcoming_Consultation = await $(
          '//android.widget.LinearLayout[@content-desc="Upcoming Consultation"]'
        );
        expect(Upcoming_Consultation.isDisplayed());
        await driver.pause(1000);

        const back_button = await $(
          '//android.widget.ImageView[@resource-id="com.plenome.ophub:id/imgBack"]'
        );
        await back_button.click();
        await driver.pause(1000);

        await back_button.click();
        await driver.pause(1000);
      }
    });
  });
});
