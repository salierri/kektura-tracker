import { useSelector } from "react-redux"
import sections from "../data/okt_sections"
import { selectCompleted } from "../redux/store"

export default function ProgressBar() {
  const completed = useSelector(selectCompleted);

  const countDistance = (completed) => Math.floor(sections.reduce((sum, section, index) =>
    completed[index] ? sum + section.distance : sum
  , 0));

  const countElevation = (completed) => sections.reduce((sum, section, index) =>
    completed[index] ? sum + section.up + section.down : sum
  , 0);

  const sumDistance = () => Math.floor(sections.reduce((sum, section) => sum + section.distance, 0));
  const sumElevation = () => sections.reduce((sum, section) => sum + section.up + section.down, 0);

  const distancePercent = (completed) => Math.floor(countDistance(completed) / sumDistance() * 100);
  const elevationPercent = (completed) => Math.floor(countElevation(completed) / sumElevation() * 100);

  return (
    <div>
      <h3 className="text-center">Teljesített táv</h3>
      <h5 className="text-center">{countDistance(completed)} km / {sumDistance()} km</h5>
      <div className="progress">
        <div className="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          style={{width: `${distancePercent(completed)}%`}}
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"><b>{distancePercent(completed)}%</b></div>
      </div>
      <h3 className="text-center">Teljesített szint</h3>
      <h5 className="text-center">{countElevation(completed)} m / {sumElevation()} m</h5>
      <div className="progress">
        <div className="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          style={{width: `${elevationPercent(completed)}%`}}
          aria-valuenow="18"
          aria-valuemin="0"
          aria-valuemax="100"><b>{elevationPercent(completed)}%</b></div>
      </div>
    </div>
  )
}
