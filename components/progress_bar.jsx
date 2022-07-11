import sections from "../data/okt_sections"

export default function ProgressBar() {
  return (
    <div>
      <h3 className="text-center">Teljesített táv</h3>
      <h5 className="text-center">874 km / 1074 km</h5>
      <div className="progress">
        <div className="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          style={{width: '25%'}}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100">25%</div>
      </div>
      <h3 className="text-center">Teljesített szint</h3>
      <h5 className="text-center">874 m / 1074 m</h5>
      <div className="progress">
        <div className="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          style={{width: '18%'}}
          aria-valuenow="18"
          aria-valuemin="0"
          aria-valuemax="100">18%</div>
      </div>
    </div>
  )
}
