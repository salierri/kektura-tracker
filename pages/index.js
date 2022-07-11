import Head from 'next/head'
import Map from '../components/map'
import ProgressBar from '../components/progress_bar'
import SectionList from '../components/section_list'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kéktúra tracker</title>
      </Head>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className="navbar-brand" href="#">Kéktúra tracker</a>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <SectionList />
          </div>
          <div className="col-lg-6">
            <ProgressBar />
            <Map />
          </div>
        </div>
      </div>
    </>
  )
}
