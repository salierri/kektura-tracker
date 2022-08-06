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
        { sections.map((section, index) => {
          return (
            <>
            <tbody>
            <tr key={section.id}>
              <td className="text-center">
                <h4 className="d-inline"><b>{section.id}</b></h4>
              </td>
              <td className="text-center">
                <h5 className="d-inline">{section.start} - {section.end}</h5>
              </td>
              <td className="text-center">
                <input type="checkbox" className="big-checkbox" checked={completeList[index]} onChange={e => changeCompleted(index, e)} />
              </td>
              <td>
              <a role="button" data-toggle="collapse" href={`#coll${section.id}`} aria-controls={`coll${section.id}`} aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
              </a>
              </td>
            </tr>
      </tbody>
      <tbody id={`coll${section.id}`} className="collapse">
            { section.subSections.map((subSection, index) => {
              return (
                <tr>
                  <td className="text-center">
                  </td>
                  <td className="text-center">
                    <h7 className="d-inline">{subSection.start} - {subSection.end}</h7>
                  </td>
                  <td className="text-center">
                    <input type="checkbox" className="medium-checkbox" checked={completeList[index]} onChange={e => changeCompleted(index, e)} />
                  </td>
                </tr>
              );
            }) }
            </tbody>
            </>
          )
        })}
    </table>
  )
}
