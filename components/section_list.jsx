import { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import sections from "../data/okt_sections"
import { setCompleted, loadCompletedState } from "../redux/store";

export default function SectionList() {
  const [completeList, setCompleteList] = useState(Array(27).fill(false));
  const dispatch = useDispatch();
  
  // Just because next.js is a pain and raises hydration errors otherwise
  useEffect(() => {
    const loadedData = Array(27).fill(false).map((_, index) => window.localStorage.getItem(index) === "true");
    dispatch(loadCompletedState(loadedData));
    setCompleteList(loadedData);
  });

  const changeCompleted = (id, event) => {
    dispatch(setCompleted({id: id, value: event.target.checked }));
  }

  return (
    <table className="table table-striped table-bordered table-hover table-sm">
      <tbody>
        { sections.map((section, index) => {
          return (
            <tr key={section.id}>
              <td className="text-center nowrap">
                <h4 className="d-inline"><b>{section.id}</b></h4>
              </td>
              <td className="text-center">
                <h5 className="d-inline">{section.start} - {section.end}</h5>
              </td>
              <td className="text-center">
                <input type="checkbox" className="big-checkbox" checked={completeList[index]} onChange={e => changeCompleted(index, e)} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
