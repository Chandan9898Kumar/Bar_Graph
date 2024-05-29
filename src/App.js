import React, { useState, useMemo, useCallback } from "react";
import "./style.scss";
import constant from "./Constants/data";
import Button from "./Common/Button/Button";
import ToolTip from "./Common/ToolTip/ToolTip";
export default function App() {
  const [list, setList] = useState(constant.ratingData);

  const generateList = useCallback(() => {
    const sortedItem = [...constant.ratingData];
    const Length = sortedItem.length - 1;

    for (let i = Length; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sortedItem[i], sortedItem[j]] = [sortedItem[j], sortedItem[i]];
    }

    setList(sortedItem);
  }, []);

  const numberOfRating = useMemo(() => {
    let sortedList = [...list];
    return sortedList.sort((a, b) => b - a);
  }, [list]);

  const getRating = (index) => {
    return constant.rating[index];
  };

  return (
    <>
      <table id="q-graph">
        <caption>Quarterly Rating</caption>
        <thead>
          <tr>
            <th></th>
            <th className="sent">Rating High</th>
            <th className="paid">Rating Low</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((item, index) => {
            let isTrue = index === list.length - 1 || index === list.length - 2;
            return (
              <ToolTip
                text={`${item} people rated ${getRating(index)}`}
                key={item + index}
              >
                <tr
                  id={`q${index + 1}`}
                  style={{
                    borderLeft: `${index + 1 === 1 && "1px solid gray"}`,
                    left: `${index * 100}px`,
                  }}
                >
                  <th>{getRating(index)}</th>
                  <td
                    className={isTrue ? "sent bar" : "paid bar"}
                    style={{ height: `${item * 2}%` }}
                  >
                    {item}
                  </td>
                </tr>
              </ToolTip>
            );
          })}
        </tbody>
      </table>

      <div id="ticks">
        {numberOfRating.map((rating, index) => {
          return (
            <div className="tick" key={rating + index}>
              <p>{rating}</p>
            </div>
          );
        })}
      </div>

      <Button
        size="lg"
        variant="success"
        type="submit"
        onClick={generateList}
        isDisabled={false}
      >
        Generate
      </Button>
    </>
  );
}
