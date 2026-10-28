import { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

function TabForm() {
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (formData.name === "" || formData.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!formData.age || formData.age < 18) {
          err.age = "Age is not valid";
        }
        if (!formData.email || formData.email.length < 5) {
          err.email = "Not a valid email";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (formData.interests.length === 0) {
          err.interests = "Select atleast 1 interest";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];
  const [selectedTab, setSelectedTab] = useState(0);
  const [formData, setformData] = useState({
    name: "",
    age: "",
    email: "",
    interests: [],
    settings: {
      theme: "light",
    },
  });
  const [errors, setErrors] = useState({});

  const ActiveTabComponent = tabs[selectedTab].component;

  function handleSelectTab(index) {
    setSelectedTab(index);
  }
  function handleNextTab() {
    if (tabs[selectedTab].validate()) {
      //if validation succeeds it returns true , if err exists returns false
      setSelectedTab((prev) => prev + 1);
    }
  }
  function handlePrevTab() {
    if (tabs[selectedTab].validate()) {
      setSelectedTab((prev) => prev - 1);
    }
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log("Form submitted successfully", formData);
  }

  //   console.log("Errors", errors);

  return (
    <div>
      <header className="heading-container">
        {tabs.map((tab, index) => {
          return (
            <div
              className="tab heading"
              key={index}
              onClick={() => {
                tabs[selectedTab].validate() && handleSelectTab(index);
              }}
            >
              {tab.name}
            </div>
          );
        })}
      </header>
      <div className="tab-body">
        <ActiveTabComponent
          formData={formData}
          setformData={setformData}
          errors={errors}
        />
      </div>
      <div>
        {selectedTab === tabs.length - 1 && (
          <button onClick={handleSubmitForm}>Submit</button>
        )}
        {selectedTab < tabs.length - 1 && (
          <button onClick={handleNextTab}>Next</button>
        )}
        {selectedTab > 0 && <button onClick={handlePrevTab}>Prev</button>}
      </div>
    </div>
  );
}

export default TabForm;
