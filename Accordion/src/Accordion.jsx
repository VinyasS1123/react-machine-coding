import { useState } from "react";

const Accordion = ({ data }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [openIds, setOpenIds] = useState([]);
  const [multiAccordion, setMultiAccordion] = useState(false);
  //   console.log("selectedId", selectedId);
  console.log("MultiAccordion", multiAccordion);
  console.log("OpenIds", openIds);

  function handleAccordion(itemId) {
    if (!multiAccordion) {
      if (!selectedId) {
        setSelectedId(itemId);
        return;
      }
      if (selectedId === itemId) {
        setSelectedId(null);
        return;
      }
      setSelectedId(itemId);
    } else {
      //select multiple when multiAccordion is true
      if (openIds.includes(itemId)) {
        setOpenIds(openIds.filter((id) => id !== itemId));
      } else {
        setOpenIds((prevIds) => [...prevIds, itemId]);
      }
    }
  }
  return (
    <div className="main container">
      {!multiAccordion ? (
        <button
          onClick={() => {
            setMultiAccordion(true);
            setOpenIds([]);
          }}
        >
          Enable Multi Selection
        </button>
      ) : (
        <button onClick={() => {
            setMultiAccordion(false)
            setSelectedId(null)
        }}>
          Enable Single Selection
        </button>
      )}
      <div className="accordion-container">
        {data &&
          data.map((item) => {
            return (
              <div
                key={item.id}
                className="accordion"
                onClick={() => handleAccordion(item.id)}
              >
                <p>
                  <b>{item.question}</b>
                </p>
                {multiAccordion && openIds.includes(item.id) && (
                  <p>{item.answer}</p>
                )}
                {!multiAccordion && selectedId === item.id && (
                  <p>{item.answer}</p>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Accordion;
