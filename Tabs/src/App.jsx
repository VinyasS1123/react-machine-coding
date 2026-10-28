import TabsList from "./components/TabsList";

const App = () => {
  const tabs = [
    {
      id: 1,
      label: "Component A",
      Component: <ComponentA />,
    },
    {
      id: 2,
      label: "Component B",
      Component: <ComponentB />,
    },
    {
      id: 3,
      label: "Component C",
      Component: <ComponentC />,
    },
    {
      id: 4,
      label: "Component D",
      Component: <ComponentD />,
    },
  ];
  return (
    <div>
      <TabsList tabs={tabs} />
    </div>
  );
};

function ComponentA() {
  return <h1>Component A</h1>;
}
function ComponentB() {
  return <h1>Component B</h1>;
}
function ComponentC() {
  return <h1>Component A</h1>;
}
function ComponentD() {
  return <h1>Component D</h1>;
}

export default App;
