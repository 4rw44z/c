import Layout from '../components/MyLayout.js';
import withRedux from 'next-redux-wrapper';

import { initStore } from '../store/store';
import PageWithIntl from '../components/PageWithIntl';
const About = () => (
  <Layout>
    <style jsx>
      {`
        p {
          margin: 20px 40px 0;
        }
        div {
          color: #333;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 15px;
          margin: 10px;
        }
      `}
    </style>
    <p>
      <a href="https://github.com/zeit/next.js">Next.js</a> and{' '}
      <a href="https://developer.spotify.com/web-api/web-api-connect-endpoint-reference/">
        Spotify's Connect API endpoints
      </a>
    </p>
    <div>
      <div className="feature1">
        <h3>Full Spotify Catalogue</h3>
        <p>Search and choose any song on Spotify</p>
      </div>
      <div className="feature2">
        <h3>Voting</h3>
        <p>Vote for songs added by other users in the room. The most voted one will play next.</p>
      </div>
      <div className="feature3">
        <h3> Music Goes On</h3>
        <p>When the queue is finished we will add similar songs automatically</p>
      </div>
      <div className="feature4">
        <h3>Play With Spotify Connect</h3>
        <p>Choose to play on your Spotify application or speaker (requires Spotify Premium).</p>
      </div>
    </div>
  </Layout>
);

export default withRedux(initStore, null, null)(PageWithIntl(About));
