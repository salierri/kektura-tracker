import Head from 'next/head'
import Map from '../components/map'
import ProgressBar from '../components/progress_bar'
import SectionList from '../components/section_list'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kéktúra tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.7" />
      </Head>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4 invisible-small">
        <a className="navbar-brand" href="#">Kéktúra tracker</a>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 margin-when-small">
            <SectionList />
          </div>
          <div className="col-lg-6">
            <span className="invisible-small">
              <ProgressBar />
            </span>
            <Map />
          </div>
          <div id="top-progress-bar-container" className="invisible-big">
            <div id="top-progress-bar">
              <ProgressBar />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
