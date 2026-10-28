const Interests = ({ formData, setformData, errors}) => {
  const { interests } = formData;
//   console.log("FormData", formData);
    console.log("Interests", interests);

  function handleInterests(e) {
    setformData((prev) => {
      const interests = e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter((interest) => {
            return interest !== e.target.name;
          });
      return { ...prev, interests: interests };
    });
  }
  return (
    <div className="interests-container">
      <h1>Interests Tab</h1>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests?.includes("coding")}
            onChange={handleInterests}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests?.includes("music")}
            onChange={handleInterests}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="movies"
            checked={interests?.includes("movies")}
            onChange={handleInterests}
          />
          Movies
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="socialising"
            checked={interests?.includes("socialising")}
            onChange={handleInterests}
          />
          Socialising
        </label>
      </div>
      {errors && errors?.interests && (
        <span className="error">{errors?.interests}</span>
      )}
    </div>
  );
};

export default Interests;
