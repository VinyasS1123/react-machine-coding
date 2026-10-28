const Settings = ({ formData, setformData }) => {
  const { settings } = formData;

  console.log(formData);

  function handleThemeChange(e) {
    setformData((prev) => {
      return { ...prev, settings: { ...prev.settings, theme: e.target.name } };
    });
  }
  return (
    <div className="settings-container">
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={settings.theme === "dark"}
            onChange={handleThemeChange}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={settings.theme === "light"}
            onChange={handleThemeChange}
          />
          Light
        </label>
      </div>
    </div>
  );
};

export default Settings;
