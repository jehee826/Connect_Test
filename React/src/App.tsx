import React, { useEffect, useState } from 'react';

interface HelloData {
  message: string;
  test: number;
}

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // '/api/hello'라고만 적어도 Vite Proxy가 8080포트로 연결해줍니다.
    fetch('/api/hello')
      .then((res) => res.json())
      .then((json: HelloData) => {
        setData(json.message);
      })
      .catch((err) => setData('서버 연결 실패!'));
  }, []);

  return (
    <div>
      <h1>리액트 X 스프링 동적 연결 테스트</h1>
      <p>서버 응답: <strong>{data}</strong></p>
    </div>
  );
};

export default App;