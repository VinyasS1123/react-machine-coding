const Profile = ({ formData, setformData ,errors}) => {
  const { name, age, email } = formData;
  console.log(formData);
  
  return (
    <div className="profile-container">
      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => {
            setformData((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        />
        {errors && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          placeholder="Enter your Age"
          value={age}
          onChange={(e) => {
            setformData((prev) => {
              return { ...prev, age: e.target.value };
            });
          }}
        />
        {errors && <span className="error">{errors.age}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setformData((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />
        {errors && errors.email && <span className="error">{errors.email}</span>}
      </div>
    </div>
  );
};

export default Profile;
