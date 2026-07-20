//dummy_data.js

import bannerLogo from '../assets/banner-logo.png'

const dummyData = [
  {
    id: "1",
    title: '신입 프론트엔드 개발자로 3개월 살아남기',
    summary:
      'styled-components부터 라우터까지 어떠셨나요?',
    content:
      '입사 첫날부터 지금까지의 3개월을 돌아보면 정말 많은 일이 있었습니다.\n\n처음에는 코드베이스를 파악하는 것부터 막막했지만, 팀 문서와 선배 개발자들의 도움으로 점차 적응해 나갔습니다. 특히 컴포넌트 단위로 코드를 쪼개는 습관이 왜 중요한지 실무를 통해 체감할 수 있었습니다.\n\n앞으로도 꾸준히 배우고 기록하며 성장하는 개발자가 되고 싶습니다.',
    author: {
      name: '머쨍이사자',
      avatar: '',
    },
    date: '2026년 7월 2일',
    likes: 23,
    comments: 4,
    thumbnail: bannerLogo,
  },
  {
    id: "2",
    title: '리액트 상태관리, useState부터 시작해도 될까?',
    summary:
      '[회고] 심바톤 회고하기',
    content:
      '프로젝트 초반에는 상태관리 라이브러리 없이 useState와 props drilling만으로도 충분한 경우가 많습니다.\n\n다만 컴포넌트 트리가 깊어지고 여러 컴포넌트가 같은 상태를 공유해야 할 때는 Context API나 별도 라이브러리 도입을 고려하게 됩니다.\n\n결론적으로 처음부터 무거운 도구를 들고 오기보다는, 필요해지는 시점을 캐치하는 감각을 기르는 게 더 중요하다고 생각합니다.',
    author: {
      name: '멋사랑해',
      avatar: '',
    },
    date: '2026년 7월 9일',
    likes: 9,
    comments: 2,
    thumbnail: bannerLogo,
  },
  {
    id: "3",
    title: 'useParams, useNavigate 알아보기',
    summary:
      '중커톤 기대돼 ~~',
    content:
      '처음 라우터를 배울 때는 useParams랑 useNavigate가 뭐가 다른지도 헷갈렸습니다.\n\nuseParams는 URL에 담긴 값을 꺼내오는 용도고, useNavigate는 버튼 클릭 같은 이벤트로 다른 페이지로 이동시키는 용도라는 걸 직접 코드를 짜보면서 감을 잡았습니다. 특히 상세페이지에서 id로 게시글을 찾아오는 부분을 만들면서 라우팅의 흐름이 눈에 보이기 시작했습니다.\n\n처음엔 낯설었지만 한 번 익히고 나니 이제 페이지 이동은 자신 있게 구현할 수 있을 것 같습니다.',
    author: {
      name: '콩',
      avatar: '',
    },
    date: '2026년 7월 14일',
    likes: 11,
    comments: 3,
    thumbnail: bannerLogo,
  },
  {
    id: "4",
    title: 'React 초기세팅을 해보자',
    summary: 'Vite 환경에서 폴더 구조까지 완벽하게 세팅하기',
    content:
      '지난 주에는 vite가 무엇인지를 알아보았다. Vite를 활용해 프로젝트를 시작하며, 단순히 라이브러리를 설치하는 단계를 넘어 어떻게 하면 확장 가능한 구조를 설계할지 고민하였다.\n\n첫째, 절대 경로(@/) 설정을 도입하여 복잡한 import 경로를 깔끔하게 정리하였다. 둘째, ESLint와 Prettier를 Husky와 결합하여 코드 컨벤션을 강제함으로써 협업의 기초를 다졌다. 셋째, 기능(Feature) 단위의 폴더 구조를 설계하여 유지보수성을 극대화하였다. 마지막으로, .env 파일을 활용해 환경 변수를 분리하며 보안과 확장성을 고려하였다.\n\n초기 세팅은 단순히 시간을 소모하는 작업이 아니라, 나중에 발생할 수많은 삽질을 방지하는 가장 중요한 설계 과정이다. 잘 짜인 초기 환경은 결국 전체 프로젝트의 생산성을 결정짓는 핵심 요소가 된다.',
    author: {
      name: '프론트짱',
      avatar: '',
    },
    date: '2026년 7월 16일',
    likes: 11,
    comments: 3,
    thumbnail: bannerLogo,
  },
  {
    id: "5",
    title: 'Styled-components, 유지보수를 고려한 설계의 시작',
    summary: '재사용 가능한 스타일 컴포넌트 만들기',
    content:
      '스타일컴포넌트를 사용하면서 처음에는 무작정 스타일을 정의하기에 바빴다. 하지만 프로젝트 규모가 커질수록 같은 코드가 반복되는 것을 보고 유지보수의 필요성을 절감하였다.\n\n결국 공통 컴포넌트를 분리하고 props를 활용해 스타일을 유연하게 제어하는 구조로 설계를 변경하였다. 스타일 파일을 별도로 관리하고 테마를 설정하는 과정에서 컴포넌트의 논리와 스타일이 분리되는 경험을 하였다. 이제는 스타일을 단순히 입히는 것을 넘어 시스템으로 관리해야 함을 깨달았다.',
    author: { name: '서누', avatar: '' },
    date: '2026년 7월 18일',
    likes: 12,
    comments: 2,
    thumbnail: bannerLogo,
  },
  {
    id: "6",
    title: '디자인 시스템, 작은 단위에서부터 시작하기',
    summary: '반복되는 스타일을 정리하며 시스템을 고민하다',
    content:
      '프로젝트가 커질수록 색상, 폰트, 버튼 스타일을 매번 정의하는 것이 비효율적임을 깨달았다. 그래서 간단하게나마 나만의 작은 디자인 시스템을 구축해보기로 하였다.\n\nStyled-components의 ThemeProvider를 활용해 공통 컬러와 간격 값을 변수로 지정하고, 이를 컴포넌트 전역에서 꺼내 쓰는 구조를 만들었다. 버튼이나 입력창처럼 자주 쓰이는 요소는 공통 컴포넌트로 분리하여 재사용성을 높였다.\n\n디자인 시스템은 거창한 것이 아니라, 반복되는 요소를 정의하고 관리하는 것에서 시작한다는 것을 배웠다. 잘 정의된 시스템 하나가 전체 프로젝트의 일관성을 얼마나 크게 높여주는지 경험한 소중한 시간이었다.',
    author: { name: '그누피', avatar: '' },
    date: '2026년 7월 19일',
    likes: 18,
    comments: 6,
    thumbnail: bannerLogo,
  },
  {
    id: "7",
    title: '컴포넌트 분리, 어디까지 쪼개는 것이 정답일까?',
    summary: '재사용성과 가독성 사이에서',
    content:
      '컴포넌트 분리는 리액트 학습의 가장 큰 고민거리 중 하나이다. 처음에는 무조건 잘게 쪼개는 것이 좋다고 생각했으나, 과도한 분리가 오히려 코드 추적을 어렵게 만든다는 사실을 알게 되었다.\n\n이제는 재사용성이 높은 버튼이나 입력창은 분리하고, 특정 페이지에서만 쓰이는 로직은 적절히 묶어두는 방식을 취하고 있다. 무엇보다 중요한 것은 "왜 이 컴포넌트를 나누는가?"에 대한 명확한 이유를 갖는 것이라는 결론에 도달했다.',
    author: { name: '진정해', avatar: '' },
    date: '2026년 7월 20일',
    likes: 14,
    comments: 3,
    thumbnail: bannerLogo,
  },
  {
    id: "8",
    title: '리액트 훅, 무엇을 어떻게 공부할까?',
    summary: 'useState와 useEffect를 넘어 훅의 세계로',
    content:
      '리액트를 배우면서 가장 낯설면서도 강력한 도구가 바로 훅(Hooks)이었다. 단순히 useState를 사용하는 것에서 벗어나, useRef로 DOM을 제어하고 useCallback으로 성능을 최적화하는 과정을 학습하고 있다.\n\n훅을 공부할 때 단순히 문법을 외우기보다 "어떤 상황에서 이 훅이 필요한가?"를 끊임없이 자문하였다. 훅은 리액트의 동작 원리를 관통하는 핵심이다. 앞으로는 커스텀 훅을 만들어 나만의 로직을 재사용하는 단계를 목표로 삼고 있다.',
    author: { name: '홍킴', avatar: '' },
    date: '2026년 7월 21일',
    likes: 20,
    comments: 5,
    thumbnail: bannerLogo,
  },
]

export default dummyData
