import sections from "../data/okt_sections"

export default function SectionList() {
  return (
    <table className="table table-striped table-bordered table-hover table-sm">
      <tbody>
        { sections.map(section => {
          return (
            <tr key={section.id}>
              <td className="text-center">
                <h4 className="d-inline"><b>{section.id}</b></h4>
              </td>
              <td className="text-center">
                <h5 className="d-inline">{section.start} - {section.end}</h5>
              </td>
              <td className="text-center">
                <input type="checkbox" className="big-checkbox" id="{section.id}" />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
