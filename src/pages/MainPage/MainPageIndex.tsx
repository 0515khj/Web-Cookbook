import { Link } from 'react-router-dom';
import { MainWrap } from './mainStyle';

const MainPageIndex = () => {
    return (
       <MainWrap className="mainPage">
      <h1 className="mainTitle">React UI Collection</h1>
      <p className="mainDesc">
        React + TypeScript를 공부하며 만든 UI 기능 모음집입니다.
        <br />
        CSS만으로 만든 기능과 JavaScript까지 사용한 기능을 나누어 정리했어요.
      </p>

      <div className="mainLinks">
        <Link to="/css" className="mainLink"># CSS 기능 보기</Link>
        <Link to="/js" className="mainLink">JS JS 기능 보기</Link>
      </div>
    </MainWrap>
    );
};

export default MainPageIndex;