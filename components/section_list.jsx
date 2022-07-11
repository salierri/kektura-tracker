import { useDispatch } from "react-redux";
import sections from "../data/okt_sections"
import { setCompleted } from "../redux/store";

export default function SectionList() {
  const dispatch = useDispatch();

  const changeCompleted = (id, event) => {
    dispatch(setCompleted({id: id, value: event.target.checked }));
  }

  return (
    <table className="table table-striped table-bordered table-hover table-sm">
      <tbody>
        { sections.map((section, index) => {
          return (
            <tr key={section.id}>
              <td className="text-center">
                <h4 className="d-inline"><b>{section.id}</b></h4>
              </td>
              <td className="text-center">
                <h5 className="d-inline">{section.start} - {section.end}</h5>
              </td>
              <td className="text-center">
                <input type="checkbox" className="big-checkbox" onChange={e => changeCompleted(index, e)} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
